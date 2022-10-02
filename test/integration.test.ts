import puppeteer, { Browser, Page } from 'puppeteer';
import * as path from 'path';

const pathToExtension = require('path').join(
  path.join(__dirname, '..')
);

const puppeteerArgs = [
  `--disable-extensions-except=${pathToExtension}`,
  `--load-extension=${pathToExtension}`,
  '--show-component-extension-options',
];
const a = puppeteerArgs;

describe('Consent window removing', () => {
  let page: Page;
  let browser: Browser;
  jest.setTimeout(50000);

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      devtools: true,
      args: puppeteerArgs
    });

    page = await browser.newPage();
  });

  afterAll(async () => {
    // Tear down the browser
    await browser.close();
  });

  it('should remove source point container on idealo.de', async () => {
    await page.goto('https://idealo.de');

    const e = await page.waitForSelector('[id*="sp_message_container_"]', { hidden: true });

    expect(e).toBeNull();
  });
});