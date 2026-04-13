Cypress.Commands.add('completeCheckout', () => {
    cy.get('[data-test="checkout"]').click()
    cy.fixture('checkout').then(checkout => {
        cy.get('[data-test="firstName"]').type(checkout.firstName)
        cy.get('[data-test="lastName"]').type(checkout.lastName)
        cy.get('[data-test="postalCode"]').type(checkout.postalCode)
    })
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
})