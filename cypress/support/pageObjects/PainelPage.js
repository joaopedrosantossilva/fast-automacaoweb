class PainelPage{

    get usuarioLogadoTxt() {
        return cy.get('[data-cy="user-name-display"]')
    }

    get saqueOption() {
        return cy.get('[data-cy="nav-saque"]')
    }

    get transferenciaOption() {
        return cy.get('[data-cy="nav-transferencia"]')
    }

    clicarEmSaque(){
        this.saqueOption.click()
    }

    clicarEmTransferencia(){
        this.transferenciaOption.click()
    }

    validarNomeUsuarioLogado(nome){
        this.usuarioLogadoTxt.should('have.text', nome)
    }
}

export default new PainelPage()