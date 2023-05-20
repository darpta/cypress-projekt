/// <reference types="Cypress" />

describe('akcje kliniecia', () => {
    it('klik', () => {
        cy.visit('/')

        cy.contains('[title="Contact us"]', 'Contact us').click()
        cy.get('[title="Return to Home"]').click()
    })
})
/*
/// <reference types="Cypress" />

describe('...', () => {
    it('klik', () => {
        cy.visit('/')
    })
})
*/