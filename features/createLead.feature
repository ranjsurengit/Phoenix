Feature: Create a New Lead

Background:
	Given User should have logged into Suite CRM application

@leadsFunctionality
Scenario: Verify that the user successfully creates a New Lead entry.
	Given User is on the Create Lead page opened from Leads Menu bar
	When User enters valid details from Excel file for "TC01"
	Then User should see the details page of the newly created Lead entry

@leadsFunctionality
Scenario: Verify that the user is not able to create a Lead when there is missing mandatory fields.
	Given User is on the Create Lead page opened from Leads Menu bar
	When User enters details without a mandatory field from Excel file for "TC02"
	Then User should see the validation error message along with no New lead created

@leadsUI
Scenario: Verify that all input fields are visible on Create Lead page
    Given User is on the Create Lead page opened from Leads Menu bar
    Then User should see all fields on Create Lead page

@leadsUI
Scenario: Verify that all the fields are editable on Create Lead page
    Given User is on the Create Lead page opened from Leads Menu bar
    Then User should see that editable fields are enabled
@leadsUI
Scenario: Verify that Save button on Create Lead page is Visible
	Given User is on the Create Lead page opened from Leads Menu bar
	Then User should see the Save button on Create Lead page
@leadsUI
Scenario: Verify that Save button on Create Lead page is Enabled
	Given User is on the Create Lead page opened from Leads Menu bar
	Then User should see the Save button on Create Lead page is Enabled

