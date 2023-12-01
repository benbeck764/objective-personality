import { app, InvocationContext, Timer } from '@azure/functions';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as cheerio from 'cheerio';
import puppeteer, { Browser, Page } from 'puppeteer';
import BlobStorageClient from '../blob-storage/blob-storage-client';
import { AirTableToOPSPersonMap } from '../models/OPSTypedPerson';
import { PrismaClient, OPSTypedPerson, OPSTypedPersonLink } from '@prisma/client';

export const airTableToSqlETL = async (
  _myTimer: Timer,
  _context: InvocationContext
): Promise<void> => {
  const environment = process.env.environment as 'local' | 'production';
  const airtableUrl =
    'https://airtable.com/appudq0aG1uwqIFX5/shrQ6IoDtlXpzmC1l/tblyUDDV5zVyuX5VL/viwwzc3yLw0s2PAEi';
  const prisma = new PrismaClient();
  let browser: Browser;
  let page: Page;
  let cardIds: string[] = [];

  axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });
  const blobStorageService = new BlobStorageClient();

  //#region Page Scraping

  // Observe added/removed nodes and keep track of Card Ids
  // Removed nodes are used to capture the first nodes (and potentially any missed while scrolling)
  const observeMutation = (): void => {
    const onMutationHandler = async (mutations: MutationRecord[]) => {
      for (let mutation of mutations) {
        if (mutation.addedNodes.length) {
          for (let node of mutation.addedNodes) {
            const element = node as HTMLElement;
            if (!element.className.includes('galleryCardContainer')) continue;

            const card = element.firstChild.firstChild as HTMLElement;
            const id = card.attributes.getNamedItem('data-rowid').value;

            await transferCardId(id);
          }
        }
        if (mutation.removedNodes.length) {
          for (let node of mutation.removedNodes) {
            const element = node as HTMLElement;
            if (!element.className.includes('galleryCardContainer')) continue;

            const card = element.firstChild.firstChild as HTMLElement;
            const id = card.attributes.getNamedItem('data-rowid').value;

            await transferCardId(id);
          }
        }
      }
    };

    const observer = new MutationObserver(onMutationHandler);
    const virtualListNode = document.querySelector('#view');
    observer.observe(virtualListNode, { childList: true, subtree: true });
  };

  // Timeout helper
  const waitFor = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // Scroll through the page, 1000px at a time
  const scrollToBottom = async (page: Page) => {
    let retryScrollCount = 3;

    while (retryScrollCount > 0) {
      try {
        let scrollPosition = await page.$eval(
          '.light-scrollbar',
          (wrapper: Element) => wrapper.scrollTop
        );

        // Rapid scrolling
        await page.evaluate(() =>
          document.querySelector('.light-scrollbar').scrollBy({ top: 1000, behavior: 'smooth' })
        );
        await waitFor(200);

        await page.waitForFunction(
          `document.querySelector('.light-scrollbar').scrollTop > ${scrollPosition}`,
          { timeout: 1_000 }
        );

        retryScrollCount = 3;
      } catch {
        retryScrollCount--;
      }
    }
  };

  // Transfers Id from puppeteer environment to here
  const transferCardId = async (id: string) => {
    if (!cardIds.includes(id)) cardIds.push(id);
  };

  const createOpsTypedPersonRecord = async (
    contentId: string,
    pageContent: string
  ): Promise<void> => {
    const $ = cheerio.load(pageContent);
    const cellPairs = $('.detailView').find('.labelCellPair');

    let person: Partial<OPSTypedPerson> = { Id: contentId };
    let personLinks: Partial<OPSTypedPersonLink>[] = [];

    cellPairs.each((_, cellPair: cheerio.Element) => {
      let value: any;
      const pair = $(cellPair);
      const label = pair.find('.fieldLabel')?.text();

      const links = pair.find('.cellContainer').find('a');
      const checkboxDiv = pair.find('.cellContainer').find('div[role=checkbox]');
      const image = pair.find('.cellContainer').find('img');
      const date = pair.find('.cellContainer').find('.date');
      const time = pair.find('.cellContainer').find('.time');

      if (links.length) {
        // Parse Textbox Links
        links.each((index: number, linkElement: cheerio.Element) => {
          const link = $(linkElement);
          const href = link.attr('href');
          const value = link.text();
          personLinks.push({
            Id: `${contentId}-${index}`,
            Href: href,
            Value: value,
          });
        });
      } else if (checkboxDiv.length) {
        // Parse Checkboxes
        value = checkboxDiv.attr('aria-checked') === 'true';
      } else if (image.length) {
        // Parse Image
        value = image.attr('src');
      } else if (date.length && time.length) {
        // Parse Date/Time
        const dateValue = date.text();
        let timeValue = time.find(':last')?.text();
        timeValue = timeValue.replace('am', ' AM');
        timeValue = timeValue.replace('pm', ' PM');
        value = new Date(`${dateValue} ${timeValue}`);
      } else {
        // Parse value
        value = pair.find('.cellContainer').find(':last')?.text();
      }

      const mappedValue = AirTableToOPSPersonMap[label];
      if (mappedValue) person[mappedValue] = value;
    });

    // Upload Image
    const imageUrl = person.PictureUrl;
    if (imageUrl && imageUrl !== 'No attachments') {
      const response = await axios.get<ArrayBuffer>(imageUrl, {
        responseType: 'arraybuffer',
      });
      const imageData = response.data;
      const contentType = response.headers['content-type'];
      const fileExtension = contentType.split('/').pop();
      const fileName = `${contentId}.${fileExtension}`;

      const fileUploadResponse = await blobStorageService.uploadFile({
        file: imageData,
        filename: fileName,
        container: 'images-new',
      });

      person.PictureUrl = fileUploadResponse.url;
    }

    const linksUpsert = personLinks.map((l: Partial<OPSTypedPersonLink>) => ({
      where: { Id: l.Id },
      create: { ...(l as OPSTypedPersonLink) },
      update: { ...(l as OPSTypedPersonLink) },
    }));

    await prisma.oPSTypedPerson.upsert({
      where: {
        Id: person.Id,
      },
      create: {
        ...(person as OPSTypedPerson),
        Links: {
          create: [...(personLinks as OPSTypedPersonLink[])],
        },
      },
      update: {
        ...(person as OPSTypedPerson),
        Links: {
          upsert: [...linksUpsert],
        },
      },
    });
  };

  //#endregion

  try {
    browser = await puppeteer.launch({
      headless: environment !== 'local',
      args: [`--window-size=1920,1080`],
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
    });

    page = await browser.newPage();

    await page.goto(airtableUrl, { waitUntil: 'networkidle2' });
    await page.setViewport({ width: 1920, height: 1080 });
    await page.waitForSelector('#view', { timeout: 5_000 });

    await page.exposeFunction('transferCardId', transferCardId);
    await page.evaluate(observeMutation);
    await scrollToBottom(page);

    const existingRecordIds = (await prisma.oPSTypedPerson.findMany({ select: { Id: true } })).map(
      (val) => val.Id
    );

    const newIds = cardIds.filter((cardId: string) => !existingRecordIds.includes(cardId));

    for (const id of newIds) {
      await page.goto(`${airtableUrl}/${id}`, {
        waitUntil: 'networkidle2',
      });
      const content = await page.content();
      await createOpsTypedPersonRecord(id, content);
    }

    await browser.close();
  } catch (ex) {
    console.error(ex);
  } finally {
    prisma.$disconnect;
  }
};

app.timer('etl-function', {
  schedule: '0 * * */1 * *',
  handler: airTableToSqlETL,
  runOnStartup: process.env.Environment === 'local',
});
