// Generated from: features\scheduleCall.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Schedule call', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('verify Schedule call Page displayed', { tag: ['@calendar', '@UIValidation1'] }, async ({ Given, Then, callPageOb }) => { 
    await Given('user is on Schedule call Opened from Calendar menuBar', null, { callPageOb }); 
    await Then('I verify the Schedule call form is displayed', null, { callPageOb }); 
  });

  test('verify user successfully create a Schedule call', { tag: ['@calendar', '@positive1'] }, async ({ Given, When, Then, callData, callPageOb, page }) => { 
    await Given('user is on Schedule call Opened from Calendar menuBar', null, { callPageOb }); 
    await When('User entered required details from Excel file "Test_01"', null, { callData, callPageOb, page }); 
    await Then('User should see the new Schedule call Page', null, { callData, callPageOb }); 
  });

  test('user cannot create a Schedule call page', { tag: ['@calendar', '@negative1'] }, async ({ Given, When, Then, callData, callPageOb, page }) => { 
    await Given('user is on Schedule call Opened from Calendar menuBar', null, { callPageOb }); 
    await When('User save schedule call form without filling subject details from Excel file "Test_02"', null, { callData, callPageOb, page }); 
    await Then('User should see an error message "Missing required field: Subject"', null, { callPageOb }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\scheduleCall.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@calendar","@UIValidation1"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given user is on Schedule call Opened from Calendar menuBar","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I verify the Schedule call form is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@calendar","@positive1"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given user is on Schedule call Opened from Calendar menuBar","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User entered required details from Excel file \"Test_01\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Test_01\"","children":[{"start":47,"value":"Test_01","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see the new Schedule call Page","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":20,"tags":["@calendar","@negative1"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given user is on Schedule call Opened from Calendar menuBar","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User save schedule call form without filling subject details from Excel file \"Test_02\"","stepMatchArguments":[{"group":{"start":77,"value":"\"Test_02\"","children":[{"start":78,"value":"Test_02","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Missing required field: Subject\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Missing required field: Subject\"","children":[{"start":34,"value":"Missing required field: Subject","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end