import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixtures.js';
import logger from '../utils/logger.js';

const { Given, When, Then } = createBdd(test);

When('user navigate to view accounts page', async ({viewAccountPage}) => {
    logger.info('Step: navigating to view accounts page');
    await viewAccountPage.navigateToViewAccountPage();
});


Then('user should see view account page title displayed', async ({viewAccountPage}) => {
     logger.info('Step: verifying view account page title');
     await viewAccountPage.verifyViewAccPageTitle();
});

When('user click on account name {string}', async ({viewAccountPage}, accountName) => {
     logger.info(`Step: clicking account name "${accountName}"`);
     await viewAccountPage.clickAccountName(accountName);
});

Then('user should see details page for account name {string}', async ({viewAccountPage}, accountName) => {
     logger.info(`Step: verifying details page for "${accountName}"`);
     await viewAccountPage.verifyAccountDetailsPage(accountName);
});

When('user clicks the check box to select an account', async ({viewAccountPage}) => {
     logger.info('Step: selecting an account checkbox');
     await viewAccountPage.clickSelectAccount();
});

Then('user should see the Bulk Action dropdown is enabled', async ({viewAccountPage}) => {
     logger.info('Step: verifying Bulk Action dropdown enabled');
     await viewAccountPage.verifyBulkActionDropdownEnabled();
});

