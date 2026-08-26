import { test as base } from 'playwright-bdd';
import { login } from '../pages/login.js';
import { CreateAccountsPage } from '../pages/createAccountsPage.js';
import { ImportAccountPage } from '../pages/importAccountPage.js';
import { ViewAccountPage } from '../pages/viewAccountPage.js';

export const test = base.extend({
  loginPageObj: async ({ page }, use) => {
    await use(new login(page));
  },

  createAccountsPage: async ({ page }, use) => {      // object for createAccountsPage
    await use(new CreateAccountsPage(page));
  },

  accountData: async ({}, use) => {
        const data = {};
        await use(data);
  },

  importAccountPage: async({ page }, use) => {
    await use(new ImportAccountPage(page));
  },
  
  viewAccountPage: async({ page }, use) => {
    await use(new ViewAccountPage(page));
  },
});

export { expect } from '@playwright/test';
