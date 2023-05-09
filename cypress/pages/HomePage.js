export class HomePage {
    navigate() {
        cy.visit('https://www.edu.goit.global/homepage')
      }
      login() {
        cy.get('#user_email').type('user888@gmail.com');
        cy.get('#user_password').type('1234567890');
        cy.get('.eckniwg2').click();

    }

    logout() {
        cy.get('.css-7afvtf').click();
        cy.get(':nth-child(9) > .css-bve2vl').click();
        
    }
}
