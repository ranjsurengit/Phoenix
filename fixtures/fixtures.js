import { test as base } from 'playwright-bdd';
import { login } from '../pages/login.js';
import { CreateAccountsPage } from '../pages/createAccountsPage.js';
import { ImportAccountPage } from '../pages/importAccountPage.js';
import { ViewAccountPage } from '../pages/viewAccountPage.js';
import { createLeadPage } from '../pages/createLeadPage.js';
import { ContactPage } from '../pages/ContactPage.js';
import { searchLeadPage } from '../pages/searchLeadPage.js';
import { editLeadPage } from '../pages/editLeadPage.js';
import { calendarPage } from '../pages/calendarPage.js' 
import { scheduleCallPage } from '../pages/scheduleCallPage.js';
import { viewQuotePage } from '../pages/viewQuotePage.js';
import { QuotePage } from '../pages/QuotePage.js';
import { createDocumentPage } from '../pages/CreateDocument.js';
import { HomePage } from '../pages/HomePage.js';
import { viewDocumentPage } from '../pages/ViewDocument.js';

export const test = base.extend({
  loginPageObj: async ({ page }, use) => {
    await use(new login(page));
  },

  createAccountsPage: async ({ page }, use) => {      
    await use(new CreateAccountsPage(page));
  },

  accountData: async ({}, use) => {
    const data = {};
    await use(data);
  },

  createLeadPageObj: async ({ page }, use) => {
    await use(new createLeadPage(page));
  },

  leadData: async ({ }, use) => {
    const data = {};
    await use(data);
},

  searchLeadPageObj: async({page},use)=>{
    await use(new searchLeadPage(page));
  },

  searchData: async ({}, use) => {
        const data = {};

        await use(data);
  },

  editLeadPageObj: async({page},use)=>{
    await use(new editLeadPage(page));
  },

  editData: async ({}, use) => {
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
  homePageObj: async ({ page }, use) => {
    page.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        console.log(`[BROWSER CONSOLE ${msg.type().toUpperCase()}]:`, msg.text());
      }
    });
    page.on('pageerror', err => {
      console.log('[BROWSER UNCAUGHT EXCEPTION]:', err.stack || err.message || err);
    });
    await use(new HomePage(page));
  },

  createDocumentPageObj: async ({ page }, use) => {
    await use(new createDocumentPage(page));
  },

  viewDocumentPageObj: async ({ page }, use) => {
    await use(new viewDocumentPage(page));
  },
  quotePageOb: async ({page}, use) => {
    const quote = new QuotePage(page)
  await use(quote);
  },

  quoteData: async ({}, use) => {
     const dataValue1 = {};
     await use(dataValue1);
  },

  calendarPageOb: async ({page}, use) => {
   const calendar = new calendarPage(page);
      await use(calendar);
  },
    
  calendarData: async ({}, use) => {
     const data1 = {};
     await use(data1);
  },

 callPageOb: async ({page}, use) => {
   const call = new scheduleCallPage(page);
      await use(call);
  },
    
  callData: async ({}, use) => {
     const dataValue = {};
     await use(dataValue);
 },
  
 viewPageOb: async ({ page }, use) => {
    await use(new viewQuotePage(page));
  }

});

export { expect } from '@playwright/test';
