import LoginPage from "../pages/loginPage";

describe('Login Functionality with valid credentials', () => {
    let userData;

    beforeEach(() => {
        cy.fixture('users').then((data) => {
            userData = data;
        });

        LoginPage.visit();
    });

    it('should login successfully into the application', () => {
        LoginPage.login(userData.standard_user.username, userData.standard_user.password);
        cy.url().should('include', '/inventory.html');
    });

    it('should display an error message with locked out user', () => {
        LoginPage.login(userData.locked_out_user.username, userData.locked_out_user.password);
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Sorry, this user has been locked out.');
        cy.screenshot('locked-out-user-error');
    });
});
