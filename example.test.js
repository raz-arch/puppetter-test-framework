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
  page = await browser.newPage();
  
});
test('Verify the title of the page',
async() =>{
  await page.setViewport({ width, height });
  await page.goto('https://www.linkedin.com/login?', {
		waitUntil: 'networkidle2'
	});
  await page.screenshot({path: 'example2.png'});
  const pageTitle = await page.title(); 
  console.log(pageTitle);
  expect(pageTitle).toBe('LinkedIn Login, Sign in | LinkedIn');

});
describe('contact form validation',()=>
{
  test(' verify email field', async()=>{
  await page.waitForSelector("[id='username']");
  const myElement  = page.waitForSelector("[id='username']");
  expect(myElement).toBeTruthy;
  await page.screenshot({path: 'verifyEmailFieldIsPresent.png'});
  });
});

afterAll(async() =>{
await browser.close();
}
);