// Generated from: features\login.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Verify login', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User navigates to the application', null, { loginPageObj }); 
  });
  
  test('Verify that the user is able to login with valid credentials', { tag: ['@login'] }, async ({ Given, When, Then, loginPageObj }) => { 
    await Given('User is on Login page', null, { loginPageObj }); 
    await When('User Logs In after entering Valid credentials', null, { loginPageObj }); 
    await Then('User verifies URL contains "home"', null, { loginPageObj }); 
  });

  test('verify that the user is not able to loging with invalid credentials', { tag: ['@login'] }, async ({ Given, When, Then, loginPageObj }) => { 
    await Given('User is on Login page', null, { loginPageObj }); 
    await When('User trying to Log In after entering "invalidcredential"', null, { loginPageObj }); 
    await Then('User should see the error message "Login credentials incorrect"', null, { loginPageObj }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User navigates to the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on Login page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User Logs In after entering Valid credentials","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User verifies URL contains \"home\"","stepMatchArguments":[{"group":{"start":27,"value":"\"home\"","children":[{"start":28,"value":"home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":12,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User navigates to the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User is on Login page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User trying to Log In after entering \"invalidcredential\"","stepMatchArguments":[{"group":{"start":37,"value":"\"invalidcredential\"","children":[{"start":38,"value":"invalidcredential","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message \"Login credentials incorrect\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Login credentials incorrect\"","children":[{"start":35,"value":"Login credentials incorrect","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end