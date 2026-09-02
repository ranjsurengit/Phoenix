// Generated from: features\viewQuotes.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('View Quotes', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('verify Quote form displayed', { tag: ['@viewQuotes', '@viewQuotesUI'] }, async ({ Given, Then, viewPageOb }) => { 
    await Given('user click view Quotes from Quotes menu', null, { viewPageOb }); 
    await Then('user verify the view Quotes page is displayed', null, { viewPageOb }); 
  });

  test('Verify that Filter button on view Quotes page is Visible', { tag: ['@viewQuotes', '@viewQuotesUI'] }, async ({ Given, Then, viewPageOb }) => { 
    await Given('user click view Quotes from Quotes menu', null, { viewPageOb }); 
    await Then('User should see the Filter button on view Quotes page', null, { viewPageOb }); 
  });

  test('Verify that Filter button on view Quotes page is Enabled', { tag: ['@viewQuotes', '@viewQuotesUI'] }, async ({ Given, Then, viewPageOb }) => { 
    await Given('user click view Quotes from Quotes menu', null, { viewPageOb }); 
    await Then('User should see the Filter button on view Quotes page is Enabled', null, { viewPageOb }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\viewQuotes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@viewQuotes","@viewQuotesUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given user click view Quotes from Quotes menu","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user verify the view Quotes page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":21,"tags":["@viewQuotes","@viewQuotesUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given user click view Quotes from Quotes menu","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see the Filter button on view Quotes page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":26,"tags":["@viewQuotes","@viewQuotesUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given user click view Quotes from Quotes menu","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the Filter button on view Quotes page is Enabled","stepMatchArguments":[]}]},
]; // bdd-data-end