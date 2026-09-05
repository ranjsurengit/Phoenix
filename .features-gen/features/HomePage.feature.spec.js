// Generated from: features\HomePage.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('HomePage', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('User views More Options', { tag: ['@homepage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('User is on the home page', null, { homePageObj }); 
    await When('User hovers on More', null, { homePageObj }); 
    await Then('A dropdown with SubMenu is diplayed', null, { homePageObj }); 
  });

  test('User clicks on action button', { tag: ['@homepage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('Action button is displayed on the homepage', null, { homePageObj }); 
    await When('User clicks on the action button', null, { homePageObj }); 
    await Then('A dropdown with actions possible is displayed', null, { homePageObj }); 
  });

  test('User clicks Add Dashlet', { tag: ['@homepage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('A dropdown with actions possible is viewed', null, { homePageObj }); 
    await When('User clicks on Add Dashlet', null, { homePageObj }); 
    await Then('A pop with all dashlet options is displayed', null, { homePageObj }); 
  });

  test('User adds a dashlet to the HomePage', { tag: ['@homepage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('A pop with all dashlet options is viewed', null, { homePageObj }); 
    await When('User clicks on "My Calls"', null, { homePageObj }); 
    await Then('My Calls gets added to homepage', null, { homePageObj }); 
  });

  test('User can view the Username', { tag: ['@homepage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('User is on homepage', null, { homePageObj }); 
    await When('User hovers on user icon', null, { homePageObj }); 
    await Then('Username is displayed on the top of the dropdown "Will Westin"', null, { homePageObj }); 
  });

  test('User can see the quick actions on the top of the page', { tag: ['@homepage'] }, async ({ Given, When, Then, createDocumentPageObj, homePageObj }) => { 
    await Given('User is on the home page banner', null, { createDocumentPageObj }); 
    await When('User hovers on quick actions', null, { homePageObj }); 
    await Then('the quick action icon color changes to orange', null, { homePageObj }); 
  });

  test('User can search for text in search bar', { tag: ['@homepage'] }, async ({ Given, When, Then, createDocumentPageObj, homePageObj }) => { 
    await Given('User is on the home page banner', null, { createDocumentPageObj }); 
    await When('User enters "Constrata" in the search bar', null, { homePageObj }); 
    await Then('The search results are displayed', null, { homePageObj }); 
  });

  test('User can logout of the application', { tag: ['@homepage'] }, async ({ Given, When, Then, homePageObj, loginPageObj }) => { 
    await Given('User is on the home page', null, { homePageObj }); 
    await When('User clicks on logout', null, { homePageObj }); 
    await Then('The user is redirected to the login page', null, { loginPageObj }); 
  });

  test('User can view page numbers when the dashlet is added to homepage', { tag: ['@homepage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('A dashlet is added to homepage', null, { homePageObj }); 
    await When('User views the dashlet', null, { homePageObj }); 
    await Then('Pagination of the dashlet numbers are displayed', null, { homePageObj }); 
  });

  test('User can view recently viewed items', { tag: ['@homepage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('User is on the home page', null, { homePageObj }); 
    await When('User hovers on recently viewed items', null, { homePageObj }); 
    await Then('Recently viewed items are displayed', null, { homePageObj }); 
  });

  test('User deletes a dashlet from the HomePage', { tag: ['@homepage'] }, async ({ Given, When, Then, homePageObj }) => { 
    await Given('A dashlet is added to homepage', null, { homePageObj }); 
    await When('User tries to close the dashlet from homepage', null, { homePageObj }); 
    await Then('User is prompted with a pop up option', null, { homePageObj }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\HomePage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User hovers on More","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then A dropdown with SubMenu is diplayed","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given Action button is displayed on the homepage","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clicks on the action button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then A dropdown with actions possible is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given A dropdown with actions possible is viewed","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User clicks on Add Dashlet","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then A pop with all dashlet options is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":25,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given A pop with all dashlet options is viewed","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on \"My Calls\"","stepMatchArguments":[{"group":{"start":15,"value":"\"My Calls\"","children":[{"start":16,"value":"My Calls","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then My Calls gets added to homepage","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":30,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is on homepage","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When User hovers on user icon","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Username is displayed on the top of the dropdown \"Will Westin\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Will Westin\"","children":[{"start":50,"value":"Will Westin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":35,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given User is on the home page banner","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When User hovers on quick actions","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the quick action icon color changes to orange","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":40,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given User is on the home page banner","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When User enters \"Constrata\" in the search bar","stepMatchArguments":[{"group":{"start":12,"value":"\"Constrata\"","children":[{"start":13,"value":"Constrata","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then The search results are displayed","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":45,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is on the home page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks on logout","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then The user is redirected to the login page","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":50,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given A dashlet is added to homepage","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User views the dashlet","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Pagination of the dashlet numbers are displayed","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":56,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given User is on the home page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When User hovers on recently viewed items","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Recently viewed items are displayed","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":62,"tags":["@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given A dashlet is added to homepage","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When User tries to close the dashlet from homepage","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User is prompted with a pop up option","stepMatchArguments":[]}]},
]; // bdd-data-end