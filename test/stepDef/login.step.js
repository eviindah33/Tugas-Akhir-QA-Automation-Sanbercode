const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const DashboardPage = require("../pages/dashboard.page");
// const { errorMsg, login } = require("../pages/login.page");

Given(/^I open Kasir Aja website$/, async () => {
  await Page.open("/");
  await browser.pause(1000);
});

When(/^I login with valid credential$/, async () => {
  await LoginPage.login("valid_email@gmail.com", "valid_password");
});

Then(/^I should be on the dashboard page$/, async () => {
  await DashboardPage.assertDashoardPageUrl();
});

When(/^I login with invalid email$/, async () => {
  await LoginPage.login("invalid_email@gmail.com", "valid_password");
});

When(/^I login with invalid password$/, async () => {
  await LoginPage.login("valid_email@gmail.com", "invalid_password");
});

Then(/^I should see an error message$/, async () => {
  // await LoginPage.assertErrorMessage("Kredensial yang Anda berikan salah");
  await LoginPage.assertErrorMessage("email");
});
