// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, pass) => {
  
  // cy.wait(5000)
  // cy.contains('Vehicle Group')
  // cy.log('existe 2 = ' + cy.get('#username').length)
  // cy.log('Existe = ' + Cypress.$('#username').length)
  // if(Cypress.$('#username').length){
    cy.get('#username').type(email)
    cy.get('#password').type(pass)
    cy.get('button').contains('Login').click()
    cy.contains('Transpoco')
    cy.contains('Vehicle Group')
    cy.wait(2000)
  // }
    
})

Cypress.Commands.add('loginTranslate', (title, email, pass, textLogin) => {
    cy.contains(title)
    cy.get('#username').type(email)
    cy.get('#password').type(pass)
    cy.get('button').contains(textLogin).click()
    cy.contains('Transpoco')
    cy.contains('Vehicle Group')
    cy.wait(2000)
    // cy.screenshot('Home', 'fullPage')
})

Cypress.Commands.add('menuCamera', () => {
  cy.contains('Camera')
  cy.get('a').contains('Camera').click({ force: true }) // this comand force click in element even this element stay disable or display none by css
  cy.wait(2000)
  cy.contains('Vehicle')
  // cy.screenshot('Camera', 'viewport')
})

Cypress.Commands.add('clickMenu', (menu) => {
  cy.contains(menu)
  cy.get('a').contains(menu).click({ force: true }) // this comand force click in element even this element stay disable or display none by css
  
})

Cypress.Commands.add('logOut', (text) => {
  cy.get('a').contains(text).click({ force: true })
})

Cypress.Commands.add('verifyTextArray', array => {
  array.forEach(text => {
    cy.contains(text)
  });
})

Cypress.Commands.add('clickAllVehicleGoups', () =>{
  cy.get('#main-filter > div > div:nth-child(2) > div:nth-child(1) > div > div > div > div:nth-child(1) > span > span:nth-child(3)').click({force:true})
})

Cypress.Commands.add('clickStartDate', (textDate) => {
  cy.get('#start_date_id').click({ force: true })
  cy.get('#start_date_id').clear().type(textDate, { force: true })
})

Cypress.Commands.add('clickEndDate', (textDate) => {
  // cy.get('#videoTooltip').click()
  cy.get('#end_date_id').click({ force: true })
  cy.get('#end_date_id').clear().type(textDate, { force: true })

})

Cypress.Commands.add('setDateRequestVideo', (textDate) => {
  cy.get('div.modal-body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > div.SingleDatePickerInput.SingleDatePickerInput_1.SingleDatePickerInput__withBorder.SingleDatePickerInput__withBorder_2.SingleDatePickerInput__block.SingleDatePickerInput__block_3 > div > input').click({ force: true })
  cy.get('div.modal-body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > div.SingleDatePickerInput.SingleDatePickerInput_1.SingleDatePickerInput__withBorder.SingleDatePickerInput__withBorder_2.SingleDatePickerInput__block.SingleDatePickerInput__block_3 > div > input').clear().type(textDate, { force: true })
})

Cypress.Commands.add('setTimeRequestVideo', (h) => {
  cy.get('.rc-time-picker-input').click({force:true})
  cy.wait(1000)
  cy.get('.rc-time-picker-panel-input').click({force:true})
  cy.get('.rc-time-picker-panel-input').clear({force:true})
  // cy.get('.rc-time-picker-input').clear({force:true})
  cy.get('.rc-time-picker-panel-input').type(h, {force:true})
  // // cy.get('input[type="text"].rc-time-picker-input').clear().type(textTime, { force: true })
  // cy.get('rc-time-picker-panel-combobox > div:nth-child(1)').contains(h).click({ force: true })
  // cy.get('rc-time-picker-panel-combobox > div:nth-child(2)').contains(m).click({ force: true })
  // cy.get('rc-time-picker-panel-combobox > div:nth-child(3)').contains(s).click({ force: true })
})

