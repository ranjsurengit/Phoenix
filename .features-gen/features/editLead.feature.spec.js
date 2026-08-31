// Generated from: features\editLead.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Edit a Lead record', () => {

  test.beforeEach('Background', async ({ Given, loginPageObj }, testInfo) => { if (testInfo.error) return;
    await Given('User should have logged into Suite CRM application', null, { loginPageObj }); 
  });
  
  test('Verify that the Edit button is Visible', { tag: ['@leadsUI'] }, async ({ Given, Then, editData, editLeadPageObj, searchLeadPageObj }) => { 
    await Given('User has an existing "record" opened', null, { editData, editLeadPageObj, searchLeadPageObj }); 
    await Then('User should see the Edit button', null, { editLeadPageObj }); 
  });

  test('Verify that the Edit button is Enabled', { tag: ['@leadsUI'] }, async ({ Given, Then, editData, editLeadPageObj, searchLeadPageObj }) => { 
    await Given('User has an existing "record" opened', null, { editData, editLeadPageObj, searchLeadPageObj }); 
    await Then('User should be able to click the Edit button', null, { editLeadPageObj }); 
  });

  test('Verify that Actions dropdown is visible', { tag: ['@leadsUI'] }, async ({ Given, Then, editData, editLeadPageObj, searchLeadPageObj }) => { 
    await Given('User has an existing "record" opened', null, { editData, editLeadPageObj, searchLeadPageObj }); 
    await Then('User should see the Actions dropdown', null, { editLeadPageObj }); 
  });

  test('Verify that the Actions dropdown is Enabled', { tag: ['@leadsUI'] }, async ({ Given, Then, editData, editLeadPageObj, searchLeadPageObj }) => { 
    await Given('User has an existing "record" opened', null, { editData, editLeadPageObj, searchLeadPageObj }); 
    await Then('User should be able to click the Actions dropdown', null, { editLeadPageObj }); 
  });

  test('Verify that user is able Edit the status of a Lead record', { tag: ['@leadsFunctionality'] }, async ({ Given, When, Then, editData, editLeadPageObj, searchLeadPageObj }) => { 
    await Given('User has an existing lead record to update its "Status"', null, { editData, editLeadPageObj, searchLeadPageObj }); 
    await When('User updates the Status', null, { editData, editLeadPageObj }); 
    await Then('User should see the Status updated successfully', null, { editData, editLeadPageObj }); 
  });

  test('Verify that user is able Edit the mobile number of a Lead record', { tag: ['@leadsFunctionality'] }, async ({ Given, When, Then, editData, editLeadPageObj, searchLeadPageObj }) => { 
    await Given('User has an existing lead record to update its "Mobile" field', null, { editData, editLeadPageObj, searchLeadPageObj }); 
    await When('User updates the Mobile field', null, { editData, editLeadPageObj }); 
    await Then('User should see the Mobile field updated successfully', null, { editData, editLeadPageObj }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\editLead.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@leadsUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User has an existing \"record\" opened","stepMatchArguments":[{"group":{"start":21,"value":"\"record\"","children":[{"start":22,"value":"record","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see the Edit button","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":["@leadsUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User has an existing \"record\" opened","stepMatchArguments":[{"group":{"start":21,"value":"\"record\"","children":[{"start":22,"value":"record","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should be able to click the Edit button","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":["@leadsUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given User has an existing \"record\" opened","stepMatchArguments":[{"group":{"start":21,"value":"\"record\"","children":[{"start":22,"value":"record","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then User should see the Actions dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":22,"tags":["@leadsUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given User has an existing \"record\" opened","stepMatchArguments":[{"group":{"start":21,"value":"\"record\"","children":[{"start":22,"value":"record","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User should be able to click the Actions dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":27,"tags":["@leadsFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given User has an existing lead record to update its \"Status\"","stepMatchArguments":[{"group":{"start":47,"value":"\"Status\"","children":[{"start":48,"value":"Status","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User updates the Status","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User should see the Status updated successfully","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":34,"tags":["@leadsFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User should have logged into Suite CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given User has an existing lead record to update its \"Mobile\" field","stepMatchArguments":[{"group":{"start":47,"value":"\"Mobile\"","children":[{"start":48,"value":"Mobile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User updates the Mobile field","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see the Mobile field updated successfully","stepMatchArguments":[]}]},
]; // bdd-data-end