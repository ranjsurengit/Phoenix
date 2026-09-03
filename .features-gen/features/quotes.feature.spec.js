// Generated from: features\quotes.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Create Quote functionality', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('verify Quote form displayed', { tag: ['@quotes', '@UIValidation'] }, async ({ Given, Then, quotePageOb }) => { 
    await Given('user is on the create quote page opened from quotes menubar', null, { quotePageOb }); 
    await Then('user verify the quote creation form is displayed', null, { quotePageOb }); 
  });

  test('verify user successfully creates a new quotes', { tag: ['@quotes', '@positive'] }, async ({ Given, When, Then, page, quoteData, quotePageOb }) => { 
    await Given('user is on the create quote page opened from quotes menubar', null, { quotePageOb }); 
    await When('user enter the required field details from excel file "Test_01"', null, { page, quoteData, quotePageOb }); 
    await Then('user should see the new quote summary', null, { quoteData, quotePageOb }); 
  });

  test('User cannot create a quote when one required fields are empty', { tag: ['@quotes', '@negative'] }, async ({ Given, When, Then, page, quoteData, quotePageOb }) => { 
    await Given('user is on the create quote page opened from quotes menubar', null, { quotePageOb }); 
    await When('User save quotes form without filling title details from Excel file "Test_02"', null, { page, quoteData, quotePageOb }); 
    await Then('user should see an error message "Missing required field: Title"', null, { quotePageOb }); 
  });

  test('Verify that all the fields are editable on Create Quotes page', { tag: ['@quotes', '@UIValidation'] }, async ({ Given, Then, quotePageOb }) => { 
    await Given('user is on the create quote page opened from quotes menubar', null, { quotePageOb }); 
    await Then('User should see that editable fields on create Quotes page are enabled', null, { quotePageOb }); 
  });

  test('Verify that Save button on Create Quotes page is Visible', { tag: ['@quotes', '@UIValidation'] }, async ({ Given, Then, quotePageOb }) => { 
    await Given('user is on the create quote page opened from quotes menubar', null, { quotePageOb }); 
    await Then('User should see the Save button on Create Quotes page', null, { quotePageOb }); 
  });

  test('Verify that Save button on Create Quotes page is Enabled', { tag: ['@quotes', '@UIValidation'] }, async ({ Given, Then, quotePageOb }) => { 
    await Given('user is on the create quote page opened from quotes menubar', null, { quotePageOb }); 
    await Then('User should see the Save button on Create Quotes page is Enabled', null, { quotePageOb }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\quotes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@quotes","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given user is on the create quote page opened from quotes menubar","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user verify the quote creation form is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":15,"tags":["@quotes","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given user is on the create quote page opened from quotes menubar","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When user enter the required field details from excel file \"Test_01\"","stepMatchArguments":[{"group":{"start":54,"value":"\"Test_01\"","children":[{"start":55,"value":"Test_01","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then user should see the new quote summary","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":21,"tags":["@quotes","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given user is on the create quote page opened from quotes menubar","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User save quotes form without filling title details from Excel file \"Test_02\"","stepMatchArguments":[{"group":{"start":68,"value":"\"Test_02\"","children":[{"start":69,"value":"Test_02","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then user should see an error message \"Missing required field: Title\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Missing required field: Title\"","children":[{"start":34,"value":"Missing required field: Title","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":28,"tags":["@quotes","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given user is on the create quote page opened from quotes menubar","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see that editable fields on create Quotes page are enabled","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":33,"tags":["@quotes","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given user is on the create quote page opened from quotes menubar","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then User should see the Save button on Create Quotes page","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":38,"tags":["@quotes","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given user is on the create quote page opened from quotes menubar","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User should see the Save button on Create Quotes page is Enabled","stepMatchArguments":[]}]},
]; // bdd-data-end