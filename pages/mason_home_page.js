import test, { expect } from 'playwright/test';
const homepage_locator =JSON.parse(JSON.stringify(require('../object_repositories/mason_home_page_repo.json')));

exports.HomePage = class HomePage{
    constructor(page){
        this.page=page;
        this.homepage_searchbarplaceholder=page.getByPlaceholder(homepage_locator.homepage_searchbarplaceholder);
        this.homepage_searchbutton=page.getByLabel(homepage_locator.homepage_searchbutton, { exact: true });
        //this.homepage_signin=page.getByRole('button', { name: homepage_locator.homepage_signin,exact:true });
        this.homepage_signin=page.locator(homepage_locator.homepage_signin);   
        this.homepage_cart=page.getByRole('button', { name: homepage_locator.homepage_cart }); 
        this.homepage_category=page.getByRole('button', { name: homepage_locator.homepage_category }); 
             
    }

    async displaySearchBar(){
        await this.homepage_searchbarplaceholder.waitFor({ state: 'visible' });
        await this.homepage_searchbutton.waitFor({ state: 'visible' });
        await expect(this.homepage_searchbarplaceholder).toBeVisible();
        await expect(this.homepage_searchbutton).toBeVisible();
    }

    async displaySignIn(){
        await this.homepage_signin.waitFor({ state: 'visible' });
        await expect(this.homepage_signin).toBeVisible();
    }

    async displayMiniCartIcon(){
        await this.homepage_cart.waitFor({ state: 'visible' });
        await expect(this.homepage_cart).toBeVisible();
    }

    async displayCategory(){
        await this.homepage_category.waitFor({ state: 'visible' });
        await expect(this.homepage_category).toBeVisible();
    }
    async displaySiteLogo(brandLogoName){
        await expect(this.page.getByRole('link', { name: brandLogoName })).toBeVisible();
    }
    async displayHeroBanner(bannerName){
        await expect(this.page.getByRole('link', { name: bannerName })).toBeVisible();
    }
    async displayFooter(footerName){
        await expect(this.page.getByText(footerName)).toBeVisible();
    }

    async clickOnHomePageSignIn(){
        await this.homepage_signin.click();
    }

    async closeSignedInDrawer(){
        await this.page.getByRole('button').nth(1).click();
    }

}
