@importAccount
Feature: Account Import Page

Background:
   Given User should have logged into Suite CRM application

@ui
Scenario: verify import accounts page title is displayed
   When  user navigates to the Import Account page
   Then   user should see page title displayed

@ui
Scenario: Upload file field is displayed on the import page
   Given user is on the upload Import file page
   Then  user should see the file upload field displayed

@ui
Scenario: Create new records option is displayed on the import page
   Given user is on the upload Import file page
   Then  user should see the Create new records option displayed

@positive
Scenario: Upload file with Create new records only option
    Given user is on the upload Import file page
    When  user upload the file "Accounts.csv" with "Create new records" only option
    Then  user should see Confirm Import File Properties page

@negative
Scenario: Next is not possible without choosing a file
   Given user is on the upload Import file page
   When  user clicks the Next button without selecting a file
   Then  user should stay on the upload Import file page

    