const { Builder, By, Key, WebDriver } = require("selenium-webdriver");

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

async function sixthtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //Finding a red box class name
  await driver
    .findElement(By.id("redbox"))
    .getAttribute("class")
    .then((e) => (nameOfClass = e));

  //Finding answer box and entering class name into this box
  await driver
    .findElement(By.xpath('//*[@id="answer6"]'))
    .sendKeys(nameOfClass);
}
async function seventhtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //Run JS script function
  await driver.executeScript("ran_this_js_function();");

  await driver.quit();
}
seventhtest();

// async function eighthtest() {
//   //launch the browser
//   let driver = await new Builder().forBrowser("chrome").build();

//   //navigate to our page
//   await driver.get("http://timvroom.com/selenium/playground/");

//   ran_this_js_function();
//   //Binding variable and JS script function

//   //Placing returned value in answer slot #8
//   await driver.findElement(By.xpath('//*[@id="answer8"]')).sendKeys("123");

//   await driver.quit();
// }

async function ninthtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //navigate on radio button
  await driver.findElement(By.xpath('//*[@id="testform"]/input[2]')).click();
}

async function tenthtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //Finding red box
  await driver
    .findElement(By.id("redbox"))
    .getText()
    .then((e) => (nameOfRedBox = e));

  //Placing our text from red box into box number 10
  await driver
    .findElement(By.xpath('//*[@id="answer10"]'))
    .sendKeys(nameOfRedBox);
}

async function eleventhtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");
}

async function twelfthtest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //Set width and height
  //   await driver.findElement(By.xpath("/html/body")).setRect(650, 850, 1, 1);
  await WebDriver.manage().window().setRect(1, 2, 850, 650);
}
