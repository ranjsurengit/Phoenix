import { test, expect } from '@playwright/test';

export class calendarPage {
  constructor(page,) {
    this.page = page;
     this.iframe = page.frameLocator('iframe');

    this.calendarMenu = page.locator('a').filter({ hasText: 'Calendar' });
    this.meetingLink = page.getByRole('link', { name: 'Schedule Meeting', exact: true });
    this.subject = this.iframe.locator(`//input[@id='name']`) ;
    this.start_date = page.frameLocator('iframe').locator(`//input[@id='date_start_date']`);
    this.end_date = page.frameLocator('iframe').locator(`//input[@id='date_end_date']`);
    this.duration = page.frameLocator('iframe').locator('#duration');
    this.status = page.frameLocator('iframe').locator('#status');
    this.related_to = page.frameLocator('iframe').locator(`//input[@id='parent_type']`);
    this.location = page.frameLocator('iframe').locator(`//input[@id='location']`);
    this.saveBtn = page.frameLocator('iframe').locator(`//input[@id='SAVE_HEADER']`);
    this.cancelBtn = page.frameLocator('iframe').locator(`//input[@id='CANCEL']`);
    this.expectedMessage = 'Missing required field: Subject';


  }
  // async goto(){
  //   await this.page.waitForFunction(() => document.readyState === 'complete');
  //   await this.page.goto('https://suite8demo.suiteondemand.com/#/home');
  //   await this.page.waitForFunction(() => document.readyState === 'complete');
  // }

  async createschedule(){
    await this.page.locator('a').filter({ hasText: 'Calendar' }).hover();
    await this.page.getByRole('link', { name: 'Schedule Meeting' }).click();
    await this.page.waitForFunction(() => document.readyState === 'complete');
  }

  async verifyScheduleForm(){
    //await expect(this.page.locator('iframe').contentFrame().getByRole('heading', { name: 'CREATE', exact: true })).toBeVisible();
    await this.iframe.locator(`//div[@id='pagecontent']/div[2]/h2/span`);
  }
  async excelSerialToDateString(serial) {
  const excelEpoch = new Date(1899, 11, 30);
  const date = new Date(excelEpoch.getTime() + serial * 86400000);
  return date.toISOString().split('T')[0]; // "YYYY-MM-DD"
}

  async fillScheduleForm(calendarData){
       //await this.subject.waitFor({state: 'visible',timeout: 80000});
        if (calendarData.SUBJECT) {
        await this.subject.fill(String(calendarData.SUBJECT));
        }
        //await this.start_date.waitFor({state: 'visible',timeout: 80000});
        // const startDate = this.excelSerialToDateString(calendarData.START_DATE);
        // const endDate = this.excelSerialToDateString(calendarData.END_DATE);
        await this.start_date.waitFor({state: 'visible',timeout: 80000});
        await this.start_date.fill(String(calendarData.START_DATE));
        await this.end_date.waitFor({state: 'visible',timeout: 80000});
        await this.end_date.fill(String(calendarData.END_DATE));
        await this.duration.waitFor({state: 'visible',timeout: 80000});
        await this.duration.selectOption(calendarData.DURATION);
        await this.status.waitFor({state: 'visible',timeout: 80000});
        await this.status.selectOption(calendarData.STATUS);
        //await this.related_to.waitFor({state: 'visible',timeout: 80000});
        //await this.related_to.selectOption(calendarData.RELATED_TO);
        await this.location.waitFor({state: 'visible',timeout: 80000});
        await this.location.fill(calendarData.LOCATION);

  }

  async saveButtonVisibility(){
   
     await this.saveBtn.waitFor({state: 'visible',timeout: 90000});
        await expect(this.saveBtn).toBeVisible();

}
async saveButtonEnabled()

    {
       
         await this.saveBtn.waitFor({state: 'visible',timeout: 90000});
        await expect(this.saveBtn).toBeEnabled();
    }

   async clickSaveButton(){
       await this.saveBtn.waitFor({state: 'visible',timeout: 90000});
       await this.saveBtn.click();
   }
  async verifyScheduleMeeting(calendarData){
      //await this.iframe.waitForFunction(() => document.readyState === 'complete');
       await expect(this.iframe.getByRole('heading', { name: calendarData.SUBJECT })).toBeVisible({timeout: 30000});
  
      //await expect(this.iframe.locator(`//h2[@class='module-title-text']`)).toHaveText(calendarData.SUBJECT, {timeout: 30000});

  }
  
async verifyErrorMessage(){  
   //await this.page.waitFor({state: 'visible',timeout: 90000});
  await expect(this.iframe.getByText(this.expectedMessage)).toBeVisible({timeout: 100000});  
 //await expect(this.iframe.locator(`//scrm-dynamic-label[@class='error']`)).toHaveText(this.expectedMessage, {timeout: 30000});
}
} 