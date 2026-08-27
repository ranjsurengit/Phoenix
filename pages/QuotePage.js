import { test, expect } from '@playwright/test';

class QuotePage {
  constructor(page,) {
    this.page = page;
    // Iframe reference
    this.iframe = page.frameLocator('iframe');
    this.quotesMenu = page.locator('a').filter({ hasText: /^Quotes$/ });
    this.createQuoteLink = page.getByRole('link', { name: 'Create Quote', exact: true });          
    this.saveBtn = page.getByRole('button', { name: 'Save' });
    this.expectedMessage = 'Missing required field: Title';

  }
  async goto(){
    //await this.page.waitForFunction(() => document.readyState === 'complete');
    await this.page.waitForLoadState('networkidle');
    await this.page.goto('https://suite8demo.suiteondemand.com/#/home');
    //await this.page.waitForLoadState('networkidle');
    //await this.page.waitForFunction(() => document.readyState === 'complete');    
  }

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
//   const rows = dataTable.rows(); // array of arrays
//   const [title, valid_until, quote_stage] = rows[0];
//   await this.page.waitFor({state: 'visible',timeout: 80000});
//   await this.page.frameLocator('iframe').locator(`//input[@id='name']`).fill(title);
//   await this.page.waitFor({state: 'visible',timeout: 80000});
//   await this.page.frameLocator('iframe').locator(`//input[@id='expiration']`).fill(valid_until);
//   await this.page.waitFor({state: 'visible',timeout: 80000});
//   await this.page.frameLocator('iframe').locator(`//select[@id='stage']`).selectOption(quote_stage);
  
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


// const rows = dataTable.rows(); // array of arrays
//   const [title, valid_until, quote_stage] = rows[0];

// await this.page.waitFor({state: 'visible',timeout: 80000});
//   await this.page.frameLocator('iframe').locator(`//input[@id='name']`).fill(title);
//   await this.page.waitFor({state: 'visible',timeout: 80000});
//   await this.page.frameLocator('iframe').locator(`//input[@id='expiration']`).fill(valid_until);
//   await this.page.waitFor({state: 'visible',timeout: 80000});
//   await this.page.frameLocator('iframe').locator(`//select[@id='stage']`).selectOption(quote_stage);

  
}


async verifyErrorMessage(errorMessage){

  await expect(this.iframe.getByText(errorMessage)).toBeVisible();
  
  //await this.page.frameLocator('iframe').getByText(errorMessage);
}

}

module.exports = { QuotePage }


