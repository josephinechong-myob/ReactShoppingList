import puppeteer from "puppeteer"; //UI integration test not an end point intergration test

const path = 'http://localhost:3000'; 

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => { //before any test has run
    browser = await puppeteer.launch({headless:false});
    page = await browser.newPage(); //lanch new page
  });

  it("loads a catfact", async() => {
    await page.goto(path); 
    await page.waitForFunction('document.getElementById("catfact").innerText !== ""') //wait until api has responded if it's not empty string
    
    const text = await page.$eval("#catfact", (element) => element.textContent) //expecting to have a catfact
    expect(text).not.toEqual("") 
    
    //await page.waitForTimeout(10000);
  })
    
  afterAll(() => browser.close()); //after all test have run

})