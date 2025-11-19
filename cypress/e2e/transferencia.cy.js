import transferenciaPage from '../support/pageObjects/TransferenciaPage';
import painelPage from '../support/pageObjects/PainelPage';
import loginPage from '../support/pageObjects/loginPage';

describe('Fluxo de Transferência (E2E)', () => {

  beforeEach(() => {
    cy.fixture('transferencia').as('dados');
    cy.get('@dados').then((dados) => {
      cy.sendUsuario(dados.usuarioDestino);
      cy.sendUsuario(dados.usuarioOrigem);
      cy.loginViaStorage(dados.usuarioOrigem);
    });
    loginPage.visitar()
    painelPage.clicarEmTransferencia()
  });

  it('deve realizar transferência com sucesso e atualizar saldo', () => {
    cy.get('@dados').then((dados) => {
      const valorTransf = 100;
      const saldoEsperado = dados.usuarioOrigem.balance - valorTransf;
      transferenciaPage.realizarTransferencia(dados.usuarioDestino.accountNumber, valorTransf);
      transferenciaPage.validarMensagemSucesso(dados.usuarioDestino.accountNumber, valorTransf);
      transferenciaPage.validarSaldo(saldoEsperado);
    });
  });
});