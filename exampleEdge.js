/*const pptrEdge = require('puppeteer-edge');

(async () => {
  const browser = await pptrEdge.launch({headless: false,
    slowMo: 80,});

  const page = await browser.newPage();
  await page.goto("https://pptr.dev");
  await page.screenshot({path: 'exampleEdge.png'});
})()*/
var puppeteer = require('puppeteer');
(async () => {
  /*const browserOptions = new LaunchOptions
{
    Headless = false,
    ExecutablePath = "/Applications/Microsoft\ Edge\ Beta.app"
};*/

const browser = await puppeteer.launch({
  Headless : false,
  ExecutablePath : "/Applications/Microsoft\ Edge\ Beta.app",
  slowMo:200
});
const page = await browser.newPage();
console.log('in process');
await page.goto('https://www.google.com');
  await page.screenshot({path: 'exampleEdge.png'});
  
//await page.SetContentAsync('<div>Testing</div>');
})();
