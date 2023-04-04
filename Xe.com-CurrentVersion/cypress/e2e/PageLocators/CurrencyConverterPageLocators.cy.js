class currencyConverterPage {
  //Locators for different objects
  elements = {
    AcceptCookies: () => cy.get('.haqezJ'),
    AmountTextField: () => cy.get('.amount-input__Wrapper-sc-1gq6pic-0'),
    AmountInputField: () => cy.get('input.amount-input__NumberInput-sc-1gq6pic-1'),
    InvalidAmountErrorMessage: () => cy.get('.currency-converter__ErrorText-zieln1-2'),
    FromTextField: () => cy.get('#midmarketFromCurrency'),
    FromSelectedCurrency: () => cy.get('#midmarketFromCurrency-descriptiveText > span'),
    ToTextField: () => cy.get('#midmarketToCurrency'),
    ConvertButton: () => cy.get('.currency-converter__SubmitZone-zieln1-3 > .button__BaseButton-sc-1qpsalo-0')
  }

  //Accept cookies button
  AcceptCookiesButton() {
    this.elements.AcceptCookies().click({force: true})
  }

    //Enter Valid Amount
  EnterValidAmount(Amount) {
    this.elements.AmountTextField().click({force: true})
    cy.wait(1000)
    this.elements.AmountInputField().type(Amount,{force: true})
  }

  
    //Enter Invalid Amount
  EnterInvalidAmount(Amount) {
    this.elements.AmountTextField().click({force: true})
    cy.wait(1000)
    this.elements.AmountInputField().type(Amount,{force: true}).type('{Enter}');
    this.elements.InvalidAmountErrorMessage().should('contain', "Please enter a valid amount")
  }

  
    //Enter from Currency type
  EnterFromCurrency(From) {
     this.elements.FromTextField().click().type(From,{force: true}).type('{Enter}');
     cy.wait(2000)
    // this.elements.FromSelectedCurrency().should('contain', From)
  }

  //Verify the from Dropdown 
  VerifyFromCurrencyDropdown(From) {
     this.elements.FromTextField().click().type(From,{force: true}).type('{Enter}');
     cy.wait(2000)
    this.elements.FromSelectedCurrency().should('contain', From)
  }

   //Enter To Currency type
  EnterToCurrency(To) {
     this.elements.ToTextField().click().type(To,{force: true}).type('{Enter}');
     cy.wait(2000)
  }

  //Click on convert button and verify result
  ClickOnConvert() {
    this.elements.ConvertButton().click({force: true})
    cy.wait(5000);
    cy.url().should('contains','10').and('contains','GBP').and('contains','EUR')
  }
  
}
export default currencyConverterPage;