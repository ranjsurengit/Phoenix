@calendar
Feature: Schedule call

Background: 
       Given User should have logged into Suite CRM application

 @UIValidation1

    Scenario: verify Schedule call Page displayed
    Given user is on Schedule call Opened from Calendar menuBar
    Then I verify the Schedule call form is displayed

 @positive1
  Scenario: verify user successfully create a Schedule call
    Given user is on Schedule call Opened from Calendar menuBar
    When User entered required details from Excel file "Test_01"
    Then User should see the new Schedule call Page

 @negative1
  Scenario: user cannot create a Schedule call page
    Given user is on Schedule call Opened from Calendar menuBar
    When User save schedule call form without filling subject details from Excel file "Test_02"
    Then User should see an error message "Missing required field: Subject"