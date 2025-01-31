/// <reference types="cypress" />

//Mapeamento de elementos
const COMPRA = {
    mulheres: '[title="Women"]',
    blusaPreta:'[alt="Blouse"]',
    corBranca: '[id="color_8"]',
    btnAdicionarCarrinho: '[id="add_to_cart"]',
    btnCheckout:'[title="Proceed to checkout"]',
    termo:'[id="cgv"]',
    formaPagamento: '[title="Pay by bank wire"]',
    submit: '[type="submit"]',
    btnConfirmar: '[I confirm my order]',
    btnCheckout2:'[class="button btn btn-default standard-checkout button-medium"]',
    btnCheckout3:'[name="processAddress"]',
    btnCheckout4: '[name="processCarrier"]',
    btnCheckout5: '[class="button btn btn-default button-medium"]',
    alertaSucesso: '[class="alert alert-success"]'
}

//Comandos customizados
Cypress.Commands.add('navegarCompra', () => { 
    cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")   
})

Cypress.Commands.add('comprar', () => { 
    cy.get(COMPRA.blusaPreta).click()
    cy.get(COMPRA.corBranca).click()
    cy.get(COMPRA.btnAdicionarCarrinho).click()
    cy.wait(3000)
    cy.get(COMPRA.btnCheckout).click()
    cy.wait(3000)
    cy.get(COMPRA.btnCheckout2).click()
    cy.get(COMPRA.btnCheckout3).click()
    cy.get(COMPRA.termo).check()
    cy.get(COMPRA.btnCheckout4).click()
    cy.get(COMPRA.formaPagamento).click()
    cy.get(COMPRA.btnCheckout5).click()
})

Cypress.Commands.add('validarCompraSucesso', (text) => {
    cy.get(COMPRA.alertaSucesso).should('contain.text', `${text}`)
})