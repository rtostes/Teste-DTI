[javascript-image]: https://img.shields.io/badge/javascript-red
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[cypress-image]:https://img.shields.io/badge/cypress-10.9.0-beige
[cypress-url]:https://docs.cypress.io/guides/overview/why-cypress

# Projeto de teste DTI (Rodrigo Tostes)
[![JavaScript Version][javascript-image]][javascript-url]
[![Cypress Version][cypress-image]][cypress-url]

Estrutura do projeto:
```
./
├── .github/
│   └── workflows/
│        └── action.yaml
├── cypress/
│   ├── e2e/
│   ├── fixture/
│   ├── support/
│   │    ├── e2e.js
│   │    └── utils.js
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```
Possuir NodeJS instalado (versão 18 ou superior)

Possuir dependencias do projeto com ->> npm install

## Abaixo segue alguns comandos a serem utilizados com o projeto:

Para executar o cypress em modo Test Runner, usando o aliase criado no arquivo package.json:
```
npm run cy:open
```

Para executar o cypress em modo headless, usando o aliase criado no arquivo package.json:
```
npm run cy:test
```
### Demais execuções via pipeline, será utilizado via gitHub Action.