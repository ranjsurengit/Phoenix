// Generated from: features\Contact.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Contact List View Page', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('Navigate to contact detail page', { tag: ['@viewContact', '@view'] }, async ({ Given, When, Then, contactPage }) => { 
    await Given('user is on the contact list view page', null, { contactPage }); 
    await When('user click on the first contact name', null, { contactPage }); 
    await Then('user should see details page for that contact', null, { contactPage }); 
  });

  test('Bulk Action becomes available after selecting a contact', { tag: ['@viewContact', '@Bulk'] }, async ({ Given, When, Then, contactPage }) => { 
    await Given('the contact list is displayed with records', null, { contactPage }); 
    await When('user clicks the check box to select a contact', null, { contactPage }); 
    await Then('user should see the contact Bulk Action dropdown is enabled', null, { contactPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Contact.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@viewContact","@view"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given user is on the contact list view page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When user click on the first contact name","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user should see details page for that contact","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@viewContact","@Bulk"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given the contact list is displayed with records","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When user clicks the check box to select a contact","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then user should see the contact Bulk Action dropdown is enabled","stepMatchArguments":[]}]},
]; // bdd-data-end