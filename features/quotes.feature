
@quotes
Feature: Create Quote functionality

 Background:
    Given User should have logged into Suite CRM application

  @UIValidation
  Scenario: verify Quote form displayed
      Given user is on the create quote page opened from quotes menubar
      Then user verify the quote creation form is displayed

 
   @positive
  Scenario: verify user successfully creates a new quotes
    Given user is on the create quote page opened from quotes menubar
    When user enter the required field details from excel file "Test_01"
    Then user should see the new quote summary

 @negative
     Scenario: User cannot create a quote when one required fields are empty
      Given user is on the create quote page opened from quotes menubar
      When User save quotes form without filling title details from Excel file "Test_02"
      Then user should see an error message "Missing required field: Title"


 @UIValidation
Scenario: Verify that all the fields are editable on Create Quotes page
    Given user is on the create quote page opened from quotes menubar
    Then User should see that editable fields on create Quotes page are enabled

@UIValidation
Scenario: Verify that Save button on Create Quotes page is Visible
	Given user is on the create quote page opened from quotes menubar
	Then User should see the Save button on Create Quotes page

@UIValidation
Scenario: Verify that Save button on Create Quotes page is Enabled
	Given user is on the create quote page opened from quotes menubar
	Then User should see the Save button on Create Quotes page is Enabled


     

        

       