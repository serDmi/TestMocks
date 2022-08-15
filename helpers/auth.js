import { lang } from '../helpers/locale.js';
let at;

export function auth() {
    lang();
    if (at) {
        window.localStorage.setItem('at', at);
        return;
    }

    const { username, password } = {
        username: 'autotestUI',
        password: 'qwe123',
    };

    cy.request('POST', `/api/v1/auth/login/`, {
        username: username,
        password: password,
    }).then((response) => {
        at = response.body.access_token;
        auth();
    });
}

export function logout() {}