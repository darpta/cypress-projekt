/// <reference types="Cypress" />

describe('testy API', () => {
    //taki hook na fixtures/example.json ktory przed kazdym testem zapisze dane do zmiennej
    //dla globalnego użycia nie funkcja strzalkowa tylko function(), tu i tam gdzie jest użyta
    beforeEach(function() {
        cy.fixture('example.json').then(data => {
            this.daneApi = data;
        })
    })
    it('weryfikacja tagow', () => {
        cy.intercept('GET', 'https://api.realworld.io/api/tags').as('requestTag')
        cy.visit('https://angular.realworld.io/')
        cy.wait('@requestTag') // trzeba zaczekać żeby przeprowadzic asercję
        cy.get('@requestTag').then(res =>  {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain('welcome').and.to.contain('implementations')
        })
    })
    it('niepoprawne logowanie', function() { //nie funkcja strzalkowa przez hooka
        cy.intercept('POST', 'https://api.realworld.io/api/users/login').as('requestLogin')
        cy.get('a.nav-link').contains('Sign in').click()
        cy.loging('test12@op.pl', '12345@')
        cy.wait('@requestLogin') // trzeba zaczekać żeby przeprowadzic asercję
        cy.get('@requestLogin').then(res =>  {
            console.log(res)
            expect(res.response.statusCode).to.equal(403)
            //pobieranie danych z fixtures/example.json
            expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403)
        })
    }) 

    it('niepoprawne logowanie', function() {
        cy.intercept('POST', 'https://api.realworld.io/api/users/login').as('requestLogin')
        cy.get('a.nav-link').contains('Sign in').click()
        cy.loging('test12@op.pl', '12345@')
        cy.wait('@requestLogin') // trzeba zaczekać żeby przeprowadzic asercję
        cy.get('@requestLogin').then(res =>  {
            console.log(res)
            expect(res.response.statusCode).to.equal(403)
            //pobieranie danych z fixtures/example.json
            //wersja bez hooka
            cy.fixture('example.json').then(data => {
                expect(res.response.statusMessage).to.equal(data.statusMessage403)
            })
        })
    })
// Dane logowania do aplikacji:
//dario-vogel
//dario-vogel@com.pl
//dariovogel@
    it('poprawne logowanie', function() {
        cy.intercept('GET', 'https://api.realworld.io/api/tags', { fixture: 'tags.json'}).as('requestTag')
        cy.loging('dario-vogel@com.pl', 'dariovogel@')
        cy.wait('@requestTag') // trzeba zaczekać żeby przeprowadzic asercję
        cy.get('@requestTag').then(res =>  {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain('cats').and.to.contain('dogs').and.to.contain('pets')
        })
    })
    it('wylogowanie', function() {
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('a.btn').click()
        cy.get('.btn-outline-danger').click()
    })
})