describe('Validate Cameras Filters', function(){
	before(function () {
		cy.visit('http://move.transpoco.net')
		cy.contains('Login')
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')

		cy.menuCamera();
	})

	it('Validate Screenshot event', function(){
		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')

		cy.clickButton('Apply Filter');
		cy.get('*').contains('[VINCENTFMT]')
		//Click Screenshot button
		cy.clickScreenshotByVehicle2('[VINCENTFMT]', '2019-07-24 15:15:20');
		
		const textScreenshot = [
			  'Vehicle:'
			, '[VINCENTFMT] Vincent FMT'
			, 'Date:'
			, '2019-07-24 15:15:20'
			, 'Speed:'
			, '24 mph'
			, 'Location:'
			, 'Tolka Estate Road, Ballygall D ED, Dublin, County Dublin, Ireland'
		]

		cy.expectTextArray(textScreenshot)

		cy.get('.SlideModal__title > .fa-times').click()
	})

})