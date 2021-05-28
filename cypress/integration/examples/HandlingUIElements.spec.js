  /// <reference types="Cypress" />
  "compilerOptions": {
    "types": ["cypress"]
  }

  describe('UI Elementst', () => {
  it('Verify Inputbox & Radio buttons', () => {
    cy.visit("http:newtours.demoaut.com/") // Visit URL
    cy.url().should('include', 'newtours') // Verify URL should include 'newtours'

    cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
    cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")

    cy.get('input[name=login]').should('be.visible').click() // Sign-In

    // Title verification
    cy.title().should('eq', 'Find a Flight: Mercury Tours:')

    // Radio Button
    cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') // Visibility checked status
    cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() // Visibility checked status

    cy.get('[name=findFlights]').should('be.visible').click() // Continue Button

    cy.title().should('eq', 'Select a Flight: Mercury Tours') // Title Verification
  })
})