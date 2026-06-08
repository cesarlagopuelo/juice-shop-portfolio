describe('Juice Shop - Prueba de Humo', () => {
  it('Debería cargar la página de inicio correctamente', () => {
    // Visita la URL base
    cy.visit('/');

    // El selector exacto que copiaste del Selector Playground
    cy.get('[routerlink="/search"] > .mat-button-wrapper > span').should('be.visible');
  });
});