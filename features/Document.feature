@document

Feature: Verfiy Documents 

  Background:
   Given User should have logged into Suite CRM application

Scenario: User lands on the create document page
    Given User is on the home page banner
    When User clicks on Create Document link
    Then Create Page is displayed

Scenario: User clicks on upload 
    Given User is on the Overview tab
    When  User uploads a file 
    Then  File details are seen in the overview tab

  Scenario: User clicks on save in Overview Tab
    Given File details are uploaded
    When  User clicks on save  
    Then  Document Revisions is visible

  Scenario: User clicks on cancel in Overview Tab
    Given File details are uploaded
    When  User clicks on  cancel 
    Then  A pop up is visible with a message "You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?"

  Scenario: User lands on the view document page
    Given User is on the home page banner
    When User clicks on View Document link
    Then View Page is displayed with list of saved documents

 Scenario: User selects one document from the View Documents Page
    Given List of saved documents
    When User clicks on one particular
    Then Selected display count changes to one.
    