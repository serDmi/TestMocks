
import { auth } from '../../helpers/auth';
import { AutoTwstWineUsers } from '../../helpers/InfoBlock/testWineInfo.js';
import {AutoTestBtn} from '../../helpers/Button/testBtn';

describe('access ui test', () => {
    let dateAddUser = [
        ['lastname', 'qwer123'],
        ['firstname', 'abra'],
        ['middle_name', 'ca'],
        ['phone', 'da'],
        ['password', '1234'],
    ]
    beforeEach(() => {
        auth();
        cy.visit('/user');

    
    });
    const wineUsers = new AutoTwstWineUsers();
    const wineBtn = new AutoTestBtn();
    it ('UI Test Wine Progect Users ', () => {
        wineUsers.checkHeader.should('contain', 'Пользователи');
        wineUsers.checkProfile.should('contain', 'Администратор Администратор').and('contain', 'Супер администратор');
        wineUsers.checkAvatar.should('exist').and('be.visible');
        wineUsers.avatarInitials.should('contain', 'АА');
        // Last Name
        wineUsers.textLastName.should('contain', 'Фамилия');
        wineUsers.inputLastName.should('have.attr', 'placeholder', 'Фамилия').and('exist').and('be.visible');
        // Name
        wineUsers.name.should('contain', 'Имя');
        wineUsers.inputName.should('have.attr', 'placeholder', 'Имя').and('exist').and('be.visible');
        // Middle Name
        wineUsers.textMiddleName.should('contain', 'Отчество');
        wineUsers.inputMiddleName.should('have.attr', 'placeholder', 'Отчество').and('exist').and('be.visible');
        // Role
        wineUsers.textRole.should('contain', 'Роль');
        wineUsers.inputRole.should('have.attr', 'placeholder', 'Роль').and('exist').and('be.visible');
        wineUsers.icon.should('exist').and('be.visible').click('center');
        wineUsers.IconMenu.should('exist').and('be.visible');
        wineUsers.usersIconMenu.should('exist').and('be.visible');
        // Compani
        wineUsers.textCompani.should('contain', 'Компания');
        wineUsers.inputCompani.should('have.attr', 'placeholder', 'Компания').and('exist').and('be.visible');
        wineUsers.iconCompani.should('exist').and('be.visible').click('center');
        wineUsers.iconCompaniMenu.should('exist').and('be.visible');
        wineUsers.nameCompaniMenu.should('exist').and('be.visible');
    });
    it('Check Button in Info Block', () => {
        wineBtn.buttonReset.should('exist').and('be.visible');
        wineBtn.buttonSearch.should('exist').and('be.visible');
        wineUsers.compareTableString('Посысаев Георгий Сергеевич', require('../../fixtures/mocks/fixture/userList.json'));
    })
    it.only('Check input add users in wine', () => {
        wineUsers.addUsersBtn.should('exist').and('be.visible');
        wineUsers.addUsersBtn.click();
        wineUsers.checkOpenAddUser.should('have.attr', 'open', 'open');
        // wineUsers.slInputUser.should('exist').and('be.visible');
        // wineUsers.inputAddUser(dateAddUser).click().type();
        dateAddUser.forEach((item) => {
            wineUsers.inputAddUser(item)
        })

    })

});