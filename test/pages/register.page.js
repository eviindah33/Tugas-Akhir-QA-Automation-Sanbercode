class RegisterPage {
  get RegisterPageUrl() {
    return "https://kasirdemo.belajarqa.com/register";
  }
  async assertRegisterUrl() {
    await expect(browser).toHaveUrl(this.RegisterPageUrl);
  }
}

module.exports = new RegisterPage();
