const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const InputRegisterPage = require("../pages/inputRegister.page");
const InventoryPage = require("../pages/inventory.page");
const registerPage = require("../pages/register.page");

Given(/^I open Kasir Aja Register website$/, async () => {
  await Page.open("https://kasirdemo.belajarqa.com/");
  await browser.pause(2000);
});

When(/^I click Register$/, async () => {
  await InputRegisterPage.registerDirectLink();
});

Then(/^I should be on the Register page$/, async () => {
  await registerPage.assertRegisterUrl();
});

When(/^I Register with valid credential$/, async () => {
  await InputRegisterPage.register("Valid Nama Toko", "valid_email@gmail.com", "valid_password");
  await browser.pause(2000);
});

Then(/^I have to successfully register and be on the Kasir Aja Login page$/, async () => {
  await InventoryPage.assertInventoryUrl();
});
