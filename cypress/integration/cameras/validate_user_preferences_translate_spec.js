const user = Cypress.env('user')
const pass = Cypress.env('pass')
const userName = 'jehnyffen'
describe('Validate Preference Users Translate', function(){

	before(function () {

		cy.visit('/')

		cy.login(user, pass)

	})
	// This test the application should be with English Language
	it('Validate French Language', function(){
		cy.clickMenu('Settings')

		cy.contains('Users & Permissions')
		cy.get('a').contains('Users').click({ force: true })
		cy.contains('Search:');
		cy.get('input[type="search"]').type(user) //here search by email, is better.
		cy.get('.ui-button-text').contains('Edit').click()
		cy.contains('User Preferences:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="prefered_locale_lang_id"]').select('2')
		cy.clickButton('Update User')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit(Cypress.env('baseUrl')+'/settings/users/users.php')
		cy.contains('Search:')

		cy.logOut('Log out')
		cy.login(user, pass)

		cy.clickMenu('Caméra');

		const textPage = [
			  'Accueil'
			, 'Evènement'
			, 'Véhicule'
			, 'Date'
			, 'Vitesse'
			, 'Vidéo'
		]

		// cy.expectTextArray(textPage)
		cy.verifyTextArray(textPage)
		
		// cy.screenshot('Camera_French', 'fullPage')

		cy.logOut('Déconnectez-vous')
	})

	it('Validate Spanish Language', function(){
		cy.loginTranslate('Mon compte', user, pass, 'Connexion')
		cy.contains('Paramètres')
		cy.clickMenu('Paramètres')

		cy.contains('Utilisateurs & Autorisations')
		cy.get('a').contains('Utilisateurs').click({ force: true })
		cy.contains('Rechercher');
		cy.get('input[type="search"]').type(user) //here search by email, is better.
		cy.get('.ui-button-text').contains('Modifier').click()
		cy.contains('Préférences Utilisateur :')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="prefered_locale_lang_id"]').select('8')
		cy.clickButton('Mise à jour de l’utilisateur')
		cy.wait(1000)
		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit(Cypress.env('baseUrl')+'/settings/users/users.php')
		cy.contains('Rechercher')

		cy.logOut('Déconnectez-vous')
		cy.contains('Connexion')
		cy.loginTranslate('Mon compte', user, pass, 'Connexion')

		cy.clickMenu('Cámara');

		const textPage = [
			  'Página de inicio'
			, 'Evento'
			, 'Vehículo'
			, 'Fecha y hora'
			, 'Velocidad'
			, 'Vídeo (s)'
		]

		// cy.expectTextArray(textPage)
		cy.verifyTextArray(textPage)
		cy.logOut('Cerrar sesión')
	})

	it('Validate English Language', function(){
		cy.loginTranslate('Iniciar sesión', user, pass, 'Iniciar sesión')
		cy.contains('Configuración')
		cy.clickMenu('Configuración')

		cy.contains('Usuarios y permisos')
		cy.get('a').contains('Usuarios').click({ force: true })
		cy.contains('Buscar');
		cy.get('input[type="search"]').type(user) //here search by email, is better.
		cy.get('.ui-button-text').contains('Editar').click()
		cy.contains('Preferencias del usuario:')
		// cy.get('#password2').type('0128@Milliamj')
		cy.get('select[name="prefered_locale_lang_id"]').select('1')
		cy.clickButton('Actualizar usuario')

		// This steps is because in execution time the system redirect
		// for another URL where the system not found
		cy.visit(Cypress.env('baseUrl')+'/settings/users/users.php')
		cy.contains('Buscar:')

		cy.logOut('Cerrar sesión')
		cy.contains('Iniciar sesión')
		cy.loginTranslate('Iniciar sesión', user, pass, 'Iniciar sesión')

	  	cy.menuCamera()

	  	const textPage = [
			  'Home'
			, 'Event'
			, 'Vehicle'
			, 'Date'
			, 'Speed'
			, 'Video'
		]

		// cy.expectTextArray(textPage)
		cy.verifyTextArray(textPage)
		
		cy.logOut('Log out')
	})
})