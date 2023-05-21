/// <reference types="Cypress" />

//Problem z dodaniem pluginu cypress-plugin-snapshots do Cypress version 10 and later

describe('Visual regression', () => {
    it('wczytywanie sie elementu', () => {
        cy.visit('https://picsum.photos/')
        cy.get('header.content-section-light').then(image => {
            //cy.wrap - zlap element
            cy.wrap(image).toMatchImageSnapshot()
            //po kazdym run zmienia sie obrazek stad blad

            //odwolanie i sprawdzenie calego dokumentu (strony)
            //cy.document().toMatchImageSnapshot()
        })

        // PERCY
        //zalogowany na percy.io przez konto Google michaelvinstest@gmail.com
        //cy.percySnapshot()
        //polecenie do uruchomienia testow w Percy - 'percy exec -- cypress run'
        //trzeba okreslic jakie testy uruchomic - '--spec 'sciezka_do_testu''
        //command: npx percy exec -- cypress run --spec 'cypress/e2e/visualTestingAndProxy.cy.js'
        //env:PERCY_TOKEN="web_d0bd541414c1fa8231e459e0efe0e9767e71a1e23aecb54cd1cdc13ca51515cd"
    })
})
/*
PROXY

darmowe proxy np. na stronie https://spys.one/en/

dodawanie proxy:
export HTTP_PROXY=<adres_proxy>
restart Cypressa

usuwanie Proxy:
unset HTTP_PROXY
restart Cypressa
*/ 