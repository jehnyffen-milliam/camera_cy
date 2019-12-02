const user = Cypress.env('user')
const pass = Cypress.env('pass')

describe('Validate Cameras Filters Group vehicles', function(){

	it('Should Access InpectLet', function() {
		cy.visit('https://www.inspectlet.com/exclude/1351548925')
	})

	it('Access Login', function() {

		cy.visit('/')

		cy.login(user, pass)
	})

	it('Click Menu Camera All vehicle Group > Vehicle as All Vehicle', function() {
		cy.menuCamera()
		cy.clickAllVehicleGoups()
		cy.clickStartDate('14/08/2019')
		cy.wait(2000)
		cy.clickEndDate('14/08/2019')

		cy.clickButton('Apply Filter');
		cy.wait(3000)
		cy.screenshot('message-range', 'fullPage')
	})

	it('Set All vehicle Group > specific Vehicle as [ANDREW] Andrew', function(){
		cy.clickAllVehicleGoups()
		cy.get('#vehicles_list').contains('Filter by vehicle').click({force:true})
		cy.wait(2000)
		cy.get('*').contains('[ANDREW]  Andrew').click({force:true})
		cy.clickButton('Apply Filter')
		cy.wait(2000)
		cy.screenshot('specific-group', 'fullPage')
		cy.get('.dotted').contains('[ANDREW]  Andrew').click({force:true})
		cy.get('#vehicles_list > div > div > span.Select-clear-zone > span').click();
		// add table values

	})

	it('Set ALL vehicle as group', function(){
		cy.get('#vehicle_groups_list').contains('Filter by vehicle group').click({force:true})
		cy.wait(1000)
		cy.get('#vehicle_groups_list').contains('All Vehicles').click({force:true})
		cy.clickButton('Apply Filter')
		cy.wait(2000)
		cy.screenshot('all-vehicle-group', 'fullPage')
	})

	it('Set All vehicle > specific vehicle', function(){
		cy.get('.dotted').contains('All Vehicles').click({force:true})
		cy.get('#vehicles_list').contains('Filter by vehicle').click({force:true})
		cy.get('*').contains('[ANDREW]  Andrew').click({force:true})
		cy.clickButton('Apply Filter')
		cy.wait(2000)
		cy.screenshot('all-vehicle-group-specific-vehicle', 'fullPage')
	})

	it('Set Specific vehicle group > all vehicle', function(){
		cy.get('.dotted').contains('[ANDREW]  Andrew').click({force:true})
		cy.get('#vehicles_list > div > div > span.Select-clear-zone > span').click();
		cy.get('.Select-value').contains('All Vehicles').click({force:true})
		cy.get('*').contains('Active vehicles').click({force:true})
		cy.clickButton('Apply Filter')
		cy.wait(2000)
		cy.screenshot('specific-vehicle-group', 'fullPage')
	})

	it('Set Specific vehicle group > Specific vehicle', function(){
		cy.get('#vehicles_list').contains('Filter by vehicle').click({force:true})
		cy.get('*').contains('161WW1467 ').click({force:true})

		cy.clickButton('Apply Filter')
		cy.wait(2000)
		cy.screenshot('specific-vehicle-group-specific-vehicle', 'fullPage')
	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })

})