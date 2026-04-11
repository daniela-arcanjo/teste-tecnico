describe('Carrinho', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginWithValidCredentials()
        cy.fixture('products').as('products')
    })

    it('Deve adicionar um produto ao carrinho com sucesso', function () {
        cy.addProductToCart()
        cy.contains('span', 'Your Cart').should('be.visible')
        cy.contains('span', '1').should('be.visible')
        cy.contains('div', this.products.sauceLabsBackpack.name).should('be.visible')
        cy.screenshot('cart-product-added')
    })

    it('Deve remover um produto do carrinho com sucesso', function () {
        cy.addProductToCart()
        cy.removeProductToCart()
        cy.contains('div', this.products.sauceLabsBackpack.name).should('not.exist')
        cy.screenshot('cart-product-removed')

    })
})