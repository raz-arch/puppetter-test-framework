const pptrEdge = require('puppeteer-edge');

(async () => {
  const browser = await pptrEdge.launch({headless: false,
    slowMo: 80,});

  const page = await browser.newPage();
  await page.goto("https://pptr.dev");
  await page.screenshot({path: 'exampleEdge.png'});
})()