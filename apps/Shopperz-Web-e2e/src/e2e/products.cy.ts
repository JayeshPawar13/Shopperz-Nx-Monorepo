describe('Shopperz-Web-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should navigate to product', () => {
    cy.get(
      '[data-testid="product-66e40b4af1bb7da296ac6031"] > .relative > .absolute'
    ).click();
  });
});
