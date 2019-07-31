describe('Validate Cameras Filters', function(){
	before(function () {
		cy.visit('http://move.transpoco.net')
		cy.contains('Login')
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')

		cy.menuCamera();
	})

	// it('List event Video', function(){
	// 	cy.clickAllVehicleGoups()
	// 	cy.clickStartDate('23/07/2019')
	// 	cy.clickEndDate('24/07/2019')

	// 	cy.clickButton('Apply Filter');
	// 	cy.get('*').contains('[VINCENTFMT]')
	// 	//Click request Video
	// 	cy.clickRequestVideoByVehicle2('[VINCENTFMT]', '2019-07-23 17:57:38');
	// 	cy.get('*').contains('New Message')
	// 	cy.get('*').contains('Video requested. You will be notified when it is ready to download');
	// 	cy.screenshot('message-vide-requested', 'fullPage')
	// 	// can be verified if button is disabled
	// })

	it('Request Video Manualy', function(){
		// cy.visit('http://move.transpoco.net')
		// cy.contains('Login')
		// cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')
		// cy.menuCamera();
		const setTime = () => {
		  document.getElementsById("time").click()
		  document.getElementsById("time").textContent = "01:00:15"
		}
		cy.get('*').contains('Request Video')
		cy.get('*').contains('Request Video').click({force:true})
		cy.get('.modal-title').contains('Request Video')
		cy.get('.modal-body').contains('Select a vehicle').click()
		cy.get('.modal-body').contains('[VINCENTFMT]  Vincent FMT').click()
		cy.setDateRequestVideo('23rd Jul 19')
		cy.get('*').contains('Select a Date').click();
		cy.setTimeRequestVideo('01:00:15')
		// cy.wrap({changeTime: setTime}).invoke('changeTime')
		// cy.get('#confirm_button').contains('Request Video').click()
		// cy.get('*').contains('New Message')
		// cy.get('*').contains('Video requested. You will be notified when it is ready to download');

		// cy.clickAllVehicleGoups()
		// cy.clickStartDate('24/07/2019')
		// cy.clickEndDate('24/07/2019')

		// cy.clickButton('Apply Filter');
		
	})

})