// Generated from: features\importAccount.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Account Import Page', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('verify import accounts page title is displayed', { tag: ['@importAccount', '@ui'] }, async ({ When, Then, importAccountPage }) => { 
    await When('user navigates to the Import Account page', null, { importAccountPage }); 
    await Then('user should see page title displayed', null, { importAccountPage }); 
  });

  test('Upload file field is displayed on the import page', { tag: ['@importAccount', '@ui'] }, async ({ Given, Then, importAccountPage }) => { 
    await Given('user is on the upload Import file page', null, { importAccountPage }); 
    await Then('user should see the file upload field displayed', null, { importAccountPage }); 
  });

  test('Create new records option is displayed on the import page', { tag: ['@importAccount', '@ui'] }, async ({ Given, Then, importAccountPage }) => { 
    await Given('user is on the upload Import file page', null, { importAccountPage }); 
    await Then('user should see the Create new records option displayed', null, { importAccountPage }); 
  });

  test('Upload file with Create new records only option', { tag: ['@importAccount', '@positive'] }, async ({ Given, When, Then, importAccountPage }) => { 
    await Given('user is on the upload Import file page', null, { importAccountPage }); 
    await When('user upload the file "Accounts.csv" with "Create new records" only option', null, { importAccountPage }); 
    await Then('user should see Confirm Import File Properties page', null, { importAccountPage }); 
  });

  test('Next is not possible without choosing a file', { tag: ['@importAccount', '@negative'] }, async ({ Given, When, Then, importAccountPage }) => { 
    await Given('user is on the upload Import file page', null, { importAccountPage }); 
    await When('user clicks the Next button without selecting a file', null, { importAccountPage }); 
    await Then('user should stay on the upload Import file page', null, { importAccountPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\importAccount.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@importAccount","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user navigates to the Import Account page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user should see page title displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@importAccount","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given user is on the upload Import file page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user should see the file upload field displayed","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@importAccount","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given user is on the upload Import file page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then user should see the Create new records option displayed","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":23,"tags":["@importAccount","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given user is on the upload Import file page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When user upload the file \"Accounts.csv\" with \"Create new records\" only option","stepMatchArguments":[{"group":{"start":21,"value":"\"Accounts.csv\"","children":[{"start":22,"value":"Accounts.csv","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Create new records\"","children":[{"start":42,"value":"Create new records","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then user should see Confirm Import File Properties page","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":29,"tags":["@importAccount","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given user is on the upload Import file page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When user clicks the Next button without selecting a file","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then user should stay on the upload Import file page","stepMatchArguments":[]}]},
]; // bdd-data-end