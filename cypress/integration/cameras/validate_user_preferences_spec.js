const user = Cypress.env('user')
const pass = Cypress.env('pass')
const userName = 'jehnyffen'
describe('Validate Preference Users KM and Miles', function(){
	beforeEach(function () {

		cy.visit('/')

		cy.login(user, pass)

	})

	it('Validate KM Preference', function(){
		cy.clickMenu('Settings')

		cy.contains('Users & Permissions')
		cy.get('a').contains('Users').click({ force: true })
		cy.contains('Search:');
		cy.get('input[type="search"]').type(user) //here search by email, is better.
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="distance_unit"]').select('km')
		cy.wait(1000)
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('settings/users/users.php')
		cy.contains('Search:')

		cy.logOut('Log out')
		cy.login(user, pass)

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
		cy.get('input[type="search"]').type(user) //here search by email, is better.
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="distance_unit"]').select('mi')
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('settings/users/users.php')
		cy.contains('Search:')

		cy.logOut('Log out')
		cy.login(user, pass)

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
		cy.get('input[type="search"]').type(user) //here search by email, is better.
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="distance_unit"]').select('km')
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('settings/users/users.php')
		cy.contains('Search:')

		cy.logOut('Log out')
		cy.login(user, pass)

		cy.menuCamera();

		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')
		cy.clickButton('Apply Filter')

		cy.get('*').should('contain', 'km/h')
	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })
	
})