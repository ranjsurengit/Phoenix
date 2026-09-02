import { test, expect } from '@playwright/test';

export class QuotePage {
  constructor(page,) {
    this.page = page;
    // Iframe reference
    this.iframe = page.frameLocator('iframe');
    this.quotesMenu = page.locator('a').filter({ hasText: /^Quotes$/ });
    this.createQuoteLink = page.getByRole('link', { name: 'Create Quote', exact: true });  
    this.title = page.frameLocator('iframe').locator(`//input[@id='name']`);
    this.valid_until = page.frameLocator('iframe').locator(`//input[@id='expiration']`);
    this.quote_stage = page.frameLocator('iframe').locator(`//select[@id='stage']`);
    this.assigned_to = page.frameLocator('iframe').locator(`//input[@id='assigned_user_name']`);
    this.approval = page.frameLocator('iframe').locator(`//select[@id='approval_status']`);
    this.oppertunity = page.frameLocator('iframe').locator(`//input[@id='opportunity']`);
    this.invoice = page.frameLocator('iframe').locator(`//select[@id='invoice_status']`);
    this.payment = page.frameLocator('iframe').locator(`//select[@id='term']`);
    this.grand_total = page.frameLocator('iframe').locator(`//input[@id='total_amount']`);
    //this.saveBtn = this.iframe.getByRole('button', { name: 'Save' });
    this.saveBtn = page.frameLocator('iframe').locator(`//input[@id='SAVE']`);
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

async validateCreateQuoteForm() {

 //await expect(this.page.locator('iframe').contentFrame().getByText('Quotes CREATE Create Save')).toBeVisible();
 await this.page *['id="pagecontent"]/div[2]/h2/span'];
 
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

async excelSerialToDateString(serial) {
  const excelEpoch = new Date(1899, 11, 30);
  const date = new Date(excelEpoch.getTime() + serial * 86400000);
  return date.toISOString().split('T')[0]; // "YYYY-MM-DD"
}


async fillQuoteForm(quoteData){

   if (quoteData.TITLE) {
        await this.title.fill(String(quoteData.TITLE));
        }
        //await this.start_date.waitFor({state: 'visible',timeout: 80000});
        // const startDate = this.excelSerialToDateString(calendarData.START_DATE);
        // const endDate = this.excelSerialToDateString(calendarData.END_DATE);
        await this.valid_until.fill(String(quoteData.VALID_UNTIL));
        await this.quote_stage.selectOption(String(quoteData.QUOTE_STAGE));
        await this.invoice.selectOption(quoteData.INVOICE_STATUS);
        await this.approval.selectOption(quoteData.APPROVAL_STATUS);
        await this.grand_total.fill(String(quoteData.GRAND_TOTAL));
        await this.payment.selectOption(String(quoteData.PAYMENT_TERMS));
        //await this.status.selectOption(String(quoteData.STATUS));
        //await this.related_to.selectOption(String(quoteData.RELATED_TO));
        //await this.name.fill(String(callData.REASON));



}
async saveButtonVisibility(){
   // await this.saveBtn.waitFor({state: 'visible',timeout: 80000});
//const saveBtn = this.iframe.locator('//input[@id="'+save+'"]');
   // await saveBtn.waitFor({ state: 'visible', timeout: 80000  });
    //await saveBtn.toBeVisible();

    // const saveBtn = this.iframe.getByRole('button', { name: 'Save' });
     await this.saveBtn.waitFor({state: 'visible',timeout: 90000});
        await expect(this.saveBtn).toBeVisible();

}
async saveButtonEnable()

    {
        //await this.createName.waitFor({state: 'visible',timeout: 90000});
        //await this.saveBtn.waitFor({state: 'visible',timeout: 90000});
        //const saveBtn = this.iframe.getByRole('button', { name: 'Save' });
        //const saveBtn = this.iframe.locator('//input[@id="'+save+'"]');
         await this.saveBtn.waitFor({state: 'visible',timeout: 90000});
        await expect(this.saveBtn).toBeEnabled();
    }

// async clickSaveButton(){

//  //await this.page.frameLocator('iframe').locator('//input[@id="'+save+'"]').click();
//   //const saveBtn = this.iframe.locator('//input[@id="'+save+'"]');
//     await this.saveBtn.waitFor({ state: 'visible', timeout: 80000  });
//     await this.saveBtn.click();
// }

// async newQuoteSummary(){
//     await expect(
//       this.iframe.getByRole('heading', { name: 'test quote' })
//     ).toBeVisible();

// //await expect(this.iframe.contentFrame().getByRole('heading', { name: 'test quote' })).toBeVisible();
// }



async clickSaveButton(){
       await this.saveBtn.waitFor({state: 'visible',timeout: 90000});
       await this.saveBtn.click();
       await this.page.waitForFunction(() => document.readyState === 'complete');
   }
  async newQuoteSummary(quoteData){      
      //await this.page.waitFor({state: 'visible', timeout:90000});
      await expect(this.iframe.getByRole('heading', { name: quoteData.TITLE })).toBeVisible();

  }
  
async verifyErrorMessage(){   
  await expect(this.iframe.getByText(this.expectedMessage)).toBeVisible();  
}



// async verifyErrorMessage(errorMessage){

//   await expect(this.iframe.getByText(errorMessage)).toBeVisible();
  
//   //await this.page.frameLocator('iframe').getByText(errorMessage);
// }


}




