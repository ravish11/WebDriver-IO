import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import TopMenu from '../pageobjects/top.menu.js';
import PackagePage from '../pageobjects/package.page.js';
import HomePage from '../pageobjects/home.page.js';

const pages = {
    login: LoginPage,
    home: TopMenu,
    PackagePage: PackagePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


When(/^I login with valid credentials$/, async () => {
    let username = 'kloudship.qa.automation@mailinator.com'
    let password = 'Password1'
    await LoginPage.login(username, password)
    return true
});

Then(/^I should see a page title saying (.*)$/, async (message) => {
    await expect(browser).toHaveTitle(message)
});


When(/^I click package icon on home page$/, async () => {
    await HomePage.packageBtn.click()

});

When(/^I click add package icon on top menu$/, async () => {
    await TopMenu.packageBtn.click()
});

Then(/^Add new package detail opened$/, async () => {
    await PackagePage.addPackage()
});

Then(/^I click on Logout$/, async () => {
    await TopMenu.logout()
});

When(/^I click on added package and click delete$/, async() => {
    const abc = await PackagePage.packageAdded.getText();
    console.log(abc);
	await PackagePage.packageDelete.click()
    await PackagePage.packageDelButton.click()
});


When(/^I click on delete package type from pop up$/, async() => {
    await PackagePage.packageDelFromPopUp.click()

});


