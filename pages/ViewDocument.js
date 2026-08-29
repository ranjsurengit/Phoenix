import { expect } from '@playwright/test';
import path from 'path';
import { createDocumentPage } from './CreateDocument.js';
export class viewDocumentPage {

    constructor(page) {
        this.page = page;
        this.homepageidentifier = page.frameLocator('iframe').getByRole('link', { name: /SUITECRM DASHBOARD/i });
        this.Documents = page.locator('a.top-nav-link').filter({ hasText: /^Documents$/ });
        this.viewDocument = page.getByRole('link', { name: 'View Documents', exact: true });
        this.savedDocumentpage = page.locator('.list-view-title');
        this.viewDocumentname = page.locator('tr[role="row"]').nth(1).locator('a.field-link').first();
        this.firstTargetCheckbox = page.locator('tr[role="row"]').nth(1).locator('td').first();
        this.selectedDisplayCount = page.locator('button').filter({ hasText: 'Selected:' }).filter({ hasText: '1' }).first();
    }

    async UseronHomePage() {
        await this.homepageidentifier.waitFor({ state: 'visible', timeout: 150000 });
        return this.homepageidentifier;
    }

    async ClickViewDocument() {
        await this.Documents.hover();
        await this.page.waitForTimeout(2000);
        await this.viewDocument.waitFor({ state: 'visible', timeout: 80000 });
        await this.viewDocument.click();
        await this.savedDocumentpage.waitFor({ state: 'visible', timeout: 80000 });
    }

    async SavedDocument() {
        await this.savedDocumentpage.waitFor({ state: 'visible', timeout: 80000 });
        return this.savedDocumentpage;
    }


    async SavedDocumentsSeen() {
        const createDocumentPageObj = new createDocumentPage(this.page);
        await createDocumentPageObj.ClickCreateDocument();
        await createDocumentPageObj.UploadDocument();
        await createDocumentPageObj.validateFileDetails();
        await createDocumentPageObj.ClickSave();
        await expect(createDocumentPageObj.DocumentRevisions()).toBeVisible({ timeout: 80000 });
        await this.Documents.hover();
        await this.page.waitForTimeout(2000);
        await this.viewDocument.waitFor({ state: 'visible', timeout: 80000 });
        await this.viewDocument.click();
        await this.savedDocumentpage.waitFor({ state: 'visible', timeout: 80000 });
        await expect(this.viewDocumentname).toBeVisible({ timeout: 80000 });
    }

    async ClickFirstDocument() {
        await this.firstTargetCheckbox.waitFor({ state: 'visible', timeout: 80000 });
        await this.firstTargetCheckbox.click();

    }

    async SelectedDisplayCount() {
        await this.selectedDisplayCount.waitFor({ state: 'visible', timeout: 80000 });
        return this.selectedDisplayCount;
    }
}

