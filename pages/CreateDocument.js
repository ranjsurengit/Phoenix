import { expect } from '@playwright/test';
import path from 'path';

export class createDocumentPage {

    constructor(page) {
        this.page = page;
        //this.homepageidentifier=page.locator('.visible-xs first-tab-xs dropdown-toggle');
        //this.homepageidentifier = page.getByRole('link', { name: 'SUITECRM DASHBOARD', exact: true });
        this.homepageidentifier = page.frameLocator('iframe').getByRole('link', { name: /SUITECRM DASHBOARD/i });
        this.Documents = page.locator('a.top-nav-link').filter({ hasText: /^Documents$/ });
        this.createDocument = page.getByRole('link', { name: 'Create Document', exact: true });
        this.overview = page.locator('#ngb-nav-0');
        this.upload = page.locator('.upload-label-container');
        this.fileInput = page.locator('input[type="file"]');
        this.documentNamelabel = page.locator('.field-name-document_name input');
        this.revision = page.locator('.field-name-revision input');
        this.activeDate = page.locator('.field-name-active_date input[placeholder="yyyy-mm-dd"]');
        this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
        this.cancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
        this.revisionbelow = page.getByText('Document Revisions');
        this.popupBaseSelector = 'span.dynamic-label';
        this.okButton = page.locator('button:has-text("Ok"), div[role="button"]:has-text("Ok")');
    }
    async UseronHomePage() {
        await this.homepageidentifier.waitFor({ state: 'visible', timeout: 150000 });
        return this.homepageidentifier;
    }

    async ClickCreateDocument() {
        //await this.createDocument.waitFor({ state: 'visible', timeout: 150000 });
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(2000);
        await this.Documents.hover();
        await this.createDocument.waitFor({ state: 'visible', timeout: 150000 });
        await this.page.waitForTimeout(2000);
        await this.createDocument.click();
        //await this.createDocument.waitFor({ state: 'visible', timeout: 80000 });
    }

    async ViewCreateDocument() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.overview.waitFor({ state: 'visible', timeout: 80000 });
        await expect(this.overview).toBeVisible({ timeout: 80000 });
    
    }

    OverviewTab() {
        return this.overview;
    }

    async OverviewTabClick() {
        await this.overview.click();
    }

    async UploadDocument(filePath) {
        await this.upload.click();
        const defaultPath = path.join(process.cwd(), 'test-data', 'Test1.xlsx');
        const resolvedPath = filePath || defaultPath;
        await this.fileInput.setInputFiles(resolvedPath);
    }

    FileDetails() {
        return {
            documentName: this.documentNamelabel,
            revision: this.revision,
            activeDate: this.activeDate
        };
    }

    async setupDocumentWithUpload() {
        await expect(await this.UseronHomePage()).toBeVisible({ timeout: 80000 });
        await this.ClickCreateDocument();
        await expect(this.OverviewTab()).toBeVisible({ timeout: 80000 });
        await this.UploadDocument();
    }

    async validateFileDetails() {
        const { documentName, revision, activeDate } = this.FileDetails();
        await expect(await this.FileDetails().documentName).toBeVisible({ timeout: 80000 });
        await expect(await this.FileDetails().revision).toBeVisible({ timeout: 80000 });
        await expect(await this.FileDetails().activeDate).toBeVisible({ timeout: 80000 });
        await expect(documentName).not.toBeEmpty();
        await expect(revision).not.toBeEmpty();
        await expect(activeDate).not.toBeEmpty();
    }

    async ClickSave() {
        await this.saveButton.click();
        await this.page.waitForTimeout(2000);
    }

    async ClickCancel() {
        await this.cancelButton.click();
    }

    async ClickOkonPopup() {
        await this.page.getByRole('button', { name: 'Ok', exact: true }).click();
    }

    ViewPopupMessage(message) {
        return this.page.locator(this.popupBaseSelector).filter({ hasText: message });
    }

    DocumentRevisions() {
        return this.revisionbelow;
    }

}

