import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';
import invalidUserData from '../test-data/invalidUserData.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

Given('User navigates to the application', async ({ loginPageObj }) => {
  await loginPageObj.launchApp();
});

Given('User is on Login page', async ({ loginPageObj }) => {
  await loginPageObj.verifyTitle();
});

When('User Logs In after entering Valid credentials', async ({ loginPageObj }) => {
  await loginPageObj.loginUser();
});

Then('User verifies URL contains {string}', async ({ loginPageObj }, urlText) => {
  await loginPageObj.verifySuccessfulLogin(urlText);

});

When('User trying to Log In after entering {string}', async ({loginPageObj}, invalidUser) => {
  const invalidData=invalidUserData[invalidUser];
  console.log(invalidData);
  await loginPageObj.loginInvalidUser(invalidData);
  
});

Then('User should see the error message {string}', async ({loginPageObj}, expectedMessage) => {

  await loginPageObj.verifyErrorMessage(expectedMessage);
  
});
