import { test , expect } from '@playwright/test';

export class editLeadPage
{
    constructor(page)
    {
        this.page=page;
        this.editButton=page.getByRole('button', {name:' Edit ',exact:true});
        this.actionsDropdown=page.getByRole('button', {name:' Actions ',exact:true});
        this.status=page.locator('.dynamic-field-name-status .flex-grow-1 .dropdownenum .custom-select');
        this.mobile=page.locator('scrm-dynamic-field.dynamic-field-name-phone_mobile input');
        this.saveButton=page.getByRole('button', {name:' Save ',exact:true});
        this.moreInfo=page.getByRole('tab',{name:'MORE INFORMATION',exact:true});
        this.statusValue = page.locator('scrm-dynamic-field.dynamic-field-name-status scrm-dropdownenum-detail');
        this.mobileNumber = this.page.locator('scrm-dynamic-field.dynamic-field-name-phone_mobile scrm-phone-detail a');
        this.overview = page.getByRole('tab', {name: 'OVERVIEW',exact: true});
    }

    async checkOverview()
    {
        await this.overview.waitFor({ state: 'visible', timeout: 30000 });
        await expect(this.overview).toHaveAttribute('aria-selected', 'true', { timeout: 30000 });
    }

    async verifyEditButtonVisisbility()
    {
        await expect(this.editButton).toBeVisible({timeout:10000});

    }

    async verifyEditButtonEnabled()
    {
        await this.editButton.waitFor({ state: 'visible', timeout: 30000 });
        await expect(this.editButton).toBeEnabled({ timeout: 30000 });

    }

    async verifyActionsVisibility()
    {
        await expect(this.actionsDropdown).toBeVisible({timeout:10000});

    }

    async verifyActionsEnabled()
    {
        await expect(this.actionsDropdown).toBeVisible({timeout:10000});
        await expect(this.actionsDropdown).toBeEnabled({timeout:10000});

    }

    async clickEditButton()
    {
        await this.editButton.click();

    }

    async clickMoreInfo()
    {
        await this.moreInfo.waitFor({ state: 'visible', timeout: 30000 });
        await this.moreInfo.click();
        await expect(this.moreInfo).toHaveAttribute('aria-selected', 'true', { timeout: 30000 });
        await expect(this.overview).toHaveAttribute('aria-selected', 'false', { timeout: 30000 });
    }

    async clickSaveButton()
    {
        await this.saveButton.click();
        await this.page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
        await this.overview.waitFor({ state: 'visible', timeout: 30000 });

    }
    async updateStatus(updatestatus)
    {
        await this.status.waitFor({ state: 'visible', timeout: 15000 });
        await this.status.selectOption({ label: updatestatus.trim() });

    }

    async verifyStatus(expectedStatus) 
    {
        const trimmedStatus = expectedStatus.trim();
        await expect(this.statusValue).toBeVisible({timeout: 15000});
        await expect(this.statusValue).toContainText(trimmedStatus,{ timeout: 15000 });
    }

    async verifyMobile(expectedMobile)
    {
        const trimmedMobile = expectedMobile.trim();
        await expect(this.mobileNumber).toContainText(trimmedMobile);

    }
    async updateMobile(updatemobile)
    {
        await this.mobile.waitFor({ state: 'visible', timeout: 15000 });
        await this.mobile.fill(updatemobile.trim());

    }
}