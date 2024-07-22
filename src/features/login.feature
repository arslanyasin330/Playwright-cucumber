Feature: User login

  Scenario: Successful login
    Given I navigate to the login page
    When I enter my email and password
    And I click the login button
    Then I should be logged in successfully
