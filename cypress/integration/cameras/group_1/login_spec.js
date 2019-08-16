const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Login move', function() {
	before(function () {

		cy.visit('/')
	})

	it('Access Login application', function() {
		cy.login(user, pass)

	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })
})
