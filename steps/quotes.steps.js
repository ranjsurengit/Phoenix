import { createBdd } from 'playwright-bdd';
import { login } from '../pages/login.js';
import { QuotePage } from '../pages/QuotePage.js';
//import { test} from '@playwright/test';
//import { test } from '../fixtures/fixtures.js';


const { Given, When, Then, Before} = createBdd();
let suitecrm;

Before(async ({ page }) => {
  await page.waitForLoadState('networkidle');
  suitecrm = new QuotePage(page);
});

Given('user click Create Quote from Quotes menu', async ({page}) => {
  await suitecrm.createQuote();
});

Then('user verify the quote creation form is displayed', async ({page}) => {
  await suitecrm.verifyCreateQuoteForm();
});

Given('user is on the create quote page opened from quotes menubar', async ({page}) => {
 await suitecrm.createQuote();
 await suitecrm.verifyCreateQuoteForm();   
});

When('user enter the required field details from following examples:', async ({page}, dataTable) => {
   await suitecrm.fillQuoteForm(dataTable);  
   await suitecrm.click_Save_Btn('SAVE');
});

Then('user should see the new quote summary', async ({page}) => {
  await suitecrm.newQuoteSummary();
});

When('user save the quotes form without enter title field:', async ({page}, dataTable) => {
  await suitecrm.leaveQuote(dataTable);
  await suitecrm.click_Save_Btn('SAVE');
});

Then('user should see an error message {string}', async ({}, expectedMessage) => {
  await suitecrm.verifyErrorMessage(expectedMessage);
 
});

Then('User should see that editable fields on create Quotes page are enabled', async ({}) => {
   await suitecrm.createFieldsEditable();
});

Then('User should see the Save button on Create Quotes page', async ({}) => {
    await suitecrm.saveButtonVisibility('SAVE');
  
});

Then('User should see the Save button on Create Quotes page is Enabled', async ({}) => {
    await suitecrm.saveButtonEnable('SAVE');
});

