// src/app/login/presenters/loginPresenter.js
import * as loginService from '../services/loginService';

export class LoginPresenter {
    constructor(view) {
        this.view = view;
    }

    async handleLogin() {
        await loginService.googleLogin();
    }

    async handleLogout() {
        await loginService.logout();
    }
}
