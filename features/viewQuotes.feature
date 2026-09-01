@viewQuotes

Feature: View Quotes 

  Background:
   Given User should have logged into Suite CRM application

@viewQuotesUI
   Scenario: verify Quote form displayed
    Given user click view Quotes from Quotes menu
    Then user verify the view Quotes page is displayed
    
 
# @FilterUI
#    Scenario: verify Particular Quote summary displayed
#     Given user click view Quotes from Quotes menu
#     When user click Filter Button and search title of the Quote
#     Then user verify the particular Quotes grid is displayed

    @viewQuotesUI
Scenario: Verify that Filter button on view Quotes page is Visible
	Given user click view Quotes from Quotes menu
	Then User should see the Filter button on view Quotes page

@viewQuotesUI
Scenario: Verify that Filter button on view Quotes page is Enabled
	Given user click view Quotes from Quotes menu
	Then User should see the Filter button on view Quotes page is Enabled
