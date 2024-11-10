describe('Record and Play Suite', () => {
  it('Test 1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://myrepublic.net/sg/');
    cy.visit('https://myrepublic.net/sg/');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.wait(500)
    cy.get('.jet-mobile-menu__toggle').click();
    cy.get('#jet-mobile-menu-item-117939 > .jet-mobile-menu__item-inner > .mobile-link > .jet-menu-item-wrapper > .jet-menu-name > .jet-menu-label').click();
    cy.get('.post-118139 > .elementor-post__card > .elementor-post__text > .elementor-post__read-more').click();
    /* ==== End Cypress Studio ==== */
  })
})