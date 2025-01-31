/// <reference types="cypress" />
import user from '../fixtures/massadetestes.json'

describe('Teste de fluxo de compra', () => {

    /*
    Dado que quero comprar uma blusa
    Quando eu selecionar a blusa no tamanho M
    E enviar para o carrinho
    Então vou finalizar a compra com cartão de crédito
    */

    it('Comprar uma blusa preta com sucesso', () => {
        cy.navegarHome()
        cy.login(user.email, user.senha) 
        cy.navegarCompra()
        cy.comprar()
        cy.validarCompraSucesso("Your order on My Shop is complete.")
    });
});