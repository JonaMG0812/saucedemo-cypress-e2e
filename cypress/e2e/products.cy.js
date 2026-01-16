import ProductsPage from '../pages/productsPage';

describe('Products Shopping Page Management', () => {
    let productsData;

    beforeEach(() => {
        cy.fixture('products').then((prodVar) => { productsData = prodVar; });

        cy.fixture('users').then((data) => {
            cy.login(data.standard_user.username, data.standard_user.password);
        });
    });

    it('should allow adding items to the cart dynamically', () => {
        productsData.forEach((item, index) => {
            ProductsPage.addToCart(item.name);
            ProductsPage.cartBadge.should('contain', (index + 1).toString());
        });
    });

    it('should allow removing an item from the shopping cart', () => {
        productsData.forEach((item) => {
            ProductsPage.addToCart(item.name);
        });
        ProductsPage.cartBadge.should('contain', productsData.length);

        const itemToRemove = productsData[0];
        ProductsPage.removeFromCart(itemToRemove.name);
        ProductsPage.cartBadge.should('contain', productsData.length - 1);

        ProductsPage.productsItems.contains(itemToRemove.name)
            .parents('.inventory_item')
            .find('.btn_primary')
            .should('exist');

        if (productsData.length > 1) {
            const itemRemaining = productsData[1];
            ProductsPage.productsItems.contains(itemRemaining.name)
                .parents('.inventory_item')
                .find('.btn_secondary')
                .should('exist');
        }
    });
});
