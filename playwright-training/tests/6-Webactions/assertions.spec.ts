import {test, expect, chromium} from '@playwright/test';

test('Browser actions', async () => {

    //Launch the browser window (Chrome)
    const browser = await chromium.launch({headless:false, channel:'chrome'}); //msedge for edge //, args: ['--start-maximized']

    //Launch the browser context from the browser engine. 
    const context = await browser.newContext();

    //Create a new page in the browser context.
    const page = await context.newPage();

    //Maximize the browser window to a specific resolution. 
    await page.setViewportSize({width:1920,height:1080});

    //Enter URL "https://www.google.com/" and launch the application. 
    await page.goto('https://parabank.parasoft.com/');
    const caption = page.locator('p class="caption"');    
    //Verify the application title. 
   // await expect(page).toHaveURL(/.*parabank/);
   // await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
    await expect(caption).toHaveText('Experience the difference');
});