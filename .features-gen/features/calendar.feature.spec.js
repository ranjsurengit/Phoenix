// Generated from: features\calendar.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Schedule Meeting', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('verify Schedule Meeting Page displayed', { tag: ['@calendar', '@UIValidation'] }, async ({ Given, Then, calendarPageOb }) => { 
    await Given('user is on Schedule Meeting Opened from Calendar menuBar', null, { calendarPageOb }); 
    await Then('I verify the Schedule Meeting form is displayed', null, { calendarPageOb }); 
  });

  test('verify user successfully create a Schedule Meeting', { tag: ['@calendar', '@positive'] }, async ({ Given, When, Then, calendarData, calendarPageOb }) => { 
    await Given('user is on Schedule Meeting Opened from Calendar menuBar', null, { calendarPageOb }); 
    await When('User entered Valid details from Excel file "Test1"', null, { calendarData, calendarPageOb }); 
    await Then('User should see the new Schedule Meeting Page', null, { calendarData, calendarPageOb }); 
  });

  test('user cannot create a Schedule Meeting page', { tag: ['@calendar', '@negative'] }, async ({ Given, When, Then, calendarData, calendarPageOb, page }) => { 
    await Given('user is on Schedule Meeting Opened from Calendar menuBar', null, { calendarPageOb }); 
    await When('User save & send invites schedule Meeting form without filling subject details from Excel file "Test2"', null, { calendarData, calendarPageOb, page }); 
    await Then('User should see an error message', null, { calendarPageOb }); 
  });

  test('Verify that Save button on Schedule Meeting page is Visible', { tag: ['@calendar', '@UIValidation'] }, async ({ Given, Then, calendarPageOb }) => { 
    await Given('user is on Schedule Meeting Opened from Calendar menuBar', null, { calendarPageOb }); 
    await Then('User should see the Save button on schedule meeting page', null, { calendarPageOb }); 
  });

  test('Verify that Save button on Schedule Meeting page is Enabled', { tag: ['@calendar', '@UIValidation'] }, async ({ Given, Then, calendarPageOb }) => { 
    await Given('user is on Schedule Meeting Opened from Calendar menuBar', null, { calendarPageOb }); 
    await Then('User should see the Save button on  schedule meeting page is Enabled', null, { calendarPageOb }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\calendar.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@calendar","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given user is on Schedule Meeting Opened from Calendar menuBar","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I verify the Schedule Meeting form is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@calendar","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given user is on Schedule Meeting Opened from Calendar menuBar","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User entered Valid details from Excel file \"Test1\"","stepMatchArguments":[{"group":{"start":43,"value":"\"Test1\"","children":[{"start":44,"value":"Test1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see the new Schedule Meeting Page","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":20,"tags":["@calendar","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given user is on Schedule Meeting Opened from Calendar menuBar","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User save & send invites schedule Meeting form without filling subject details from Excel file \"Test2\"","stepMatchArguments":[{"group":{"start":95,"value":"\"Test2\"","children":[{"start":96,"value":"Test2","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":26,"tags":["@calendar","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given user is on Schedule Meeting Opened from Calendar menuBar","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the Save button on schedule meeting page","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":31,"tags":["@calendar","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given user is on Schedule Meeting Opened from Calendar menuBar","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User should see the Save button on  schedule meeting page is Enabled","stepMatchArguments":[]}]},
]; // bdd-data-end