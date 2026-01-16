class ProductsPage {
    get productsItems() {
        return cy.get('.inventory_item');
    }

    addToCart(itemName) {
        this.productsItems.contains(itemName).parents('.inventory_item').find('.btn_primary').click();
    }

    removeFromCart(itemName) {
        this.productsItems.contains(itemName).parents('.inventory_item').find('.btn_secondary').click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }

    get cartBadge() {
        return cy.get('.shopping_cart_badge');
    }
}

export default new ProductsPage();
