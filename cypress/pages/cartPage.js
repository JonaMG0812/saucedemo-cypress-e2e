class CartPage {
    get cartItems() {
        return cy.get('.cart_item');
    }

    get checkoutButton() {
        return cy.get('#checkout');
    }

    verifyItemInCart(itemName) {
        this.cartItems.contains(itemName).should('be.visible');
    }

    verifyItemNotInCart(itemName) {
        this.cartItems.contains(itemName).should('not.exist');
    }

    proceedToCheckout() {
        this.checkoutButton.click();
    }
}

export default new CartPage();
