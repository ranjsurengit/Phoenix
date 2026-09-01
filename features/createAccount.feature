@createAccount
Feature: Account Creation Page

Background:
    Given User should have logged into Suite CRM application

@UI
Scenario: Create account link opens an empty account form
    When   user is on the create account page
    Then  user should see the empty account form displayed
     
@create
Scenario: Create a new account with required fields
    Given user is on the create account page
    When  user enters the mandatory fields along with optional details from "TC_01" 
    Then  user should see the details page of the created account


@create @negative
Scenario: Account is not created when the account name is empty
    Given user is on the create account page
    When  user submit account form with empty account name from "TC_02"
    Then  user should see error message is displayed


