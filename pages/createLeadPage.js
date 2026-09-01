import {test, expect  } from '@playwright/test';


export class createLeadPage
 {
    constructor(page) {
        this.page=page;

        this.more=page.getByRole('link', {name:'More', exact:true});
        this.moreLeads=page.getByRole('link',{name:'Leads', exact:true});
        //this.leads = page.getByRole('link', {name: 'Leads',exact: true});
        //this.createLead = page.getByRole('link', {name: 'Create Lead',exact: true});
        //this.leads = page.locator('a.top-nav-link.nav-link-nongrouped.dropdown-toggle',{ hasText: 'Leads' });
        //this.leads = page.locator('a.top-nav-link.nav-link-nongrouped.dropdown-toggle',{ hasText: /^Leads$/ });
        //this.createLead = page.locator('a.sub-nav-link.nav-link.action-link[href*="/leads/edit"]',{ hasText: /^Create Lead$/ });
        
        //this.createLead = page.locator('a.sub-nav-link.nav-link.action-link[href*="/leads/edit"]',{ hasText: /^Create Lead$/ });
        this.leads=page.locator('a').filter({ hasText: /^Leads$/ });
        this.createLead=page.getByRole('link', { name: 'Create Lead', exact: true });
        this.firstName=page.locator('scrm-dynamic-field.dynamic-field-name-first_name input');
        this.lastName=page.locator('scrm-dynamic-field.dynamic-field-name-last_name input');
        this.jobTitle=page.locator('scrm-dynamic-field.dynamic-field-name-title input');
        this.department=page.locator('scrm-dynamic-field.dynamic-field-name-department input');
        this.accountName=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-account_name > div > .d-flex > .flex-grow-1 > .form-control');
        this.paStreet=page.locator('scrm-group-field').filter({ hasText: 'Primary Address Street' }).locator('textarea');
        this.paPostalCode=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control');
        this.paCity=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_city > div > .d-flex > .flex-grow-1 > .form-control');
        this.paState=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_state > div > .d-flex > .flex-grow-1 > .form-control');
        this.paCountry=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_country > div > .d-flex > .flex-grow-1 > .form-control');
        this.emailAddress=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-email_address > div > .d-flex > .flex-grow-1 > .form-control');
        this.description=page.locator('scrm-dynamic-field.dynamic-field-name-description textarea');
        this.mobile=page.locator('scrm-dynamic-field.dynamic-field-name-phone_mobile input');
        this.officePhone=page.locator('scrm-field.field-name-phone_work').locator('input');
        this.website=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-website > div > .d-flex > .flex-grow-1 > .form-control');
        
        
        this.saveButton=page.getByRole('button', {name: 'Save'});
        this.cancelButton=page.getByRole('button', {name: 'Cancel'});

        this.createName = page.locator('scrm-dynamic-label.record-view-name-label');
        this.starIcon=page.locator('svg-icon.sicon.image-star');

    }

    async gotoCreateLead() {
   /* const browserName=this.page.context().browser().browserType().name();
    
    if(browserName=='firefox')
    {
    await this.leads.waitFor({state: 'visible',timeout: 80000});
    await this.leads.hover();
    // await this.leads.waitFor({state: 'visible',timeout: 80000});
    // await this.leads.click();
    //await this.createLead.waitFor({state: 'visible',timeout: 80000});
    //await this.page.waitForTimeout(500);
    await this.createLead.click();
    await this.firstName.waitFor({state: 'visible',timeout: 80000});
    }
    else
    {
         await this.leads.click();
         await this.createLead.waitFor({state: 'visible',timeout: 80000});
         await this.createLead.click();
    }*/
    await this.leads.waitFor({state: 'visible',timeout: 80000});
    await this.leads.hover();
    await this.createLead.waitFor({state: 'visible',timeout: 80000});
    await this.createLead.click();
}


    async createFieldsVisibilityUI()
    {
        await this.firstName.waitFor({state: 'visible',timeout: 80000});
        await expect(this.firstName).toBeVisible();
        await this.lastName.waitFor({state: 'visible',timeout: 80000});
        await expect(this.lastName).toBeVisible();
        await this.jobTitle.waitFor({state: 'visible',timeout: 80000});
        await expect(this.jobTitle).toBeVisible();
        await this.department.waitFor({state: 'visible',timeout: 80000});
        await expect(this.department).toBeVisible();
        await this.accountName.waitFor({state: 'visible',timeout: 80000});
        await expect(this.accountName).toBeVisible();
        await this.paStreet.waitFor({state: 'visible',timeout: 80000});
        await expect(this.paStreet).toBeVisible();
        await this.paPostalCode.waitFor({state: 'visible',timeout: 80000});
        await expect(this.paPostalCode).toBeVisible();
        await this.paCity.waitFor({state: 'visible',timeout: 80000});        
        await expect(this.paCity).toBeVisible();
        await this.paState.waitFor({state: 'visible',timeout: 80000});
        await expect(this.paState).toBeVisible();
        await this.paCountry.waitFor({state: 'visible',timeout: 80000});
        await expect(this.paCountry).toBeVisible();
        await this.emailAddress.waitFor({state: 'visible',timeout: 80000});
        await expect(this.emailAddress).toBeVisible();
        await this.description.waitFor({state: 'visible',timeout: 80000});
        await expect(this.description).toBeVisible();
        await this.mobile.waitFor({state: 'visible',timeout: 80000});
        await expect(this.mobile).toBeVisible();
        await this.officePhone.waitFor({state: 'visible',timeout: 80000});
        await expect(this.officePhone).toBeVisible();
        await this.website.waitFor({state: 'visible',timeout: 80000});
        await expect(this.website).toBeVisible();

    }

    async createFieldsEditableUI()
    {
        await this.firstName.waitFor({state: 'visible',timeout: 80000});
        await expect(this.firstName).toBeEditable();
        await this.lastName.waitFor({state: 'visible',timeout: 80000});
        await expect(this.lastName).toBeEditable();
        await this.jobTitle.waitFor({state: 'visible',timeout: 80000});
        await expect(this.jobTitle).toBeEditable();
        await this.department.waitFor({state: 'visible',timeout: 80000});        
        await expect(this.department).toBeEditable();
        await this.accountName.waitFor({state: 'visible',timeout: 80000});
        await expect(this.accountName).toBeEditable();
        await this.paStreet.waitFor({state: 'visible',timeout: 80000});
        await expect(this.paStreet).toBeEditable();
        await this.paPostalCode.waitFor({state: 'visible',timeout: 80000});
        await expect(this.paPostalCode).toBeEditable();
        await this.paCity.waitFor({state: 'visible',timeout: 80000});        
        await expect(this.paCity).toBeEditable();
        await this.paState.waitFor({state: 'visible',timeout: 80000});
        await expect(this.paState).toBeEditable();
        await this.paCountry.waitFor({state: 'visible',timeout: 80000});
        await expect(this.paCountry).toBeEditable();
        await this.emailAddress.waitFor({state: 'visible',timeout: 80000});
        await expect(this.emailAddress).toBeEditable();
        await this.description.waitFor({state: 'visible',timeout: 80000});
        await expect(this.description).toBeEditable();
        await this.mobile.waitFor({state: 'visible',timeout: 80000});
        await expect(this.mobile).toBeEditable();
        await this.officePhone.waitFor({state: 'visible',timeout: 80000});
        await expect(this.officePhone).toBeEditable();
        await this.website.waitFor({state: 'visible',timeout: 80000});
        await expect(this.website).toBeEditable();

    }


    async fillCreateLead(leadData)
    {
        await this.firstName.waitFor({state: 'visible',timeout: 80000});
        await this.firstName.fill(leadData.FirstName);
        if (leadData.LastName) 
        {
        await this.lastName.waitFor({state: 'visible',timeout: 80000});
        await this.lastName.fill(leadData.LastName);
        }
        await this.jobTitle.waitFor({state: 'visible',timeout: 80000});
        await this.jobTitle.fill(leadData.JOBTITLE);
        await this.department.waitFor({state: 'visible',timeout: 80000});
        await this.department.fill(leadData.DEPARTMENT);
        await this.accountName.waitFor({state: 'visible',timeout: 80000});
        await this.accountName.fill(leadData.ACCOUNTNAME);
        await this.paStreet.waitFor({state: 'visible',timeout: 80000});
        await this.paStreet.fill(leadData.PRIMARYADDRESSSTREET);
        await this.paPostalCode.waitFor({state: 'visible',timeout: 80000});
        await this.paPostalCode.fill(String(leadData.PRIMARYADDRESSPOSTALCODE));
        await this.paCity.waitFor({state: 'visible',timeout: 80000});
        await this.paCity.fill(leadData.PRIMARYADDRESSCITY);
        await this.paState.waitFor({state: 'visible',timeout: 80000});
        await this.paState.fill(leadData.PRIMARYADDRESSSTATE);
        await this.paCountry.waitFor({state: 'visible',timeout: 80000});
        await this.paCountry.fill(leadData.PRIMARYADDRESSCOUNTRY);
        await this.emailAddress.waitFor({state: 'visible',timeout: 80000});
        await this.emailAddress.fill(leadData.EMAIL);
        await this.description.waitFor({state: 'visible',timeout: 80000});
        await this.description.fill(leadData.DESCRIPTION);
        await this.mobile.waitFor({state: 'visible',timeout: 80000});
        await this.mobile.fill(String(leadData.MOBILE));
        await this.officePhone.waitFor({state: 'visible',timeout: 80000});
        await this.officePhone.fill(String(leadData.OFFICEPHONE));
        await this.website.waitFor({state: 'visible',timeout: 80000});
        await this.website.fill(leadData.WEBSITE);
        
    }

    async saveButtonVisibilityUI()
    {
        await this.saveButton.waitFor({state: 'visible',timeout: 80000});
        await expect(this.saveButton).toBeVisible();
    }

    async saveButtonEnableUI()
    {
        await this.createName.waitFor({state: 'visible',timeout: 90000});
        await this.saveButton.waitFor({state: 'visible',timeout: 90000});
        await expect(this.saveButton).toBeEnabled();
    }

    async clickSaveButton()
    {
        await this.saveButton.waitFor({state: 'visible',timeout: 90000});
        await this.saveButton.click();
    }

    async verifyNewLeadName(leadData)
    {
    
    //await this.createName.waitFor({state: 'visible',timeout: 100000});
    await this.starIcon.waitFor({state: 'visible', timeout:90000});
    
    await expect(this.createName).toContainText(leadData.LastName);
    //await expect(page.locator('scrm-dynamic-label')).toContainText(leadData.LastName);
    }

    
}