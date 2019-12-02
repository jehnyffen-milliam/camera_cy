const user = Cypress.env('user')
const pass = Cypress.env('pass')

describe('Validate Screenshot', function(){
	
	it('Should Access InpectLet', function() {
		cy.visit('https://www.inspectlet.com/exclude/1351548925')
	})

	it('Access Menu Camera', function() {

		cy.visit('/')

		cy.login(user, pass)

		cy.menuCamera();
	})

	it('Validate Screenshot event', function(){
		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')

		cy.clickButton('Apply Filter');
		cy.get('*').contains('PWojcik 141D27001')
		//Click Screenshot button
		cy.clickScreenshotByVehicle2('2019-07-24 10:59:48', 'PWojcik 141D27001');
		
		cy.get('.SlideModal').contains('PWojcik 141D27001')
		cy.get('.SlideModal').contains('2019-07-24 10:59:48')
		cy.get('.SlideModal').contains('35 km/h')
		cy.get('.SlideModal').contains('Location')
		cy.get('.SlideModal').contains('57 Beechpark Avenue, Castleknock-Park ED, Dublin 15, County Dublin, Ireland')
		cy.get('.SlideModal').contains('Vehicle')
		cy.get('.SlideModal').contains('Location')
		cy.get('.SlideModal').contains('Date')
		cy.get('.SlideModal').contains('Speed')

		// cy.expectTextArray(textScreenshot)

		cy.get('#root > div.singleVideoWrapper > div > div > div > div.SlideModal__header.js-slideModalHeader > h4 > div > button').click()

	})

	it('Playing video already existed', function(){
		cy.clickAllVehicleGoups()
		cy.clickStartDate('23/07/2019')
		cy.clickEndDate('24/07/2019')

		cy.clickButton('Apply Filter');
		cy.get('*').contains('161WW1467')
		//Click Video button
		cy.clickPlayVideo('2019-07-23 10:23:58', '161WW1467');
		
		cy.get('.SlideModal').contains('161WW1467')
		cy.get('.SlideModal').contains('2019-07-23 10:23:58')
		// cy.get('.SlideModal').contains('37 km/h') // BUG
		cy.get('.SlideModal').contains('Location')
		// cy.get('.SlideModal').contains('Timmore Lane, Newcastle Lower, Ballyvolan Upper, County Wicklow, A63 HP22, Ireland') // BUG
		cy.get('.SlideModal').contains('Vehicle')
		cy.get('.SlideModal').contains('Location')
		cy.get('.SlideModal').contains('Date')
		// cy.get('.SlideModal').contains('Speed') // BUG

		//Click on play the video
		cy.get('video')
		//cy.get('#pageContent > div > div:nth-child(2) > div.ReactTable.table.table-sm.table-bordered.table-striped.table-hover.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(2) > div > div:nth-child(5) > div > button').click()
	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })

})