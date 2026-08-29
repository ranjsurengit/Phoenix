@homepage @HomePage
Feature: HomePage 

  Background:
   Given User should have logged into Suite CRM application


Scenario: User views More Options
    Given User is on the home page 
    When User hovers on More
    Then A dropdown with SubMenu is diplayed

Scenario: User clicks on action button
    Given Action button is displayed on the homepage
    When  User clicks on the action button
    Then  A dropdown with actions possible is displayed


Scenario: User clicks Add Dashlet
    Given A dropdown with actions possible is viewed
    When  User clicks on Add Dashlet
    Then  A pop with all dashlet options is displayed
    

Scenario: User adds a dashlet to the HomePage
    Given A pop with all dashlet options is viewed
    When  User clicks on "My Invoices"
    Then  My invocies gets added to homepage

Scenario: User can view the Username
    Given User is on homepage
    When  User hovers on user icon
    Then  Username is displayed on the top of the dropdown "Will Westin"