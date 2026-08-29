@viewContact
Feature: Contact List View Page

Background:
   Given User should have logged into Suite CRM application

@view
Scenario: Navigate to contact detail page
   Given user is on the contact list view page
   When  user click on the first contact name
   Then user should see details page for that contact

@Bulk
Scenario: Bulk Action becomes available after selecting a contact
    Given the contact list is displayed with records
    When  user clicks the check box to select a contact
    Then  user should see the contact Bulk Action dropdown is enabled
