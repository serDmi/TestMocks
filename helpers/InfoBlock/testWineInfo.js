export class AutoTwstWineUsers  {
    get usersHeader(){
        return cy.get('wine-header')
    };

    get infoBlock(){
        return cy.get('.search-block')
    };

    get menuBlock(){
        return cy.get('.content-nav')
    };

    get checkHeader(){
        return this.usersHeader.find('header')
    };

    get checkProfile(){
        return this.usersHeader.find('.description-user')
    };

    get checkAvatar(){
        return this.usersHeader.find('sl-avatar');
    };

    get avatarInitials(){
        return this.checkAvatar.find('.avatar__initials').first()
    };

    get lastName(){
        return this.infoBlock.find('sl-input[name="lastname"]')
    };

    get textLastName(){
        return this.lastName.find('label')
    };

    get inputLastName(){
        return this.lastName.find('.form-control-input').find('input')
    };

    get firstName(){
        return this.infoBlock.find('sl-input[name="firstname"]')
    };

    get name(){
        return this.firstName.find('label')
    };

    get inputName(){
        return this.firstName.find('.form-control-input').find('input')
    };

    get middleName(){
        return this.infoBlock.find('sl-input[name="middle_name"]')
    };

    get textMiddleName(){
        return this.middleName.find('label')
    };

    get inputMiddleName(){
        return this.middleName.find('.form-control-input').find('input')
    };

    get role(){
        return this.infoBlock.find('sl-dropdown').first()
    };

    get textRole(){
        return this.role.find('label')
    };

    get inputRole(){
        return this.role.find('.form-control-input').find('input')
    };

    get icon(){
        return this.infoBlock.find('core-select-suffix').first().find('sl-icon').first()
    };

    get IconMenu(){
        return this.infoBlock.find('sl-menu')
    };

    get usersIconMenu(){
        return this.IconMenu.find('sl-menu-item').first()
    };

    get compani(){
        return this.infoBlock.find('sl-dropdown').last()
    };

    get textCompani(){
        return this.compani.find('label')
    };

    get inputCompani(){
        return this.compani.find('.form-control-input').find('input')
    };

    get iconCompani(){
        return this.infoBlock.find('core-select-suffix').last().find('sl-icon').last()
    };

    get iconCompaniMenu(){
        return this.infoBlock.find('sl-menu')
    };

    get nameCompaniMenu(){
        return this.iconCompaniMenu.find('sl-menu-item').first()
    };

    compareTableString(searchString, fixt) {
        let initials = searchString.split(' ')[0][0]+searchString.split(' ')[1][0];
        console.log(initials);
        cy.contains('td', searchString).parent().find('td').as('cells');
        cy.get('@cells').eq(1).find('.avatar__initials').should('contain', initials);
        cy.get('@cells').eq(2).should('contain', fixt.rows[2].email);
        cy.get('@cells').eq(4).should('contain', fixt.rows[2].phone);
        cy.get('@cells').eq(5).should('contain', fixt.rows[2].role);
        };

    







}

