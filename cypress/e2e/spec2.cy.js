describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://www.edu.goit.global/account/login')
    cy.login('testowyqa@qa.team', 'QA!automation-1');
  })
 
  it('passes', () => {
    cy.get('.css-7afvtf').click();
    cy.get(':nth-child(7) > .css-bve2vl').click();
    
  })
})