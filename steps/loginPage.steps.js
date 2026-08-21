import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures.js';


const { Given, When, Then } = createBdd(test);

Given('user navigate to the SuiteCRM login page', async ({ loginPage }) => {
       await loginPage.navigateToLoginPage();
});

When('user logs in with valid username and password', async ({ loginPage }) => {
       await loginPage.loginStandard();
       
});

Then('user should be redirected to the home page', async ({loginPage}) => {
      await loginPage.verifyLoginSuccess();
});

When('user log in with valid username and wrong password', async ({loginPage}) => {
       await loginPage.invalidLogin();
});

Then('user should see login error message is displayed', async ({loginPage}) => {
       await loginPage.verifyLoginError();
});

