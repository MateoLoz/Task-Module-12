Feature: Login validation

  Scenario: Attempt login with missing email

    Given the user opens the login page
    When the user enters password "Pass123!"
    When the user submits the login form
    Then the email required error should be displayed