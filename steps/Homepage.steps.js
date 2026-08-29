import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';

const { Given, When, Then } = createBdd(test);


Given('User is on the home page', async ({ homePageObj }) => {
  await homePageObj.UseronHomePage();
});

When('User hovers on More', async ({ homePageObj }) => {
  await homePageObj.HoverMore();
});

Then('A dropdown with SubMenu is diplayed', async ({ homePageObj }) => {
  await homePageObj.MoreMenuDisplayed();
});

Given('Action button is displayed on the homepage', async ({ homePageObj }) => {
  await homePageObj.ViewActionButton();
});

When('User clicks on the action button', async ({ homePageObj }) => {
  await homePageObj.ClickActionButton();
});

Then('A dropdown with actions possible is displayed', async ({ homePageObj }) => {
  await homePageObj.ViewAddDashlet();
});

Given('A dropdown with actions possible is viewed', async ({ homePageObj }) => {
  await homePageObj.ActionButtonIsDisplayed();
  await homePageObj.ClickActionButton();
  await homePageObj.ViewAddDashlet();
});

When('User clicks on Add Dashlet', async ({ homePageObj }) => {
  await homePageObj.ClickAddDashlet();
});

Then('A pop with all dashlet options is displayed', async ({ homePageObj }) => {
  await homePageObj.AddDashletPopupDisplayedTitle();
});

Given('A pop with all dashlet options is viewed', async ({ homePageObj }) => {
  await homePageObj.EnsureAddDashletPopupOpened();
});


When('User clicks on {string}', async ({ homePageObj }, arg) => {
  await homePageObj.ClickPopupTab();
  await homePageObj.ChooseDashlet();
  await homePageObj.CloseButton();
});

Then('My invocies gets added to homepage', async ({ homePageObj }) => {
  await homePageObj.InvoiceDashletDisplayed();
});


When('User hovers on user icon', async ({ homePageObj }) => {
  await homePageObj.HoverUserIcon();
});

Then('Username is displayed on the top of the dropdown {string}', async ({ homePageObj }, expectedUser) => {
  const usernameLocator = await homePageObj.UsernameDisplayed();
  await expect(usernameLocator).toContainText(expectedUser);
});

Given('User is on homepage', async ({ homePageObj }) => {
  await homePageObj.UseronHomePage();
});

