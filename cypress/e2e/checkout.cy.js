import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';

describe('Checkout process overview verification', () => {
    let productsData;
    let checkoutData;

    beforeEach(() => {
        cy.fixture('products').then((prodVar) => { productsData = prodVar; });
        cy.fixture('checkout').then((checkoutVar) => { checkoutData = checkoutVar; });
        cy.fixture('users').then((data) => {
            cy.login(data.standard_user.username, data.standard_user.password);
        });
    });

    it('should initiate checkout and fill customer information', () => {
        const itemToAdd = productsData[0];
        ProductsPage.addToCart(itemToAdd.name);

        ProductsPage.goToCart();
        CartPage.proceedToCheckout();
        cy.url().should('include', '/checkout-step-one.html');

        CheckoutPage.fillInformation(
            checkoutData.firstName,
            checkoutData.lastName,
            checkoutData.postalCode
        );

        CheckoutPage.clickContinue();
        cy.url().should('include', '/checkout-step-two.html');
    });
});
