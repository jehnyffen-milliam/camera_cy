describe('Validate Preference Users KM and Miles', function(){
	beforeEach(function () {
		cy.visit('http://move.transpoco.net')
		cy.login('user2Jehnycy@email.ghostinspector.com', 'qwer1234!')

	})

	it('Validate KM Preference', function(){
		cy.clickMenu('Settings')

		cy.contains('Users & Permissions')
		cy.get('a').contains('Users').click({ force: true })
		cy.contains('Search:');
		cy.get('input[type="search"]').type('User 2 Jehny CY')
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="distance_unit"]').select('km')
		cy.wait(1000)
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('https://move.transpoco.net/settings/users/users.php')
		cy.contains('Search:')

		cy.logOut('Log out')
		cy.login('user2Jehnycy@email.ghostinspector.com', 'qwer1234!')

		cy.menuCamera();

		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')
		cy.clickButton('Apply Filter')

		cy.get('*').should('contain', 'km/h')
	})

	it('Validate Miles Preference', function(){
		cy.clickMenu('Settings')

		cy.contains('Users & Permissions')
		cy.get('a').contains('Users').click({ force: true })
		cy.contains('Search:');
		cy.get('input[type="search"]').type('User 2 Jehny CY')
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="distance_unit"]').select('mi')
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('https://move.transpoco.net/settings/users/users.php')
		cy.contains('Search:')

		cy.logOut('Log out')
		cy.login('user2Jehnycy@email.ghostinspector.com', 'qwer1234!')

		cy.menuCamera()

		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')
		cy.clickButton('Apply Filter')

		cy.get('*').should('contain', 'mph')
	})

	it('Validate KM Preference', function(){
		cy.clickMenu('Settings')

		cy.contains('Users & Permissions')
		cy.get('a').contains('Users').click({ force: true })
		cy.contains('Search:');
		cy.get('input[type="search"]').type('User 2 Jehny CY')
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="distance_unit"]').select('km')
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('https://move.transpoco.net/settings/users/users.php')
		cy.contains('Search:')

		cy.logOut('Log out')
		cy.login('user2Jehnycy@email.ghostinspector.com', 'qwer1234!')

		cy.menuCamera();

		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')
		cy.clickButton('Apply Filter')

		cy.get('*').should('contain', 'km/h')
	})

	afterEach(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })
	
})