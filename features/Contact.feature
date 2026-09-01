@Contact
Feature: Contact List View Page

Background:
   Given User should have logged into Suite CRM application

@UI
Scenario: Create contact link opens an empty contact form
   When   user is on the create contact page
   Then  user should see the empty contact form displayed

@view
Scenario: Navigate to contact detail page
   Given user is on the contact list view page
   When  user click on the contact name "Jesse Capozzi"
   Then  user should see details page for that contact "Jesse Capozzi"

@search
Scenario: Search a contact by first name
   Given the contact list is displayed with records
   When  user searches for the contact "Jesse"
   Then  the contact list should only show contacts matching "Jesse"

@create
Scenario: Cancel create contact form return to the contact list
  Given user is on the create contact page
  When  user clicks the cancel button
  Then  user should see the contact page title

@list
Scenario: Contact list displayed the record count
  Given the contact list is displayed with records
  Then  user should see the total number of contacts displayed

@Bulk
Scenario: Bulk Action becomes available after selecting a contact
    Given the contact list is displayed with records
    When  user clicks the check box to select a contact
    Then  user should see the contact Bulk Action dropdown is enabled
