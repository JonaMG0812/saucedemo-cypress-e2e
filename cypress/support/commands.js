import loginPage from '../pages/loginPage';

Cypress.Commands.add('login', (username, password) => {
    loginPage.visit();
    loginPage.login(username, password);
});