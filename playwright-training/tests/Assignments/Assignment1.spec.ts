import { test, expect, chromium } from '@playwright/test';
//1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)

test('validate the Parabank application', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  console.log("Parabank URL opened successfully.");
//2.verify application logo is displayed
const logo = page.locator("img.logo");
await expect(logo).toBeVisible();
console.log("logo is displayed successfully");
//3.Verify application caption displayed as "Experience the difference"
const caption = page.locator("p.caption");
const expectedCaption = "Experience the difference";
const actualCaption = await caption.textContent();
await expect(actualCaption).toBe(expectedCaption);
console.log("expected caption is displyed");
//4.Enter invalid username
const username = page.locator('input[name="username"]');
username.fill('Invalid User');

//5.Enter empty Password
const password = page.locator('input[name="password"]');
password.fill(' ');
//6.Click on login button
const loginbutton = page.locator('input[value="Log In"]');
loginbutton.click();
//7.Verify the error message "Please enter a username and password."
const errormessage = page.locator("p.error");
await expect(errormessage).toBeVisible();
const expectederrormessage = "Please enter a username and password."
const actualerrormessgae = await errormessage.textContent();
await expect(actualerrormessgae).toBe(expectederrormessage);
console.log("Expected error is message is displayed");
//8.Click on admin page link
const adminpage = page.locator('//a[text()="Admin Page"]');
adminpage.click();
const adminpageheader = page.locator("h1.title")
await expect(adminpageheader).toBeVisible();
//9.select the option "soap" from dba mode radio button
selectDataAccessMode(page,'soap');
//10.Scroll to element dropdown
const loanprovider = page.locator('select#loanProvider');
await loanprovider.scrollIntoViewIfNeeded();
console.log("Scrolled to dropdown successfully");
//11.Select the option web service from the dropdown
await loanprovider.selectOption({label:'Web Service'});
console.log("Web Service option selected");
//12.click on submit button
const submitbutton = page.locator('input[value="Submit"]');
await submitbutton.click();
console.log("Submit button clicked successfully")
//13.verify submission is successful by validating success message
const successmessage = page.locator('//b[text()="Settings saved successfully."]');
await expect(successmessage).toBeVisible();
console.log("Settings saved successfully message is displayed");
//14.Click on services page link
const servicesLink = page.locator('ul.leftmenu>li>a[href="services.htm"]');
await servicesLink.click();
console.log("Clicked on services page link successfully");

// 15.wait for service page
   const servicesPageHeader = page.locator('//span[text()="Bookstore services:"]');
   await expect(servicesPageHeader).toBeVisible();
   console.log("Services page header is visible");

    // 16.Scroll down till bookstore services table
    await servicesPageHeader.scrollIntoViewIfNeeded();
    console.log("Scrolled to bookstore services table successfully");

    // 17.get total rows of books store services table
    const rows = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
    const totalRows = await rows.count();
    console.log("Total rows in bookstore services table: " + totalRows);

    // 18.get total columns of books store services table
    const columns = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]/td');
    const totalColumns = await columns.count();
    console.log("Total columns in bookstore services table: " + totalColumns);

     // 19.Print table data (row wise and column wise data)

    //loop to iterate rows
    for(let r = 1; r<=totalRows ; r++){

        //loop to iterate columns
        for(let c=1; c<=totalColumns ; c++){
            const cell = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr['+r+']//td['+c+']');
            const cellValue = await cell.textContent();
            console.log("Row "+ r + " , Column "+ c+ " value is : "+ cellValue);
        }

    }

  });

async function selectDataAccessMode(page:any , option:string)
{
const radio = page.locator('input[value="'+option+'"]');
radio.click();

}

