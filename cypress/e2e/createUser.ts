function login(username: string, password: string) {
  cy.session(username, () => {
    cy.visit('http://localhost:4200/');
  });
}
