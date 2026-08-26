import {expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixtures.js';
import path from 'path';
import { ImportAccountPage } from '../pages/importAccountPage.js';


const { Given, When, Then } = createBdd(test);

When('user navigates to the Import Account page', async ({importAccountPage}) => {
     await importAccountPage.navigateToImportAccountPage();
});

Then('user should see page title displayed', async ({importAccountPage}) => {
     await importAccountPage.verifyImportPageTitle();
});

Given('user is on the upload Import file page', async ({importAccountPage}) => {
    await importAccountPage.navigateToImportAccountPage();
    await importAccountPage.verifyImportPageTitle();
});

When('user upload the file {string} with {string} only option', async ({importAccountPage}, fileName, option) => {
     const filePath = path.join(process.cwd(),'test-data',fileName); 
     await importAccountPage.chooseFileToUpload(filePath);  
     await importAccountPage.chooseCreateNewRecord();
     await importAccountPage.clickNextBtn();

});

Then('user should see Confirm Import File Properties page', async ({importAccountPage}) => {
    await importAccountPage.verifyNextStepOfImportPage();
});