Feature: Test Suite for Adding Package

  Scenario Outline: As a user, I can login in application

    Given I am on the login page
    When I login with valid credentials
    Then I should see a page title saying <message>

    Examples:
      | username                               | password  | message                                    |
      | kloudship.qa.automation@mailinator.com | Password1 | KloudShip - eCommerce & Shipping Solutions |


  Scenario: As a user, on home page I am selecting Package tab to add new package

    When I click package icon on home page

  Scenario: As a user, I want to add package manually

    When I click add package icon on top menu
    Then Add new package detail opened

  Scenario: As a user, I want to logout

    When I click on Logout
    Then I shall logout from the application