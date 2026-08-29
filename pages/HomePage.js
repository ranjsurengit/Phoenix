import { expect } from '@playwright/test';
import path from 'path';
import { createDocumentPage } from './CreateDocument.js';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.homepageidentifier = page.frameLocator('iframe').getByRole('link', { name: /SUITECRM DASHBOARD/i });
        this.moreMenu = page.getByText('More', { exact: true });
        this.dropdownMenu = page.locator('.more-menu');
        this.actionidentifier = page.frameLocator('iframe').getByRole('link', { name: /ACTIONS/i });
        this.add_dashlet = page.frameLocator('iframe').getByRole('button', { name: 'Add Dashlets', exact: true });
        this.add_dashlet_popup_title = page.frameLocator('iframe').getByRole('heading', { name: 'Add Dashlets', exact: true });
        this.popup_tab = page.frameLocator('iframe').locator('a').filter({ hasText: 'Module' });
        this.choose_dashlet = page.frameLocator('iframe').locator('a').filter({ hasText: 'My Invoices' });
        this.Closebutton = page.frameLocator('iframe').locator('.modal-add-dashlet .modal-footer button');
        this.homepageinvoicedashlet = page.frameLocator('iframe').locator('.dashlet-title').filter({ hasText: 'My Invoices' }).first();
        this.userimage = page.locator('scrm-image[image="user"]');
        this.username = page.locator('.global-user-name');
    }
    
    async UseronHomePage() {
        await this.homepageidentifier.waitFor({ state: 'visible', timeout: 150000 });
        await this.page.frameLocator('iframe').locator('#pageContainer img[src*="loading"]').waitFor({ state: 'detached', timeout: 60000 }).catch(() => {});
        return this.homepageidentifier;
    }

    async HoverMore() {
        await this.moreMenu.waitFor({ state: 'visible', timeout: 80000 });
        await this.moreMenu.hover();
        await this.page.waitForTimeout(2000);
    }

    async MoreMenuDisplayed() {
        await this.dropdownMenu.waitFor({ state: 'visible', timeout: 80000 });
        return this.dropdownMenu;
    }

    ViewActionButton() {
        return this.actionidentifier;
    }

    async ActionButtonIsDisplayed() {
        await this.actionidentifier.waitFor({ state: 'visible', timeout: 80000 });
        return this.actionidentifier;
    }

    async ClickActionButton() {
        await this.page.frameLocator('iframe').locator('#pageContainer img[src*="loading"]').waitFor({ state: 'detached', timeout: 60000 }).catch(() => {});
        await this.actionidentifier.waitFor({ state: 'visible', timeout: 80000 });
        await this.actionidentifier.click();
    }

    ViewAddDashlet() {
        return this.add_dashlet;
    }

    async ClickAddDashlet() {
        await this.add_dashlet.waitFor({ state: 'visible', timeout: 160000 });
        await this.add_dashlet.click();
        await this.page.evaluate(() => {
            const iframe = document.querySelector('iframe');
            if (iframe && iframe.contentWindow && iframe.contentWindow.SUGAR && iframe.contentWindow.SUGAR.mySugar) {
                iframe.contentWindow.SUGAR.mySugar.showDashletsDialog();
            }
        }).catch(() => {});
    }

    async AddDashletPopupDisplayedTitle() {
        await this.add_dashlet_popup_title.waitFor({ state: 'visible', timeout: 160000 });
        return this.add_dashlet_popup_title;
    }

    async EnsureAddDashletPopupOpened() {
        await this.page.frameLocator('iframe').locator('#pageContainer img[src*="loading"]').waitFor({ state: 'detached', timeout: 60000 }).catch(() => {});
        const isVisible = await this.add_dashlet_popup_title.isVisible().catch(() => false);
        if (!isVisible) {
            await this.ActionButtonIsDisplayed();
            await this.ClickActionButton();
            await this.ClickAddDashlet();
        }
        await this.AddDashletPopupDisplayedTitle();
    }

    async ClickPopupTab() {
        await this.page.frameLocator('iframe').locator('#dashletsList img[src*="loading"]').waitFor({ state: 'detached', timeout: 60000 }).catch(() => {});
        await this.popup_tab.waitFor({ state: 'visible', timeout: 160000 });
        await this.popup_tab.click();
    }

    async ChooseDashlet() {
        await this.choose_dashlet.waitFor({ state: 'visible', timeout: 160000 });
        await this.choose_dashlet.click();
    }

    async CloseButton() {
        await this.Closebutton.waitFor({ state: 'visible', timeout: 160000 });
        await this.Closebutton.click();
    }   
    
    async InvoiceDashletDisplayed() {
        await this.homepageinvoicedashlet.waitFor({ state: 'visible', timeout: 160000 });
        return this.homepageinvoicedashlet;
    }

    async HoverUserIcon() {
        await this.userimage.waitFor({ state: 'visible', timeout: 80000 });
        await this.userimage.hover();
        await this.page.waitForTimeout(2000);
    }

    async UserImageDisplayed() {
        await this.userimage.waitFor({ state: 'visible', timeout: 80000 });
        await this.userimage.hover();
        await this.page.waitForTimeout(2000);
        return this.userimage;
    }

    async UsernameDisplayed() {
        await this.username.waitFor({ state: 'visible', timeout: 160000 });
        return this.username;
    }

    async UserNameDisplayed() {
        await this.username.waitFor({ state: 'visible', timeout: 160000 });
        return this.username;
    }
}


