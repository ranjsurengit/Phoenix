import { createBdd } from 'playwright-bdd';
import { readExcelData } from '../utils/excelUtils.js';
import { test } from '../fixtures/fixtures.js';

const { Given, When, Then, Before} = createBdd(test);
const dataValue1 = readExcelData('quotes_testdata.xlsx', 'quotes');


Given('user is on the create quote page opened from quotes menubar', async ({quotePageOb}) => {
  await quotePageOb.createQuote();
});

Then('user verify the quote creation form is displayed', async ({quotePageOb}) => {
  await quotePageOb.validateCreateQuoteForm();
});

// Given('user is on the create quote page opened from quotes menubar', async ({page}) => {
//  await suitecrm.createQuote();
//  await suitecrm.verifyCreateQuoteForm();   
// });

When('user enter the required field details from excel file {string}', async ({quotePageOb,quoteData,page}, testCase) => {
  const excelData = dataValue1.find(row => row.TestCase_ID === testCase);
    console.log('dataValue1', dataValue1);
    console.log('Test Case:',testCase);
    console.log('Excel data :', excelData);
    //console.log('Last Name: ', excelData.LastName);
    Object.assign(quoteData,excelData);
    //console.log('Last Name: ', leadData.LastName);
    await quotePageOb.fillQuoteForm(quoteData);
    await quotePageOb.clickSaveButton();

});

// When('user enter the required field details from following examples:', async ({page}, dataTable) => {
//    await suitecrm.fillQuoteForm(dataTable);  
//    await suitecrm.click_Save_Btn('SAVE');
// });

Then('user should see the new quote summary', async ({quotePageOb,quoteData}) => {
  await quotePageOb.newQuoteSummary(quoteData);
});

When('User save quotes form without filling title details from Excel file {string}', async ({quotePageOb,quoteData,page}, testCase) => {
  const excelData = dataValue1.find(row => row.TestCase_ID === testCase);
    console.log('dataValue1', dataValue1);
    console.log('Test Case:',testCase);
    console.log('Excel data :', excelData);
    //console.log('Last Name: ', excelData.LastName);
    Object.assign(quoteData,excelData);
    //console.log('Last Name: ', leadData.LastName);
    await quotePageOb.fillQuoteForm(quoteData);
    await quotePageOb.clickSaveButton('SAVE');

});

Then('user should see an error message {string}', async ({quotePageOb}, expectedMessage) => {
  await quotePageOb.verifyErrorMessage(expectedMessage);
 
});

Then('User should see that editable fields on create Quotes page are enabled', async ({quotePageOb}) => {
   await quotePageOb.createFieldsEditable();
});

Then('User should see the Save button on Create Quotes page', async ({quotePageOb}) => {
    await quotePageOb.saveButtonVisibility('SAVE');
  
});

Then('User should see the Save button on Create Quotes page is Enabled', async ({quotePageOb}) => {
    await quotePageOb.saveButtonEnable('SAVE');
});

