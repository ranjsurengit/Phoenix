import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures.js';

const { Given, When, Then } = createBdd(test);

Given('user is on the contact list view page', async ({contactPage}) => {
     await contactPage.navigateToViewContactPage();
});

When('user click on the first contact name', async ({contactPage}) => {
     await contactPage.clickFirstContactName();
});

Then('user should see details page for that contact', async ({contactPage}) => {
     await contactPage.verifySelectedContactDetailsPage();
});

Given('the contact list is displayed with records', async ({contactPage}) => {
     await contactPage.navigateToViewContactPage();
     await contactPage.verifyContactListDisplayed();
});

When('user clicks the check box to select a contact', async ({contactPage}) => {
     await contactPage.clickSelectContact();
});

Then('user should see the contact Bulk Action dropdown is enabled', async ({contactPage}) => {
     await contactPage.verifyBulkActionDropdownEnabled();
});
