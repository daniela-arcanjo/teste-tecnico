describe('Consulta CEP', () => {
    beforeEach(() => {
        cy.fixture('zipCodeData').as('data')
    })

    it('Deve buscar um CEP válido com sucesso', function () {
        cy.getZipCode(this.data.zipCode.valid.withoutMask)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.cep).to.eq("05820200")
                expect(response.body.state).to.eq("SP")
                expect(response.body.city).to.eq("São Paulo")
                expect(response.body.neighborhood).to.eq('Jardim Novo Santo Amaro')
                expect(response.body.street).to.eq("Rua Nova do Tuparoquera")
                expect(response.body.service).to.eq("open-cep")
                cy.screenshot('api-valid-zip-code')
            })
    })

    it('Deve buscar CEP válido com máscara com sucesso', function () {
        cy.getZipCode(this.data.zipCode.valid.withMask)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.cep).to.eq("05820200")
                expect(response.body.state).to.eq("SP")
                expect(response.body.city).to.eq("São Paulo")
                expect(response.body.neighborhood).to.eq('Jardim Novo Santo Amaro')
                expect(response.body.street).to.eq("Rua Nova do Tuparoquera")
                expect(response.body.service).to.eq("open-cep")
                cy.screenshot('api-valid-zip-code-with-mask')
            })
    })

    it('Deve retornar erro ao buscar um CEP inválido', function () {
        cy.getZipCode(this.data.zipCode.invalid.invalidFormat)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq("CEP deve conter exatamente 8 caracteres.")
                cy.screenshot('api-invalid-zip-code-format')
            })
    })

    it('Deve retornar erro ao buscar um CEP inexistente', function () {
        cy.getZipCode(this.data.zipCode.invalid.nonExistent)
            .then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body.message).to.eq("Todos os serviços de CEP retornaram erro.")
                cy.screenshot('api-zip-code-not-found')
            })
    })

    it('Deve retornar erro ao consultar CEP vazio', function () {
        cy.getZipCode(this.data.zipCode)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq("CEP deve conter exatamente 8 caracteres.")
                cy.screenshot('api-empty-zip-code')
            })
    })

    it('Deve validar CEP com menos de 8 dígitos e retornar erro', function () {
        cy.getZipCode(this.data.zipCode.invalid.lessThan8Digits)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.errors[0].message).to.eq("CEP informado possui menos do que 8 caracteres.")
                cy.screenshot('api-zip-code-less-than-8-digits')
            })
    })

    it('Deve validar CEP com mais de 8 dígitos e retornar erro', function () {
        cy.getZipCode(this.data.zipCode.invalid.moreThan8Digits)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.errors[0].message).to.eq("CEP informado possui mais do que 8 caracteres.")
                cy.screenshot('api-zip-code-more-than-8-digits')
            })
    })

    it('Deve validar a estrutura do retorno da api ao buscar um CEP válido com sucesso', function () {
        cy.getZipCode(this.data.zipCode.valid.withoutMask)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.all.keys([
                    'cep', 'state', 'city', 'neighborhood', 'street', 'service',
                ])
                cy.screenshot('api-response-structure')
            })
    })

    it('Deve validar tipos dos campos retornados na consulta de CEP', function () {
        cy.getZipCode(this.data.zipCode.valid.withoutMask)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.cep).to.be.a('string')
                expect(response.body.city).to.be.a('string')
                expect(response.body.state).to.be.a('string')
                expect(response.body.neighborhood).to.be.a('string')
                expect(response.body.street).to.be.a('string')
                expect(response.body.service).to.be.a('string')
                expect(response.body.state).to.have.length(2)
            })
        cy.screenshot('api-response-data-types')

    })
})