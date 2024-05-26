Feature: Saucedemo Login Tests

    @all @positive_login
    Scenario: Login succesfully with valid credential
        Given I open Kasir Aja website
        When I login with valid credential
        Then I should be on the dashboard page

    @all @negative_login
    Scenario: Verify login failed with invalid email
        Given I open Kasir Aja website
        When I login with invalid email
        Then I should see an error message

    @all @negative_login
    Scenario: Verify login failed with invalid password
        Given I open Kasir Aja website
        When I login with invalid password
        Then I should see an error message

