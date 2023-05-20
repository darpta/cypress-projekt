/// <reference types="Cypress" />

describe('akcja wpisywania', () => {
    it('wpisywanie wartosci w pole', () => {
        cy.visit('/')
        //cy.get('#search_query_top').type('Przykładowy produkt{enter}')
        cy.get('#search_query_top').type('Przykładowy produkt{backspace}', {delay: 500}) //{backspace} kasowanie jednego znaku, delay - 500 ms
    })
    it('czyszczenie wartosci z pola input', () => {
        cy.visit('/')
        cy.get('#search_query_top').clear()
    })
})