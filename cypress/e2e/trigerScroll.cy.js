/// <reference types="Cypress" />

describe('Skrolowanie / Najechanie', () => {
    it('najechanie na dany element', () => {
        cy.visit('/')
        cy.get('a[title="Dresses"]').eq(1).trigger('focus')
        cy.get('li.sfHover a[title="Summer Dresses"]').click()
    })

    it('skrolowanie do boxu Specials', () => {
        cy.get('a[title="Specials"]').first().scrollIntoView()
    })
})