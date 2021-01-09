/// <reference types="cypress" />



context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.user-login-form', { timeout: 30000 });
  })

  it('verify create new account opens', () => {
    cy.get('.new-account-btn').click()
    cy.get('.create-account-form', { timeout: 30000 });
    
  })
  it('validation mismatching password',()=>{
    cy.get('.new-account-btn').click()
    
    cy.get('.input-email')
      .type('test@test.com').should('have.value', 'test@test.com')
      

    cy.get('.first-password')
      .type('hi')
    cy.get('.second-password')
      .type('somethingelse')

    cy.get('.login-btn').click()
    cy.get('.error-message').should('contain','Please enter same')
      
  })
  it('validation mismatching password',()=>{
    cy.get('.new-account-btn').click()
    
    cy.get('.input-email')
      .type('test@test.com').should('have.value', 'test@test.com')
      
    cy.get('.first-password')
      .type('sourabh')
    cy.get('.second-password')
      .type('sourabh')

    cy.get('.login-btn').click()
    cy.get('.landingPage')
      
  })
})
