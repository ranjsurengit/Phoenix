import { createBdd } from 'playwright-bdd';
import { readExcelData } from '../utils/excelUtils.js';
import { test } from '../fixtures/fixtures.js';

const { Given, When, Then, Before} = createBdd(test);
const dataValue = readExcelData('call_testdata.xlsx', 'Sheet1');

Given('user is on Schedule call Opened from Calendar menuBar', async ({callPageOb}) => {
  await callPageOb.createscheduleCall();
});

Then('I verify the Schedule call form is displayed', async ({callPageOb}) => {
  await callPageOb.validateScheduleCallForm();
});

When('User entered required details from Excel file {string}', async ({callPageOb,callData,page}, testCase) => {
 const excelData = dataValue.find(row => row.TestCase_ID === testCase);
    console.log('dataValue', dataValue);
    console.log('Test Case:',testCase);
    console.log('Excel data :', excelData);
    //console.log('Last Name: ', excelData.LastName);
    Object.assign(callData,excelData);
    //console.log('Last Name: ', leadData.LastName);
    await callPageOb.fillScheduleCallForm(callData);
    await callPageOb.clickSaveButton();

});

Then('User should see the new Schedule call Page', async ({callPageOb,callData}) => {
  await callPageOb.verifyScheduleCall(callData);  
});

When('User save schedule call form without filling subject details from Excel file {string}', async ({callPageOb,callData,page},testcase ) => {
 const excelData = dataValue.find(row => row.TestCase_ID === testcase);
     console.log('dataValue', dataValue);
     console.log('Test Case', testcase);
     console.log('Excel Data', excelData);

     // Put the data into the empty fixture
     Object.assign(callData, excelData);

     // Fill out the form by passing the whole object
    await callPageOb.fillScheduleCallForm(callData); 
    await callPageOb.clickSaveButton();
});

Then('User should see an error message {string}', async ({callPageOb}, expectedMessage) => {
   await callPageOb.verifyErrorMessage(expectedMessage);
});
// Then('user should see an error message {string}', async ({}, expectedMessage) => {
//   await suitecrm.verifyErrorMessage(expectedMessage);
 
// });
