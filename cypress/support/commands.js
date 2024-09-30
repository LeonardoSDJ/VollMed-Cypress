Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      login: Cypress.env('login'),
      senha: Cypress.env('senha')
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    const token = response.body.token;
    Cypress.env('authToken', token);
  });
});

Cypress.Commands.overwrite('request', (originalFn, ...args) => {
  const token = Cypress.env('authToken');
  if (token) {
    const [options] = args;
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`
    };
  }
  return originalFn(...args);
});