// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginAdminViaStorage', () => {
    const adminUser = { email: "admin@qabank.com", accountNumber: "000001" };
    cy.window().then((win) => {
        win.localStorage.setItem('authToken', `token_test_${adminUser.email}`);
        win.localStorage.setItem('authUserAccountNumber', adminUser.accountNumber);
    });
});

Cypress.Commands.add('seendUsuario', (usuario) => {
    cy.window().then((win) => {
        const users = JSON.parse(win.localStorage.getItem('bancoTesteUsers')) || {};
        const balances = JSON.parse(win.localStorage.getItem('bancoTesteBalance')) || {};
        users[usuario.email] = usuario;
        balances[usuario.accountNumber] = usuario.balance;
        win.localStorage.setItem('bancoTesteUsers', JSON.stringify(users));
        win.localStorage.setItem('bancoTesteBalance', JSON.stringify(balances));
    });
});

Cypress.Commands.add('loginViaStorage', (usuario) => {
    cy.window().then((win) => {
        win.localStorage.setItem('authToken', `token_${usuario.email}`);
        win.localStorage.setItem('authUserAccountNumber', usuario.accountNumber);
    });
});