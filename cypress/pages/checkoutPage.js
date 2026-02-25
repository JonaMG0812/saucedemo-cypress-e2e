class CheckoutPage {
    get firstNameInput() {
        return cy.get('[data-test="firstName"]');
    }

    get lastNameInput() {
        return cy.get('[data-test="lastName"]');
    }

    get postalCodeInput() {
        return cy.get('[data-test="postalCode"]');
    }

    get continueButton() {
        return cy.get('[data-test="continue"]');
    }

    fillInformation(firstName, lastName, postalCode) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.postalCodeInput.type(postalCode);
    }

    clickContinue() {
        this.continueButton.click();
    }
}

export default new CheckoutPage();
