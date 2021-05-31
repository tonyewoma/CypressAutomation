/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Example to demonstrate file upload in cypress', function () {
    before(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('File Upload using cypress-file-upload npm package', () => {
        const filepath = 'images/aa.png'
        //cy.get('input[type="file"]').attachFile(filepath)
        cy.get('#file-upload').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('aa.png')
    })
})