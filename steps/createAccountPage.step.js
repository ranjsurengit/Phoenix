import {expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixtures.js';
import { readExcelData } from '../utils/excelReader.js';

const { Given, When, Then } = createBdd(test);

// Read the Excel file 
const data = readExcelData('test-data/accountData.xlsx', 'Sheet1');


Given('user is on the create account page', async ({createAccountsPage}) => {
      await createAccountsPage.navigateToCreateAccountPage();
});

Then('user should see the create account form displayed', async ({createAccountsPage}) => {
     await createAccountsPage.verifyEmptyAccFormDisplayed();
});

When('user enters the mandatory fields along with optional details from {string}', async ({createAccountsPage,accountData},testCase) => {
     
     // Find the specific row for this test
     const excelData = data.find(row => row.TestCase_ID === testCase);

     console.log('Test Case', testCase);
     console.log('Excel Data', excelData);

     // Put the data into the empty fixture
     Object.assign(accountData, excelData);

     // Fill out the form by passing the whole object
    await createAccountsPage.fillCreateAccount(accountData); 
    await createAccountsPage.clickSaveButton();
     
});

Then('user should see the details page of the created account', async ({createAccountsPage}) => {

    await createAccountsPage.verifycreatedAccountDetails();
});

When('user submit account form with empty account name from {string}', async ({createAccountsPage,accountData},testCase) => {
    
     // Find the specific row for this test
     const excelData = data.find(row => row.TestCase_ID === testCase);

     console.log('Test Case', testCase);
     console.log('Excel Data', excelData);

     // Put the data into the empty fixture
     Object.assign(accountData, excelData);

     // Fill out the form by passing the whole object
    await createAccountsPage.fillCreateAccount(accountData); 
    await createAccountsPage.clickSaveButton();
});


Then('user should see error message is displayed', async ({createAccountsPage}) => {
  await createAccountsPage.verifyErrorMessageForInvalidAccount();
});

