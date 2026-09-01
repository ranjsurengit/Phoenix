import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures.js';
import logger from '../utils/logger.js';

const { Given, When, Then } = createBdd(test);

When('user is on the create contact page', async ({contactPage}) => {
    logger.info('Step: navigating to create contact page');
    await contactPage.navigateToCreateContactPage();
});

Then('user should see the empty contact form displayed', async ({contactPage}) => {
    logger.info('Step: verifying empty contact form');
    await contactPage.verifyEmptyContactFormDisplayed();
});

Given('user is on the contact list view page', async ({contactPage}) => {
    logger.info('Step: navigating to contact list view page');
    await contactPage.navigateToViewContactPage();
});

When('user click on the contact name {string}', async ({contactPage}, name) => {
    logger.info(`Step: clicking contact name "${name}"`);
    await contactPage.clickContactName(name);
});

Then('user should see details page for that contact {string}', async ({contactPage}, name) => {
    logger.info(`Step: verifying contact details page for "${name}"`);
    await contactPage.verifySelectedContactDetailsPage(name);
});


Given('the contact list is displayed with records', async ({contactPage}) => {
    logger.info('Step: loading contact list with records');
    await contactPage.navigateToViewContactPage();
    await contactPage.verifyContactListDisplayed();
});

When('user searches for the contact {string}', async ({contactPage}, name) => {
    logger.info(`Step: searching for contact "${name}"`);
    await contactPage.searchContact(name);
});

Then('the contact list should only show contacts matching {string}', async ({contactPage}, name) => {
    logger.info(`Step: verifying search results match "${name}"`);
    await contactPage.verifySearchResults(name);
});

When('user clicks the cancel button', async ({contactPage}) => {
    logger.info('Step: clicking cancel button');
    await contactPage.clickCancelButton();
});

Then('user should see the contact page title', async ({contactPage}) => {
    logger.info('Step: verifying contact page title');
    await contactPage.verifyViewContactPageTitle();
});

Then('user should see the total number of contacts displayed', async ({contactPage}) => {
    logger.info('Step: verifying contact record count');
    await contactPage.verifyContactRecordCountDisplayed();
});

When('user clicks the check box to select a contact', async ({contactPage}) => {
    logger.info('Step: selecting a contact checkbox');
    await contactPage.clickSelectContact();
});

Then('user should see the contact Bulk Action dropdown is enabled', async ({contactPage}) => {
    logger.info('Step: verifying Bulk Action dropdown enabled');
    await contactPage.verifyBulkActionDropdownEnabled();


});
