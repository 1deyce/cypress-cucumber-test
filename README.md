# cypress-cucumber-test

Feature/Behaviour Test for Ecotrack Solutions.
Website: https://ecotrack-solutions.netlify.app

# Basic User Authentication Test

## Description

This repository contains tests for basic user authentication features, including sign-up, login, and logout functionalities. The tests are executed with Cypress, ensuring that the user authentication process works as intended.

## Features

-   User sign-up
-   User login
-   User logout

## Prerequisites

To run the tests, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 14 or above)
-   [Cypress](https://www.cypress.io/) (version 9 or above)

## Installation

1. Clone the repository:
   git clone https://github.com/1deyce/cypress-cucumber-test.git
2. Navigate to the project directory:
   cd cypress-cucumber-test
3. Install the dependencies:
   npm install

## Running Tests

To run the test suite, execute the following command:
npx cypress open [CypressGUI]
npx cypress run [Terminal]

## Test Scenarios

# Feature: User Authentication

    # Scenario: User signs up
        - Given I visit the signup page
        - When I fill in the signup form
        - When I submit the form
        - Then I should be redirected to the login page

    # Scenario: User logs in
        - Given I visit the login page
        - When I enter valid credentials
        - When I submit the login form
        - Then I should be redirected to my dashboard

    # Scenario: User logs out
        - Given I visit the login page
        - When I enter valid credentials
        - When I submit the login form
        - Then I should be redirected to my dashboard
        - When I click the logout button
        - Then I should be redirected to the Home page

## Contribution Guidelines

We welcome contributions from the community! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
