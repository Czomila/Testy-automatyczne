describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://www.edu.goit.global/account/login')
    cy.login('user888@gmail.com', '1234567890');
  })
 
  it('passes', () => {
    cy.get('.css-7afvtf').click();
    cy.get(':nth-child(9) > .css-bve2vl').click();
    
  })
})