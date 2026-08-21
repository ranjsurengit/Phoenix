@login
Feature: SuiteCRM Login Functionality

  Background:
    Given user navigate to the SuiteCRM login page

  @positive
  Scenario: Successful Login with Valid Credentials
    When user logs in with valid username and password
    Then user should be redirected to the home page

  @negative
  Scenario: failed Login with wrong password
    When user log in with valid username and wrong password
    Then user should see login error message is displayed

  

  

  