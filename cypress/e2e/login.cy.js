import loginPage from "../support/pageObjects/LoginPage";

describe('Login', () => {

  beforeEach(()=> {
    //ARRANGE
    loginPage.visitar()
    cy.fixture("usuarios").as("users")
  })

  it('Com sucesso - Usuario Admin', () => {
    cy.get("@users").then((users) => {
      //ACT
      loginPage.realizarLogin(users.admin.email, users.admin.password)

      //ASSERT
      loginPage.validarNomeUsuarioLogado(users.admin.nome)
    })
  })

  it('Com credenciais invalidas - Usuario Admin', () => {
    cy.fixture("usuarios").then((response) => {
      //ACT
      loginPage.realizarLogin(response.admin.email,response.admin.password_errada)

      //ASSERT
      loginPage.validarMsgCredenciaisInvalidas()

    })
  })  
})