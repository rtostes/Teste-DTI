/// <reference types="cypress" />
import user from '../fixtures/massadetestes.json'

describe('Testes de Login', () => {

    /*
    Dado que o usuário esteja na página de autenticação do site "automation practice"
    Quando o usuário preencher os campos de e-mail e  senha  
    Então a página deve redirecionar o usuário para a sua página de conta com sucesso
    */
    it('Verificar login com dados válidos', () => {
       cy.navegarHome()
       cy.login(user.email, user.senha) 
       cy.get('[id="header_logo"]').should('be.visible')
    });

    /*
    Dado que o usuário esteja na página de autenticação do site "automation practice"
    Quando o usuário preencher os campos de e-mail e senha com valores incorretos
    Então a página deve exibir uma mensagem de erro indicando que as credenciais estão incorretas
    */

    it('Verificar erro ao fazer login com dados inválidos', () => {
        cy.navegarHome()
        cy.login(user.emailErro, user.senhaErro) 
        cy.get('[class="alert alert-danger"]').should('be.visible')

    })
    /*
    Dado que o usuário esteja na página de autenticação do site "automation practice"
    Quando o usuário preencher o campo de e-mail com email que já existe cadastrado
    Então a página deve exibir uma mensagem de erro indicando que o e-mail já está em uso
    */

    it('Verificar erro ao criar conta com e-mail já existente', () => {
        cy.navegarHome()
        cy.criar(user.email) 
        cy.validarResultado(user.mensagemEmailExistente)
    });

});

