/// <reference types="Cypress" />

describe('Asercje', () => {
    it('asercje expect oraz should', () => {
        cy.visit('/')

        //weryfikacja tekstu
        cy.get('a[title="Contact us"]').should('contain', 'Contact us')// should - krotka asercja
        cy.get('a[title="Contact us"]').then(zakladka => {//expect - dluga asercja
            expect(zakladka).to.contain('Contact us')
        })

        //weryfikacja czy nie zawiera tekstu
        cy.get('a[title="Contact us"]').should('not.contain', 'abradabra')
        cy.get('a[title="Contact us"]').then(zakladka => {
            expect(zakladka).not.to.contain('abradabra')
        })

        //weryfikacja czy znacznik posiada klase
        cy.get('#search_query_top').should('have.class', 'form-control')
        cy.get('#search_query_top').then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class('form-control')
        })

        //czy elemen jest widoczny
        cy.get('#search_query_top').should('be.visible')
        //cy.get('#search_query_top').should('not.be.visible')//czy nie jest widoczne
        cy.get('#search_query_top').then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible
        })

        //weryfikacja ilosci pobranych elementow
        cy.get('ul.sf-menu').find('li')//jest 16 elementow
        cy.get('ul.sf-menu').find('li').should('have.length', 16)
        cy.get('ul.sf-menu').find('li').then(zakladki => {
            expect(zakladki).to.have.length(16)
        })

        //weryfikacja wartosci css danego elementu - zakladka Styles w Console
        cy.get('#search_query_top').should('have.css', 'margin-right', '1px')
        cy.get('#search_query_top').then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.css('margin-right', '1px')
        })
    })
})