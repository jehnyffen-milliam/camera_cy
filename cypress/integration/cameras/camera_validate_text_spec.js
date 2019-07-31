describe('Validate Cameras Text', function(){
	
	it('Access login page', function() {
		cy.visit('http://move.transpoco.net')
		cy.contains('Login')
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')

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

		cy.expectTextArray(textsPage)

		cy.get('.dotted').contains('All Vehicle Groups').click()
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

		cy.expectTextArray(textsRequest)
		cy.clickButton('Cancel')
		// cy.get('#vehicles_list > div > div > div').click({force:true})
		// cy.get('*').contains('161WW1467').click({force:true})
	})
})
