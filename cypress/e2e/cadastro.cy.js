import loginPage from "../support/pageObjects/LoginPage";
import CadastroPage from "../support/pageObjects/CadastroPage";

describe('Cadastro de novas contas', () => {

  it('Com sucesso', () => {
    //ARRANGE
    loginPage.visitar()
    loginPage.clicarEmCriarNovaConta()

    //ACT
    CadastroPage.realizarCadastro('Novo usuario', 'teste@ste.com', '123456', 'Masculino')

    //ASSERT
    CadastroPage.validarMensagemDeContaCriadaComSucesso()

  })})