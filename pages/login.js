import {test, expect} from '@playwright/test';

export class login
{
    constructor(page)
    {
        this.page=page;
        this.username=page.locator('input[name="username"]');
        this.password=page.locator('input[name="password"]');
        this.loginBtn=page.locator('#login-button');
        this.errorMessage=page.getByRole('alert');

    }

    async launchApp()
    {
        await this.page.goto(process.env.URL);
        console.log('Launched app');

    }

    async verifyTitle()
    {
        await expect(this.page).toHaveTitle(/SuiteCRM/i);
    }

    async loginUser()
    {
        await this.username.fill(process.env.USERNAME);
        await this.password.fill(process.env.PASSWORD);
        await this.loginBtn.click();
    }

    async verfySuccessfulLogin(urlText)
    {
        //await this.page.waitForTimeout(60000);
        await expect(this.page).toHaveURL(new RegExp(urlText, 'i'),{ timeout: 90000 });
    }

    async loginInvalidUser(invalidData)
    {
        await this.username.fill(invalidData.uName);
        await this.password.fill(invalidData.pWord);
        await this.loginBtn.click();

    }

    async verifyErrorMessage(expectedMessage)
    {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(expectedMessage);
    }
}