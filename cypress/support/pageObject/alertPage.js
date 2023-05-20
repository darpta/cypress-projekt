class AlertPage {
    get buttonAlert1() {
        return cy.get('#alert')
    }
    get buttonAlert2() {
        return cy.get('#alert-confirm')
    }
    clickOnBtnAlert1() {
        this.buttonAlert1.click()
    }
    clickOnBtnAlert2() {
        this.buttonAlert2.click()
    }
    verifyAlertConfirmText() {
        cy.on('window:confirm', tresc => {
            expect(tresc).to.equal('Zaakceptuj aby kontynuować!')
        })
    }
    verifyAlertText(tekst) {//wersja z parametrem - tekst
        cy.on('window:alert', tresc => {
            expect(tresc).to.equal(tekst)
        })
    }
    rejectAlert() {
        cy.on('window:confirm', () => false)
    }
    acceptAlert() {
        cy.on('window:confirm', () => true)
    }
}

export default new AlertPage();