// Generated from: features\viewAccount.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Account List View Page', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('verify view accounts page title is displayed', { tag: ['@viewAccount', '@ui'] }, async ({ When, Then, viewAccountPage }) => { 
    await When('user navigate to view accounts page', null, { viewAccountPage }); 
    await Then('user should see view account page title displayed', null, { viewAccountPage }); 
  });

  test('Navigate to accounts detail page', { tag: ['@viewAccount', '@view'] }, async ({ Given, When, Then, viewAccountPage }) => { 
    await Given('user navigate to view accounts page', null, { viewAccountPage }); 
    await When('user click on account name "AtoZ Co Ltd"', null, { viewAccountPage }); 
    await Then('user should see details page for account name "AtoZ Co Ltd"', null, { viewAccountPage }); 
  });

  test('Bulk Action becomes available after selecting an account', { tag: ['@viewAccount', '@Bulk'] }, async ({ Given, When, Then, viewAccountPage }) => { 
    await Given('user navigate to view accounts page', null, { viewAccountPage }); 
    await When('user clicks the check box to select an account', null, { viewAccountPage }); 
    await Then('user should see the Bulk Action dropdown is enabled', null, { viewAccountPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\viewAccount.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@viewAccount","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user navigate to view accounts page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user should see view account page title displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@viewAccount","@view"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given user navigate to view accounts page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When user click on account name \"AtoZ Co Ltd\"","stepMatchArguments":[{"group":{"start":27,"value":"\"AtoZ Co Ltd\"","children":[{"start":28,"value":"AtoZ Co Ltd","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then user should see details page for account name \"AtoZ Co Ltd\"","stepMatchArguments":[{"group":{"start":46,"value":"\"AtoZ Co Ltd\"","children":[{"start":47,"value":"AtoZ Co Ltd","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":19,"tags":["@viewAccount","@Bulk"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given user navigate to view accounts page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When user clicks the check box to select an account","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then user should see the Bulk Action dropdown is enabled","stepMatchArguments":[]}]},
]; // bdd-data-end