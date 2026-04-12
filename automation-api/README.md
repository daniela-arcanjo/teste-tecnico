<h1 align="center"> API Cep </h1>

<p align="center">
O objetivo deste projeto é validar endpoints da API, incluindo cenários positivos e negativos, garantindo o correto tratamento de respostas e status codes.
</p>

## Tecnologias

<table border="0">
  <tr>
    <td>
      <a href="https://nodejs.org/en" target="_blank">
        <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js"/>
      </a>
    </td>
    <td style="border:none"><a href="https://nodejs.org/en" target="_blank">Node.js</a></td>
  </tr>
  <tr>
  <tr>
    <td>
      <a href="https://www.cypress.io/" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" alt="Cypress" style="width:47px;border-radius:10px;"/>
      </a>
    </td>
    <td><a href="https://www.cypress.io/" target="_blank">Cypress</a></td>
  </tr>
</table>

## Pré requisitos
> [!WARNING]
> Para executar o projeto, você deve instalar as seguintes ferramentas em sua máquina:
- [Node.js](https://nodejs.org/en): v20 ou maior.

## Instalação
Clone o repositório no seu computador
```
git clone https://github.com/daniela-arcanjo/teste-tecnico.git
```

Acesse o projeto
```
cd automation-api
```

Instale as dependências
```
npm install
```

## Para rodar os testes localmente

**Modo CLI (execução via terminal)**

Executa os testes diretamente no terminal.
```
npm run cy:run
```

**Modo interativo (interface gráfica)**

Abre a interface gráfica do Cypress (Test Runner) para execução e depuração manual dos testes.
```
npm run cy:open
```

**Modo de execução com navegador visível**

Executa os testes via linha de comando com o navegador aberto, permitindo acompanhar a execução em tempo real.
```
npm run cy:run:headed
```