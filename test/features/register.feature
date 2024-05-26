Feature: Saucedemo Register Tests

    @all @positive_register
    Scenario: Register succesfully with valid credential
        Given I open Kasir Aja Register website
        When I click Register
        Then I should be on the Register page
        When I Register with valid credential
        Then I have to successfully register and be on the Kasir Aja Login page



