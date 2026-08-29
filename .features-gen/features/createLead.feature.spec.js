// Generated from: features\createLead.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Create a New Lead', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('Verify that the user successfully creates a New Lead entry.', { tag: ['@leadsFunctionality'] }, async ({ Given, When, Then, createLeadPageObj, leadData }) => { 
    await Given('User is on the Create Lead page opened from Leads Menu bar', null, { createLeadPageObj }); 
    await When('User enters valid details from Excel file for "TC01"', null, { createLeadPageObj, leadData }); 
    await Then('User should see the details page of the newly created Lead entry', null, { createLeadPageObj, leadData }); 
  });

  test('Verify that the user is not able to create a Lead when there is missing mandatory fields.', { tag: ['@leadsFunctionality'] }, async ({ Given, When, Then, createLeadPageObj, leadData, page }) => { 
    await Given('User is on the Create Lead page opened from Leads Menu bar', null, { createLeadPageObj }); 
    await When('User enters details without a mandatory field from Excel file for "TC02"', null, { createLeadPageObj, leadData, page }); 
    await Then('User should see the validation error message along with no New lead created', null, { page }); 
  });

  test('Verify that all input fields are visible on Create Lead page', { tag: ['@leadsUI'] }, async ({ Given, Then, createLeadPageObj }) => { 
    await Given('User is on the Create Lead page opened from Leads Menu bar', null, { createLeadPageObj }); 
    await Then('User should see all fields on Create Lead page', null, { createLeadPageObj }); 
  });

  test('Verify that all the fields are editable on Create Lead page', { tag: ['@leadsUI'] }, async ({ Given, Then, createLeadPageObj }) => { 
    await Given('User is on the Create Lead page opened from Leads Menu bar', null, { createLeadPageObj }); 
    await Then('User should see that editable fields are enabled', null, { createLeadPageObj }); 
  });

  test('Verify that Save button on Create Lead page is Visible', { tag: ['@leadsUI'] }, async ({ Given, Then, createLeadPageObj }) => { 
    await Given('User is on the Create Lead page opened from Leads Menu bar', null, { createLeadPageObj }); 
    await Then('User should see the Save button on Create Lead page', null, { createLeadPageObj }); 
  });

  test('Verify that Save button on Create Lead page is Enabled', { tag: ['@leadsUI'] }, async ({ Given, Then, createLeadPageObj }) => { 
    await Given('User is on the Create Lead page opened from Leads Menu bar', null, { createLeadPageObj }); 
    await Then('User should see the Save button on Create Lead page is Enabled', null, { createLeadPageObj }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\createLead.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@leadsFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page opened from Leads Menu bar","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User enters valid details from Excel file for \"TC01\"","stepMatchArguments":[{"group":{"start":46,"value":"\"TC01\"","children":[{"start":47,"value":"TC01","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see the details page of the newly created Lead entry","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@leadsFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page opened from Leads Menu bar","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User enters details without a mandatory field from Excel file for \"TC02\"","stepMatchArguments":[{"group":{"start":66,"value":"\"TC02\"","children":[{"start":67,"value":"TC02","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User should see the validation error message along with no New lead created","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":["@leadsUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page opened from Leads Menu bar","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see all fields on Create Lead page","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":24,"tags":["@leadsUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page opened from Leads Menu bar","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see that editable fields are enabled","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":28,"tags":["@leadsUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page opened from Leads Menu bar","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see the Save button on Create Lead page","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":32,"tags":["@leadsUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page opened from Leads Menu bar","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then User should see the Save button on Create Lead page is Enabled","stepMatchArguments":[]}]},
]; // bdd-data-end