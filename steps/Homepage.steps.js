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
  await homePageObj.ChooseDashlet(arg);
  await homePageObj.CloseButton();
});

Then('My Calls gets added to homepage', async ({ homePageObj }) => {
  await homePageObj.MyCallsDashletDisplayed();
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

When('User hovers on quick actions', async ({ homePageObj }) => {
  await homePageObj.HoverQuickActions();
});

Then('the quick action icon color changes to orange', async ({ homePageObj }) => {
  await homePageObj.QuickActionsColorChange();
});

When('User enters {string} in the search bar', async ({ homePageObj }, arg) => {
  await homePageObj.EnterTextInSearch(arg);
}
);

Then('The search results are displayed', async ({ homePageObj }) => {
  await homePageObj.SearchText();
  await homePageObj.VerifyModuleTitle();
});

When('User clicks on logout', async ({ homePageObj }) => {
  await homePageObj.Logout();
});

Then('The user is redirected to the login page', async ({ loginPageObj }) => {
  await loginPageObj.verifyTitle();
  await expect(loginPageObj.page).toHaveURL(process.env.URL, { timeout: 90000 });
});

Given('A dashlet is added to homepage', async ({ homePageObj }) => {
  await homePageObj.UseronHomePage();
  await homePageObj.EnsureAddDashletPopupOpened();
  await homePageObj.ClickPopupTab();
  await homePageObj.ChooseDashlet('My Calls');
  await homePageObj.CloseButton();
});

When('User views the dashlet', async ({ homePageObj }) => {
  await homePageObj.MyCallsDashletDisplayed();
});

//Here I want the latest added dashlet My Calls pagenumbers to be visible and user should be able to click on first,previous,starting and end pagination button of latest My Calls dashlet added
Then('Pagination of the dashlet numbers are displayed', async ({ homePageObj }) => {
  await homePageObj.PagenumbersDisplayed();
  await homePageObj.NextPage();
  await homePageObj.PreviousPage();
  await homePageObj.EndPage();
  await homePageObj.FirstPage();
});

When('User hovers on recently viewed items', async ({ homePageObj }) => {
  await homePageObj.RecentlyViewedItems();
});

Then('Recently viewed items are displayed', async ({ homePageObj }) => {
  await homePageObj.RecentlyViewedMenu();
});

When('User tries to close the dashlet from homepage', async ({ homePageObj }) => {
  await homePageObj.CloseDashletonHomePage();
});

Then('User is prompted with a pop up option', async ({ homePageObj }) => {
  await homePageObj.PopupOptionDisplayedforClosedDashlet();
});