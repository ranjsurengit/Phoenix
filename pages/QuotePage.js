import { test, expect } from '@playwright/test';

class QuotePage {
  constructor(page,) {
    this.page = page;
    // Iframe reference
    this.iframe = page.frameLocator('iframe');
    this.quotesMenu = page.locator('a').filter({ hasText: /^Quotes$/ });
    this.createQuoteLink = page.getByRole('link', { name: 'Create Quote', exact: true });        
    this.assigned_to = page.frameLocator('iframe').locator(`//input[@id='assigned_user_name']`);
    this.approval = page.frameLocator('iframe').locator(`//select[@id='approval_status']`);
    this.oppertunity = page.frameLocator('iframe').locator(`//input[@id='opportunity']`);
    this.invoice = page.frameLocator('iframe').locator(`//select[@id='invoice_status']`);
    this.payment = page.frameLocator('iframe').locator(`//select[@id='term']`);
    this.grand_total = page.frameLocator('iframe').locator(`//input[@id='total_amount']`);
    //this.saveBtn = this.iframe.getByRole('button', { name: 'Save' });
    this.expectedMessage = 'Missing required field: Title';

  }
  // async goto(){
  //   //await this.page.waitForFunction(() => document.readyState === 'complete');
  //   await this.page.waitForLoadState('networkidle');
  //   await this.page.goto('https://suite8demo.suiteondemand.com/#/home');
  //   //await this.page.waitForLoadState('networkidle');
  //   //await this.page.waitForFunction(() => document.readyState === 'complete');    
  // }

  async createQuote(){    
    // Wait for Quotes menu
    await this.quotesMenu.waitFor({ state: 'visible', timeout: 80000  });
    await this.quotesMenu.hover();

    // Wait for Create Quote
    await this.createQuoteLink.waitFor({ state: 'visible', timeout: 80000  });
    await this.createQuoteLink.click();

    //await this.page.locator('a:has-text("Quotes")').waitFor({ state: 'visible' });
    //await this.page.locator('a').filter({ hasText: /^Quotes$/ }).hover();
    
    //await this.page.getByRole('link', { name: 'Create Quote' }).click();
}

async verifyCreateQuoteForm() {

 //await expect(this.page.locator('iframe').contentFrame().getByText('Quotes CREATE Create Save')).toBeVisible();
 await this.page *['id="pagecontent"]/div[2]/h2/span'];
 
 }

async fillQuoteForm(dataTable){

    const [title, valid_until, quote_stage] = dataTable.rows()[0];
    // Title
    const titleInput = this.iframe.locator('#name');
    //await titleInput.waitFor({ state: 'visible', timeout: 80000  });
    await titleInput.fill(title);

    // Expiration
    const expirationInput = this.iframe.locator('#expiration');
    //await expirationInput.waitFor({ state: 'visible', timeout: 80000  });
    await expirationInput.fill(valid_until);

    // Stage
    const stageSelect = this.iframe.locator('#stage');
    //await stageSelect.waitFor({ state: 'visible', timeout: 80000 });
    await stageSelect.selectOption(quote_stage);
    // const approval_status = this.iframe.locator('#approval_status')
    // await approval_status.selectOption(approval_status);
    // const contact = this.iframe.locator('#billing_contact')
    // await contact.selectOption(contact);
    // const account = this.iframe.locator('#billing_account')
    // await account.selectOption(account);
    // const grand_total = this.iframe.locator('#total_amount')
    // await grand_total.fill(grand_total);
     


}
async click_Save_Btn(save){

 //await this.page.frameLocator('iframe').locator('//input[@id="'+save+'"]').click();
  const saveBtn = this.iframe.locator('//input[@id="'+save+'"]');
   // await saveBtn.waitFor({ state: 'visible', timeout: 80000  });
    await saveBtn.click();
}

async newQuoteSummary(){
    await expect(
      this.iframe.getByRole('heading', { name: 'test quote' })
    ).toBeVisible();

//await expect(this.iframe.contentFrame().getByRole('heading', { name: 'test quote' })).toBeVisible();
}



async leaveQuote(dataTable){
    const [title, valid_until, quote_stage] = dataTable.rows()[0];

    // Title
    const titleInput = this.iframe.locator('#name');
    await titleInput.waitFor({ state: 'visible', timeout: 80000  });
    await titleInput.fill(title);

    // Expiration
    const expirationInput = this.iframe.locator('#expiration');
    await expirationInput.waitFor({ state: 'visible', timeout: 80000  });
    await expirationInput.fill(valid_until);

    // Stage
    const stageSelect = this.iframe.locator('#stage');
    await stageSelect.waitFor({ state: 'visible', timeout: 80000  });
    await stageSelect.selectOption(quote_stage);


}


async verifyErrorMessage(errorMessage){

  await expect(this.iframe.getByText(errorMessage)).toBeVisible();
  
  //await this.page.frameLocator('iframe').getByText(errorMessage);
}

async createFieldsEditable(){
    await this.assigned_to.waitFor({state: 'visible',timeout: 80000});
        await expect(this.assigned_to).toBeEditable();
        await this.approval.waitFor({state: 'visible',timeout: 80000});
        await expect(this.approval).toBeEditable();
        await this.oppertunity.waitFor({state: 'visible',timeout: 80000});
        await expect(this.oppertunity).toBeEditable();
        await this.invoice.waitFor({state: 'visible',timeout: 80000});
        await expect(this.invoice).toBeEditable();
        await this.payment.waitFor({state: 'visible',timeout: 80000});
        await expect(this.payment).toBeEditable();
        await this.grand_total.waitFor({state: 'visible',timeout: 80000});
        await expect(this.grand_total).toBeEditable();
        

    
}

async saveButtonVisibility(save){
   // await this.saveBtn.waitFor({state: 'visible',timeout: 80000});
const saveBtn = this.iframe.locator('//input[@id="'+save+'"]');
   // await saveBtn.waitFor({ state: 'visible', timeout: 80000  });
    //await saveBtn.toBeVisible();

    // const saveBtn = this.iframe.getByRole('button', { name: 'Save' });
        await expect(saveBtn).toBeVisible();

}
async saveButtonEnable(save)
    {
        //await this.createName.waitFor({state: 'visible',timeout: 90000});
        //await this.saveBtn.waitFor({state: 'visible',timeout: 90000});
        //const saveBtn = this.iframe.getByRole('button', { name: 'Save' });
        const saveBtn = this.iframe.locator('//input[@id="'+save+'"]');
        await expect(saveBtn).toBeEnabled();
    }

}

module.exports = { QuotePage }


