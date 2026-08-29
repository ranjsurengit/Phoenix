@viewdocument

Feature: View Documents 

  Background:
   Given User should have logged into Suite CRM application

@viewdocumentUI
  Scenario: User lands on the view document page
    Given User is on the home page banner
    When User clicks on View Document link
    Then View Page is displayed with list of saved documents

@viewdocumentfunctionality
 Scenario: User selects one document from the View Documents Page
    Given List of saved documents
    When User clicks on one particular
    Then Selected display count changes to one.
    