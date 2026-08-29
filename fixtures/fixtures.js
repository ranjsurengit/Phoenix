import { test as base } from 'playwright-bdd';
import { login } from '../pages/login.js';
import { CreateAccountsPage } from '../pages/createAccountsPage.js';
import { ImportAccountPage } from '../pages/importAccountPage.js';
import { ViewAccountPage } from '../pages/viewAccountPage.js';
import { createLeadPage } from '../pages/createLeadPage.js';
import { ContactPage } from '../pages/ContactPage.js';
//import { homePage } from '../pages/homePage.js';

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

  createLeadPageObj: async ({ page }, use) => {
    await use(new createLeadPage(page));
  },

  leadData: async ({}, use) => {
    const data = {};
    await use(data);
  },

  importAccountPage: async({ page }, use) => {
    await use(new ImportAccountPage(page));
  },

  viewAccountPage: async({ page }, use) => {
    await use(new ViewAccountPage(page));
  },

  contactPage: async({ page }, use) => {
    await use(new ContactPage(page));
  },

/*
  homePageObj: async({page},use)=>{
    await use(new homePage(page));
  },
*/
});

export { expect } from '@playwright/test';
