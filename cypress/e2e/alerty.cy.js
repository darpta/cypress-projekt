/// <reference types="Cypress" />

describe('alerty', () => {
    it('alert', () => {
        cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty/')
        cy.get('#alert').click()
        cy.on('window:alert', tresc => {
            expect(tresc).to.equal('Przykładowa treść alertu')
        })
    })
    it('alert config', () => {
        cy.get('#alert-confirm').click()
        cy.on('window:confirm', tresc => {
            expect(tresc).to.equal('Zaakceptuj aby kontynuować!')
        })
        cy.on('window:confirm', () => false)
    })
})