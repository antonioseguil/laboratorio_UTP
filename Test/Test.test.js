const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("Primera pregunta de laboratorio", async function () {
  
  it("Validaciones título", async function () {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.techlistic.com/");
    //Maximizando la ventana de windows
    await driver.manage().window().maximize();
    //Buscando titulo de la pagin
    let titleText = await driver.getTitle();
    try {
      assert.notEqual(titleText, "techlistic.com");
    } catch (error) {
      assert.fail(error);
    } finally {
      driver.quit();
    }
  });

  it("Validación de URL", async function () {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.techlistic.com/");
    //Maximizando la ventana de windows
    await driver.manage().window().maximize();
    //Buscando titulo de la pagin
    let urlText = await driver.getCurrentUrl();
    try {
      assert.strictEqual(urlText, "https://www.techlistic.com/");
    } catch (error) {
      assert.fail(error);
    } finally {
      driver.quit();
    }
  });

  it("Obtener el código fuente", async function () {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.techlistic.com/");
    //Maximizando la ventana de windows
    await driver.manage().window().maximize();
    //Buscando titulo de la pagin
    let lengthPage = await driver.getPageSource().length;
    try {
      assert.notEqual(lengthPage, 0);
    } catch (error) {
      assert.fail(error);
    } finally {
      driver.quit();
    }
  });

  it("Tag <title></title> existe", async function () {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.techlistic.com/");
    //Maximizando la ventana de windows
    await driver.manage().window().maximize();
    //Buscando titulo de la pagin
    try {
      await driver.findElement(By.css("title"));
      assert.ok(true, "Título encontrado");
    } catch (error) {
      assert.fail("No existe el título");
    } finally {
      driver.quit();
    }
  });
});
