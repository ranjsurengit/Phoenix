// Generated from: features\Contact.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Contact List View Page', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('Create contact link opens an empty contact form', { tag: ['@Contact', '@UI'] }, async ({ When, Then, contactPage }) => { 
    await When('user is on the create contact page', null, { contactPage }); 
    await Then('user should see the empty contact form displayed', null, { contactPage }); 
  });

  test('Navigate to contact detail page', { tag: ['@Contact', '@view'] }, async ({ Given, When, Then, contactPage }) => { 
    await Given('user is on the contact list view page', null, { contactPage }); 
    await When('user click on the contact name "Jesse Capozzi"', null, { contactPage }); 
    await Then('user should see details page for that contact "Jesse Capozzi"', null, { contactPage }); 
  });

  test('Search a contact by first name', { tag: ['@Contact', '@search'] }, async ({ Given, When, Then, contactPage }) => { 
    await Given('the contact list is displayed with records', null, { contactPage }); 
    await When('user searches for the contact "Jesse"', null, { contactPage }); 
    await Then('the contact list should only show contacts matching "Jesse"', null, { contactPage }); 
  });

  test('Cancel create contact form return to the contact list', { tag: ['@Contact', '@create'] }, async ({ Given, When, Then, contactPage }) => { 
    await Given('user is on the create contact page', null, { contactPage }); 
    await When('user clicks the cancel button', null, { contactPage }); 
    await Then('user should see the contact page title', null, { contactPage }); 
  });

  test('Contact list displayed the record count', { tag: ['@Contact', '@list'] }, async ({ Given, Then, contactPage }) => { 
    await Given('the contact list is displayed with records', null, { contactPage }); 
    await Then('user should see the total number of contacts displayed', null, { contactPage }); 
  });

  test('Bulk Action becomes available after selecting a contact', { tag: ['@Contact', '@Bulk'] }, async ({ Given, When, Then, contactPage }) => { 
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
  {"pwTestLine":10,"pickleLine":8,"tags":["@Contact","@UI"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user is on the create contact page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user should see the empty contact form displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@Contact","@view"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given user is on the contact list view page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When user click on the contact name \"Jesse Capozzi\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Jesse Capozzi\"","children":[{"start":32,"value":"Jesse Capozzi","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then user should see details page for that contact \"Jesse Capozzi\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Jesse Capozzi\"","children":[{"start":47,"value":"Jesse Capozzi","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":19,"tags":["@Contact","@search"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given the contact list is displayed with records","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When user searches for the contact \"Jesse\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Jesse\"","children":[{"start":31,"value":"Jesse","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the contact list should only show contacts matching \"Jesse\"","stepMatchArguments":[{"group":{"start":52,"value":"\"Jesse\"","children":[{"start":53,"value":"Jesse","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":25,"tags":["@Contact","@create"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given user is on the create contact page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When user clicks the cancel button","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then user should see the contact page title","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":31,"tags":["@Contact","@list"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given the contact list is displayed with records","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then user should see the total number of contacts displayed","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":36,"tags":["@Contact","@Bulk"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given the contact list is displayed with records","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When user clicks the check box to select a contact","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then user should see the contact Bulk Action dropdown is enabled","stepMatchArguments":[]}]},
]; // bdd-data-end