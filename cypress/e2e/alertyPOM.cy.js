/// <reference types="Cypress" />
import alertPage from "../support/pageObject/alertPage"

describe('alerty', () => {
    it('alert', () => {
        cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty/')
        alertPage.clickOnBtnAlert1();
        alertPage.verifyAlertText('Przykładowa treść alertu');
    })
    it('alert config', () => {
        alertPage.clickOnBtnAlert2();
        alertPage.verifyAlertConfirmText();
        alertPage.rejectAlert();
    })
})