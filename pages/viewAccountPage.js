import { expect } from "@playwright/test";

export class ViewAccountPage{
    constructor(page){
        this.page = page;
        this.accountLink = page.locator('a').filter({ hasText: /^Accounts$/ });
        this.clickViewAccount = page.getByRole('link',{name: 'View Accounts'});
        this.viewAccPageTitle = page.getByText('ACCOUNTS', { exact: true });
        this.checkboxDropdown = page.locator('scrm-table-header').getByLabel('Select Action Menu');
        this.accountNameLinks = page.locator('tbody .cdk-column-name a');
        this.accountName = page.locator('.record-view-name-label');
        this.selectAccount = page.locator('.cdk-column-checkbox .checkmark').first();
        this.bulkActionDropdown = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
    }

    async navigateToViewAccountPage(){
        await this.accountLink.hover();
        await this.clickViewAccount.click({ timeout: 5000});
        
    }

    async verifyViewAccPageTitle(){
        await expect(this.viewAccPageTitle).toBeVisible({ timeout: 60000});
    }

    async clickAccountName(accountName){
        await this.accountNameLinks.filter({hasText: accountName}).click();
    }

    async verifyAccountDetailsPage(expectedName){
        await expect(this.accountName).toHaveText(expectedName);
    }

    async clickSelectAccount(){
        await this.selectAccount.click();
    }

    async verifyBulkActionDropdownEnabled(){
        await expect(this.bulkActionDropdown).toBeEnabled();
    }
}
