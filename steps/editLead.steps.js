import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';
import editLeadData from '../test-data/editLeadData.json' with { type: 'json' };
const logger = require('../utils/logger');

const { Given, When, Then } = createBdd(test);

Given('User has an existing {string} opened', async ({editLeadPageObj,searchLeadPageObj,editData}, searchType) => {
  try {
  logger.info("Entering record name to search...");
  const testData = editLeadData[searchType];
  Object.assign(editData,testData);
  await searchLeadPageObj.performSearch(editData.FIRST_NAME, editData.LAST_NAME);
  await searchLeadPageObj.clickSearchedRecord(editData.FIRST_NAME, editData.LAST_NAME);

  logger.info("Search performed successfully.");

} catch (error) {
  logger.error(`Failed to perform search. Error: ${error.message}`);
  
  throw error; 
}

});

Then('User should see the Edit button', async ({editLeadPageObj}) => {
  
    await editLeadPageObj.verifyEditButtonVisisbility();
});

Then('User should be able to click the Edit button', async ({editLeadPageObj}) => {
  
    await editLeadPageObj.verifyEditButtonEnabled();
});

Then('User should see the Actions dropdown', async ({editLeadPageObj}) => {
  
    await editLeadPageObj.verifyActionsVisibility();
});

Then('User should be able to click the Actions dropdown', async ({editLeadPageObj}) => {
  
    await editLeadPageObj.verifyActionsEnabled();
});

Given('User has an existing lead record to update its {string}', async ({editLeadPageObj,searchLeadPageObj,editData}, fieldToUpdate) => {
  try {
  logger.info("Entering record name to search...");
  const testData = editLeadData[fieldToUpdate];
  Object.assign(editData,testData);
  await searchLeadPageObj.performSearch(editData.FIRST_NAME, editData.LAST_NAME);
  await searchLeadPageObj.clickSearchedRecord(editData.FIRST_NAME, editData.LAST_NAME);

  logger.info("Search performed successfully.");

} catch (error) {
  logger.error(`Failed to perform search. Error: ${error.message}`);
  
  throw error; 
}
});

When('User updates the Status', async ({editLeadPageObj,editData}) => {

    await editLeadPageObj.clickEditButton();
    await editLeadPageObj.clickMoreInfo();
    logger.info("Status value passed to function: ")
    logger.info(editData.UpdateStatus);
    await editLeadPageObj.updateStatus(editData.UpdateStatus);
    await editLeadPageObj.clickSaveButton();

});

Then('User should see the Status updated successfully', async ({editLeadPageObj,editData}) => {

    await editLeadPageObj.checkOverview();
    await editLeadPageObj.clickMoreInfo();
    await editLeadPageObj.verifyStatus(editData.UpdateStatus);

});

Given('User has an existing lead record to update its {string} field', async ({editLeadPageObj,searchLeadPageObj,editData}, fieldToUpdate) => {
  try {
  logger.info("Entering record name to search...");
  const testData = editLeadData[fieldToUpdate];
  Object.assign(editData,testData);
  logger.info(editData);
  logger.info("Mobile value passed to function: ")
  logger.info(editData.NewValue);
  await searchLeadPageObj.performSearch(editData.FIRST_NAME, editData.LAST_NAME);
  await searchLeadPageObj.clickSearchedRecord(editData.FIRST_NAME, editData.LAST_NAME);

  logger.info("Search performed successfully.");

} catch (error) {
  logger.error(`Failed to perform search. Error: ${error.message}`);
  
  throw error; 
}
});

When('User updates the Mobile field', async ({editLeadPageObj,editData}) => {

    await editLeadPageObj.clickEditButton();
    await editLeadPageObj.updateMobile(editData.UpdateMobile);
    await editLeadPageObj.clickSaveButton();

});

Then('User should see the Mobile field updated successfully', async ({editLeadPageObj,editData}) => {
  
    await editLeadPageObj.verifyMobile(editData.UpdateMobile);
});