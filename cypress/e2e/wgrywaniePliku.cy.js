/// <reference types="Cypress" />

describe('Wgrywanie plikow', () => {
    it('wgrywa plik do inputa w Contact us', () => {
        cy.visit('/index.php?controller=contact')
        cy.get('#fileUpload').attachFile('../fixtures/Car.jpg')
        cy.get('span.filename').should('contain', 'Car.jpg')
    })
})