class TransferenciaPage {
  
  // --- Getters ---
  get contaInput() { return cy.get('[data-cy="input-transfer-destino"]'); }
  get valorInput() { return cy.get('[data-cy="input-transfer-valor"]'); }
  get transferirBtn() { return cy.get('[data-cy="btn-transferir"]'); }
  get mensagem() { return cy.get('[data-cy="transfer-message"]'); }
  
  // Pega o elemento que contém o saldo (span ou strong)
  get saldo() { return cy.get('[data-cy="saldo-atual"]'); }

  realizarTransferencia(contaDestino, valor) {
    this.contaInput.type(contaDestino);
    this.valorInput.type(valor);
    this.transferirBtn.click();
  }

  // --- Validações ---
  validarMensagemSucesso(contaDestino, valor) {
    const valorFormatado = parseFloat(valor).toFixed(2).replace('.',',');
    this.mensagem
      .should('be.visible')
      .and('contain.text', `Transferência de R$ ${valorFormatado} para a conta ${contaDestino} concluída.`);
  }

  validarSaldo(saldoEsperado) {
    // Formata o número esperado para o padrão brasileiro (ex: 1000.00 -> "1.000,00")
    const saldoFormatado = parseFloat(saldoEsperado).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    
    // Valida se o texto na tela contém o saldo formatado
    this.saldo.should('contain.text', saldoFormatado);
  }
}
export default new TransferenciaPage();