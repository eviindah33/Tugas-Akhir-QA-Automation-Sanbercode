class InventoryPage {
  get InventoryPageUrl() {
    return "https://kasirdemo.belajarqa.com/login";
  }
  async assertInventoryUrl() {
    await expect(browser).toHaveUrl(this.InventoryPageUrl);
  }
}

module.exports = new InventoryPage();
