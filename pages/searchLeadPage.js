import { test , expect } from '@playwright/test';

export class searchLeadPage
{
    constructor(page)
    {
        this.page=page;
        this.homeIcon=page.locator('svg-icon.sicon.image-home');
        this.searchField = page.getByRole('textbox', { name: 'Search' });
        //this.leadsGrid=page.getByRole('heading').filter({hasText: 'Leads'});
        this.leadsGrid=page.getByText(/leads/i);
        //this.resultName=page.getByText('Paula Bevers');
        //.locator('a[href*="/leads/records"]')
        
    }

    getMainFrameLocator()
    {
        return this.page.frameLocator('iframe').last();
    }

    async checkLeadsgridVisibility(FIRST_NAME, LAST_NAME)
    {

        const leadName = FIRST_NAME+' '+LAST_NAME;
        const frame = this.getMainFrameLocator();
        const resultName = frame.getByText(new RegExp(leadName, 'i'));
        await expect(resultName).toBeVisible({timeout:10000});
    }

    async clickSearchedRecord(FIRST_NAME, LAST_NAME)
    {
        const leadName = FIRST_NAME+' '+LAST_NAME;
        const frame = this.getMainFrameLocator();
        await frame.getByText(new RegExp(leadName, 'i')).click();


    }


    async noResultsVisibility()
    {
        const frame = this.getMainFrameLocator();
        const errResult=frame.getByText('No results matching your search criteria');
        await expect(errResult).toBeVisible({timeout:10000});
        
    }

    async clickHomeIcon()
    {
        await this.homeIcon.waitFor({state:'visible', timeout:60000});
        await this.homeIcon.click();
    }

    async searchFieldVisibilityUI()
    {
        await this.searchField.waitFor({state:'visible', timeout:60000});
        await expect(this.searchField).toBeVisible();
    }

    async searchFieldEditableUI()
    {
        await this.searchField.waitFor({state:'visible', timeout:60000});
        await expect(this.searchField).toBeEditable();
    }
    
    async performSearch(FIRST_NAME,LAST_NAME)
    {
        const leadName=FIRST_NAME+' '+LAST_NAME
        await this.searchField.click();
        await this.searchField.fill(leadName);
        await this.searchField.press('Enter');
        
    }
}