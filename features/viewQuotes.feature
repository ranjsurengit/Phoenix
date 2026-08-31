@viewQuotes

Feature: View Quotes 

  Background:
   Given User should have logged into Suite CRM application

@viewQuotesUI
   Scenario: verify Quote form displayed
    Given user click view Quotes from Quotes menu
    Then user verify the view Quotes page is displayed
    

# @viewQuotesfunctionality
#  Scenario: User selects one Quotes from the View Quotes Page
#     Given List of saved Quotes
#     When User clicks on one particular
#     Then Selected display count changes to one.
    
@FilterUI
   Scenario: verify Particular Quote summary displayed
    Given user click view Quotes from Quotes menu
    When user click Filter Button and search title of the Quote
    Then user verify the particular Quotes grid is displayed