// import {auth} from "../helpers/auth";
import { AutoTestUIWine } from '../../helpers/newtst';

describe('access ui test', () => {
    beforeEach(() => {cy.visit('')});
    const authPage = new AutoTestUIWine();
    it('Check main info on authorize page', () => {
        authPage.cardTitle.should('be.visible').and('contain', 'Авторизация')
        authPage.emailLabel.should('contain', 'Email');
        authPage.inputEmail.should(
            'have.attr',
            'placeholder',
            'Введите свою почту',
        );
        authPage.passwordLabel.should('contain', 'Пароль');
        authPage.inputPassword.should('have.attr', 'placeholder', 'Пароль');
        authPage.inputPassword.type('ПРИВТ');
        authPage.inputPassword.should('have.attr', 'type', 'password');
        authPage.eyeButton.click();
        authPage.inputPassword.should('have.attr', 'type', 'text');
        authPage.submitButton
            .should('exist')
            .and('be.visible')
            .and('contain', 'Вход');
        authPage.forgotButton
            .should('exist')
            .and('be.visible')
            .and('contain', 'Забыли пароль?');
        authPage.buttonSign.click({force:true});
        authPage.passwordEror.should('contain', 'Поле должно содержать минимум 6 символов');
        authPage.emailError.should('contain', 'Поле обязательно для заполнения')
    });

    it ('Last check main info ', () => {
        cy.intercept('POST', 'api/v1/admin/auth/sign_in', {fixture: 'mocks/tetstmick.json'});
        authPage.inputEmail.click().type('fhjdsjvv');
        authPage.inputPassword.type('ghfjndj');
        authPage.buttonSign.click({force:true});
    });
    it ('Check forgot passwor', ()=> {
        authPage.forgotButton.click({force:true});
        authPage.infoRecoveryContent.should('exist').and('be.visible');
        authPage.recoveryHeader.should('exist').and('be.visible').and('contain', 'Восстановление пароля');
        authPage.returnArrow.should('exist').and('be.visible').click();
        authPage.appLogin.should('exist').and('be.visible');
        authPage.forgotButton.click({force:true});
        authPage.emailInputForgot.should('have.attr', 'placeholder', 'Введите свою почту');
        authPage.forgotLabelEmail.should('exist').and('be.visible');
        authPage.infoForgotEmail.should('exist').and('be.visible').and('contain', 'На ваш e-mail будут отправлены инструкции для восстановления пароля');
        authPage.sendButton.should('exist').and('be.visible').and('contain', 'Отправить пароль');
    });
    it ('Check validation forgot passord', () => {
        authPage.forgotButton.click({force:true});
        authPage.clickButton.click('center', {force:true});
        authPage.validationError.should('contain', 'Поле обязательно для заполнения');
        authPage.inputForgotPassword.click('center', {force:true}).type('Fjfjvbdjj');
        authPage.clickButton.click('center',{ force:true});
        authPage.validationError.should('contain', 'Ошибка в адресе');
    });
});