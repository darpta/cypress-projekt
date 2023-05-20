class SelectPage {
    get select() {//getter
        return cy.get('#selectProductSort')
    }
    selectAllOption() {
        this.select.then(select => {
            cy.wrap(select).find('option').each(opcja => {
                cy.wrap(select).select(opcja.text())
            })
        })
    }
}

export default new SelectPage();