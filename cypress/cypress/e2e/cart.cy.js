
describe('Carrinho', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginWithValidCredentials()
    })

    it('Deve adicionar um produto ao carrinho com sucesso', () => {
        cy.addProductToCart()
        cy.contains('span', 'Your Cart').should('be.visible')
        cy.contains('span', '1').should('be.visible')

        cy.fixture('products').then(products => {
            cy.contains('div', products.sauceLabsBackpack.name).should('be.visible')
        })
    })

    it('Deve remover um produto do carrinho com sucesso', () => {
        cy.addProductToCart()
        cy.removeProductToCart()

        cy.fixture('products').then(products => {
            cy.contains('div', products.sauceLabsBackpack.name).should('not.exist')
        })
    })





})