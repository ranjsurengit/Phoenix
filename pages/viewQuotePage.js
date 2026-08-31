import { test, expect } from '@playwright/test';
//import path from 'path';

export class viewQuotePage {

    constructor(page,) {
    this.page = page;
    // Iframe reference
    this.iframe = page.frameLocator('iframe');
    this.quotesMenu = page.locator('a').filter({ hasText: /^Quotes$/ });
    this.viewQuoteLink = page.getByRole('link', { name: 'View Quotes', exact: true });    
    this.title = page.locator(`scrm-module-title:has-text("QUOTES")`);
    this.filterBtn = page.getByRole('button', { name: 'Filter' })
    this.title1 = page.getByRole('textbox').nth(1);
    this.search = page.locator('scrm-panel').getByRole('button', { name: 'Search' })
    //this.test = page.getByRole('link', { name: 'test quote' });
    this.quotesList = page.locator(`scrm-varchar-detail:has-text("test quote")`).nth(1);
    // this.selectQuotesFromList = page.locator('.checkmark');//page.getByRole('checkbox');
    // this.selectedQuotesCountFromList = page.locator('.bulk-action-selected-number');
    // this.noresultfound = page.getByText('No results found.', { exact: true });
    }
    // async goto(){
    // //await this.page.waitForFunction(() => document.readyState === 'complete');
    // await this.page.waitForLoadState('networkidle');
    // await this.page.goto('https://suite8demo.suiteondemand.com/#/home');
    // }

    async clickViewQuote() {
        await this.quotesMenu.hover();
        // await this.quotesMenu.waitFor({ state: 'visible', timeout: 80000 });
    
        // await this.viewQuoteLink.waitFor({ state: 'visible', timeout: 80000 });
        await this.viewQuoteLink.click();
       await this.page.waitForFunction(() => document.readyState === 'complete');
    }

    async SavedQuotes() {
        await expect(this.title).toBeVisible();
    }
    async clickFilterBtn(){
        await this.filterBtn.click();
    }
    async verifyParticularQuote(){
        await this.title1.fill('test quote');
        await this.search.click();
        await expect(this.quotesList).toBeVisible();


    }

    // async savedQuoteSeen() {        
    //    await expect(this.quotesList).toBeVisible();        
    // }

    // async clickFirstQuote() {
    //     //await this.selectQuotesFromList.click();
    //     if (this.selectQuotesFromList){
    //          this.selectQuotesFromList.textContent = '::after';
    //     }
        
    // }

    // async selectedDisplayCount() {
    //    // await expect(this.selectedQuotesCountFromList).toBeVisible();
    // }


}
