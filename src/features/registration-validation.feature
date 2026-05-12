Feature: Registration validation

  Background:
    Given the user opens the registration page

  Scenario: Registration fails with invalid email
    When the user completes the registration form with invalid email
    And the user submits the registration form
    Then the invalid email validation message should be displayed

  Scenario: Registration fails with empty password
    When the user completes the registration form without password
    And the user submits the registration form
    Then the required password validation message should be displayed

  Scenario: Registration fails with empty first name
    When the user completes the registration form without first name
    And the user submits the registration form
    Then the required first name validation message should be displayed