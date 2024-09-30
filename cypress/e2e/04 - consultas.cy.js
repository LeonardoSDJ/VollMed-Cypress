describe('Consultas', () => {
  beforeEach(() => {
    cy.fixture('consulta').as('dadosConsulta');
    cy.login();
  });

  it('Deve registrar uma nova consulta', function() {
    cy.request('POST', '/consultas', this.dadosConsulta.novaConsulta).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a('string');
    });
  });
});