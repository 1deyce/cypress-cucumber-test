Feature: User Authentication

  Scenario: User signs up
    Given I visit the signup page
    When I fill in the signup form
    When I submit the form
    Then I should be redirected to the login page

  Scenario: User logs in
    Given I visit the login page
    When I enter valid credentials
    When I submit the login form
    Then I should be redirected to my dashboard
  
  Scenario: User logs out
    Given I visit the login page
    When I enter valid credentials
    When I submit the login form
    Then I should be redirected to my dashboard
    When I click the logout button
    Then I should be redirected to the Home page