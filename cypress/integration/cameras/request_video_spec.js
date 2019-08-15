const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Validate Request Video', function(){
	before(function () {
		cy.visit('/')

		cy.login(user, pass)

		cy.menuCamera();
	})

	it('Request Video Manualy', function(){
		
		cy.wait(4000)
		cy.clickAllVehicleGoups()
		cy.clickStartDate('13/08/2019')
		cy.clickEndDate('14/08/2019')

		cy.clickButton('Apply Filter')
		cy.wait(3000)
		cy.get('*').contains('161WW1467')
		cy.get('*').contains('Request Video')
		cy.wait(4000)
		cy.get('*').contains('Request Video').click({force:true})
		cy.wait(1000)
		cy.get('.modal-title').contains('Request Video')
		cy.get('.modal-body').contains('Select a vehicle').click()
		cy.get('.modal-body').contains('161WW1467').click()
		cy.setDateRequestVideo('13th Aug 19')
		cy.get('*').contains('Select a Date').click();
		cy.wait(1000)
		cy.setTimeRequestVideo('02:05:16')
		cy.get('#confirm_button').contains('Request Video').click()
		cy.get('*').contains('New Message')
		cy.get('*').contains('Video requested. You will be notified when it is ready to download');
		cy.wait(4000)
		cy.get('.fa-refresh').click()
		cy.wait(4000)
		cy.get('*').contains('Manual request')
		cy.wait(2000)
	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })

})