import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';

const { Given, When, Then } = createBdd(test);
Given('User should have logged into Suite CRM application', async ({ loginPageObj }) => {
    await loginPageObj.launchApp();
    await loginPageObj.loginUser();
});
