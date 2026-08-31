import { createBdd } from 'playwright-bdd';

import { readExcelData } from '../utils/excelUtils.js';

import { test } from '../fixtures/fixtures.js';

const { Given, When, Then, Before} = createBdd(test);
const data1 = readExcelData('calendar_testdata.xlsx', 'Sheet1');
// let calendar;
// Before(async ({ page }) => {
//   await page.waitForLoadState('networkidle');
//   calendar = new calendarPage(page);
//   });

// Given('user should have logged into Suite CRM application ', async ({}) => {
//   await loginPageObj.launchApp();
//   await loginPageObj.loginUser();

  //});

// Given('I am on the Home or dashboard page', async ({calendarPageOb}) => {
//   await calendarPageOb.goto();
  
//});

Given('user is on Schedule Meeting Opened from Calendar menuBar', async ({calendarPageOb}) => {
  await calendarPageOb.createschedule();
});

Then('I verify the Schedule Meeting form is displayed', async ({calendarPageOb}) => {
  await calendarPageOb.verifyScheduleForm();
});

// Given('user is on Schedule Meeting Opened from Calendar menuBar', async ({calendarPageOb}) => {
//   await calendarPageOb.createschedule();
//   await calendarPageOb.verifyScheduleForm();    
// });

When('User entered Valid details from Excel file {string}', async ({ calendarPageOb,calendarData},testCase) => {
  const excelData = data1.find(row => row.TestCase_ID === testCase);
    console.log('data1', data1);
    console.log('Test Case:',testCase);
    console.log('Excel data :', excelData);
    //console.log('Last Name: ', excelData.LastName);
    Object.assign(calendarData,excelData);
    //console.log('Last Name: ', leadData.LastName);
    await calendarPageOb.fillScheduleForm(calendarData);
    await calendarPageOb.clickSaveButton();

    //await calendar.fillScheduleForm(arg);  
});

Then('User should see the new Schedule Meeting Page', async ({calendarPageOb,calendarData}) => {
await calendarPageOb.verifyScheduleMeeting(calendarData);  
});
When('User save & send invites schedule Meeting form without filling subject details from Excel file {string}', async ({calendarPageOb,calendarData,page}, testCase) => {
    // Find the specific row for this test
     const excelData = data1.find(row => row.TestCase_ID === testCase);
     console.log('data1', data1);
     console.log('Test Case', testCase);
     console.log('Excel Data', excelData);

     // Put the data into the empty fixture
     Object.assign(calendarData, excelData);

     // Fill out the form by passing the whole object
    await calendarPageOb.fillScheduleForm(calendarData); 
    await calendarPageOb.clickSaveButton();
});

  //await calendar.leaveField();
//});

Then('User should see an error message', async ({calendarPageOb}) => {
  await calendarPageOb.verifyErrorMessage();
});

