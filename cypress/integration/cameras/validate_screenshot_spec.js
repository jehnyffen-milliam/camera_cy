const user = Cypress.env('user')
const pass = Cypress.env('pass')

describe('Validate Screenshot', function(){
	before(function () {

		cy.visit('/')

		cy.login(user, pass)

		cy.menuCamera();
	})

	it('Validate Screenshot event', function(){
		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')

		cy.clickButton('Apply Filter');
		cy.get('*').contains('[VINCENTFMT]')
		//Click Screenshot button
		cy.clickScreenshotByVehicle2('2019-07-24 15:15:20', '[VINCENTFMT]');
		
		cy.get('.SlideModal').contains('[VINCENTFMT]  Vincent FMT')
		cy.get('.SlideModal').contains('2019-07-24 15:15:20')
		cy.get('.SlideModal').contains('39 km/h')
		cy.get('.SlideModal').contains('Location')
		cy.get('.SlideModal').contains('Tolka Estate Road, Ballygall D ED, Dublin, County Dublin, Ireland')
		cy.get('.SlideModal').contains('Vehicle')
		cy.get('.SlideModal').contains('Location')
		cy.get('.SlideModal').contains('Date')
		cy.get('.SlideModal').contains('Speed')

		// cy.expectTextArray(textScreenshot)

		cy.get('#root > div.SlideWrapper.js-slideWrapper.SlideWrapper--open > div > div > div.SlideModal__header.js-slideModalHeader > h4 > div > button').click()
	})

	it('Playing video already existed', function(){
		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')

		cy.clickButton('Apply Filter');
		cy.get('*').contains('161WW1467')
		//Click Screenshot button
		cy.clickPlayVideo('2019-07-24 17:18:59', '161WW1467');
		
		cy.get('.SlideModal').contains('161WW1467')
		cy.get('.SlideModal').contains('2019-07-24 17:18:59')
		cy.get('.SlideModal').contains('37 km/h')
		cy.get('.SlideModal').contains('Location')
		cy.get('.SlideModal').contains('Timmore Lane, Newcastle Lower, Ballyvolan Upper, County Wicklow, A63 HP22, Ireland')
		cy.get('.SlideModal').contains('Vehicle')
		cy.get('.SlideModal').contains('Location')
		cy.get('.SlideModal').contains('Date')
		cy.get('.SlideModal').contains('Speed')

		// cy.expectTextArray(textScreenshot)

		//Click on play the video
		cy.get('video')
		//cy.get('#pageContent > div > div:nth-child(2) > div.ReactTable.table.table-sm.table-bordered.table-striped.table-hover.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(2) > div > div:nth-child(5) > div > button').click()
	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })

})