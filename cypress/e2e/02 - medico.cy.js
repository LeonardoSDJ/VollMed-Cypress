describe('Medico', () => {
    beforeEach(() => {
        cy.fixture('medico').as('dadosMedico');
        cy.login();
    });

    it('Deve cadastrar um novo medico', function () {
        cy.request('POST', '/medicos', this.medicoDados.novoMedico).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('string');
        });
    });

    it('Deve atualizar cadastro de medico', function () {
        cy.request('PUT', '/medicos', this.medicoDados.medicoAtualizado).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('string');
        });
    });

    it('Deve retornar uma lista de medicos', function () {
        cy.request('GET', '/medicos?page=0&size=10&sort=nome').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('content');
            expect(response.body.content).to.be.an('array');
        });
    });

    it('Deve buscar um medico pelo ID', function () {
        cy.request('GET', '/medicos/1').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('string');
        });
    });

    it('Deve deletar um medico', function () {
        cy.request('DELETE', '/medicos/1').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('string');
        });
    });
});