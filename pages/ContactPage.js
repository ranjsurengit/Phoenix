import { expect } from '@playwright/test';


export class ContactPage{
    constructor(page){
        this.page = page;

        this.contactLink = page.locator('a').filter({ hasText: /^Contacts$/ });
        this.createContactLink = page.getByRole('link', { name: 'Create Contact', exact: true});
        this.firstNameInput = page.locator('.dynamic-field-name-first_name').getByRole('textbox');
        this.lastNameInput = page.locator('.dynamic-field-name-last_name').getByRole('textbox');
        this.clickViewContact = page.getByRole('link',{name: 'View Contacts'});
        this.contactNameLinks = page.locator('tbody .cdk-column-name a');
        this.contactName = page.locator('.record-view-name-label');
        this.searchContactInput = page.getByRole('textbox', { name: 'Search' });
        this.resultsFrame = page.frameLocator('iframe').last();
        this.searchResult = this.resultsFrame.getByRole('heading', { name: 'Results' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.viewContactPageTitle = page.getByText('CONTACTS', { exact: true });
        this.totalContactRecord = page.locator('scrm-table-header .pagination-count');
        this.selectContact = page.locator('.cdk-column-checkbox .checkmark').first();
        this.bulkActionDropdown = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
    }

    async navigateToCreateContactPage(){
        await this.contactLink.waitFor({state: 'visible',timeout: 30000});
        await this.contactLink.hover();
        await expect(this.createContactLink).toBeVisible({timeout: 30000});
        await this.createContactLink.click();
        await expect(this.firstNameInput).toBeVisible({timeout: 30000});
    }

    async verifyEmptyContactFormDisplayed(){
        await expect(this.firstNameInput).toBeVisible({timeout: 30000});
        await expect(this.cancelButton).toBeVisible({timeout: 30000});
        await expect(this.lastNameInput).toHaveValue('', {timeout: 30000});
        await expect(this.firstNameInput).toHaveValue('', {timeout: 30000});
    }

    async navigateToViewContactPage(){
        await this.contactLink.waitFor({state: 'visible',timeout: 30000});
        await this.contactLink.hover();
        await expect(this.clickViewContact).toBeVisible({timeout: 15000});
        await this.clickViewContact.hover();
        await this.clickViewContact.click();
    }
    async verifyContactListDisplayed(){
        await expect(this.contactNameLinks.first()).toBeVisible({timeout: 30000});
    
    }
    async clickContactName(contactName){
        await this.contactNameLinks.filter({ hasText: contactName }).first().click();
    }

    async verifySelectedContactDetailsPage(contactName){
        await expect(this.contactName).toHaveText(contactName, {timeout: 30000});
    }

    async searchContact(name){
        await this.searchContactInput.fill(name);
        await this.searchContactInput.press('Enter');
       // await expect(this.contactNameLinks.filter({ hasText: name}).first()).toBeVisible({timeout: 30000});
    }

    async verifySearchResults(name){
       await expect(this.searchResult).toBeVisible({ timeout: 30000 });
       await expect(this.resultsFrame.getByText(new RegExp(name, 'i')).first())
            .toBeVisible({ timeout: 30000 });
   }
    async clickCancelButton(){
        await this.cancelButton.click();
        await expect(this.contactNameLinks.first()).toBeVisible({timeout: 30000});
    }

    async verifyViewContactPageTitle(){
        await expect(this.viewContactPageTitle).toBeVisible({timeout: 30000});
    }

    async verifyContactRecordCountDisplayed(){
        await expect(this.totalContactRecord).toBeVisible({timeout: 30000});
    }

    async clickSelectContact(){
        await this.selectContact.click();
    }

    async verifyBulkActionDropdownEnabled(){
        await expect(this.bulkActionDropdown).toBeEnabled({timeout: 30000});
    }
}