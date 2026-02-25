import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';

describe('Cart Management', () => {
    let productsData;

    beforeEach(() => {
        cy.fixture('products').then((prodVar) => { productsData = prodVar; });
        cy.fixture('users').then((data) => {
            cy.login(data.standard_user.username, data.standard_user.password);
        });
    });

    it('should verify cart contents before checkout', () => {
        productsData.forEach((item) => {
            ProductsPage.addToCart(item.name);
        });

        const itemToRemove = productsData[0];
        ProductsPage.removeFromCart(itemToRemove.name);

        ProductsPage.goToCart();
        cy.url().should('include', '/cart.html');

        CartPage.verifyItemNotInCart(itemToRemove.name);
        productsData.forEach((item) => {
            if (item.name !== itemToRemove.name) {
                CartPage.verifyItemInCart(item.name);
            }
        });
    });
});
