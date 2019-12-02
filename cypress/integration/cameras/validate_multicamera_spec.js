const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Validate Multicameras', function(){
	it('Should Access InpectLet', function() {
		cy.visit('https://www.inspectlet.com/exclude/1351548925')
	})
	
	it('Access Menu Camera', function() {
		cy.visit('/')

		cy.login(user, pass)

		cy.menuCamera();

	})

	it('Click Menu Camera', function() {
		cy.menuCamera();
	})

	it('Should to see multicamera', function(){
		
		cy.wait(4000)
		cy.clickAllVehicleGoups()
		cy.clickStartDate('18/10/2019')
		cy.clickEndDate('23/10/2019')

		cy.clickButton('Apply Filter')
		cy.wait(5000)
		cy.get('*').contains('[BARRY-AL-T]')

		cy.clickPlayVideo('2019-10-18 07:36:04', '[BARRY-AL-T]');

		cy.get('.SlideModal').contains('Event: Manual request')
		cy.get('.SlideModal').contains('Journey Details')
		cy.get('.SlideModal').contains('[BARRY-AL-T]  Barry-AL-Testing')
		cy.get('.SlideModal').contains('2019-10-18 07:36:04')
		cy.get('.SlideModal').contains('15 km/h')
		cy.get('.SlideModal').contains('Location')
		cy.get('.SlideModal').contains('39 Church Street, Inns Quay C ED, Dublin, County Dublin, Ireland')
		cy.get('.SlideModal').contains('Vehicle')
		cy.get('.SlideModal').contains('Location')
		cy.get('.SlideModal').contains('Date')
		cy.get('.SlideModal').contains('Speed')
		cy.get('.SlideModal').contains('Your Cameras')
		cy.get('.SlideModal').contains('CHANNEL')

		// see if have the channel's IDs
		// cy.get('.camera-item > input').should('have.id', 'cbx_camera_0')
		// cy.get('.SlideModal').should('have.attr', 'id', 'cbx_camera_1')
		// cy.get('.SlideModal').should('have.attr', 'id', 'cbx_camera_2')
		// cy.get('.SlideModal').should('have.attr', 'id', 'cbx_camera_4')

		// cy.get('.btn-outline-danger').click()
	})

	it('Should disable all the channels', function(){
		cy.get('#cbx_camera_0').click({force:true})
		cy.get('#cbx_camera_1').click({force:true})
		cy.get('#cbx_camera_2').click({force:true})
		cy.get('#cbx_camera_3').click({force:true})
		cy.get('#cbx_camera_4').click({force:true})

		cy.screenshot('multicamera_disable', 'fullPage')
	})

	it('Should enable all the channels', function(){
		cy.get('#cbx_camera_0').click({force:true})
		cy.get('#cbx_camera_1').click({force:true})
		cy.get('#cbx_camera_2').click({force:true})
		cy.get('#cbx_camera_3').click({force:true})
		cy.get('#cbx_camera_4').click({force:true})

		cy.screenshot('multicamera_enable', 'fullPage')
	})

	after(function() {
	    // runs once after all tests in the block
	    cy.logOut('Log out')
	 })
})