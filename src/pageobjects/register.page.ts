import { browser } from "@wdio/globals";
import RegisterForm from "./components/form/register.form"

class RegisterPage {
    registerForm = new RegisterForm();
    async open() {

        await browser.url('/auth/register')
    }

}

export default new RegisterPage()