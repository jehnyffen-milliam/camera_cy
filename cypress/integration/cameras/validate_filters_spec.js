const user = Cypress.env('user')
const pass = Cypress.env('pass')

describe('Validate Cameras Filters', function(){

	it('Should Access InpectLet', function() {
		cy.visit('https://www.inspectlet.com/exclude/1351548925')
	})

	it('Access login', function() {

		cy.visit('/')

		cy.login(user, pass)
	})

	it('Click Menu Camera', function() {
		cy.menuCamera()
	})

	it('Set start date and end date out of range', function(){
		cy.clickAllVehicleGoups()
		cy.get('#vehicles_list').contains('Filter by vehicle').click({force:true})
		cy.clickStartDate('07/07/2019')
		cy.wait(2000)
		cy.clickEndDate('20/07/2019')

		cy.clickButton('Apply Filter');
		cy.get('*').contains('New Message')
		cy.get('*').contains('Date range must not be more than 7 complete days.');
		cy.screenshot('message-range', 'fullPage')

	})

	it('Validate mensage not found', function(){
		cy.get('#vehicle_groups_list').contains('Filter by vehicle group').click({force:true})
		cy.clickStartDate('13/07/2019')
		cy.wait(1000)
		cy.clickEndDate('13/07/2019')
		cy.get('#vehicles_list').contains('Filter by vehicle').click({force:true})
		cy.get('*').contains('PWojcik 141D27001').click({force:true})
		cy.clickButton('Apply Filter')
		cy.get('*').contains('New Message')
		cy.get('*').contains('No events found')
		// cy.screenshot('message-no-events', 'fullPage')
	})

	it('Set group Vehicles without vehicles', function(){
		cy.get('#vehicle_groups_list').contains('Filter by vehicle group').click({force:true})
		cy.get('*').contains('Combitest').click({force:true})
		cy.get('*').contains('This group does not have any vehicles.')
		cy.screenshot('message-validate', 'fullPage')
		cy.clickButton('Apply Filter')
		cy.get('*').contains('New Message')
		cy.get('*').contains('No events found')
		// cy.screenshot('message-no-events', 'fullPage')
	})

	it('Set vehicle without information', function(){
		cy.get('.dotted').contains('Combitest').click({force:true})
		cy.get('#vehicle_groups_list').contains('Combitest').click({force:true})
		cy.get('*').contains('Electric Tractors').click({force:true})
		cy.wait(1000)
		// cy.get('*').contains('Electric Tractors').click({force:true})
		// cy.get('.dotted').contains('All Vehicles').click({force:true})
		cy.wait(2000)
		cy.get('#vehicles_list').contains('Filter by vehicle').click({force:true})
		cy.wait(1000)
		cy.get('*').contains('PWojcik 141D27001').click({force:true})
		cy.clickButton('Apply Filter')
		cy.get('*').contains('New Message')
		cy.get('*').contains('No events found')
		// cy.screenshot('message-no-events-vehicle', 'fullPage')
	})

	it('Validate List Vehicle goups', function(){
		cy.get('.dotted').contains('Electric Tractors').click({force:true})
		cy.get('.Select-value').contains('Electric Tractors').click({force:true})
		const listGroup = [
			  'Active vehicles'
			, 'AE TEST'
			, 'Aer Lingus RFID'
			, 'AL TEST'
			, 'Barry Vehicle Group'
			, 'Camera'
			, 'Test Camille'
			, 'Combitest'
		]

		// cy.expectTextArray(listGroup)
		cy.verifyTextArray(listGroup)

		const listGroup2 = [
			  'Electric Tractors'
			, 'Madrid'
			, 'Push Backs'
			, 'Sligo'
			, 'Teltonika Test'
			, 'TEST'
			, 'Test Camille'
		]

		// cy.expectTextArray(listGroup2)
		cy.verifyTextArray(listGroup2)
	})

	it('Validate List Vehicle without group selected', function(){
		cy.get('#vehicle_groups_list > div > div > span.Select-clear-zone > span').click()
		cy.wait(2000)
		cy.get('#vehicles_list').contains('Filter by vehicle').click({force:true})
		const listVehicle = [
			  '[VINCENTFMT]  Vincent FMT'
			, '[ANDREW]  Andrew'
			, '[BARRY-AL-T]  Barry-AL-Testing'
			, '161WW1467'
			, 'PWojcik 141D27001'
		]

		// cy.expectTextArray(listVehicle)
		cy.verifyTextArray(listVehicle)
		// cy.screenshot('vehicle-list', 'viewport')
	})

	it('Validate the list of vehicles with a group selected', function(){
		cy.get('#vehicle_groups_list').contains('Filter by vehicle group').click({force:true})
		cy.get('*').contains('Active vehicles').click({force:true})
		cy.wait(2000)
		cy.get('#vehicles_list').contains('Filter by vehicle').click({force:true})
		const listVehicle = [
			  '161WW1467'
			, 'PWojcik 141D27001'
		]

		// cy.expectTextArray(listVehicle)
		cy.verifyTextArray(listVehicle)
		// cy.screenshot('vehicle-list-active', 'viewport')
	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })
})