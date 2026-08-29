import { expect } from '@playwright/test';


export class ContactPage{
    constructor(page){
        this.page = page;
        this.contactLink = page.locator('a').filter({ hasText: /^Contacts$/ });
        this.clickViewContact = page.getByRole('link',{name: 'View Contacts'});
        this.viewContactPageTitle = page.getByText('CONTACTS', { exact: true });
        this.checkboxDropdown = page.locator('scrm-table-header').getByLabel('Select Action Menu');       
        this.contactNameLinks = page.locator('tbody .cdk-column-name a');
        this.contactName = page.locator('.record-view-name-label');
        this.selectContact = page.locator('.cdk-column-checkbox .checkmark').first();
        this.bulkActionDropdown = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
    }

    async navigateToViewContactPage(){
        await this.contactLink.waitFor({state: 'visible',timeout: 30000});
        await this.contactLink.hover();
        await expect(this.clickViewContact).toBeVisible({timeout: 30000});
        await this.clickViewContact.click();
    }

    async verifyViewContactPageTitle(){
        await expect(this.viewContactPageTitle).toBeVisible();
    }

    async clickContactName(contactName){
        await this.contactNameLinks.filter({hasText: contactName}).click();
    }

    async clickFirstContactName(){
        const firstLink = this.contactNameLinks.first();
        await expect(firstLink).toBeVisible({timeout: 20000});
        this.selectedContactName = (await firstLink.innerText()).trim();
        await firstLink.click();
    }

    async verifySelectedContactDetailsPage(){
        await expect(this.contactName).toHaveText(this.selectedContactName, {timeout: 20000});
    }

    async verifyContactDetailsPage(expectedName){
        await expect(this.contactName).toHaveText(expectedName);
    }

    async clickSelectContact(){
        await this.selectContact.click();
    }

    async verifyBulkActionDropdownEnabled(){
        await expect(this.bulkActionDropdown).toBeEnabled();
    }

    async verifyCheckboxDropdownDisplayed(){
        await expect(this.checkboxDropdown).toBeVisible();
    }

    async verifyContactListDisplayed(){
        await expect(this.contactNameLinks.first()).toBeVisible({timeout: 20000});
    }
}