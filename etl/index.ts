import { OPSTypedPerson, PrismaClient } from '@prisma/client';
import axios from 'axios';
import * as cheerio from 'cheerio';
import puppeteer, { Browser, Page } from 'puppeteer';
import 'dotenv/config';
import { AirTableToOPSPersonMap } from './models/OPSTypedPerson';
import BlobStorageClient from './_storage/blob-storage-client';

(async () => {
  const airtableUrl =
    'https://airtable.com/appudq0aG1uwqIFX5/shrQ6IoDtlXpzmC1l/tblyUDDV5zVyuX5VL/viwwzc3yLw0s2PAEi';
  let browser: Browser;
  let page: Page;
  let cardIds: string[] = [];

  const blobStorageService = new BlobStorageClient();
  const prisma = new PrismaClient();

  //#region Page Scraping

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
      }
    };

    const observer = new MutationObserver(onMutationHandler);
    const virtualListNode = document.querySelector('#view');
    observer.observe(virtualListNode, { childList: true, subtree: true });
  };

  const waitFor = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

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

  const transferCardId = async (id: string) => {
    cardIds.push(id);
  };

  const createOpsTypedPersonRecord = async (
    contentId: string,
    pageContent: string
  ): Promise<void> => {
    const $ = cheerio.load(pageContent);
    const cellPairs = $('.detailView').find('.labelCellPair');

    let person: Partial<OPSTypedPerson> = { Id: contentId };

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
        const linksArray: { Href: string; Value: string }[] = [];
        links.each((_, linkElement: cheerio.Element) => {
          const link = $(linkElement);
          const href = link.attr('href');
          const value = link.text();
          linksArray.push({ Href: href, Value: value });
        });
        value = linksArray;
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
      person[mappedValue] = value;
    });

    // Upload Image
    const imageUrl = person.PictureUrl;
    if (imageUrl) {
      const response = await axios.get<ArrayBuffer>(imageUrl, {
        responseType: 'arraybuffer',
      });
      const imageData = response.data;
      const fileName = `${contentId}.png`;

      const fileUploadResponse = await blobStorageService.uploadFile({
        file: imageData,
        filename: fileName,
        container: 'images',
      });

      person.PictureUrl = fileUploadResponse.url;
    }

    await prisma.oPSTypedPerson.create({ data: person as OPSTypedPerson });
  };

  //#endregion

  const init = async (): Promise<void> => {
    try {
      browser = await puppeteer.launch({
        headless: false,
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

      for (const id of cardIds) {
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

  await init();
})();
