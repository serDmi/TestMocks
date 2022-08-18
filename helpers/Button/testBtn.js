export class AutoTestBtn {
    get buttonInfoBlock(){
        return cy.get('.search-block').find('app-wine-filter-buttons')
    };

    get buttonReset(){
        return this.buttonInfoBlock.find('sl-button').first()
    };

    get buttonSearch(){
        return this.buttonInfoBlock.find('sl-button').last()
    }
}