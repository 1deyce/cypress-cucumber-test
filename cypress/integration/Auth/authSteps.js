import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Sign-up / Register

Given("I visit the signup page", () => {
    cy.visit("/signup");
});

When("I fill in the signup form", () => {
    cy.get('input[placeholder="Full Name"]').type("Test User");
    cy.get('input[placeholder="Email"]').type("kddeyce@gmail.com");
    cy.get('input[placeholder="Password"]').type("password123");
});

When("I submit the form", () => {
    cy.intercept("POST", "/signup").as("signup"); // Intercept the signup request
    cy.get("form").submit();
    cy.wait("@signup").its("response.statusCode").should("eq", 200);
});

Then("I should be redirected to the login page", () => {
    cy.url().should("include", "/login");
});

// Login / Sign-in

Given("I visit the login page", () => {
    cy.visit("/login");
});

When("I enter valid credentials", () => {
    cy.get('input[placeholder="Email"]').type("kddeyce@gmail.com");
    cy.get('input[placeholder="Password"]').type("password123");
});

When("I submit the login form", () => {
    cy.get("form").submit();
});

Then("I should be redirected to my dashboard", () => {
    cy.url().should("include", "/dashboard-b"); // Adjust based on your dashboard URL
});

// Logout / Sign out

Given("I visit the login page", () => {
    cy.visit("/login");
});

When("I enter valid credentials", () => {
    cy.get('input[placeholder="Email"]').type("kddeyce@gmail.com");
    cy.get('input[placeholder="Password"]').type("password123");
});

When("I submit the login form", () => {
    cy.get("form").submit();
});

Then("I should be redirected to my dashboard", () => {
    cy.url().should("include", "/dashboard-b");
});


When("I click the logout button", () => {
    cy.get('a[href="/dashboard-b/logout"]').click();
});


Then("I should be redirected to the Home page", () => {
    cy.url().should("include", "/");
});
