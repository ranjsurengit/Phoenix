@calendar
Feature: Schedule Meeting 

Background: 
       Given User should have logged into Suite CRM application

# @UIValidation1

    Scenario: verify Schedule Meeting Page displayed
    Given user is on Schedule Meeting Opened from Calendar menuBar
    Then I verify the Schedule Meeting form is displayed

# @positive1
  Scenario: verify user successfully create a Schedule Meeting
    Given user is on Schedule Meeting Opened from Calendar menuBar
    When User entered Valid details from Excel file "Test1"
    Then User should see the new Schedule Meeting Page

    # @negative1
  Scenario: user cannot create a Schedule Meeting page
    Given user is on Schedule Meeting Opened from Calendar menuBar
    When User save & send invites schedule Meeting form without filling subject details from Excel file "Test2"
    Then User should see an error message 