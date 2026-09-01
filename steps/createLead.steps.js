import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';
import { readExcelData } from '../utils/excelUtils.js';
import logger from '../utils/logger.js';
const { Given, When, Then } = createBdd(test);
const data = readExcelData('testDataLeads.xlsx', 'CreateLead');


Given('User is on the Create Lead page opened from Leads Menu bar', async ({ createLeadPageObj }) => {
    await createLeadPageObj.gotoCreateLead();
});

When('User enters valid details from Excel file for {string}', async ({ createLeadPageObj,leadData }, testCase) => {
    

    const excelData = data.find(row => row.TestCaseId === testCase);
    console.log('Test Case:',testCase);
    console.log('Lead data :', excelData);
    console.log('Last Name: ', excelData.LastName);
    Object.assign(leadData,excelData);
    console.log('Last Name: ', leadData.LastName);
    await createLeadPageObj.fillCreateLead(leadData);
    await createLeadPageObj.clickSaveButton();
});

Then('User should see the details page of the newly created Lead entry', async ({ createLeadPageObj,leadData }) => {
   
    await createLeadPageObj.verifyNewLeadName(leadData);
    logger.info("New lead created successfully");

});

When('User enters details without a mandatory field from Excel file for {string}', async ({ createLeadPageObj,leadData,page }, testCase) => {

    const excelData = data.find(row => row.TestCaseId === testCase);
    console.log('Test Case:',testCase);
    console.log('Last Name: ', excelData.LastName);
    Object.assign(leadData,excelData);
    console.log('Lead data :', leadData);
    console.log('Last Name: ', leadData.LastName);
    await createLeadPageObj.fillCreateLead(leadData);
    await createLeadPageObj.clickSaveButton();
    
});

Then('User should see the validation error message along with no New lead created', async ({ page }) => {

await expect(page.getByRole('alert')).toContainText('There are validation errors, unable to perform action.');
logger.info("Verified validation error message");
});

Then('User should see all fields on Create Lead page', async ({createLeadPageObj}) => {
  
    await createLeadPageObj.createFieldsVisibilityUI();
    logger.info("All fields are visible");
});

Then('User should see that editable fields are enabled', async ({createLeadPageObj}) => {

    await createLeadPageObj.createFieldsEditableUI();
    logger.info("All fields are enabled");
  
});

Then('User should see the Save button on Create Lead page', async ({createLeadPageObj}) => {  // Step: Then User should see the Save button on Create Lead page

    await createLeadPageObj.saveButtonVisibilityUI();
    logger.info("Save button is visible");
  
});

Then('User should see the Save button on Create Lead page is Enabled', async ({createLeadPageObj}) => {

    await createLeadPageObj.saveButtonEnableUI();
    logger.info("Save button is enabled");
  
});
