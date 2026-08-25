@importAccount
Feature: Account Import Page

Background:
    Given User should have logged into Suite CRM application
    Given user navigates to the Import Account page

@import
Scenario: Upload file with Create new records only option
    Given user is on the Step1 of upload Import file page
    When  user upload the file "Accounts.csv"
    When  user selects the Create new records only option
    When  user clicks the Next button
    Then  user should see Step2 of Confirm Import File Properties