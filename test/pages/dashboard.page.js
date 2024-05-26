class DashoardPage {
  get DashoardPageUrl() {
    return "https://kasirdemo.belajarqa.com/dashboard";
  }
  async assertDashoardPageUrl() {
    await expect(browser).toHaveUrl(this.DashoardPageUrl);
  }
}

module.exports = new DashoardPage();
