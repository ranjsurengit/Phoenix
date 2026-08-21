import { expect } from '@playwright/test';

export class LoginPage {

  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('#login-button');
    
    this.loginErrorMessage = page.getByText('Login credentials incorrect,');
    }

  async navigateToLoginPage() {
    await this.page.goto(process.env.BASE_URL);
  }

  async loginStandard() {
    await this.usernameInput.fill(process.env.SUITE_USERNAME);
    await this.passwordInput.fill(process.env.SUITE_PASSWORD);
    await this.loginButton.click();
  }
    async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(process.env.BASE_URL + '#/home');

  }
  async invalidLogin(){
     await this.usernameInput.fill(process.env.SUITE_USERNAME);
     await this.passwordInput.fill(process.env.SUITE_WRONGPASSWORD);
     await this.loginButton.click();
  }
    async verifyLoginError() {
    await expect(this.loginErrorMessage).toBeVisible();
  }


}

