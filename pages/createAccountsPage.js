import { expect } from '@playwright/test';



export class CreateAccountsPage {
 
  constructor(page) {
    this.page =page;
    this.accountLink = page.locator('a').filter({ hasText: /^Accounts$/ });
    this.createAccountClick = page.getByRole('link', { name: 'Create Account' });
    this.nameInput = page.locator('.dynamic-field-name-name').getByRole('textbox');
    this.emailAddress = page.locator('scrm-composite-field').getByRole('textbox');
    this.officePhone = page.locator('.dynamic-field-name-phone_office').getByRole('textbox');
    // Billing Address
    this.billingStreet = page.locator('.dynamic-field-name-billing_address_street').getByRole('textbox');
    this.billingPostalCode = page.locator('.dynamic-field-name-billing_address_postalcode').getByRole('textbox');
    this.billingCity = page.locator('.dynamic-field-name-billing_address_city').getByRole('textbox');
    this.billingState = page.locator('.dynamic-field-name-billing_address_state').getByRole('textbox');
    this.billingCountry = page.locator('.dynamic-field-name-billing_address_country').getByRole('textbox');
   // Shipping Address
    this.shippingStreet = page.locator('.dynamic-field-name-shipping_address_street').getByRole('textbox');
    this.shippingPostalCode = page.locator('.dynamic-field-name-shipping_address_postalcode').getByRole('textbox');
    this.shippingCity = page.locator('.dynamic-field-name-shipping_address_city').getByRole('textbox');
    this.shippingState = page.locator('.dynamic-field-name-shipping_address_state').getByRole('textbox');
    this.shippingCountry = page.locator('.dynamic-field-name-shipping_address_country').getByRole('textbox');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.createdAccountDetails = page.locator('.record-view-name-label');
    
    // Error message without entering account name
    this.verifyErrorMessage = page.locator('scrm-dynamic-label').getByText('Missing required field: Name');
  }
  async navigateToCreateAccountPage() {
    await this.accountLink.waitFor({state: 'visible',timeout: 30000});
    await this.accountLink.hover();
    await this.createAccountClick.click();
  }
  async verifyEmptyAccFormDisplayed(){
     await expect(this.page).toHaveURL(/#\/accounts\/edit/);
     await expect(this.nameInput).toBeVisible({timeout: 8000});
  }
  async enterAccountName(data) {
    await this.nameInput.fill(String(data['Account Name']));
  }
  async enterEmailAddress(data) {
    await this.emailAddress.fill(String(data['Email']));
  }
  async enterOfficePhone(data) {
    await this.officePhone.fill(String(data['Office Phone']));
  }
  async enterBillingAddress(data) {
    await this.billingStreet.fill(String(data['Billing Street']));
    await this.billingPostalCode.fill(String(data['Billing Postal Code']));
    await this.billingCity.fill(String(data['Billing City']));
    await this.billingState.fill(String(data['Billing State']));
    await this.billingCountry.fill(String(data['Billing Country']));
  }
  async enterShippingAddress(data) {
    await this.shippingStreet.fill(String(data['Shipping Street']));
    await this.shippingPostalCode.fill(String(data['Shipping Postal Code']));
    await this.shippingCity.fill(String(data['Shipping City']));
    await this.shippingState.fill(String(data['Shipping State']));
    await this.shippingCountry.fill(String(data['Shipping Country']));
  }
  async clickSaveButton() {
    await this.saveButton.click();
  }
   async verifycreatedAccountDetails(){
    await expect(this.createdAccountDetails).toBeVisible();
  }
  async fillCreateAccount(data) {
    await this.enterAccountName(data);
    await this.enterEmailAddress(data);
    await this.enterOfficePhone(data);
    await this.enterBillingAddress(data);
    await this.enterShippingAddress(data);
  }
  async verifyErrorMessageForInvalidAccount(){
    await expect(this.verifyErrorMessage).toBeVisible();
  }
}
