
E2E tests with WebDriverIO Using Cucumber JavaScript framework

Requirements
- node
- npm 

Getting Started:
- Get clone the project 
- From the project directory type command-    cd web-test
- Now, Install the dependencies-  npm install
- Run e2e tests-  npm run wdio
 
Reports:
- Currently Spec report is visible in console, Webdriver supports multiple reportings like Allure, Junit etc


************ Tool and Design Pattern ***************

WebdriverIO tool is used to create this project, As it is a wrapper that build upon the Selenium libararies and gives more flexiblity to get locators easily and it supports multiple reporting systems. Also, Writing of test cases are bit simple in WebdriverIO in comparison to other tools.

The Page Object Design Pattern:

Within the web app's UI there are areas that your tests interact with. A Page Object simply models these as objects within the test code. This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place. 

- In other words one of the challenges of writing test automation is keeping your [selectors] (classes, id's, or xpath' etc.) up to date with the latest version of your code. 

- As per the exercise give I have created separate page objects for each screen which are easily accessible and in case of any change we have to only make change at one place.

- For writting of Test Cases I have used cucumber BDD framework which focuses on describing the expected behavior of the software in a natural language (more undestandable)

- For all global configuration we have make changes in 'wdio.config' 

- For reporting currently 'spec' report will be visible in console while we can implement the Allure report too.

- All step definition against cucumber feature files are created in 'steps.js'

- At the failure of any case our execution should not stop the execution of cases to avoid this I have configured 'ignoreUndefinedDefinitions: false'

