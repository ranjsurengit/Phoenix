import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';
import invalidUserData from '../test-data/invalidUserData.json' with { type: 'json' };
import logger from '../utils/logger.js';
const { Given, When, Then } = createBdd(test);

Given('User navigates to the application', async ({ loginPageObj }) => {
  
  await loginPageObj.launchApp();
  logger.info("Launched App");
});

Given('User is on Login page', async ({ loginPageObj }) => {
  await loginPageObj.verifyTitle();
  logger.info("Verified Title");

});

When('User Logs In after entering Valid credentials', async ({ loginPageObj }) => {
  await loginPageObj.loginUser();
  logger.info("Entered credentials");
});

Then('User verifies URL contains {string}', async ({ loginPageObj }, urlText) => {
  await loginPageObj.verfySuccessfulLogin(urlText);
  logger.info("Verified Logged in successfully");
});

When('User trying to Log In after entering {string}', async ({loginPageObj}, invalidUser) => {
  const invalidData=invalidUserData[invalidUser];
  console.log(invalidData);
  await loginPageObj.loginInvalidUser(invalidData);
  logger.info("Entered invalid credentials");
  
});

Then('User should see the error message {string}', async ({loginPageObj}, expectedMessage) => {

  await loginPageObj.verifyErrorMessage(expectedMessage);
  logger.info("Verified error messsage successfully");
  
});
