const { Builder, By, Key } = require("selenium-webdriver");

async function firsttest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");
  //grab the title of page
  var title = await driver.getTitle();
  //finding an element and pushing this title text in answer #1
  await driver.findElement(By.xpath('//*[@id="answer1"]')).sendKeys(title);
  //quit the test
  await driver.quit();
}

async function secondtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //firstly find an element and after send Keys
  await driver.findElement(By.id("name")).sendKeys("Kilgore Trout");
  //quit the test
  await driver.quit();
}

async function thirdtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //Set occupation on form to Sci-Fi Author
  await driver
    .findElement(By.id("occupation"))
    .sendKeys("Science Fiction Author");
}

async function fourthtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //Count number of blue-boxes
  await driver
    .findElements(By.className("bluebox"))
    .then((elements) => (count = elements.length));

  //Entering count number into answer box #4
  await driver.findElement(By.id("answer4")).sendKeys(count);
}

async function fifthtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //Click on link
  await driver.findElement(By.xpath("/html/body/a[3]")).click();
}
