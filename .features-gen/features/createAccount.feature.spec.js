// Generated from: features\createAccount.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Account Creation Page', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('Create account link opens an empty account form', { tag: ['@createAccount', '@UI'] }, async ({ When, Then, createAccountsPage }) => { 
    await When('user is on the create account page', null, { createAccountsPage }); 
    await Then('user should see the empty account form displayed', null, { createAccountsPage }); 
  });

  test('Create a new account with required fields', { tag: ['@createAccount', '@create'] }, async ({ Given, When, Then, accountData, createAccountsPage }) => { 
    await Given('user is on the create account page', null, { createAccountsPage }); 
    await When('user enters the mandatory fields along with optional details from "TC_01"', null, { accountData, createAccountsPage }); 
    await Then('user should see the details page of the created account', null, { createAccountsPage }); 
  });

  test('Account is not created when the account name is empty', { tag: ['@createAccount', '@create', '@negative'] }, async ({ Given, When, Then, accountData, createAccountsPage }) => { 
    await Given('user is on the create account page', null, { createAccountsPage }); 
    await When('user submit account form with empty account name from "TC_02"', null, { accountData, createAccountsPage }); 
    await Then('user should see error message is displayed', null, { createAccountsPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\createAccount.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@createAccount","@UI"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user is on the create account page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user should see the empty account form displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@createAccount","@create"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given user is on the create account page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When user enters the mandatory fields along with optional details from \"TC_01\"","stepMatchArguments":[{"group":{"start":66,"value":"\"TC_01\"","children":[{"start":67,"value":"TC_01","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then user should see the details page of the created account","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":20,"tags":["@createAccount","@create","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given user is on the create account page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When user submit account form with empty account name from \"TC_02\"","stepMatchArguments":[{"group":{"start":54,"value":"\"TC_02\"","children":[{"start":55,"value":"TC_02","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then user should see error message is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end