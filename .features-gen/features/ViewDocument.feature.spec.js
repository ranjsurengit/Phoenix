// Generated from: features\ViewDocument.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('View Documents', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('User lands on the view document page', { tag: ['@viewdocument', '@viewdocumentUI'] }, async ({ Given, When, Then, createDocumentPageObj, viewDocumentPageObj }) => { 
    await Given('User is on the home page banner', null, { createDocumentPageObj }); 
    await When('User clicks on View Document link', null, { viewDocumentPageObj }); 
    await Then('View Page is displayed with list of saved documents', null, { viewDocumentPageObj }); 
  });

  test('User selects one document from the View Documents Page', { tag: ['@viewdocument', '@viewdocumentfunctionality'] }, async ({ Given, When, Then, viewDocumentPageObj }) => { 
    await Given('List of saved documents', null, { viewDocumentPageObj }); 
    await When('User clicks on one particular', null, { viewDocumentPageObj }); 
    await Then('Selected display count changes to one.', null, { viewDocumentPageObj }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\ViewDocument.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@viewdocument","@viewdocumentUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on the home page banner","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on View Document link","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then View Page is displayed with list of saved documents","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":15,"tags":["@viewdocument","@viewdocumentfunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given List of saved documents","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User clicks on one particular","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Selected display count changes to one.","stepMatchArguments":[]}]},
]; // bdd-data-end