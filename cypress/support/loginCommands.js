/// <reference types="cypress" />

//Mapeamento de elementos
const LOGIN = {
    email: '[id="email"]',
    senha: '[id="passwd"]',
    btnEntrar: '[id="SubmitLogin"]',
    emailCriar: '[id="email_create"]',
    btnCriar: '[id="SubmitCreate"]',
    alerta: '[class="alert alert-danger"]'
}

//Comandos customizados
Cypress.Commands.add('navegarHome', () => { 
    cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")   
})

Cypress.Commands.add('login', (email, senha) => { 
    cy.get(LOGIN.email).type(email)
    cy.get(LOGIN.senha).type(senha)
    cy.get(LOGIN.btnEntrar).click()
    
})

Cypress.Commands.add('criar', (email) => { 
    cy.get(LOGIN.emailCriar).type(email)
    cy.get(LOGIN.btnCriar).click()
    
})

Cypress.Commands.add('validarResultado', (text) => {
    cy.get(LOGIN.alerta).should('contain.text', `${text}`)
})