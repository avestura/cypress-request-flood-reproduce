/// <reference types="cypress" />

it('aaa', () => {
	cy.visit('/');
	cy.get('button').click()
	cy.wait(100)
	cy.get('button').click()
})