import loginPageSteps from "../../page-objects/page-steps/loginPageSteps.js";
import homePageSteps from "../../page-objects/page-steps/homePageSteps.js";
import cookiesPageSteps from "../../page-objects/page-steps/cookiesPageSteps.js";
import { test, expect } from '@playwright/test';
import { log } from "node:console";
import { getData } from '../ui/data.js';

let loginPage: loginPageSteps;
let homePage: homePageSteps;
let cookiesPage: cookiesPageSteps;

test.describe("Application Tests", () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new loginPageSteps(page);
    homePage = new homePageSteps(page);
    cookiesPage = new cookiesPageSteps(page);
  });

  test('Verify Cookies Page is Launched', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
  });

  //data
  test('Verify Cookies Page content', async ({ }, testInfo) => {
    const data = getData(testInfo.title);
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPageContent(data.expectedContent);
  });

  test('Verify Cookies Popup Logos', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopUpLogos();
  });

  test('Verify Cookies Popup Switch Buttons', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopupSwitchButtons();
  });

  test('Verify Cookies Popup Selection Buttons', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtons();
  });

  test('Verify Show Details Link in the Cookies PopUp', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopUpShowDetailsLink();
    await cookiesPage.clickCookiesPopUpShowDetailsLink();
    await cookiesPage.verifyCookiesPopUpShowDetailsExpandedView();
  });

  test('Verify Cookies Popup is Closed', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtons();
    await cookiesPage.clickCookiesPopUpSelectionButtons("allow all");
    await cookiesPage.verifyCookiesPopUpIsClosed();
  });

  //data
  const data = getData("Verify Login");
  for (const loginData of data) {
    test('Verify Login with ' + loginData.scenario, async ({ }) => {
      await loginPage.launchApplication();
      await cookiesPage.verifyCookiesPageIsDisplayed();
      await cookiesPage.verifyCookiesPopupSelectionButtons();
      await cookiesPage.clickCookiesPopUpSelectionButtons("allow all");
      await cookiesPage.verifyCookiesPopUpIsClosed();
      await loginPage.verifyLoginPageIsDisplayed();
      await loginPage.enterBusinessEmailAndPassword(loginData.username, loginData.password);
      await loginPage.clickLoginButton();
      if (data.scenario === "valid login") {
        await homePage.verifyHomePageIsDisplayed();
      } else {
        await loginPage.verifyInvalidLoginErrorMessage();
      }
    });
  }


  //data
  test('Verify forgot password', async ({ }, testInfo) => {
    const data = getData(testInfo.title);
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtons();
    await cookiesPage.clickCookiesPopUpSelectionButtons("allow all");
    await cookiesPage.verifyCookiesPopUpIsClosed();
    await loginPage.verifyLoginPageIsDisplayed();
    await loginPage.enterBusinessEmailAndPassword(data.username, data.password);
    await loginPage.clickForgotPasswordLink();
    await loginPage.verifyForgotPasswordConfirmationMessage();
  });

  test('Verify social media icons', async ({ }) => {
    await loginPage.launchApplication();
    await cookiesPage.verifyCookiesPageIsDisplayed();
    await cookiesPage.verifyCookiesPopupSelectionButtons();
    await cookiesPage.clickCookiesPopUpSelectionButtons("allow all");
    await cookiesPage.verifyCookiesPopUpIsClosed();
    await loginPage.verifyLoginPageIsDisplayed();
    await loginPage.verifySocialMediaIcons();
  });

});