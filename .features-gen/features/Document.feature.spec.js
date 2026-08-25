// Generated from: features\Document.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('SuiteCRM Documents Management', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('User lands on the create document page', { tag: ['@document'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the home page banner'); 
    await When('User clicks on Create Document link'); 
    await Then('Create Page is displayed'); 
  });

  test('User clicks on upload', { tag: ['@document'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the Overview tab'); 
    await When('User uploads a file'); 
    await Then('File details are seen in the overview tab'); 
  });

  test('User clicks on save in Overview Tab', { tag: ['@document'] }, async ({ Given, When, Then }) => { 
    await Given('File details are uploaded'); 
    await When('User clicks on save'); 
    await Then('Document Revisions is visible'); 
  });

  test('User clicks on cancel in Overview Tab', { tag: ['@document'] }, async ({ Given, When, Then }) => { 
    await Given('File details are uploaded'); 
    await When('User clicks on  cancel'); 
    await Then('A pop up is visible with a message "You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?"'); 
  });

  test('User lands on the view document page', { tag: ['@document'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the home page banner'); 
    await When('User clicks on View Document link'); 
    await Then('View Page is displayed with list of saved documents'); 
  });

  test('User selects one document from the View Documents Page', { tag: ['@document'] }, async ({ Given, When, Then }) => { 
    await Given('List of saved documents'); 
    await When('User clicks on one particular'); 
    await Then('Selected display count changes to one.'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Document.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@document"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the home page banner","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User clicks on Create Document link","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Create Page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@document"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User is on the Overview tab","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User uploads a file","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then File details are seen in the overview tab","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":18,"tags":["@document"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given File details are uploaded","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks on save","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Document Revisions is visible","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":23,"tags":["@document"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given File details are uploaded","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clicks on  cancel","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then A pop up is visible with a message \"You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?\"","stepMatchArguments":[{"group":{"start":35,"value":"\"You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?\"","children":[{"start":36,"value":"You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":28,"tags":["@document"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given User is on the home page banner","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User clicks on View Document link","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then View Page is displayed with list of saved documents","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":33,"tags":["@document"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given List of saved documents","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User clicks on one particular","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Selected display count changes to one.","stepMatchArguments":[]}]},
]; // bdd-data-end