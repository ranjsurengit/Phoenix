@login 
Feature: Verify login

Background:
   Given User navigates to the application

Scenario: Verify that the user is able to login with valid credentials
  Given User is on Login page 
  When User Logs In after entering Valid credentials
  Then User verifies URL contains "home"

Scenario: verify that the user is not able to loging with invalid credentials
  Given User is on Login page 
  When User trying to Log In after entering "invalidcredential"
  Then User should see the error message "Login credentials incorrect"