import { test, expect, chromium } from '@playwright/test';
//1. Launch browser window(Chrome) 
test('Launch browser window', async () => {
const browser = await chromium.launch({ headless: false, channel: 'chrome' });
//2. Maximize the browser window
const context = await browser.newContext();
const page = await context.newPage();
//3. Delete all the cookies
//4. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
await page.goto('https://demoqa.com/');          
//5. Wait for Page-load
const toolsqa = page.getByRole('link').filter({ hasText: /^$/ });
await expect(toolsqa).toBeVisible();
console.log("Toolsqa is displayed successfully");
const forms = page.getByRole('link', { name: 'Forms' });
await forms.scrollIntoViewIfNeeded();
await forms.click();
await page.getByRole('link', { name: 'Practice Form' }).click();
//6. Enter First name and Last name 
const firstName = page.locator('input#firstName');
await firstName.fill('venkata');  
const lastName = page.locator('input#lastName');
await lastName.fill('reddy');
//7. Enter Email 
const useremail = page.locator('input#userEmail') 
await useremail.fill('venkata.kamireddy@gmail.com');              
//8. Select Gender (Male) 
selectgender(page, 'Male');
//9. Enter mobile number 
const mobileNumber = page.locator('input#userNumber');
await mobileNumber.fill("9867876774");               
//10.Select DOB (1-Feb-1991)  
await selectDOB(page, "1", "February", "1991");              
//11.Search and Select Computer Science
await selectSubject(page, 'Computer Science');                
//12.Select Hobbies as Sports and Reading  
const hobbies : string[] = ['Sports', 'Reading']
await selectHobbies(page, hobbies);
//13.Upload photo   
 const photoPath = "C:\\AutomationTraining\\playwright-training\\files\\2.png";
 const uploadPhoto = page.locator('input#uploadPicture');
 await uploadPhoto.setInputFiles(photoPath);             
               
//14.Submit Details                

const submitButton = page.locator('button#submit');
await submitButton.click();

});

async function selectSubject(page : any , subject : string) {
const subjectInputBox = page.locator ('input.subjects-auto-complete__input');
subjectInputBox.click();
subjectInputBox.fill(subject);
//select the suggestion
const suggestion = await page.getByRole('option', { name: subject });
await expect(suggestion).toBeVisible();
suggestion.click();
    
}

async function selectDOB(page: any, date : string, month : string, year: string)
{
const calender = page.locator('input#dateOfBirthInput');
calender.click();
const monthDropdown = page.locator('select.react-datepicker__month-select');
await expect(monthDropdown).toBeVisible();
await monthDropdown.selectOption({ label: month });
const yearDropdown = page.locator('select.react-datepicker__year-select');
await expect(yearDropdown).toBeVisible();
await yearDropdown.selectOption({ label : year })
const dateField = page.locator('//div[text()="' + date + '" and contains (@aria-label, "' + month + '")]');
dateField.click();
}

async function selectgender(page: any, gender : String) 
{
const genderlabel = page.locator('//label[text()="'+ gender +'"]');
genderlabel.click();

}

async function selectHobbies(page : any, options : string []) {

    for (let val of options){
const hobby = page.locator('//label[text()="' + val + '"]');
        
if (!hobby.isChecked()) {
            hobby.click();
        }
        }
}