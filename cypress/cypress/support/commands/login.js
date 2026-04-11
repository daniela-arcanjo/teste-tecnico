Cypress.Commands.add('loginWithValidCredentials', () => {
    cy.fixture('credentials').then(credentials => {
      cy.get('[data-test="username"]').click().type(credentials.valid.username)
      cy.get('[data-test="password"]').click().type(credentials.valid.password)
    })
    cy.contains('Input', 'Login').click()
})

Cypress.Commands.add('loginWithInvalidCredentials', () => {
    cy.fixture('credentials').then(credentials => {
      cy.get('[data-test="username"]').click().type(credentials.invalid.username)
      cy.get('[data-test="password"]').click().type(credentials.invalid.password)
    })
    cy.contains('Input', 'Login').click()
})

Cypress.Commands.add('loginWithEmptyFields', () => {
    cy.fixture('credentials').then(credentials => {
      cy.get('[data-test="username"]').click().clear()
      cy.get('[data-test="password"]').click().clear()
    })
    cy.contains('Input', 'Login').click()
})