class LoginForm {

    get passwordInput() {
        return $('div[class="input-group"] > input[id="password"]');
    }

    get submitButton() {
        return $('input[data-test="login-submit"]');
    }

    get emailErrorMessage() {
        return $('#email-error');
    }

    async enterPassword(password: string) {
        await this.passwordInput.setValue(password);
    }

    async login() {
        await this.submitButton.click();
    }

    async getEmailErrorMsg() {
        await this.emailErrorMessage.waitForDisplayed();
        return this.emailErrorMessage.getText();
    }
}

export default new LoginForm();