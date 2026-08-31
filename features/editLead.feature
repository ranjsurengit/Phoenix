Feature: Edit a Lead record

Background:
	Given User should have logged into Suite CRM application

@leadsUI
Scenario: Verify that the Edit button is Visible
	Given User has an existing "record" opened 
	Then User should see the Edit button

@leadsUI
Scenario: Verify that the Edit button is Enabled
	Given User has an existing "record" opened
	Then User should be able to click the Edit button

@leadsUI
Scenario: Verify that Actions dropdown is visible
	Given User has an existing "record" opened
	Then User should see the Actions dropdown

@leadsUI
Scenario: Verify that the Actions dropdown is Enabled
	Given User has an existing "record" opened
	Then User should be able to click the Actions dropdown

@leadsFunctionality
Scenario: Verify that user is able Edit the status of a Lead record

	Given User has an existing lead record to update its "Status"
	When User updates the Status
	Then User should see the Status updated successfully

@leadsFunctionality
Scenario: Verify that user is able Edit the mobile number of a Lead record
	Given User has an existing lead record to update its "Mobile" field
	When User updates the Mobile field
	Then User should see the Mobile field updated successfully