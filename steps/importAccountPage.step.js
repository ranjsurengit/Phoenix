import {expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixtures.js';
import path from 'path';


const { Given, When, Then } = createBdd(test);

Given('user navigates to the Import Account page', async ({importAccountPage}) => {
    await importAccountPage.navigateToImportAccountPage();
});


Given('user is on the Step1 of upload Import file page', async ({importAccountPage}) => {
    await importAccountPage.verifyStep1OfImportFilePage();
});

When('user upload the file {string}', async ({importAccountPage}, fileName ) => {
  // process.cwd() finds path to the main project folder
    const filePath = path.join(process.cwd(),'test-data',fileName); 
    await importAccountPage.chooseFileToUpload(filePath);  
      
});

When('user selects the Create new records only option', async ({importAccountPage}) => {
    await importAccountPage.chooseCreateNewRecord();
});

When('user clicks the Next button', async ({importAccountPage}) => {
    await importAccountPage.clickNextBtn();
});

Then('user should see Step2 of Confirm Import File Properties', async ({importAccountPage}) => {
    await importAccountPage.verifyStep2OfImportFilePage();
});
