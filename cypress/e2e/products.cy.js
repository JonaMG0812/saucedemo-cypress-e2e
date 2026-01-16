import ProductsPage from '../pages/productsPage';

describe('Inventory Management', () => {
    let productsData;

    beforeEach(() => {
        cy.fixture('products').then((prodVar) => { productsData = prodVar; });

        cy.fixture('users').then((data) => {
            cy.login(data.standard_user.username, data.standard_user.password);
        });
    });

    it.only('should allow adding items to the cart dynamically', () => {
        productsData.forEach((item, index) => {
            ProductsPage.addToCart(item.name);
            ProductsPage.cartBadge.should('contain', (index + 1).toString());
        });
    });
});
