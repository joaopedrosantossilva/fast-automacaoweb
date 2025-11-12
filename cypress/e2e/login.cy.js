import loginPage from "../support/pageObjects/loginPage"

describe('Login', () => {
  it('Login com sucesso - Usuario Admin', () => {
    //ARRANGE
    loginPage.visitar()

    //ACT
    loginPage.realizarLogin("admin@qabank.com","admin123")

    //ASSERT
    loginPage.validarNomeUsuarioLogado("Admin do Sistema")
    
  })
  
})