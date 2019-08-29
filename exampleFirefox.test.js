const pptrFirefox = require('puppeteer-firefox');
let page;
let browser;
const width = 1366;
const height = 768;
beforeAll(async() =>{
  
  browser = await pptrFirefox.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
});

test('Verify the title of the page',
  async() =>{
    page = await browser.newPage();
    await page.setViewport({ width, height });
    await page.goto('https://www.google.com');
    await page.screenshot({path: 'exampleFirefox.png'});
    const pageTitle = await page.title(); 
    console.log(pageTitle);
    expect(pageTitle).toBe('Google');
  }
);
afterAll(async() =>{
  await browser.close();
}
);