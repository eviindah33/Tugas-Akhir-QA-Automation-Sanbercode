class Page {
  open(pathss) {
    return browser.url(pathss);
  }
}
module.exports = new Page();
