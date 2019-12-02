const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Validate Cameras Text', function(){
	it('Should Access InpectLet', function() {
		cy.visit('https://www.inspectlet.com/exclude/1351548925')
	})
	
	it('Access login page', function() {
		cy.visit('/')

		cy.login(user, pass)

	})

	it('Click Menu Camera', function() {
		cy.menuCamera();
	})

	it('Validate text on page', function(){

		const textsPage = [
			   'Home'
			 , 'Event'
			 , 'Vehicle'
			 , 'Date'
			 , 'Speed'
			 , 'Video (s)'
			 , 'Request Video'
			 , 'Apply Filter'
			 , 'Close'
			 , 'Filter Options'
		]

		// cy.expectTextArray(textsPage)
		cy.verifyTextArray(textsPage)

		cy.get('.dotted').contains('All Vehicle Groups').click({force:true})
		cy.wait(2000)
		cy.clickButton('Close');

		cy.clickButton('Request Video')
		const textsRequest = [
			   'Request Video'
			 , 'Vehicle:'
			 , 'Select a Date:'
			 , 'Select a Time:'
			 , 'Select an Interval:'
			 , 'Cancel'
		]

		// cy.expectTextArray(textsRequest)
		cy.verifyTextArray(textsRequest)
		cy.clickButton('Cancel')
		// cy.get('#vehicles_list > div > div > div').click({force:true})
		// cy.get('*').contains('161WW1467').click({force:true})
	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })
})
