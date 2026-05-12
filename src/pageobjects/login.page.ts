import { browser } from "@wdio/globals";
import loginForm from "./components/form/login.form";
class LoginPage {

    loginForm = loginForm;

    async open() {
        await browser.url('/auth/login');
    }
}

export default new LoginPage();