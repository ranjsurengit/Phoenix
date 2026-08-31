// Generated from: features\CreateDocument.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Create Documents', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('User lands on the create document page', { tag: ['@createdocument', '@CreateDocumentUI1'] }, async ({ Given, When, Then, createDocumentPageObj }) => { 
    await Given('User is on the home page banner', null, { createDocumentPageObj }); 
    await When('User clicks on Create Document link', null, { createDocumentPageObj }); 
    await Then('Create Page is displayed', null, { createDocumentPageObj }); 
  });

  test('User clicks on upload', { tag: ['@createdocument', '@CreateDocumentFlow'] }, async ({ Given, When, Then, createDocumentPageObj }) => { 
    await Given('User is on the Overview tab', null, { createDocumentPageObj }); 
    await When('User uploads a file', null, { createDocumentPageObj }); 
    await Then('File details are seen in the overview tab', null, { createDocumentPageObj }); 
  });

  test('User clicks on save in Overview Tab', { tag: ['@createdocument', '@CreateDocumentUI'] }, async ({ Given, When, Then, createDocumentPageObj }) => { 
    await Given('File details are uploaded', null, { createDocumentPageObj }); 
    await When('User clicks on save', null, { createDocumentPageObj }); 
    await Then('Document Revisions are seen below', null, { createDocumentPageObj }); 
  });

  test('User clicks on cancel in Overview Tab', { tag: ['@createdocument', '@CreateDocumentFlow'] }, async ({ Given, When, Then, createDocumentPageObj }) => { 
    await Given('File details are uploaded', null, { createDocumentPageObj }); 
    await When('User clicks on  cancel', null, { createDocumentPageObj }); 
    await Then('A pop up is visible with a message "You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?"', null, { createDocumentPageObj }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('before', {  }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\CreateDocument.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@createdocument","@CreateDocumentUI1"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on the home page banner","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Create Document link","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Create Page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":15,"tags":["@createdocument","@CreateDocumentFlow"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User is on the Overview tab","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User uploads a file","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then File details are seen in the overview tab","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":21,"tags":["@createdocument","@CreateDocumentUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given File details are uploaded","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks on save","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Document Revisions are seen below","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":27,"tags":["@createdocument","@CreateDocumentFlow"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given File details are uploaded","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When User clicks on  cancel","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then A pop up is visible with a message \"You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?\"","stepMatchArguments":[{"group":{"start":35,"value":"\"You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?\"","children":[{"start":36,"value":"You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end