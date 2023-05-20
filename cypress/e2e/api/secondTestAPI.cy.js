/// <reference types="Cypress" />

describe('test API od strony backendu', () => {
    beforeEach(
        function() {
        cy.fixture('example.json').then(data => {
            this.daneApi = data;
        })
    })
    it('autoryzacja + dodanie nowego artykulu', () => {
        const daneAutoryzacja = {
                "user": {
                    "email": "dario-vogel@com.pl",
                    "password": "dariovogel@"
                }
        }
        const daneArtykul = {
            "article":{
                "tagList":[], //trzeba zmieniac tytul bo test inaczej nie przechodzi
                "title":"test tytuł bezposrednio z API-2",
                "description":"test ",
                "body":"test "
            }
        }
        cy.request('POST', 'https://api.realworld.io/api/users/login', daneAutoryzacja)
        .its('body').then(res => {
            //pobranie tokena
            const authToken = res.user.token;
            console.log(authToken)
            //drugi request odnosnie artykulu
            cy.request({
                method: 'POST',
                url: 'https://api.realworld.io/api/articles/',
                body: daneArtykul,
                headers: {
                    'Authorization': 'Token ' + authToken
                }
            }).then(res => {
                expect(res.status).to.equal(200)
            })
        })
    })
    //tworzenie obiektu request({}) - od razu klamry i dodajemy metody

    // it('wylogowanie', () => {
    //     cy.get('[routerlink="/settings"][href="/settings"]').click()
    //     //cy.get('a.btn').click()
    //     cy.get('.btn-outline-danger').click()
    // })
})