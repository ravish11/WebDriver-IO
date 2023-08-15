Feature: Test Suite for Delete Package

    Scenario Outline: As a user, I can login in application

        Given I am on the login page
        When I login with valid credentials
        Then I should see a page title saying <message>

        Examples:
            | username                               | password  | message                                    |
            | kloudship.qa.automation@mailinator.com | Password1 | KloudShip - eCommerce & Shipping Solutions |


    Scenario: As a user, on home page I am selecting Package and delete the added package

        When I click package icon on home page
        And I click on added package and click delete
        When I click on delete icon
        And I click on delete package type from pop up
        Then Package shall be removed


    Scenario: As a user, I want to logout

        When I click on Logout
        Then I shall logout from the application

