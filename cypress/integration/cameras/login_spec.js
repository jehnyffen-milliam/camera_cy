const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Login move', function() {
	it('Should Access InpectLet', function() {
		cy.visit('https://www.inspectlet.com/exclude/1351548925')
	})

	it('Access Login application', function() {
		cy.visit('/')
		cy.login(user, pass)

	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })
})
