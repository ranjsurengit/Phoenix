/*import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';

const { Given, When, Then } = createBdd(test);

When('User clicks on View Document link', async ({ viewDocumentPageObj }) => {
  await viewDocumentPageObj.ClickViewDocument();
});

Then('View Page is displayed with list of saved documents', async ({ viewDocumentPageObj }) => {
  await viewDocumentPageObj.SavedDocument();
});

Given('List of saved documents', async ({ viewDocumentPageObj }) => {
  await viewDocumentPageObj.SavedDocumentsSeen();
});

When('User clicks on one particular', async ({ viewDocumentPageObj }) => {
  await viewDocumentPageObj.ClickFirstDocument();
});

Then('Selected display count changes to one.', async ({ viewDocumentPageObj }) => {
  await viewDocumentPageObj.SelectedDisplayCount();
});*/

import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';
import logger from '../utils/logger.js'; // Import Winston logger

const { Given, When, Then } = createBdd(test);

When('User clicks on View Document link', async ({ viewDocumentPageObj }) => {
  logger.info('Step: User clicks on View Document link');
  await viewDocumentPageObj.ClickViewDocument();
  logger.info('Action: Clicked on View Document link successfully');
});

Then('View Page is displayed with list of saved documents', async ({ viewDocumentPageObj }) => {
  logger.info('Step: Verifying View Page is displayed with list of saved documents');
  await viewDocumentPageObj.SavedDocument();
  logger.info('Assertion: List of saved documents is displayed successfully');
});

Given('List of saved documents', async ({ viewDocumentPageObj }) => {
  logger.info('Step: Fetching list of saved documents');
  await viewDocumentPageObj.SavedDocumentsSeen();
  logger.info('Action: Saved documents loaded successfully');
});

When('User clicks on one particular', async ({ viewDocumentPageObj }) => {
  logger.info('Step: User clicks on a particular document');
  await viewDocumentPageObj.ClickFirstDocument();
  logger.info('Action: Clicked on first document');
});

Then('Selected display count changes to one.', async ({ viewDocumentPageObj }) => {
  logger.info('Step: Verifying selected display count changes to one');
  await viewDocumentPageObj.SelectedDisplayCount();
  logger.info('Assertion: Display count updated to one successfully');
});
