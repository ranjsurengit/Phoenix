import { test as base } from 'playwright-bdd';
import { login } from '../pages/login.js';
import { createLeadPage } from '../pages/createLeadPage.js';
import { calendarPage } from '../pages/calendarPage.js' 
import { scheduleCallPage } from '../pages/scheduleCallPage.js';
import { viewQuotePage } from '../pages/viewQuotePage.js';

//import { homePage } from '../pages/homePage.js';


export const test = base.extend({
  loginPageObj: async ({ page }, use) => {
    await use(new login(page));
  },

  createLeadPageObj: async ({ page }, use) => {
        await use(new createLeadPage(page));
    },
  
  leadData: async ({}, use) => {
    const data = {};
    await use(data);
},

//  calendarPageObj: async ({page}, use) => {
//   await use(new calendarPage(page));
//  },
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
  },
});

export { expect } from '@playwright/test';