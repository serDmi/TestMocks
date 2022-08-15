import './commands';
import 'cypress-file-upload';
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('>>CATCH>>', err);
    return false;
});
