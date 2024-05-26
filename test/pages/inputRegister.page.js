class inputRegisterPage {
  // Definisikan locator dari element
  get directToRegister() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/div[3]/a'); //locator field login botton (pakai id)
  }
  get namaTokoInput() {
    return $('//*[@id="name"]'); //locator field email (pakai id)
  }
  get emailInput() {
    return $('//*[@id="email"]'); //locator field email (pakai id)
  }

  get passwordInput() {
    return $('//*[@id="password"]'); //locator field password (pakai id)
  }

  get registerLink() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/div[3]/a'); //locator field login botton (pakai id)
  }

  get daftarButton() {
    return $('//*[@id="root"]/div/div/div/div[2]/div/button'); //locator field login botton (pakai id)
  }

  async register(namaToko, email, password) {
    await this.namaTokoInput.setValue(namaToko);
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.daftarButton.click();
  }

  async registerDirectLink() {
    await this.registerLink.click();
  }
}

module.exports = new inputRegisterPage();
