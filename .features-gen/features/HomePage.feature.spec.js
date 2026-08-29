// Generated from: features\HomePage.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('HomePage', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('User views More Options', { tag: ['@homepage', '@HomePage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('User is on the home page', null, { homePageObj }); 
    await When('User hovers on More', null, { homePageObj }); 
    await Then('A dropdown with SubMenu is diplayed', null, { homePageObj }); 
  });

  test('User clicks on action button', { tag: ['@homepage', '@HomePage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('Action button is displayed on the homepage', null, { homePageObj }); 
    await When('User clicks on the action button', null, { homePageObj }); 
    await Then('A dropdown with actions possible is displayed', null, { homePageObj }); 
  });

  test('User clicks Add Dashlet', { tag: ['@homepage', '@HomePage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('A dropdown with actions possible is viewed', null, { homePageObj }); 
    await When('User clicks on Add Dashlet', null, { homePageObj }); 
    await Then('A pop with all dashlet options is displayed', null, { homePageObj }); 
  });

  test('User adds a dashlet to the HomePage', { tag: ['@homepage', '@HomePage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('A pop with all dashlet options is viewed', null, { homePageObj }); 
    await When('User clicks on "My Invoices"', null, { homePageObj }); 
    await Then('My invocies gets added to homepage', null, { homePageObj }); 
  });

  test('User can view the Username', { tag: ['@homepage', '@HomePage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('User is on homepage', null, { homePageObj }); 
    await When('User hovers on user icon', null, { homePageObj }); 
    await Then('Username is displayed on the top of the dropdown "Will Westin"', null, { homePageObj }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\HomePage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@homepage","@HomePage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User hovers on More","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then A dropdown with SubMenu is diplayed","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@homepage","@HomePage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given Action button is displayed on the homepage","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clicks on the action button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then A dropdown with actions possible is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":["@homepage","@HomePage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given A dropdown with actions possible is viewed","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User clicks on Add Dashlet","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then A pop with all dashlet options is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":25,"tags":["@homepage","@HomePage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given A pop with all dashlet options is viewed","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on \"My Invoices\"","stepMatchArguments":[{"group":{"start":15,"value":"\"My Invoices\"","children":[{"start":16,"value":"My Invoices","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then My invocies gets added to homepage","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":30,"tags":["@homepage","@HomePage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is on homepage","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When User hovers on user icon","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Username is displayed on the top of the dropdown \"Will Westin\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Will Westin\"","children":[{"start":50,"value":"Will Westin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end