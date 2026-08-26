@viewAccount
Feature: Account List View Page

Background:
    Given User should have logged into Suite CRM application

@ui
Scenario: verify view accounts page title is displayed
    When  user navigate to view accounts page
    Then  user should see view account page title displayed

@view
Scenario: Navigate to accounts detail page
   Given  user navigate to view accounts page
   When user click on account name "AtoZ Co Ltd"
   Then user should see details page for account name "AtoZ Co Ltd"

@Bulk
Scenario: Bulk Action becomes available after selecting an account
    Given  user navigate to view accounts page
    When  user clicks the check box to select an account
    Then  user should see the Bulk Action dropdown is enabled
