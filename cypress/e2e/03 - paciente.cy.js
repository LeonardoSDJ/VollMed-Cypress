describe('Pacientes', () => {
  beforeEach(() => {
    cy.fixture('paciente').as('dadosPaciente');
    cy.login();
  });

  it('Deve cadastrar um novo paciente', function () {
    cy.request('POST', '/pacientes', this.dadosPaciente.novoPaciente).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a('string');
    });
  });

  it('Deve atualizar um paciente', function () {
    cy.request('PUT', '/pacientes', this.dadosPaciente.pacienteAtualizado).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a('string');
    });
  });

  it('Deve buscar a lista de pacientes', function () {
    cy.request('GET', '/pacientes?page=0&size=10&sort=nome').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('content');
      expect(response.body.content).to.be.an('array');
    });
  });

  it('Deve buscar um paciente através do ID', function () {
    cy.request('GET', '/pacientes/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a('string');
    });
  });

  it('Deve deletar um paciente', function () {
    cy.request('DELETE', '/pacientes/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a('string');
    });
  });
});