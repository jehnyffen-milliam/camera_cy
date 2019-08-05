const user = 'jehnyffen.milliam@transpoco.com'
const pass = '0128@Milliamj'

describe('Validate Screenshot', function(){
	before(function () {
		cy.visit('http://move.transpoco.net')
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

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })

})