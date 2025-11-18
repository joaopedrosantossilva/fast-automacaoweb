import loginPage from "../support/pageObjects/LoginPage";
import CadastroPage from "../support/pageObjects/CadastroPage";

describe('Cadastro de novas contas', () => {

   beforeEach(()=> {
        //ARRANGE
        loginPage.visitar()
        loginPage.clicarEmCriarNovaConta()
        cy.fixture('usuarios').as('users')
   }) 

  it('Com sucesso', () => {
    cy.get('@users').then((response) => {
        //ACT
        CadastroPage.realizarCadastro(response.novo_usuario.nome, response.novo_usuario.email, response.novo_usuario.password, response.novo_usuario.sexo)

        //ASSERT
        CadastroPage.validarMensagemDeContaCriadaComSucesso()
        })
})
  it('Usuario ja cadastrado', () => {
    cy.get('@users').then((response) => {
        //ACT
        CadastroPage.realizarCadastro(response.admin.nome, response.admin.email, response.admin.password, response.admin.sexo)

        //ASSERT
        CadastroPage.validarMensagemDeContaJaCadastrada()
        })
})
})