/// <reference types="Cypress" />

describe('Shadow Dom', () => {
    it('shadow', () => {
        cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm')
        //cy.contains('File').click()
        cy.get('.smart-ui-component').shadow().contains('File').click()
        //jesli w cypress.config.js bedzie ustawione "includeShadowDom": true, nie trzeba stosowac metody shadow()
    })
})