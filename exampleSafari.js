const pptrSafari = require('puppeteer-safari');
let page;
let browser;
const width = 1366;
const height = 768;

(async () => {
   browser = await pptrSafari.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto('https://www.google.com');
  await page.screenshot({path: 'exampleSafari.png'});
  await browser.close();
})();