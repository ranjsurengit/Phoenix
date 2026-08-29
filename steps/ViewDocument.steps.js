import { createBdd } from 'playwright-bdd';
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
});
