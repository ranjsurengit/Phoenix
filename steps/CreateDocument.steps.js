import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';

const { Given, When, Then } = createBdd(test);

Given('User is on the home page banner', async ({ createDocumentPageObj }) => {
  await createDocumentPageObj.UseronHomePage();
});

When('User clicks on Create Document link', async ({ createDocumentPageObj }) => {
  await createDocumentPageObj.ClickCreateDocument();
});

Then('Create Page is displayed', async ({ createDocumentPageObj }) => {
  await expect(createDocumentPageObj.ViewCreateDocument()).toBeVisible({ timeout: 80000 });;
});

Given('User is on the Overview tab', async ({ createDocumentPageObj }) => {
  await createDocumentPageObj.UseronHomePage();
  await createDocumentPageObj.ClickCreateDocument();
  await expect(createDocumentPageObj.OverviewTab()).toBeVisible({ timeout: 80000 });
});

When('User uploads a file', async ({ createDocumentPageObj }) => {
  await createDocumentPageObj.UploadDocument();
});

Then('File details are seen in the overview tab', async ({ createDocumentPageObj }) => {
  await createDocumentPageObj.validateFileDetails();
});

Given('File details are uploaded', async ({ createDocumentPageObj }) => {
  await createDocumentPageObj.setupDocumentWithUpload();
  await createDocumentPageObj.validateFileDetails();
});


When('User clicks on save', async ({ createDocumentPageObj }) => {
  await createDocumentPageObj.ClickSave();
});

Then('Document Revisions are seen below', async ({ createDocumentPageObj }) => {
  await expect(createDocumentPageObj.DocumentRevisions()).toBeVisible({ timeout: 80000 });
});

When('User clicks on  cancel', async ({ createDocumentPageObj }) => {
  await createDocumentPageObj.ClickCancel();
});

Then('A pop up is visible with a message {string}', async ({ createDocumentPageObj }, arg) => {
  const popupLocator = createDocumentPageObj.ViewPopupMessage(arg);
  await expect(popupLocator).toBeVisible({ timeout: 80000 });
  await expect(popupLocator).toContainText(arg);
  await createDocumentPageObj.ClickOkonPopup();
});
