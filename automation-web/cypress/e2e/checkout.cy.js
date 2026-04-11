describe('Checkout', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginWithValidCredentials()
        cy.addProductToCart()
    })

    it('Deve concluir a compra no checkout com sucesso', () => {
        cy.completeCheckout()
        cy.contains('h2', 'Thank you for your order!').should('be.visible')
        cy.screenshot('checkout-success')
    })  
})