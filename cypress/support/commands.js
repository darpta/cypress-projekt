import 'cypress-file-upload'
import '@cypress-audit/lighthouse/commands'
import '@percy/cypress'
import 'cypress-plugin-snapshots/commands'
import '@percy/cypress'

Cypress.Commands.add('openTshirtsTab', () => {
    cy.visit('http://automationpractice.pl/index.php?id_category=5&controller=category')
});

Cypress.Commands.add('searchPhrase', (text, delayValue) => {
    cy.get('#search_query_top').type(text, {delay: delayValue})
});

Cypress.Commands.add('clearPhrase', () => {
    cy.get('#search_query_top').clear()
});

Cypress.Commands.add('loging',(email, password) => {
    cy.get('[placeholder="Email"]').clear()
    cy.get('[placeholder="Password"]').clear()
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.get('[type="submit"]').click()
});


//cy.get('#search_query_top').clear()

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })