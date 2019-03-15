import { Builder, By, until } from 'selenium-webdriver';
import config from 'config';

class Utilities {
    static initDriver() {
        var driver = new Builder().
            forBrowser(config.get('browser')).build();

        global.driver = driver;
        driver.get(config.get('url.appUrl'));
        driver.manage().window().maximize();
    }

    static quitDriver(){
        driver.quit();
    }
    
    static async initializeWebElement(selector, locatorMethod, timeout) {
        return driver.wait(
            until.elementLocated(By[locatorMethod](selector)),
            timeout,
        );
    }

    static async click(selector, locatorMethod = 'css', timeout = 5000) {
        const webElement = await (this.initializeWebElement(
            selector,
            locatorMethod,
            timeout,
        ));

        webElement.click();
    }

    static async sendKeys(selector, value, locatorMethod = 'css', timeout = 5000) {
        const webElement = await (this.initializeWebElement(
            selector,
            locatorMethod,
            timeout,
        ));

        webElement.sendKeys(value);
    }

    static async clearField (selector, locatorMethod = 'css', timeout = 5000) {
      const webElement = await (this.initializeWebElement(
        selector,
        locatorMethod,
        timeout,
      ));

      webElement.clear();
    }

    static async getText (selector, locatorMethod = 'css', timeout = 5000) {
      const webElement = await (this.initializeWebElement(
        selector,
        locatorMethod,
        timeout,
      ));

      return (await webElement.getText());
    }

    static async getAttribute (selector, attributeName, locatorMethod = 'css', timeout = 5000) {
      const webElement = await (this.initializeWebElement(
        selector,
        locatorMethod,
        timeout,
      ));

      return (await webElement.getAttribute(attributeName));
    }

    static async findElements (selector, locatorMethod = 'css', timeout = 5000) {
      return await driver.findElements(By.css(selector));
    }

    static async isDisplayed(timeout = 5000) {
        const webElement =await (this.initializeWebElement(
            
            timeout,
        ));

        webElement.isDisplay();
    }

    static async isVisible(selector, locatorMethod = 'css', timeout = 5000) {
        const webElement =await (this.initializeWebElement(
            selector,
            locatorMethod,
            timeout,
        ));

        webElement.isVisible(selector);
    }

    static async selectByVisibleText(selector, value, locatorMethod = 'css', timeout = 5000) {
        const webElement = await (this.initializeWebElement(
            selector,
            locatorMethod,
            timeout,
        ));

        webElement.sendKeys(value);
    }
}

export default Utilities;
