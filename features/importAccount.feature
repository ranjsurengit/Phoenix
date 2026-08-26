@importAccount
Feature: Account Import Page

Background:
   Given User should have logged into Suite CRM application

@ui
Scenario: verify import accounts page title is displayed
   When  user navigates to the Import Account page
   Then   user should see page title displayed

@positive
Scenario: Upload file with Create new records only option
    Given user is on the upload Import file page
    When  user upload the file "Accounts.csv" with "Create new records" only option
    Then  user should see Confirm Import File Properties page

    