class CadastroPage{
        
    get nameInput(){
        return cy.get('[data-cy="input-register-name"]')
    }

    get emailInput(){
        return cy.get('[data-cy="input-register-email"]')
    }

    get passwordInput(){
        return cy.get('[data-cy="input-register-password"]')
    }

    get sexoSelect(){
        return cy.get('[data-cy="select-register-sexo"]')
    }

    get salvarButton(){
        return cy.get('[data-cy="btn-register-submit"]')
    }

    get mensagemDeRetorno(){
        return cy.get('[data-cy="register-message"]', {timeout: 10000})
    }

    preencherNome(nome){
        this.nameInput.type(nome)
    }

    preencherPassword(password){
        this.passwordInput.type(password)
    }

    preencherEmail(email){
        this.emailInput.type(email)
    }

    selecionarOSexo(sexo){
        this.sexoSelect.select(sexo)
    }

    clicarEmCadastrar(){
        this.salvarButton.click()
    }

    validarMensagemDeContaCriadaComSucesso(){
        this.mensagemDeRetorno.should('be.visible').and('contains.text', 'Conta criada com sucesso! Seu Número de Conta é:')
    }

    validarMensagemDeContaJaCadastrada(){
        this.mensagemDeRetorno.should('be.visible').and('contains.text', 'Email já cadastrado.')
    }

    realizarCadastro(nome, email, password, sexo){
        this.preencherNome(nome)
        this.preencherEmail(email)
        this.preencherPassword(password)
        this.selecionarOSexo(sexo)
        this.clicarEmCadastrar()
    }

}

export default new CadastroPage()