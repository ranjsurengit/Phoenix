import { test, expect } from '@playwright/test';

export class scheduleCallPage {
  constructor(page,) {
    this.page = page;
     this.iframe = page.frameLocator('iframe');

    this.calendarMenu = page.locator('a').filter({ hasText: 'Calendar' });
    this.callLink = page.getByRole('link', { name: 'Schedule Call', exact: true });
    this.subject = this.iframe.locator(`//input[@id='name']`) ;
    this.start_date = page.frameLocator('iframe').locator(`//input[@id='date_start_date']`);
    this.start_hours = page.frameLocator('iframe').locator(`//select[@id='date_start_hours']`);
    this.start_minutes = page.frameLocator('iframe').locator('#date_start_minutes');
    this.duration_hours = page.frameLocator('iframe').locator('#duration_hours');
     this.duration_minutes = page.frameLocator('iframe').locator('#duration_minutes');
    this.direction = page.frameLocator('iframe').locator(`//select[@id='direction']`);
    this.status = page.frameLocator('iframe').locator(`//select[@id='status']`);
    this.related_to = page.frameLocator('iframe').locator('#parent_type');
    //this.name = page.frameLocator('iframe').locator(`//input[@id='parent_name']`);
    this.saveBtn = page.frameLocator('iframe').locator(`//input[@id='SAVE_HEADER']`);
    this.cancelBtn = page.frameLocator('iframe').locator(`//input[@id='CANCEL']`);
    this.expectedMessage = 'Missing required field: Subject';


  }
//   async goto(){
//     await this.page.waitForFunction(() => document.readyState === 'complete');
//     await this.page.goto('https://suite8demo.suiteondemand.com/#/home');
//     await this.page.waitForFunction(() => document.readyState === 'complete');
//   }

  async createscheduleCall(){
    await this.page.locator('a').filter({ hasText: 'Calendar' }).hover();
    await this.page.getByRole('link', { name: 'Schedule Call' }).click();
    await this.page.waitForFunction(() => document.readyState === 'complete');
  }

  async validateScheduleCallForm(){
    //await expect(this.page.locator('iframe').contentFrame().getByRole('heading', { name: 'CREATE', exact: true })).toBeVisible();
    await this.page *['id="pagecontent"]/div[2]/h2/span'];
  }
  async excelSerialToDateString(serial) {
  const excelEpoch = new Date(1899, 11, 30);
  const date = new Date(excelEpoch.getTime() + serial * 86400000);
  return date.toISOString().split('T')[0]; // "YYYY-MM-DD"
}

  async fillScheduleCallForm(callData){
       //await this.subject.waitFor({state: 'visible',timeout: 80000});
        if (callData.SUBJECT) {
        await this.subject.fill(String(callData.SUBJECT));
        }
        //await this.start_date.waitFor({state: 'visible',timeout: 80000});
        // const startDate = this.excelSerialToDateString(calendarData.START_DATE);
        // const endDate = this.excelSerialToDateString(calendarData.END_DATE);
        await this.start_date.fill(String(callData.START_DATE));
        await this.start_hours.selectOption(String(callData.START_HOURS));
        await this.start_minutes.selectOption(String(callData.START_MINUTES));
        await this.duration_hours.fill(String(callData.DURATION_HOURS));
        await this.duration_minutes.selectOption(String(callData.DURATION_MINUTES));
        await this.direction.selectOption(String(callData.DIRECTION));
        await this.status.selectOption(String(callData.STATUS));
        await this.related_to.selectOption(String(callData.RELATED_TO));
        //await this.name.fill(String(callData.REASON));

        

  }

   async clickSaveButton(){
       //await this.saveButton.waitFor({state: 'visible',timeout: 90000});
        await this.saveBtn.click();
   }
  async verifyScheduleCall(callData){
      await this.page.waitForFunction(() => document.readyState === 'complete');
      await expect(this.iframe.getByRole('heading', { name: callData.SUBJECT })).toBeVisible();

  }
  
async verifyErrorMessage(){   
  await expect(this.iframe.getByText(this.expectedMessage)).toBeVisible();  
}
} 

// async verifyErrorMessage(errorMessage){

//   await expect(this.iframe.getByText(errorMessage)).toBeVisible();
// }