describe('Validate Preference Users', function(){
	beforeEach(function () {
		cy.visit('http://move.transpoco.net')
		cy.contains('Login')
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')

	})
	// This test the application should be with English Language
	it('Validate French Language', function(){
		cy.clickMenu('Settings')

		cy.contains('Users & Permissions')
		cy.get('a').contains('Users').click({ force: true })
		cy.contains('Search:');
		cy.get('input[type="search"]').type('jehnyffen')
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="prefered_locale_lang_id"]').select('2')
		cy.wait(2000)
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('https://move.transpoco.net/settings/users/users.php')
		cy.contains('Search:')

		cy.clickMenu('Log out')
		cy.contains('Login')
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')

		cy.clickMenu('Caméra');

		const textPage = [
			  'Accueil'
			, 'Evènement'
			, 'Véhicule'
			, 'Date'
			, 'Vitesse'
			, 'Vidéo'
		]

		cy.expectTextArray(textPage)
		cy.screenshot('Camera_French', 'fullPage')
	})

	it('Validate Spanish Language', function(){
		cy.clickMenu('Paramètres')

		cy.contains('Utilisateurs & Autorisations')
		cy.get('a').contains('Utilisateurs').click({ force: true })
		cy.contains('Rechercher');
		cy.get('input[type="search"]').type('jehnyffen')
		cy.get('.ui-button-text').contains('Modifier').click()
		cy.contains('Préférences Utilisateur :')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="prefered_locale_lang_id"]').select('8')
		cy.wait(2000)
		cy.clickButton('Mise à jour de l’utilisateur')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('https://move.transpoco.net/fr/settings/users/users.php')
		cy.contains('Rechercher')

		cy.clickMenu('Déconnectez-vous')
		cy.contains('Connexion')
		cy.loginTranslate('Mon compte', 'jehnyffen.milliam@transpoco.com', '0128@Milliamj', 'Connexion')

		cy.clickMenu('Caméra');

		const textPage = [
			  'Home'
			, 'Event'
			, 'Vehicle'
			, 'Date'
			, 'Speed'
			, 'Video'
		]

		cy.expectTextArray(textPage)
		cy.screenshot('Camera_Spanish', 'fullPage')
	})

	it('Validate English Language', function(){
		cy.clickMenu('Configuración')

		cy.contains('Usuarios y permisos')
		cy.get('a').contains('Usuarios').click({ force: true })
		cy.contains('Buscar');
		cy.get('input[type="search"]').type('jehnyffen')
		cy.get('.ui-button-text').contains('Editar').click()
		cy.contains('Preferencias del usuario:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="prefered_locale_lang_id"]').select('1')
		cy.wait(2000)
		cy.clickButton('Actualizar usuario')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('https://move.transpoco.net/es/settings/users/users.php')
		cy.contains('Buscar:')

		cy.clickMenu('Cerrar sesión')
		cy.contains('Iniciar sesión')
		cy.loginTranslate('Iniciar sesión', 'jehnyffen.milliam@transpoco.com', '0128@Milliamj', 'Iniciar sesión')

	  	cy.menuCamera()

	  	const textPage = [
			  'Home'
			, 'Event'
			, 'Vehicle'
			, 'Date'
			, 'Speed'
			, 'Video'
		]

		cy.expectTextArray(textPage)
	})


	it('Validate KM Preference', function(){
		cy.clickMenu('Settings')

		cy.contains('Users & Permissions')
		cy.get('a').contains('Users').click({ force: true })
		cy.contains('Search:');
		cy.get('input[type="search"]').type('jehnyffen')
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="distance_unit"]').select('km')
		cy.wait(2000)
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('https://move.transpoco.net/settings/users/users.php')
		cy.contains('Search:')

		cy.clickMenu('Log out')
		cy.contains('Login')
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')

		cy.menuCamera();

		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')

		cy.get('*').should('contain', 'km/h')
		cy.screenshot('Camera_KM', 'fullPage')
	})

	it('Validate Miles Preference', function(){
		cy.clickMenu('Settings')

		cy.contains('Users & Permissions')
		cy.get('a').contains('Users').click({ force: true })
		cy.contains('Search:');
		cy.get('input[type="search"]').type('jehnyffen')
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="distance_unit"]').select('mi')
		cy.wait(2000)
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit('https://move.transpoco.net/settings/users/users.php')
		cy.contains('Search:')

		cy.clickMenu('Log out')
		cy.contains('Login')
		cy.login('jehnyffen.milliam@transpoco.com', '0128@Milliamj')

		cy.menuCamera()

		cy.clickAllVehicleGoups()
		cy.clickStartDate('24/07/2019')
		cy.clickEndDate('24/07/2019')

		cy.get('*').should('contain', 'mph')
		cy.screenshot('Camera_Miles', 'fullPage')
	})
	
})