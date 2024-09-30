describe('Autenticação', () => {
    beforeEach(() => {
        cy.fixture('usuario').as('dadosUsuario');
    });

    it('Deve cadastrar um novo usuario com sucesso', function () {
        cy.request('POST', '/cadastro-usuario', this.dadosUsuario.novoUsuario).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.be.an('object');
        });
    });

    it('Deve logar com sucesso', function () {
        cy.request('POST', '/login', this.dadosUsuario.novoUsuario).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.empty;
        });
    });
});