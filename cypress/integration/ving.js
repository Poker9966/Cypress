describe('My First Test', () => {
  it('Ving', () => {
    cy.visit('https://ving.se')
    cy.get('.bs-form__search-button').click()
    
    cy.get(':nth-child(1) > .webui-hotel-hit > .webui-hotel-hit__content-panel > .webui-hotel-hit__content-panel-footer-new > .webui-hotel-hit__content-panel-footer-cta > .webui-button').click()
    cy.get('#gtm-hotelpage-pricebutton').click()
    cy.wait(4000)
    cy.get('.tcne-pm-price-details-container__header-panel > .webui-button').click()

    //cy.get(':nth-child(3) > .container > .row > #utilities > h2')
    
    cy.wait(4000)

    cy.get('#firstName_0').type('Jul')
    cy.get('#lastName_0').type('Tomten')
    cy.get('#dateOfBirth_0').type('651224')
    cy.get('.pax0 > .name-collection__passenger-container > .name-collection__radio-buttons > .name-collection__radio-buttons-list > .Male > .webui-radiobutton > .webui-radiobutton__label > .webui-radiobutton__circle').click()

    cy.get('#firstName_1').type('Tomte')
    cy.get('#lastName_1').type('Mor')
    cy.get('#dateOfBirth_1').type('761224')
    cy.get('.pax1 > .name-collection__passenger-container > .name-collection__radio-buttons > .name-collection__radio-buttons-list > .Female > .webui-radiobutton > .webui-radiobutton__label > .webui-radiobutton__circle').click()

    cy.get('#email').type('tomten@nordpolen.se')
    cy.get('#validateEmail').type('tomten@nordpolen.se')
    cy.get('#mobilephone').type('+4670000000')
    cy.get('#street').type('Klappsvängen 12')
    cy.get('#zipCode').type('18282')
    cy.get('#transfer > .webui-image-block > .webui-image-block__children > .webui-image-block__children-ancillary > .webui-image-block__children-ancillary-content > .webui-image-block__content > .webui-image-block__content-children > .webui-ancillary-option > .webui-ancillary-option__choices > :nth-child(2) > .webui-radiobutton__label > .webui-radiobutton__circle').click()
  })
})