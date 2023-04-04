import SendMoneyPage from "../PageLocators/SendMoneyPageLocators.cy.js"
describe('Sign in and Register with Email and Password', () => {
    const smp = new SendMoneyPage();

    // Verifying register button is enabled after email and password fields are entered
    it('When the email and password fields are populated, then Register Now button is enabled', () => {
        cy.visit('/send-money/');
        cy.wait(2000);
        //smp.AcceptCookiesButton()
        smp.ClickSignInButton();
        smp.VerifyCreateRegisterPage();
        smp.EnterEmail()
        smp.EnterPassword()
        smp.VerifyRegisterNowButton()
})

})