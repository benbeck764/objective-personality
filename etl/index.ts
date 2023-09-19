import puppeteer, { Browser, Page } from 'puppeteer';
import * as cheerio from 'cheerio';

(async () => {
  const airtableUrl =
    'https://airtable.com/appudq0aG1uwqIFX5/shrQ6IoDtlXpzmC1l/tblyUDDV5zVyuX5VL/viwwzc3yLw0s2PAEi';
  let browser: Browser;
  let page: Page;
  let cardIds: string[] = [];

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

            await transferData(id);
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
          document
            .querySelector('.light-scrollbar')
            .scrollBy({ top: 1000, behavior: 'smooth' })
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

  const transferData = async (id: string) => {
    cardIds.push(id);
  };

  const parseCard = (pageContent: string) => {
    const $ = cheerio.load(pageContent);
    const cellPairs = $('.detailView').find('.labelCellPair');

    cellPairs.each((i: number, el: cheerio.Element) => {
      const pair = $(el);
      // [TODO]: Skip 'Relationships' and 'Biological Twins'
      const label = pair.find('.fieldLabel')?.text();

      const links = pair.find('.cellContainer').find('a');
      const checkboxDiv = pair
        .find('.cellContainer')
        .find('div[role=checkbox]');
      const image = pair.find('.cellContainer').find('img');

      if (links.length) {
        // Parse Textbox Links
        links.each((i2: number, el2: cheerio.Element) => {
          const link = $(el2);
          const href = link.attr('href');
          const value = link.text();
          console.log(`${value}: ${href}`);
        });
      } else if (checkboxDiv.length) {
        // Parse Checkboxes
        const checked = checkboxDiv.attr('aria-checked') === 'true';
        console.log(`${label}: ${checked}`);
      } else if (image.length) {
        // Parse Image
        const src = image.attr('src');
        console.log(`${label}: ${src}`);
      } else {
        // Parse value
        const value = pair.find('.cellContainer').find(':last')?.text();
        console.log(`${label}: ${value}`);
      }
    });
  };

  //#endregion

  const init = async (): Promise<void> => {
    browser = await puppeteer.launch({
      headless: true,
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

    // await page.exposeFunction('transferData', transferData);
    // await page.evaluate(observeMutation);
    // await scrollToBottom(page);

    const ids = ['rec3bHgppeU0ySjCV', 'recvIP8tRj4fKJnLF', 'recK8fMoC8X4EZ7FO'];
    for (const id of ids) {
      await page.goto(`${airtableUrl}/${id}`, { waitUntil: 'networkidle2' });
      const content = await page.content();
      parseCard(content);
    }

    await browser.close();
  };

  await init();
})();
