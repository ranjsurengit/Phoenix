import { test as base } from 'playwright-bdd';
import { login } from '../pages/login.js';
//import { createLeadPage } from '../pages/createLeadPage.js';
//import { homePage } from '../pages/homePage.js';


export const test = base.extend({
  loginPageObj: async ({ page }, use) => {
    await use(new login(page));
  },
/*
  createLeadPageObj: async ({ page }, use) => {
        await use(new createLeadPage(page));
    },
  
  leadData: async ({}, use) => {
    const data = {};
    await use(data);
},

  homePageObj: async({page},use)=>{
    await use(new homePage(page));
  },
  */

});

export { expect } from '@playwright/test';