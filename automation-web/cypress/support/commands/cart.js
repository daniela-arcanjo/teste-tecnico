
Cypress.Commands.add('addProductToCart', () => {
    cy.fixture('products').then(products => {
      if(cy.contains('div', products.sauceLabsBackpack.name).should('be.visible')){
        cy.get(`[data-test=${products.sauceLabsBackpack.addToCartButton}]`).click()
      }
       })
      cy.get('[data-test="shopping-cart-link"] ').click()
})


Cypress.Commands.add('removeProductToCart', () => {
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
})