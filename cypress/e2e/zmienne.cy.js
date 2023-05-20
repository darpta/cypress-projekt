/// <reference types="Cypress" />

describe("E2E - zmienne", () => {
    it("zmienne srodowiskowe", () => {
        //Sposob nr 1
        //odwołanie do konkretnego srodowiska - ustawienia w cypress.config.js
        /*
        "env": {
            "productionUrl": "https://google.com",
            "devUrl": "https://testowanie-oprogramowania.pl"
        }
        */
        //cy.visit(Cypress.env("productionUrl"))
        //cy.visit(Cypress.env("devUrl"))

        //Sposob nr 2
        //tworzymy folder config w folderze Cypress i tam ustawienia w plikach
        cy.visit(Cypress.env("Url"))
    })
})