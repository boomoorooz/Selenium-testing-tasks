const { Builder, By, Key, WebDriver, until } = require("selenium-webdriver");
const { elementLocated } = require("selenium-webdriver/lib/until");

async function tests() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://timvroom.com/selenium/playground/");

  //grab the title of page
  var title = await driver.getTitle();
  //finding an element and pushing this title text in answer #1
  await driver.findElement(By.xpath('//*[@id="answer1"]')).sendKeys(title);

  //firstly find an element and after send Keys
  await driver.findElement(By.id("name")).sendKeys("Kilgore Trout");

  //Set occupation on form to Sci-Fi Author
  await driver
    .findElement(By.id("occupation"))
    .sendKeys("Science Fiction Author");

  //Count number of blue-boxes
  await driver
    .findElements(By.className("bluebox"))
    .then((elements) => (count = elements.length));

  //Entering count number into answer box #4
  await driver.findElement(By.id("answer4")).sendKeys(count);

  //Click on link
  await driver.findElement(By.xpath("/html/body/a[3]")).click();

  //Finding a red box class name
  await driver
    .findElement(By.id("redbox"))
    .getAttribute("class")
    .then((e) => (nameOfClass = e));

  //Finding answer box and entering class name into this box
  await driver
    .findElement(By.xpath('//*[@id="answer6"]'))
    .sendKeys(nameOfClass);

  //Run JS script function
  await driver.executeScript("ran_this_js_function();");

  //Binding variable and JS script function
  var value = await driver.executeScript(
    "return got_return_from_js_function();"
  );
  //Placing returned value in answer slot #8
  await driver.findElement(By.xpath('//*[@id="answer8"]')).sendKeys(value);

  //navigate on radio button
  await driver.findElement(By.xpath('//*[@id="testform"]/input[2]')).click();

  //Finding red box
  await driver
    .findElement(By.id("redbox"))
    .getText()
    .then((e) => (nameOfRedBox = e));

  //Placing our text from red box into box number 10
  await driver
    .findElement(By.xpath('//*[@id="answer10"]'))
    .sendKeys(nameOfRedBox);

  //Finding green and orangebox
  let greenbox = await driver.findElement(By.id("greenbox"));
  let orangebox = await driver.findElement(By.id("orangebox"));

  //Condition for comparing boxes
  var whichOne = orangebox.y < greenbox.y ? "Orange" : "Green";

  //Placing result of our condition
  await driver.findElement(By.xpath('//*[@id="answer11"]')).sendKeys(whichOne);

  //Set width and height
  await driver.manage().window().setRect({ height: 650, width: 850 });

  //Set timeouts
  await driver.manage().setTimeouts({ implicit: 1000 });

  //Try catch block for finding div with css selector
  try {
    await driver.findElement(By.css("#ishere")).isSelected();
    await driver.findElement(By.xpath('//*[@id="answer13"]')).sendKeys("Yes");
  } catch (e) {
    await driver.findElement(By.xpath('//*[@id="answer13"]')).sendKeys("No");
  }

  //Set timeouts
  await driver.manage().setTimeouts({ implicit: 1000 });

  //Checking purplebox(true or false) and give it value to variable 'is'
  var is = await driver.findElement(By.css("#purplebox")).isDisplayed();
  //Condition if else
  if (is === true) {
    await driver.findElement(By.xpath('//*[@id="answer14"]')).sendKeys("yes");
  } else {
    await driver.findElement(By.xpath('//*[@id="answer14"]')).sendKeys("no");
  }

  //Finding element and clicking on it
  await driver.findElement(By.xpath("/html/body/p[2]/a")).click();

  await driver
    .wait(until.elementLocated(By.xpath("/html/body/a[4]")), 10000)
    .click();

  let alert = await driver.switchTo().alert();

  await alert.accept();

  await driver.findElement(By.name("submit")).click();

  await driver.findElement(By.id("checkresults")).click();
}

tests();
