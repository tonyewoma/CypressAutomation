  /// <reference types="Cypress" />

describe('Suite Name', () => {
  it('Alert 2', () => {
    cy.visit('http://testautomationpractice.blogspot.com/')
    
    cy.get('#HTML9 > div.widget-content > button').click()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Press a button!')
    })
  })
})