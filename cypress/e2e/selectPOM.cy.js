/// <reference types="Cypress" />
import selectPage from "../support/pageObject/selectPage"

describe('akcje wybrania opcji select', () => {
    it('wybieranie kazdej opcji po kolei', () => {
        cy.visit('/index.php?id_category=3&controller=category')
        //zrobienie iteracji po select
        selectPage.selectAllOption();
    })
})