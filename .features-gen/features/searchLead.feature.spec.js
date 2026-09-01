// Generated from: features\searchLead.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Search a Lead record', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('Verify that the Search Textbox is Visible', async ({ Given, Then, searchLeadPageObj }) => { 
    await Given('User is on the Home page of the application', null, { searchLeadPageObj }); 
    await Then('User should see Search Textbox', null, { searchLeadPageObj }); 
  });

  test('Verify that the Search Textbox is Editable', async ({ Given, Then, searchLeadPageObj }) => { 
    await Given('User is on the Home page of the application', null, { searchLeadPageObj }); 
    await Then('User should be able to edit the Search Textbox', null, { searchLeadPageObj }); 
  });

  test('Verify that the user is able to search a Lead record with FirstName and LastName', async ({ Given, When, Then, searchData, searchLeadPageObj }) => { 
    await Given('User is on the Home page of the application', null, { searchLeadPageObj }); 
    await When('User searches for a Lead record with "searchPositive"', null, { searchData, searchLeadPageObj }); 
    await Then('User should see the lead record on results page under Leads Grid', null, { searchData, searchLeadPageObj }); 
  });

  test('Verify that the user is not able see a record that doesn\'t exist', async ({ Given, When, Then, searchData, searchLeadPageObj }) => { 
    await Given('User is on the Home page of the application', null, { searchLeadPageObj }); 
    await When('User searches for a Lead record with "searchNegative"', null, { searchData, searchLeadPageObj }); 
    await Then('User should see the message "No results matching your search criteria"', null, { searchLeadPageObj }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\searchLead.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is on the Home page of the application","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should see Search Textbox","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on the Home page of the application","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should be able to edit the Search Textbox","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User is on the Home page of the application","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User searches for a Lead record with \"searchPositive\"","stepMatchArguments":[{"group":{"start":37,"value":"\"searchPositive\"","children":[{"start":38,"value":"searchPositive","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then User should see the lead record on results page under Leads Grid","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is on the Home page of the application","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User searches for a Lead record with \"searchNegative\"","stepMatchArguments":[{"group":{"start":37,"value":"\"searchNegative\"","children":[{"start":38,"value":"searchNegative","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User should see the message \"No results matching your search criteria\"","stepMatchArguments":[{"group":{"start":28,"value":"\"No results matching your search criteria\"","children":[{"start":29,"value":"No results matching your search criteria","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end