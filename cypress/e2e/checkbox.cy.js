/// <reference types="Cypress" />

describe('akcje klikniecia checkbox', () => {
    it('checkbox', () => {
        cy.visit('/index.php?id_category=3&controller=category')
        //pobranie dwoch inputow dla checkboxow i rozbicie na dwa osobne
        cy.get('#ul_layered_category_0').find('input').then(checkbox => {
            cy.get(checkbox).eq(0).check()
            //{force: true} jesli cos bedzie element przeslanialo to i tak sie zaznaczy
            cy.get(checkbox).eq(1).check({force: true})
            //sprawdzenie w Properties czy checkbox jest zaznaczony (nie jest to asercja)
            cy.get(checkbox).eq(0).check().invoke('prop', 'checked').then(zaznaczony => {
                cy.log(zaznaczony)
            })
        })
        //zaznaczanie wielu checkboxow na raz
        cy.get('#ul_layered_id_attribute_group_1').find('input').check()
    })
})