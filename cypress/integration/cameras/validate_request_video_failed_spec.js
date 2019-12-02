const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Validate Request video failed', function(){
	it('Should Access InpectLet', function() {
		cy.visit('https://www.inspectlet.com/exclude/1351548925')
	})
	
	it('Access Menu Camera', function() {
		cy.visit('/')

		cy.login(user, pass)

		cy.menuCamera();

	})

	it('Click Menu Camera', function() {
		cy.menuCamera();
	})

	it('Should validate video request failed', function(){
		cy.wait(4000)
		cy.clickAllVehicleGoups()
		cy.clickStartDate('18/10/2019')
		cy.clickEndDate('23/10/2019')

		cy.clickButton('Apply Filter')
		cy.wait(3000)

		cy.clickAllVehicleGoups()
		cy.get('#request_failed').check({force:true})
		cy.clickButton('Apply Filter')
		cy.wait(3000)

		cy.get('*').should('have.class', 'fa-exclamation-triangle')
	})

	it('Should validate disable failed request', function(){

		cy.clickAllVehicleGoups()
		cy.get('#request_failed').uncheck({force:true})
		cy.clickButton('Apply Filter')
		cy.wait(3000)

		cy.get('*').should('not.have.class', 'fa-exclamation-triangle')
	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })
})