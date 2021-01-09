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
  it('validation wrong password',()=>{
    cy.get('.input-email')
      .type('sourabh@raghav.com').should('have.value', 'sourabh@raghav.com')
      
    cy.get('.input-password')
      .type('souriuyiuabh')
    
    cy.get('.login-btn').click()
    cy.get('.validation-message').should('contain','Login failed')
  })

  it('login pass',()=>{
    cy.get('.input-email')
      .type('sourabh@raghav.com').should('have.value', 'sourabh@raghav.com')
    
      cy.get('.input-password')
      .type('sourabh')
    
    cy.get('.login-btn').click()
    cy.get('.landingPage')
      
  })
})
