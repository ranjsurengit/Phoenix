import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures.js';

const { Given, When, Then } = createBdd(test);

Given('User is on the home page banner', async ({}) => {
  // Step: Given User is on the home page banner
  // From: features\Document.feature:9:5
});

When('User clicks on Create Document link', async ({}) => {
  // Step: When User clicks on Create Document link
  // From: features\Document.feature:10:5
});

Then('Create Page is displayed', async ({}) => {
  // Step: Then Create Page is displayed
  // From: features\Document.feature:11:5
});

Given('User is on the Overview tab', async ({}) => {
  // Step: Given User is on the Overview tab
  // From: features\Document.feature:14:5
});

When('User uploads a file', async ({}) => {
  // Step: When User uploads a file
  // From: features\Document.feature:15:5
});

Then('File details are seen in the overview tab', async ({}) => {
  // Step: Then File details are seen in the overview tab
  // From: features\Document.feature:16:5
});

Given('File details are uploaded', async ({}) => {
  // Step: Given File details are uploaded
  // From: features\Document.feature:19:5
});

When('User clicks on save', async ({}) => {
  // Step: When User clicks on save
  // From: features\Document.feature:20:5
});

Then('Document Revisions is visible', async ({}) => {
  // Step: Then Document Revisions is visible
  // From: features\Document.feature:21:5
});

When('User clicks on  cancel', async ({}) => {
  // Step: When User clicks on  cancel
  // From: features\Document.feature:25:5
});

Then('A pop up is visible with a message {string}', async ({}, arg) => {
  // Step: Then A pop up is visible with a message "You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?"
  // From: features\Document.feature:26:5
});

When('User clicks on View Document link', async ({}) => {
  // Step: When User clicks on View Document link
  // From: features\Document.feature:30:5
});

Then('View Page is displayed with list of saved documents', async ({}) => {
  // Step: Then View Page is displayed with list of saved documents
  // From: features\Document.feature:31:5
});

Given('List of saved documents', async ({}) => {
  // Step: Given List of saved documents
  // From: features\Document.feature:34:5
});

When('User clicks on one particular', async ({}) => {
  // Step: When User clicks on one particular
  // From: features\Document.feature:35:5
});

Then('Selected display count changes to one.', async ({}) => {
  // Step: Then Selected display count changes to one.
  // From: features\Document.feature:36:5
});
