import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixtures.js';

const { Given, When, Then } = createBdd(test);

When('user navigate to view accounts page', async ({viewAccountPage}) => {
    await viewAccountPage.navigateToViewAccountPage();
});


Then('user should see view account page title displayed', async ({viewAccountPage}) => {
     await viewAccountPage.verifyViewAccPageTitle();
});

When('user click on account name {string}', async ({viewAccountPage}, accountName) => {
     await viewAccountPage.clickAccountName(accountName);
});

Then('user should see details page for account name {string}', async ({viewAccountPage}, accountName) => {
     await viewAccountPage.verifyAccountDetailsPage(accountName);
});

When('user clicks the check box to select an account', async ({viewAccountPage}) => {
     await viewAccountPage.clickSelectAccount();
});

Then('user should see the Bulk Action dropdown is enabled', async ({viewAccountPage}) => {
     await viewAccountPage.verifyBulkActionDropdownEnabled();
});

