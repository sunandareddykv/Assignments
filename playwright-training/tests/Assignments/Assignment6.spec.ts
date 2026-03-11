// Shadow DOM
import { test, expect, chromium } from '@playwright/test';

test('Validating the Parabank Application', async ({ page }) => {


    //1. Enter URL and Launch the application (https://books-pwakit.appspot.com/)        
    await page.goto("https://books-pwakit.appspot.com/");

    //2. Maximize the browser window to a specific resolution. 
    await page.setViewportSize({ width: 1920, height: 1080 });

    //3.Locate the 'Shadow DOM' element and click and enter text in the search box.
    const shadowDomElement = page.locator('input[aria-label="Search Books"]');
    await shadowDomElement.fill('Playwright');
    await page.waitForTimeout(10000);
    await shadowDomElement.click();
    //await page.locator('div.icon > svg > g > path').click();
    //const clickIcon = page.locator('[div[class = "icon"]');
    //await clickIcon.click();
    

    //4. wait for 10 seconds to see the search results.
    await page.waitForTimeout(10000);


});