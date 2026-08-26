import {expect} from '@playwright/test';

export class ImportAccountPage {
    constructor(page) {
        this.page = page;
        this.accountLink = page.locator('a').filter({ hasText: /^Accounts$/ });
        this.clickImportAccount = page.getByRole('link',{name: 'Import Accounts'});
        this.importPageTitle = page.locator('iframe[src*="module=Import"]').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
        this.uploadFile = page.locator('iframe[src*="module=Import"]').contentFrame().locator('input[type="file"]');
        this.selectOption = page.locator('iframe[src*="module=Import"]').contentFrame().locator('#import_create');
        this.nextBtn = page.locator('iframe[src*="module=Import"]').contentFrame().getByRole('button', { name: 'Next >' });
        this.nextStepOfImportPage = page.locator('iframe[src*="module=Import"]').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
    }
    async navigateToImportAccountPage(){
         await this.accountLink.hover();
         await expect(this.clickImportAccount).toBeVisible({ timeout: 60000});
         await this.clickImportAccount.click();
    }
    async verifyImportPageTitle(){
        await expect(this.importPageTitle).toBeVisible();
    }
    async chooseFileToUpload(filePath){
         await this.uploadFile.setInputFiles(filePath);
    }
    async chooseCreateNewRecord(){
        await this.selectOption.click();
    }
    async clickNextBtn(){
        await this.nextBtn.click();
    }
    async verifyNextStepOfImportPage(){
        await expect(this.nextStepOfImportPage).toBeVisible();
    }
   
    
}