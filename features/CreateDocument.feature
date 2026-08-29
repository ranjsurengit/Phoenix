
@createdocument
Feature: Create Documents 

  Background:
   Given User should have logged into Suite CRM application

@CreateDocumentUI
Scenario: User lands on the create document page
    Given User is on the home page banner
    When User clicks on Create Document link
    Then Create Page is displayed

@CreateDocumentFlow
Scenario: User clicks on upload 
    Given User is on the Overview tab
    When  User uploads a file 
    Then  File details are seen in the overview tab

@CreateDocumentUI
Scenario: User clicks on save in Overview Tab
    Given File details are uploaded
    When  User clicks on save  
    Then  Document Revisions are seen below
    
@CreateDocumentFlow
Scenario: User clicks on cancel in Overview Tab
    Given File details are uploaded
    When  User clicks on  cancel 
    Then  A pop up is visible with a message "You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?"

  