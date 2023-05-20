/// <reference types="Cypress" />

describe("E2E - Lesson", () => {
    it("lokalizatory cz. 1", () => {
        cy.visit('/')

        //znacznik
        cy.get('a')

        //identyfikator - unikalny, moze byc tylko jeden - po hashtagu
        cy.get('#search_query_top')

        //klasa - po kropce
        cy.get('.form-control')

        //atrybut - w nawiasie kwadratowym
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //atrybut z podaniem znacznika - element input,ktory ma atrybut placeholder="Search"
        cy.get('input[placeholder="Search"]')

        //po kilku atrybutach - atrybuty po kolei w nawiasach kwadratowych
        cy.get('[src="http://automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

        //Zalecana praktyka pobierania elementów
        //używanie atrybutów data-cy
        //zalecić używanie tego atrybutu przez deweloperów
    })

    it.only("lokalizatory cz. 2", () => {
        cy.visit('/')
        cy.contains('Shop now !') //pobieranie elementu po tekście
        cy.contains('[title="Contact us"]', 'Contact us') //pobieranie elementu po atrybucie i tekście
        cy.get('li').parents('#home-page-tabs').find('li').eq(1) //pobieranie elementów 'li' którego rodzicem jest ... (id='...') o indeksie 1
        cy.get('li').parents('#home-page-tabs').find('li').first()// pierwszy element
        cy.get('li').parents('#home-page-tabs').find('li').contains('Best Sellers')//zawiera tekst
    })
})