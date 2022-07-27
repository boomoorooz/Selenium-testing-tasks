const { Builder, By, Key } = require("selenium-webdriver");

async function firsttest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  driver.quit();
}
firsttest();
