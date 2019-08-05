describe('Login move', function() {
	
	it('Access login page', function() {
		cy.visit('http://move.transpoco.net')

	})

	it('Login in application', function() {
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')

	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })
})
