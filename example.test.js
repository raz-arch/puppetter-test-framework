const puppeteer = require('puppeteer');
let page;
let browser;
const width = 1366;
const height = 768;
beforeAll(async() =>{
  
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
    args: [`--window-size=${width},${height}`]
  });
  //page = await browser.newPage();
  
});
describe('title validation',()=>
{
test('Verify the title of the page',
async() =>{
  await page.setViewport({ width, height });
  page = await browser.newPage();
  await page.goto('https://www.linkedin.com/login?');
  await page.screenshot({path: 'example2.png'});
  const pageTitle = await page.title(); 
  console.log(pageTitle);
  expect(pageTitle).toBe('LinkedIn Login, Sign in | LinkedIn');

});
});
describe('contact form validation',()=>
{
  test(' verify email field', async()=>{
  await page.waitForSelector('[#username]');
  
  }, 1000
  );
});

afterAll(async() =>{
await browser.close();
}
);