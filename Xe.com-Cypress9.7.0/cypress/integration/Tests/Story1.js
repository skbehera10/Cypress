import CurrencyConverterPage from "../PageLocators/CurrencyConverterPageLocators.js"
describe('Send 10 GBP to EUR / validate converted amount after calculation', () => {
    const ccp = new CurrencyConverterPage();

    // validating error message after entering invalid amount 
    it('When alphabet characters are entered into "Amount", then error message "Please enter a valid amount” should be displayed', () => {
        cy.visit('/currencyconverter/');
       // ccp.AcceptCookiesButton()
        ccp.EnterInvalidAmount("asd");
    })

    // Verify Dropdown "From" field features the option "INR - Indian Rupee"
    it('To verify Dropdown "From" field features the option "INR - Indian Rupee"', () => {
        cy.visit('/currencyconverter/');
        //ccp.AcceptCookiesButton()
        ccp.VerifyFromCurrencyDropdown("INR");
    })

        // To Verify the button on the conversion form features the value "Convert"
    it('Verify the button on the conversion form features the value "Convert"', () => {
        cy.visit('/currencyconverter/');
        //ccp.AcceptCookiesButton()
        ccp.EnterValidAmount(10);
        ccp.EnterFromCurrency("GBP");
        ccp.EnterToCurrency("EUR");
        ccp.ClickOnConvert();
    })

})