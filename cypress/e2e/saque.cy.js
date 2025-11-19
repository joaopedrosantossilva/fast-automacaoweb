import loginPage from "../support/pageObjects/loginPage"
import painelPage from "../support/pageObjects/PainelPage"
import saquePage from "../support/pageObjects/SaquePage"

describe('Saque', () => {

    beforeEach(() => {
        cy.loginAdminViaStorage()
        loginPage.visitar()
        painelPage.clicarEmSaque()
    })

    it('Com sucesso', () => {
        const valorSaque = 500
        saquePage.preencherValor(valorSaque)
        saquePage.clicarEmRealizarSaque()
        saquePage.validarMsgSaqueRealizadoComSucesso(valorSaque)
    })

})