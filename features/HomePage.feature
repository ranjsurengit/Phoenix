@homepage 
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
    When  User clicks on "My Calls"
    Then  My Calls gets added to homepage

Scenario: User can view the Username
    Given User is on homepage
    When  User hovers on user icon
    Then  Username is displayed on the top of the dropdown "Will Westin"
@hm3
Scenario:User can see the quick actions on the top of the page
    Given  User is on the home page banner
    When User hovers on quick actions
    Then the quick action icon color changes to orange

Scenario:User can search for text in search bar
    Given User is on the home page banner
    When User enters "Constrata" in the search bar
    Then The search results are displayed

Scenario:User can logout of the application
    Given User is on the home page
    When User clicks on logout
    Then The user is redirected to the login page
@hm1
Scenario:User can view page numbers when the dashlet is added to homepage    
    Given  A dashlet is added to homepage
    When User views the dashlet
    Then Pagination of the dashlet numbers are displayed   

@hm2
Scenario:User can view recently viewed items
    Given User is on the home page
    When User hovers on recently viewed items
    Then Recently viewed items are displayed

@hm4
Scenario: User deletes a dashlet from the HomePage
    Given A dashlet is added to homepage
    When  User tries to close the dashlet from homepage
    Then  User is prompted with a pop up option

