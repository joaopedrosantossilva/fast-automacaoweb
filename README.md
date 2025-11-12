# Projeto de Automação com Cypress: QA Bank (Curso)

Este é o projeto base para o curso de automação de testes com Cypress. O objetivo é fornecer um ambiente de aplicação web controlado, robusto e 100% offline (`qa_bank.html`) para que possamos focar exclusivamente nos conceitos de automação.

## 🏦 A Aplicação: QA Bank

O `qa_bank.html` é uma aplicação "Single Page Application" (SPA) local que simula um banco digital. Ela não possui um backend real; toda a persistência de dados (criação de usuários, saldos) é simulada usando o **LocalStorage** do navegador.

### Funcionalidades Principais
* **Autenticação:** Cadastro de novos usuários e Login.
* **Painel (Layout de App):** Uma interface com sidebar de navegação.
* **Operações:**
    * Depósito
    * Saque
    * Transferência entre contas

### Por que um App Local?
Usar um arquivo `.html` local em vez de um site hospedado nos dá 3 grandes vantagens para o aprendizado:
1.  **Estabilidade:** O app nunca cai e funciona 100% offline.
2.  **Velocidade:** Os testes rodam instantaneamente, sem latência de rede.
3.  **Controle (Didática):** Nós temos controle total do HTML, o que nos permite usar as **melhores práticas** (como seletores `[data-cy]`) desde o primeiro dia.

---

## 🛠️ Tecnologias e Padrões Utilizados

* **Cypress:** O framework "all-in-one" para testes E2E.
* **Node.js / npm:** O ambiente de execução e gerenciador de pacotes do projeto.
* **JavaScript (ES6+):** Linguagem usada para escrever os testes.
* **Page Object Model (POM):** Padrão de design principal para separar a lógica do teste (`o quê`) dos seletores da UI (`o como`).
* **Component Object Model:** Uma extensão do POM, onde tratamos componentes reutilizáveis (como a `Sidebar` ou o card de `Saque`) como "mini-POMs".
* **Comandos Customizados:** "Helpers" globais (`commands.js`) para ações repetitivas, como o `cy.cadastrarUsuarioProgramatico`.
* **Fixtures:** Para centralizar nossa massa de dados (`usuarios.json`), separando os dados da lógica.
* **Hooks:** Para preparar o estado dos testes (`beforeEach`) de forma limpa.

---

## ▶️ Como Executar os Testes

### 1. Instale as Dependências
Este comando irá ler o package.json e baixar todas as dependências necessárias (como o Cypress) para a pasta node_modules.
```bash
npm install
```

### 2. Modo Interativo 
Abre o "Test Runner", a interface gráfica onde você pode ver o teste rodando e depurá-lo.
```bash
npx cypress open
```
- Abre o "Test Runner", a interface gráfica onde você pode ver o teste rodando e depurá-lo.
- Na interface, escolha E2E Testing.
- Escolha seu navegador.
- Clique no arquivo de teste (ex: painel.cy.js) para executá-lo