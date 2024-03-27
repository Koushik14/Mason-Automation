import test, { expect } from 'playwright/test';
const signinpage_locator =JSON.parse(JSON.stringify(require('../object_repositories/mason_signin_page_repo.json')));

exports.SignInPage = class SignInPage{
    constructor(page){
        this.page=page;
        this.signin_button_name=page.getByRole('button', { name: signinpage_locator.signin_button_name });
        this.create_account_button_name=page.getByRole('button', { name: signinpage_locator.create_account_button_name });
        this.myaccount_img_icon_name=page.getByRole('img', { name: signinpage_locator.myaccount_img_icon_name });
        this.signin_emailaddress_textbox=page.locator(signinpage_locator.signin_emailaddress_textbox);
        this.signin_password_textbox=page.locator(signinpage_locator.signin_password_textbox);      
    }

    async validateWelcomeSignInDialog(){
        await expect(this.myaccount_img_icon_name).toBeVisible();
        await expect(this.signin_button_name).toBeVisible();
        await expect(this.create_account_button_name).toBeVisible();
    }

    async validateSignInDialog(){
        await expect(this.signin_emailaddress_textbox).toBeVisible();
        await expect(this.signin_password_textbox).toBeVisible();
        await expect(this.signin_button_name).toBeVisible();
        //await expect(this.create_account_button_name).toBeVisible();
    }

    async validateWelcomeTextSignInDialog(welcomeText){
        await expect(this.page.getByText(welcomeText)).toBeVisible();
    }

    async login(enterUserName,enterPassword){
        await this.signin_emailaddress_textbox.fill(enterUserName);
        await this.signin_password_textbox.fill(enterPassword);
    }

    async clickSignIn(){
        await this.signin_button_name.click();
    }
}