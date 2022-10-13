const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("Segunda pregunta de laboratorio", async function () {
  it("Creación de usuario", async function () {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://automationpractice.com/index.php");

    try {
      await driver.sleep(4000);
      //Disparando evento CLICK de boton de login
      await driver.findElement(By.className("login")).click();

      await driver.sleep(4000);

      //Agregando datos en el INPUT de correo
      await driver
        .findElement(By.id("email_create"))
        .sendKeys("testse22333gu4223il1145565@gmail.com");

      //Disparando evento de CLICK de
      await driver.findElement(By.id("SubmitCreate")).click();

      await driver.sleep(10000);
      //Llenando datos de formulario

      await driver.findElement(By.id("id_gender1")).click();
      await driver
        .findElement(By.id("customer_firstname"))
        .sendKeys("Antonio Carlos");
      await driver
        .findElement(By.id("customer_lastname"))
        .sendKeys("Seguil Tamayo");
      await driver.findElement(By.id("passwd")).sendKeys("123456789");

      await driver.findElement(By.css("#days > option:nth-child(3)")).click();
      await driver.findElement(By.css("#months > option:nth-child(3)")).click();
      await driver.findElement(By.css("#years > option:nth-child(13)")).click();

      await driver.findElement(By.id("newsletter")).click();
      await driver.findElement(By.id("optin")).click();

      await driver.findElement(By.id("firstname")).sendKeys("MINTEC");
      await driver.findElement(By.id("lastname")).sendKeys("-SAC PERÚ");

      await driver
        .findElement(By.id("address1"))
        .sendKeys("Av. test #234 Calidad de software #456");
      await driver
        .findElement(By.id("address2"))
        .sendKeys("Av. test #234 Calidad de software #323");

      await driver.findElement(By.id("city")).sendKeys("Lima");

      await driver.findElement(By.id("postcode")).sendKeys("23151");

      await driver
        .findElement(By.css("#id_country > option:nth-child(2)"))
        .click();

      await driver.findElement(By.id("other")).sendKeys("Test de información");

      await driver.findElement(By.id("phone")).sendKeys("123456789");
      await driver.findElement(By.id("phone_mobile")).sendKeys("23234456");
      await driver.findElement(By.id("alias")).sendKeys("test de alias");

      await driver.sleep(2000);

      await driver
        .findElement(By.css("#id_state > option:nth-child(8)"))
        .click();

      await driver.findElement(By.id("submitAccount")).click();

      await driver.sleep(10000);

      let user = await driver
        .findElement(
          By.xpath(
            "/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a/span"
          )
        )
        .getText();

      assert.strictEqual(user, "Antonio Carlos Seguil Tamayo");
    } catch (error) {
      console.log(error);
      assert.fail("Test 2");
    } finally {
      driver.quit();
    }
  });
});
