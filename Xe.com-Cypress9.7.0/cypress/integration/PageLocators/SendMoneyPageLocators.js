class SendMoneyPage {
  elements = {
    AcceptCookies: () => cy.get('button.haqezJ'),
    SignInNSendBtn: () => cy.get('a.clGTKJ'),
    EmailTxtField: () => cy.get('input#email'),
    PasswordTxtField: () => cy.get('input#password'),
    RegisterNowBtn: () => cy.get('button.ButtonBase-cwHurt')
  }

  AcceptCookiesButton() {
    this.elements.AcceptCookies().click({force: true})
  }


  ClickSignInButton() {
    //this.elements.SignInNSendBtn().scrollIntoView().should('be.visible').click({force: true});
    //this.elements.SignInNSendBtn().scrollIntoView()
    cy.wait(2000);
    this.elements.SignInNSendBtn().click({force: true});
  }

  VerifyCreateRegisterPage() {
    cy.url().should('contains','signup')
}

  EnterEmail() {
     this.elements.EmailTxtField().type("a@b.com",{force: true});
  }

  EnterPassword(To) {
     this.elements.PasswordTxtField().type("sagdsagdA@224",{force: true});
  }

VerifyRegisterNowButton() {
      this.elements.RegisterNowBtn().should('be.visible')
  }

}
export default SendMoneyPage;