import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get inputUsername () {
        return $('input[data-testid="login-username"]'); // 
    }

    get inputPassword () {
        return $('input[data-testid="login-password"]');
    }

    get btnSubmit () {
        return $('button[data-testid="login-submit"]');
    }

    get logoutLink () {
        return $('button[data-testid="menu-logout-button"]')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        
    }
    open () {
        return super.open('login');
    }

    async logout() {
        await this.logoutLink.click();
    }
}

export default new LoginPage();
