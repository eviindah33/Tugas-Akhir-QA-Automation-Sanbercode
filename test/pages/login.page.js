class LoginPage {
  // Definisikan locator dari element
  get emailInput() {
    return $('//*[@id="email"]'); //locator field email (pakai id)
  }

  get passwordInput() {
    return $('//*[@id="password"]'); //locator field password (pakai id)
  }

  get loginButton() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/button'); //locator field login botton (pakai id)
  }

  get errorMsg() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/div[1]'); //locator  error message (pakai id)
    // return $('//*[@id="root"]/div/div/div/div[2]/div/div[1]/span'); //locator  error message (pakai id)
    // return $('//*[@id="root"]/div/div/div/div[2]/div/div[1]/text()'); //locator  error message (pakai id)

    //*[@id="root"]/div/div/div/div[2]/div/div[1]
    //*[@id="root"]/div/div/div/div[2]/div/div[1]/span
  }

  // Definisikan action /interaksi yang dilakukan pada element tersebut
  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async assertErrorMessage(expectedErrorMessage) {
    await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
  }

  async getErrorMessage() {
    return this.errorMsg.getText();
  }
}

module.exports = new LoginPage();
