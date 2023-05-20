/// <reference types="Cypress" />

describe('Metoda invoke', () => { //pozwala uzyskać dostęp do właściwości dowolnego atrybutu lub tekstu, który posiada znacznik
    it('Invoke', () => {
        cy.visit('/')

        //Pobieranie wartości z danego elementu
        cy.get('[title="Contact us"]').invoke('text').then(tekst => {
            cy.log(tekst)
        })

        //Uzyskanie dostępu do wartości atrybutu
        cy.get('[title="Contact us"]').invoke('attr', 'href').then(link => {
            cy.log(link)
        })
        cy.get('[title="Contact us"]').invoke('attr', 'title').then(title => {
            cy.log(title)
        })

        //Pobieranie wartości value - rozszerzyć Console, tam gdzie Styles => Properties (właściwości) => value
        cy.get('#search_query_top').type('Przykładowa wartość').invoke('prop',  'value').then(wartosc => {
            cy.log(wartosc)
        })
        cy.get('#search_query_top').type('Przykładowa wartość').invoke('prop',  'checked').then(wartosc => {
            cy.log(wartosc)
        })
    })
})