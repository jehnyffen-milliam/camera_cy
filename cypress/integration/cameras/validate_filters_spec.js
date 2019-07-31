describe('Validate Cameras Filters', function(){
	before(function () {
		cy.visit('http://move.transpoco.net')
		cy.contains('Login')
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')
	})

	it('Click Menu Camera', function() {
		cy.menuCamera();
	})

	it('Validate List Vehicle goups', function(){
		cy.clickAllVehicleGoups()
		cy.get('#vehicle_groups_list').contains('Filter by vehicle group').click()
		const listGroup = [
			  'Active vehicle'
			, 'AE TEST'
			, 'Aer Lingus RFID'
			, 'AL TEST'
			, 'Barry Vehicle Group'
			, 'Electric Tractors'
			, 'Madrid'
			, 'Push Backs'
			, 'Sligo'
			, 'Teltonika Test'
			, 'TEST'
			, 'Test Camille'
		]

		cy.expectTextArray(listGroup)
		// cy.screenshot('group-list', 'fullPage')
		
	})

	it('Validate List Vehicle without group selected', function(){
		cy.get('#vehicles_list').contains('Filter by vehicle').click()
		const listVehicle = [
			  '[VINCENTFMT]  Vincent FMT'
			, '[ANDREW]  Andrew'
			, '[BARRY-AL-T]  Barry-AL-Testing'
			, '161WW1467'
			, 'PWojcik 141D27001'
		]

		cy.expectTextArray(listVehicle)
		cy.screenshot('vehicle-list', 'fullPage')
	})

	it('Validate the list of vehicles with a group selected', function(){
		// cy.clickAllVehicleGoups()
		cy.get('#vehicle_groups_list').contains('Filter by vehicle group').click()
		cy.get('*').contains('Active vehicle').click({force:true})
		cy.wait(2000)
		cy.get('#vehicles_list').contains('Filter by vehicle').click()
		const listVehicle = [
			  '161WW1467'
			, 'PWojcik 141D27001'
		]

		cy.expectTextArray(listVehicle)
		cy.screenshot('vehicle-list-active', 'fullPage')

	})

	// it('Set start date and end date out of range', function(){
	// 	cy.clickAllVehicleGoups()
	// 	cy.clickStartDate('07/07/2019')
	// 	cy.wait(3000)
	// 	cy.clickEndDate('20/07/2019')

	// 	cy.clickButton('Apply Filter');
	// 	cy.get('*').contains('New Message')
	// 	cy.get('*').contains('Date range must not be more than 7 complete days.');
	// 	cy.screenshot('message-range', 'fullPage')

	// })

	// it('Validate mensage not found', function(){

	// 	//get actual date
	// 	// var d = new Date(21, 7, 2019)
	// 	// var n = d.getDate()
	// 	cy.clickStartDate('20/07/2019')
	// 	cy.wait(2000)
	// 	cy.clickEndDate('20/07/2019')
	// 	cy.get('#vehicles_list').contains('Filter by vehicle').click()
	// 	cy.get('*').contains('PWojcik 141D27001').click({force:true})
	// 	cy.clickButton('Apply Filter')
	// 	cy.get('*').contains('New Message')
	// 	cy.get('*').contains('No events found')
	// 	cy.screenshot('message-no-events', 'fullPage')
	// })

	// it('Set gruoup Vehicles without vehicles', function(){
		
	// 	cy.clickAllVehicleGoups()
	// 	cy.get('#vehicle_groups_list').contains('Filter by vehicle group').click()
	// 	cy.get('*').contains('AL TEST').click({force:true})
	// 	cy.get('*').contains('This group does not have any vehicles.')
	// 	cy.screenshot('message-validate', 'fullPage')
	// 	cy.clickButton('Apply Filter')
	// 	cy.get('*').contains('New Message')
	// 	cy.get('*').contains('No events found')
	// 	cy.screenshot('message-no-events', 'fullPage')
	// })

	// it('Set vehicle without information', function(){
	// 	cy.clickAllVehicleGoups()
	// 	cy.get('.Select-value').contains('AL TEST').click()
	// 	cy.wait(2000)
	// 	cy.get('*').contains('Active vehicles').click({force:true})
	// 	cy.get('#vehicles_list').contains('Filter by vehicle').click()
	// 	cy.wait(2000)
	// 	cy.get('*').contains('PWojcik 141D27001').click({force:true})
	// 	cy.clickButton('Apply Filter')
	// 	cy.get('*').contains('New Message')
	// 	cy.get('*').contains('No events found')
	// 	cy.screenshot('message-no-events-vehicle', 'fullPage')
	// })



	
})