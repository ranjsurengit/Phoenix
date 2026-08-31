Feature: Search a Lead record

Background:
	Given User should have logged into Suite CRM application

Scenario: Verify that the Search Textbox is Visible
	Given User is on the Home page of the application
	Then User should see Search Textbox

Scenario: Verify that the Search Textbox is Editable
	Given User is on the Home page of the application
	Then User should be able to edit the Search Textbox


Scenario: Verify that the user is able to search a Lead record with FirstName and LastName
	Given User is on the Home page of the application
	When User searches for a Lead record with "searchPositive"
	Then User should see the lead record on results page under Leads Grid


Scenario: Verify that the user is not able see a record that doesn't exist
	Given User is on the Home page of the application
	When User searches for a Lead record with "searchNegative"
Then User should see the message "No results matching your search criteria"

