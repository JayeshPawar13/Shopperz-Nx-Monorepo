describe('Shopperz-Web-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('[data-testid="welcome-title"]').contains(/Elevate Your Everyday/);
  });

  it('should display navbar', () => {
    cy.get('[data-testid="navbar"]').should('exist');
  });
});
