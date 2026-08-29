import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures.js';
import { readExcelData } from '../utils/excelUtils.js';

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
});

Then('User should see all fields on Create Lead page', async ({createLeadPageObj}) => {
  
    await createLeadPageObj.createFieldsVisibilityUI();
});

Then('User should see that editable fields are enabled', async ({createLeadPageObj}) => {

    await createLeadPageObj.createFieldsEditableUI();
  
});

Then('User should see the Save button on Create Lead page', async ({createLeadPageObj}) => {  // Step: Then User should see the Save button on Create Lead page

    await createLeadPageObj.saveButtonVisibilityUI();
  
});

Then('User should see the Save button on Create Lead page is Enabled', async ({createLeadPageObj}) => {

    await createLeadPageObj.saveButtonEnableUI();
  
});
