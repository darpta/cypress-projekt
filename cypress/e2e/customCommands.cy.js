/// <reference types="Cypress" />

describe('Custom Commands', () => {
    it('komendy', () => {
        cy.openTshirtsTab();
    })
    it('search', () => {
        cy.visit('/')
        cy.searchPhrase('Nowy tekst{backspace}', 1200);
        cy.clearPhrase();
    })
})