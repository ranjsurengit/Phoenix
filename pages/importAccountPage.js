import {expect} from '@playwright/test';

export class ImportAccountPage {
    constructor(page) {
        this.page = page;
        this.accountLink = page.locator('a').filter({ hasText: /^Accounts$/ });
        this.clickImportAccount = page.getByRole('link',{name: 'Import Account'});
        this.step1OfImportPage = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
        this.uploadFile = page.locator('iframe').contentFrame().locator('input[type="file"]');
        this.selectOption = page.locator('iframe').contentFrame().locator('#import_create');
        this.nextBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.step2OfImportPage = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
    }
    async navigateToImportAccountPage(){
         await this.accountLink.click();
         await this.clickImportAccount.click();
    }
    async verifyStep1OfImportFilePage(){
        await expect(this.step1OfImportPage).toBeVisible();
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
    async verifyStep2OfImportFilePage(){
        await expect(this.step2OfImportPage).toBeVisible();
    }
   
    
}