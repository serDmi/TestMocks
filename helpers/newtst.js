export class AutoTestUIWine {
    get cardInfo() {
        return cy.get('sl-card');
    }

    get cardTitle() {
        return this.cardInfo.find('.title');
    }

    get cardContent() {
        return this.cardInfo.find('.content');
    }

    get appLogin(){
        return this.cardContent.find('app-login');
    }

    get dataFields() {
        return this.cardContent.find('.common-content');
    }

    get emailField() {
        return this.dataFields.find('sl-input[name="username"]');
    }

    get passwordField() {
        return this.dataFields.find('sl-input[name="password"]');
    }

    get emailLabel() {
        return this.emailField.find('label');
    }

    get passwordLabel() {
        return this.passwordField.find('label');
    }

    get inputEmail() {
        return this.emailField.find('input');
    }

    get inputPassword() {
        return this.passwordField.find('input');
    }

    get eyeButton() {
        return this.passwordField.find('button');
    }

    get footerButtons() {
        return this.cardContent.find('.common-footer');
    }

    get submitButton() {
        return this.footerButtons.find('sl-button[type="submit"]');
    }

    get forgotButton() {
        return this.footerButtons.find('sl-button').last();
    }
    get buttonSign(){
        return this.submitButton.find('button')
    }
    get passwordEror(){
        return this.dataFields.find('.error').last();
    }
    get emailError(){
        return this.dataFields.find('div[class="error message"]').first();
    }

    get slCard(){
        return cy.get('.state-container');
    }
    get recoveryHeader(){
        return this.slCard.find('.title');
    }
    get infoRecoveryContent(){
        return cy.get('app-forgot');
    }

    get stringForgotPassword(){
        return this.infoRecoveryContent.find('sl-input');
    }

    get emailInputForgot(){
        return this.stringForgotPassword.find('input');
    }

    get forgotLabelEmail(){
        return this.stringForgotPassword.find('label');
    }
    get infoForgotEmail(){
        return this.infoRecoveryContent.find('.description');
    }

    get sendButton(){
        return this.infoRecoveryContent.find('sl-button[type="submit"]');
    }
    
    get validationError(){
        return this.infoRecoveryContent.find('.common-content').find('core-validate').find('.error');
    }

    get inputForgotPassword(){
        return this.infoRecoveryContent.find('.form-control-input')
    }

    get clickButton(){
        return this.sendButton.find('button');
    }

    get returnArrow(){
        return this.recoveryHeader.find('sl-icon')
    }





}