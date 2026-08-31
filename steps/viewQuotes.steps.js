import { createBdd } from 'playwright-bdd';
import { login } from '../pages/login.js';
import { QuotePage } from '../pages/QuotePage.js';
import { viewQuotePage } from '../pages/viewQuotePage.js';
import { test } from '../fixtures/fixtures.js';


const { Given, When, Then, Before} = createBdd(test);
let viewQuote,suitecrm1;

// Before(async ({ page }) => {
//   await page.waitForLoadState('networkidle');
//   viewQuote = new viewQuotePage(page);
//   suitecrm1 = new QuotePage(page);
//   });

Given('user click view Quotes from Quotes menu', async ({viewPageOb}) => {
 
 await viewPageOb.clickViewQuote();
});

Then('user verify the view Quotes page is displayed', async ({viewPageOb}) => {
  await viewPageOb.SavedQuotes();
});

// Given('List of saved Quotes', async ({viewPageOb,page }) => {
//       //  await suitecrm1.verifyCreateQuoteForm();
//       //  await suitecrm1.fillQuoteForm();
//       //  await suitecrm1.click_Save_Btn();
//       //  await suitecrm1.newQuoteSummary();
//        await viewPageOb.clickViewQuote();
//        await viewPageOb.SavedQuotes();
// });

// When('User clicks on one particular', async ({viewPageOb}) => {
//   await viewPageOb.clickFirstQuote();
//   //await viewPageOb.savedQuoteSeen();
// });

// Then('Selected display count changes to one.', async ({viewPageOb}) => {
//   await viewPageOb.selectedDisplayCount();
// });

When('user click Filter Button and search title of the Quote', async ({viewPageOb}) => {
  await viewPageOb.clickFilterBtn();
});

Then('user verify the particular Quotes grid is displayed', async ({viewPageOb}) => {
   await viewPageOb.verifyParticularQuote();
});

       