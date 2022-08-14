describe('Auth (e2e)', () => {
  it('should load and redirect to /login', () => {
    cy.visit('http://localhost:3000/');
    cy.url().should('include', 'login');
  });

  // it('should have default initial state', () => {
  //   const initialAppState = {
  //     auth: {
  //       user: null,
  //       jwt: null,
  //       isAuthenticated: false,
  //       isLoading: false,
  //       isSuccess: false,
  //       isError: false,
  //     },
  //   };

  //   cy.window()
  //     .its('store')
  //     .invoke('getState')
  //     .should('deep.equal', initialAppState);
  // });

  const randomInt = Math.floor(Math.random() * 100000);
  const name = `user-${randomInt}`;
  const email = `user-${randomInt}@hotmail.com`;
  const password = 'password';

  it('should navigate to login upon registering', () => {
    cy.get('#register-link').click();
    cy.get('#name').click().type(name);
    cy.get('#email').click().type(email);
    cy.get('#password').click().type(password);
    cy.get('#confirmPassword').click().type(password);
    cy.get('#register-btn').click();
    cy.wait(500);
    cy.url().should('include', 'login');
  });

  it('Login button should be disabled', () => {
    cy.contains('#signin-btn', 'Login').should('have.attr', 'disabled');
  });

  it('Correct details should enable Login button', () => {
    cy.get('#email').click().type(email);
    cy.get('#password').click().type(password);
    cy.contains('#signin-btn', 'Login').should('not.have.attr', 'disabled');
  });

  it('should navigate to home page', () => {
    cy.contains('#signin-btn', 'Login').click();
    cy.wait(500);
    cy.url().should('not.include', 'login');
    cy.url().should('include', '/');
  });
});
