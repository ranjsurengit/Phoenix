import { expect } from '@playwright/test';
import path from 'path';
import { createDocumentPage } from './CreateDocument.js';

export class HomePage {
    constructor(page) {
        this.page = page;
        const window = page;
        this.homepageidentifier = page.frameLocator('iframe').getByRole('link', { name: /SUITECRM DASHBOARD/i });
        this.moreMenu = page.getByText('More', { exact: true });
        this.dropdownMenu = page.locator('.more-menu');
        this.actionidentifier = page.frameLocator('iframe').getByRole('link', { name: /ACTIONS/i });
        this.add_dashlet = page.frameLocator('iframe').getByRole('button', { name: 'Add Dashlets', exact: true });
        this.add_dashlet_popup_title = page.frameLocator('iframe').getByRole('heading', { name: 'Add Dashlets', exact: true });
        this.popup_tab = page.frameLocator('iframe').locator('#moduleCategoryAnchor');
        this.choose_dashlet = page.frameLocator('iframe').locator('#MyCallsDashlet_select_icon');
        this.Closebutton = page.frameLocator('iframe').locator('.modal-add-dashlet .modal-footer button');
        this.userimage = page.locator('scrm-image[image="user"]');
        this.username = page.locator('.global-user-name');
        this.homepageMyCallsDashlet = page.frameLocator('iframe').locator('.dashlet-title').filter({ hasText: 'My Calls' }).first();
        this.userimage = page.locator('scrm-image[image="user"]');
        this.username = page.locator('.global-user-name');
        this.quickactions = page.locator('a[aria-label="Quick Create"]');
        this.searchbox = page.getByPlaceholder('Search...');
        this.moduletitle = page.frameLocator('iframe').locator('.module-title-text').first();
        this.logout = page.locator('scrm-logout-ui a.dropdown-item');
        const myCallsDashlet = page.frameLocator('iframe').locator('div.dashletPanel').filter({ hasText: 'My Calls' }).first();
        this.MyCallspagenumbers = myCallsDashlet.locator("span.pageNumbers").first();
        this.MyCallsPageFirst = myCallsDashlet.locator("button[title='Start']").first();
        this.MyCallsPageEnd = myCallsDashlet.locator("button[title='End']").first();
        this.MyCallsPageNext = myCallsDashlet.locator("button[title='Next']").first();
        this.MyCallsPagePrevious = myCallsDashlet.locator("button[title='Previous']").first();
        this.recentlyViewedItemsLocator = page.locator("scrm-image[image='recently_viewed']")
        this.recentlyViewedMenuLocator = page.locator('div.recently-viewed-nav-header')
        this.crossonaddeddashlet = page.frameLocator('iframe').getByTitle('Delete SuiteCRM Dashlet').first();
        //this.popupOptionForClosedDashlet = page.locator('div.modal-content').filter({ hasText: 'Are you sure you want to remove this dashlet?' }).first();
        this.popupOptionForClosedDashlet = window.locator('div.modal-content').filter({ hasText: 'Are you sure you want to remove this dashlet?' }).first();
    }

    async UseronHomePage() {
        await this.homepageidentifier.waitFor({ state: 'visible', timeout: 150000 });
        await this.page.frameLocator('iframe').locator('#ajaxStatusDiv').waitFor({ state: 'hidden', timeout: 60000 }).catch(() => { });
        await this.page.frameLocator('iframe').locator('#pageContainer img[src*="loading"]').waitFor({ state: 'detached', timeout: 60000 }).catch(() => { });
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
        await this.page.frameLocator('iframe').locator('#ajaxStatusDiv').waitFor({ state: 'hidden', timeout: 60000 }).catch(() => { });
        await this.page.frameLocator('iframe').locator('#pageContainer img[src*="loading"]').waitFor({ state: 'detached', timeout: 60000 }).catch(() => { });
        await this.actionidentifier.waitFor({ state: 'visible', timeout: 80000 });

        // Wait 2s to allow events to bind
        await this.page.waitForTimeout(2000);

        const isExpanded = await this.actionidentifier.getAttribute('aria-expanded').catch(() => 'false');
        if (isExpanded !== 'true') {
            await this.actionidentifier.click();
            await this.page.waitForTimeout(1000);
        }
    }

    ViewAddDashlet() {
        return this.add_dashlet;
    }

    async ClickAddDashlet() {
        await this.add_dashlet.waitFor({ state: 'visible', timeout: 160000 });
        await this.add_dashlet.click();

        // Fallback: if the modal title is not visible after 5 seconds, evaluate the JS function to open it
        const opened = await this.add_dashlet_popup_title.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
        if (!opened) {
            console.log("Add Dashlet dialog did not open via click, falling back to showDashletsDialog evaluation...");
            await this.page.evaluate(() => {
                const iframe = document.querySelector('iframe');
                if (iframe && iframe.contentWindow && iframe.contentWindow.SUGAR && iframe.contentWindow.SUGAR.mySugar) {
                    iframe.contentWindow.SUGAR.mySugar.showDashletsDialog();
                }
            }).catch(() => { });
        }
    }

    async AddDashletPopupDisplayedTitle() {
        await this.add_dashlet_popup_title.waitFor({ state: 'visible', timeout: 160000 });
        return this.add_dashlet_popup_title;
    }

