const { Builder, By, WebElement } = require("selenium-webdriver");
const assert = require("assert");

async function init() {
  let driver = await new Builder().forBrowser("firefox").build();
  //Abrieno el navegador con la url
  await driver.get("https://www.google.com.pe/");
  //Maximizando la ventana de windows
  await driver.manage().window().maximize();
  //Buscando titulo de la pagin
  let titleText = await driver.getTitle();
  assert.strictEqual(titleText, "Google");

  //assert.equal(titleText, "Google");

  await driver.quit();
}

init();
