const puppeteer = require('puppeteer');
let page;
let browser;
const width = 1366;
const height = 768;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto('https://www.google.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