Cypress.Commands.add('clickButton', (textButton) => {
  cy.get('button').contains(textButton).click({force:true})
})

Cypress.Commands.add('clickButtonByName', (textName) => {
  cy.get('button[name="'+textName+'"]').click()
})

Cypress.Commands.add('shouldHaveText', (locate, text) =>{
  cy.get(locate).should('have.value', text)
})

Cypress.Commands.add('expectText', (locate, text) =>{
  cy.get(locate).should(($title) =>{
    expect($title).to.have.contain(text)
  }) 
})

Cypress.Commands.add('expectTextArray', array =>{
  array.forEach(text => {
    cy.get('*').should(($title) =>{
      expect($title).to.have.contain(text)
    })
  })
})

Cypress.Commands.add('verifyIsDisabled', array =>{
  array.forEach(locate => {
    cy.get(locate).should('be.disabled') 
  })   
})

Cypress.Commands.add('selectOption', (className, text) => {
  cy.get(className).click()
  cy.get(className).contains(text).click()
})

Cypress.Commands.add('clickRequestVideoByVehicle', vehicle => {
  cy.get('*').contains(vehicle).parentsUntil('.rt-tr-group').find('.fa-video-camera').click()
})

Cypress.Commands.add('clickRequestVideoByVehicle2', (vehicle, date) => {
  cy.get('*').contains(vehicle).parentsUntil('.rt-tr-group')
  .and('contain', date)
  .find('.fa-video-camera').click()
})

Cypress.Commands.add('clickRequestVideoByVehicle3', (vehicle, date, speed) => {
  cy.get('*').contains(vehicle).parentsUntil('.rt-tr-group')
  .and('contain', date)
  .and('contain', speed)
  .find('.fa-video-camera').click()
})

Cypress.Commands.add('clickScreenshotByVehicle', vehicle => {
  cy.get('*').contains(vehicle).parentsUntil('.rt-tr-group').find('.fa-picture-o').click()
})

Cypress.Commands.add('clickScreenshotByVehicle2', (vehicle, date) => {
  cy.get('*').contains(vehicle).parentsUntil('.rt-tr-group')
  .and('contain', date)
  .find('.fa-picture-o').click()
})

Cypress.Commands.add('clickPlayVideo', (vehicle, date) => {
  cy.get('*').contains(vehicle).parentsUntil('.rt-tr-group')
  .and('contain', date)
  .find('.fa-play').click({force:true})
})

Cypress.Commands.add('clickScreenshotByVehicle3', (vehicle, date, speed) => {
  cy.get('*').contains(vehicle).parentsUntil('.rt-tr-group')
  .and('contain', date)
  .and('contain', speed)
  .find('.fa-picture-o').click()
})

Cypress.Commands.add('validateDateRequested', (vehicle, event, date, dateResquest) => {
  cy.get('*').contains(vehicle).parentsUntil('.rt-tr-group')
  .and('contain', event)
  .and('contain', date)
  .and('contain', dateResquest)
  .find('.fa-play')
})

// // Cypress.Commands.add('clickRequestVideoByVehicle', vehicle => {
// //   cy.get('*').contains(vehicle).parentsUntil('.rt-tr-group').find('.fa-video-camera').click()
// // })

// Cypress.Commands.add('clickGerarBoletoByDate2', (dateVenc, status, valor) => {
//   cy.get('*').contains(dateVenc)
//   .parentsUntil('li')
//   .and('contain', status)
//   .and('contain', valor)
//   .find('button').click()
// })

// // it('test texts in document', () => {
// //     const textArray = ['Visualize suas conquistas de forma simples e rápida', 'Produtos vigentes']
// //     cy.testByTextArray(textArray)
// //   })

// // Cypress.Commands.add('clickCardByApolice', apolice => {
// //   cy.get('*').contains(apolice).parentsUntil('.cardproduct-list').find('.cardproduct-footer a').click()
// // })