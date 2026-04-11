Cypress.Commands.add('getZipCode', (zipCode) => {
    return cy.api({
        method: 'GET',
        url: `https://brasilapi.com.br/api/cep/v1/${zipCode}`,
        failOnStatusCode: false
    }).then((response) => { return response })
})