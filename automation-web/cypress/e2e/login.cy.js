describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com credenciais válidas deve redirecionar o usuário para a página de produtos', () => {
    cy.loginWithValidCredentials()
    cy.contains('span', 'Products').should('be.visible')
  })

  it('Login com credenciais inválidas deve exibir mensagem de erro e não permitir acesso ao sistema', () => {
    cy.loginWithInvalidCredentials()
    cy.contains('h3', 'Epic sadface: Username and password do not match any user in this service').should('be.visible')
  })

  it('Deve impedir login com campos obrigatórios não preenchidos', () => {
    cy.loginWithEmptyFields()
    cy.contains('h3', 'Epic sadface: Username is required').should('be.visible')
  })
})