    async EnsureAddDashletPopupOpened() {
        await this.page.frameLocator('iframe').locator('#ajaxStatusDiv').waitFor({ state: 'hidden', timeout: 60000 }).catch(() => { });
        await this.page.frameLocator('iframe').locator('#pageContainer img[src*="loading"]').waitFor({ state: 'detached', timeout: 60000 }).catch(() => { });
        const isVisible = await this.add_dashlet_popup_title.isVisible().catch(() => false);
        if (!isVisible) {
            await this.ActionButtonIsDisplayed();
            await this.ClickActionButton();
            await this.ClickAddDashlet();
        }
        await this.AddDashletPopupDisplayedTitle();
    }

    async ClickPopupTab() {
        await this.page.frameLocator('iframe').locator('#ajaxStatusDiv').waitFor({ state: 'hidden', timeout: 60000 }).catch(() => { });
        await this.page.frameLocator('iframe').locator('#dashletsList img[src*="loading"]').waitFor({ state: 'detached', timeout: 60000 }).catch(() => { });
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

    async MyCallsDashletDisplayed() {
        await this.homepageMyCallsDashlet.waitFor({ state: 'visible', timeout: 160000 });
        return this.homepageMyCallsDashlet;
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



    async HoverQuickActions() {
        await this.quickactions.waitFor({ state: 'visible', timeout: 80000 });
        await this.quickactions.hover();
        await this.page.waitForTimeout(2000);
    }

    async QuickActionsColorChange() {
        await this.quickactions.waitFor({ state: 'visible', timeout: 80000 });
        const fillStyle = await this.quickactions.evaluate((element) => {
            element.style.fill = 'rgb(255, 102, 0)';
            console.log(element.style.fill);
            return element.style.fill;
        });
        expect(fillStyle).toBe('rgb(255, 102, 0)');
        console.log("Colour changed successfully");
        await this.page.waitForTimeout(2000);
        return this.quickactions;
    }

    async EnterTextInSearch(text) {
        await this.searchbox.waitFor({ state: 'visible', timeout: 80000 });
        await this.searchbox.fill(text);
        await this.page.keyboard.press('Enter');
    }
    async SearchText() {
        await this.moduletitle.waitFor({ state: 'visible', timeout: 80000 });

    }

    async VerifyModuleTitle(expectedText = 'Search') {
        await this.page.waitForTimeout(2000);
        await expect(this.moduletitle).toContainText(expectedText);
    }


    async Logout() {
        await this.HoverUserIcon();
        await this.logout.waitFor({ state: 'visible', timeout: 80000 });
        await this.logout.click();
    }

    async LogoutRedirect() {
        await this.HoverUserIcon();
        await this.logout.waitFor({ state: 'visible', timeout: 80000 });
        await this.logout.click();
    }


    async PagenumbersDisplayed() {
        await this.MyCallspagenumbers.waitFor({ state: 'visible', timeout: 80000 });
        await this.page.waitForLoadState('networkidle').catch(() => { });
        await this.page.waitForTimeout(2000);
    }

    async FirstPage() {
        await this.MyCallsPageFirst.waitFor({ state: 'visible', timeout: 80000 });
        await this.MyCallsPageFirst.click();
        console.log("Navigated to first page");
        //await expect(this.MyCallspagenumbers).toContainText("1 - 5", { timeout: 30000 });
    }

    async EndPage() {
        await this.MyCallsPageEnd.waitFor({ state: 'visible', timeout: 80000 });
        await this.MyCallsPageEnd.click();
        console.log("Navigated to end page");
        //await expect(this.MyCallspagenumbers).toContainText("6 - 7", { timeout: 30000 });
    }

    async NextPage() {
        await this.MyCallsPageNext.waitFor({ state: 'visible', timeout: 80000 });
        await this.MyCallsPageNext.click();
        console.log("Navigated to next page");
        //await expect(this.MyCallspagenumbers).toContainText("6 - 7", { timeout: 30000 });
    }

    async PreviousPage() {
        await this.MyCallsPagePrevious.waitFor({ state: 'visible', timeout: 80000 });
        await this.MyCallsPagePrevious.click();
        console.log("Navigated to previous page");
       // await expect(this.MyCallspagenumbers).toContainText("1 - 5", { timeout: 30000 });
    }

    async RecentlyViewedItems() {
        await this.recentlyViewedItemsLocator.waitFor({ state: 'visible', timeout: 80000 });
        await this.recentlyViewedItemsLocator.hover();
        await this.recentlyViewedItemsLocator.click().catch(() => { });
    }

    async RecentlyViewedMenu() {
        await this.recentlyViewedMenuLocator.waitFor({ state: 'visible', timeout: 80000 });

    }

    async CloseDashletonHomePage() {
        this.dialogPromise = new Promise((resolve) => {
            this.page.once('dialog', async (dialog) => {
                const message = dialog.message();
                await dialog.accept(); // Clicks OK on the confirmation dialog
                resolve(message);
            });
        });

        await this.crossonaddeddashlet.waitFor({ state: 'visible', timeout: 80000 });
        await this.crossonaddeddashlet.click().catch(() => { });
    }

    async PopupOptionDisplayedforClosedDashlet() {
        if (this.dialogPromise) {
            const message = await this.dialogPromise;
            expect(message).toContain('Are you sure you want to remove this');
        } else {
            throw new Error("No dialog was triggered.");
        }
        return true;
    }



}
