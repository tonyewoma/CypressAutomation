/// <reference types="cypress" />
describe('MyTestSuite', () => {
  it('Mavigation Test ', () => {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq', 'nopCommerce demo store') // Home Page

    cy.get('.ico-register').contains('Register').click()
    cy.title().should('eq', 'nopCommerce demo store. Register') // Reg PAge

    cy.go('back')
    cy.title().should('eq', 'nopCommerce demo store') // Home Page

    cy.go('forward')
    cy.title().should('eq', 'nopCommerce demo store. Register') // Reg PAge

    cy.go(-1) // back
    cy.title().should('eq', 'nopCommerce demo store') // Home Page

    cy.go(1) // forward
    cy.title().should('eq', 'nopCommerce demo store. Register') // Reg PAge

    cy.reload()
  })
})