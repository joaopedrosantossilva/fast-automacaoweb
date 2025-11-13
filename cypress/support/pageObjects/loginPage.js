class loginPage {

    visitar(){
        cy.visit('qa_bank.html')
    }

    get loginInput() {
        return cy.get('[data-cy="input-login-email"]')
    }

    get passwordInput(){
        return cy.get('[data-cy="input-login-password"]')
    }

    get entrarButton() {
        return cy.get('[data-cy="btn-login"]')
    }

    get usuarioLogadoTxt() {
        return cy.get('[data-cy="user-name-display"]')
    }

    get credenciaisInvalidasTxt(){
        return cy.get('[data-cy="login-message"]')
    }

    preencherEmail(email){
        this.loginInput.type(email)
    }
    
    preencherPassword(password){
        this.passwordInput.type(password)
    }

    clicarEmEntrar(){
        this.entrarButton.click()
    }

    realizarLogin(email,password){
        this.preencherEmail(email)
        this.preencherPassword(password)
        this.clicarEmEntrar()
    }

    validarNomeUsuarioLogado(nome){
        this.usuarioLogadoTxt.should('have.text', nome)
    }

    validarMsgCredenciaisInvalidas(){
        this.credenciaisInvalidasTxt.should('have.text', 'Email ou senha inválidos.')
    }
}

export default new loginPage()