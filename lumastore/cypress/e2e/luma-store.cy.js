describe('Luma Store - Testes E2E', () => {
  it('Verifica se a home page carrega corretamente', () => {
    cy.visit('https://magento.softwaretestingboard.com');
    cy.get('body').should('be.visible');
    cy.get('img[alt="Luma logo"]').should('be.visible');
  });
});
