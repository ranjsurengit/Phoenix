import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';
import searchLeadData from '../test-data/searchLeadData.json' with { type: 'json' };
import logger from '../utils/logger.js';

const { Given, When, Then } = createBdd(test);

/*Given('User should have logged into Suite CRM application', async ({ loginPageObj }) => {
    await loginPageObj.launchApp();
    await loginPageObj.loginUser();
});*/

Given('User is on the Home page of the application', async ({searchLeadPageObj}) => {

  logger.info("Checking for Home page...");
  await searchLeadPageObj.clickHomeIcon();
  
});

Then('User should see Search Textbox', async ({searchLeadPageObj}) => {

  logger.info("Checking for Search box visibility...");
  await searchLeadPageObj.searchFieldVisibilityUI();
  
});

Then('User should be able to edit the Search Textbox', async ({searchLeadPageObj}) => {

  logger.info("Checking if Search box is Editable...")
  await searchLeadPageObj.searchFieldEditableUI();
  
});

When('User searches for a Lead record with {string}', async ({searchLeadPageObj,searchData}, searchType) => {

  try {
  logger.info("Entering record name to search...");
  const testData = searchLeadData[searchType];
  Object.assign(searchData,testData);
  await searchLeadPageObj.performSearch(searchData.FIRST_NAME, searchData.LAST_NAME);

  logger.info("Search performed successfully.");

} catch (error) {
  logger.error(`Failed to perform search. Error: ${error.message}`);
  
  throw error; 
}

});

Then('User should see the lead record on results page under Leads Grid', async ({searchLeadPageObj,searchData}) => {

  try {
  logger.info("Checking if record is displayed...");
  await searchLeadPageObj.checkLeadsgridVisibility(searchData.FIRST_NAME, searchData.LAST_NAME);
  logger.info("Record is successfully displayed in the grid.");

} catch (error) 
{
  logger.error(`The record was not displayed. Error: ${error.message}`);
  throw error; 
}
  /*logger.info("Checking if record is displayed..");
  await searchLeadPageObj.checkLeadsgridVisibility();*/
});

Then('User should see the message {string}', async ({searchLeadPageObj}, arg) => {

  try{

  logger.info("Checking if error message is displayed...");
  await searchLeadPageObj.noResultsVisibility();
  logger.info("Error message is displayed");
  }
  catch(error)
  {
    logger.error(`Error message wasnt displayed. Error: ${error.message}`);
    throw error;
  }
  
  
});