describe('Login move', function() {
	
	it('Access login page', function() {
		cy.visit('http://move.transpoco.net')

		cy.contains('Login')

	})

	it('Login in application', function() {
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')

	})
})
