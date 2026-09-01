import {expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixtures.js';
import path from 'path';
import logger from '../utils/logger.js';


const { Given, When, Then } = createBdd(test);

When('user navigates to the Import Account page', async ({importAccountPage}) => {
     logger.info('Step: navigating to Import Account page');
     await importAccountPage.navigateToImportAccountPage();
});

Then('user should see page title displayed', async ({importAccountPage}) => {
     logger.info('Step: verifying import page title');
     await importAccountPage.verifyImportPageTitle();
});

Given('user is on the upload Import file page', async ({importAccountPage}) => {
    logger.info('Step: opening upload Import file page');
    await importAccountPage.navigateToImportAccountPage();
    await importAccountPage.verifyImportPageTitle();
});

Then('user should see the file upload field displayed', async ({importAccountPage}) => {
     logger.info('Step: verifying file upload field');
     await importAccountPage.verifyUploadFileFieldDisplayed();
});

Then('user should see the Create new records option displayed', async ({importAccountPage}) => {
     logger.info('Step: verifying Create new records option');
     await importAccountPage.verifyCreateNewRecordOptionDisplayed();
});

When('user upload the file {string} with {string} only option', async ({importAccountPage}, fileName, option) => {
     logger.info(`Step: uploading file "${fileName}" with option "${option}"`);
     const filePath = path.join(process.cwd(),'test-data',fileName);
     await importAccountPage.chooseFileToUpload(filePath);
     await importAccountPage.chooseCreateNewRecord();
     await importAccountPage.clickNextBtn();
});

Then('user should see Confirm Import File Properties page', async ({importAccountPage}) => {
    logger.info('Step: verifying Confirm Import File Properties page');
    await importAccountPage.verifyNextStepOfImportPage();
});

When('user clicks the Next button without selecting a file', async ({importAccountPage}) => {
     logger.info('Step: clicking Next without selecting a file');
     await importAccountPage.clickNextBtn();
});

Then('user should stay on the upload Import file page', async ({importAccountPage}) => {
     logger.info('Step: verifying user stayed on upload page');
     await importAccountPage.verifyStillOnUploadImportFilePage();
});
