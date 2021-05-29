/// <reference types="cypress" />
describe('MyTestSuite', () => {
  it('Table Test', () => {
    cy.visit('http://testautomationpractice.blogspot.com/')

    // Check value presence anywhere in the table
    cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

    // Check value presnece in specific row and column
    //cy.get('#HTML1 > div.widget-content > table > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

    cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

    // Verify the book name "Master In Java" whose author is Amod
    // cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e,index,$list)) => {
    //     const text=$e.text()
    //     if(text.includes("Amod"))
    //     {
    //         cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){
    //             const bookName = bname.text()
    //             expect(bookName).to.equal('Master In Java')
    //         })
    //     }
    // }
  })
})