/// <reference types="Cypress" />

describe('akcje wybrania opcji select', () => {
    it('wybieranie opcji', () => {
        cy.visit('/index.php?id_category=3&controller=category')

        //wybieranie selecta po nazwie
        cy.get('#selectProductSort').select('In stock')
        //wybieranie selecta po value
        cy.get('#selectProductSort').select('price:asc')
        //wybieranie selecta po indeksie
        cy.get('#selectProductSort').select(7)
    })

    //skip - pomiń
    it.skip('wybieranie kazdej opcji po kolei', () => {
        cy.visit('/index.php?id_category=3&controller=category')
        //zrobienie iteracji po select
        cy.get('#selectProductSort').then(select => {
            cy.wrap(select).find('option').each(opcja => {
                cy.wrap(select).select(opcja.text())
            })
        })
    })
})