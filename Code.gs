function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Hadist App')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
