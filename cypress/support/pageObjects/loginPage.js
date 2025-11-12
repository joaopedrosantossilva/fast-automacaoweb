class loginPage {

    visitar(){
        cy.visit('qa_bank.html')
    }

    realizarLogin(email,password){
        cy.get('[data-cy="input-login-email"]').type(email)
        cy.get('[data-cy="input-login-password"]').type(password)
        cy.get('[data-cy="btn-login"]').click()
    }

    validarNomeUsuarioLogado(nome){
        cy.get('[data-cy="user-name-display"]').should('have.text', nome)
    }
}

export default new loginPage()