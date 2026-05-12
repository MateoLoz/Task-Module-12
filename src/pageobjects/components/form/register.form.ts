export default class RegisterForm {

    public get fname() {
        return $('#first_name');
    }

    public get fnameErr() {
        return $('div[data-test="first-name-error"] > div');
    }

    public get lname() {
        return $('input[data-test="last-name"]');
    }

    public get lnameErr() {
        return $('div[data-test="last-name-error"] > div');
    }

    public get bday() {
        return $('input[data-test="dob"]');
    }

    public get bdayErr() {
        return $('div[data-test="dob-error"] > div');
    }

    public get address() {
        return $('input[data-test="street"]');
    }

    public get addressErr() {
        return $('div[data-test="street-error"] > div');
    }

    public get city() {
        return $('input[data-test="city"]');
    }

    public get cityErr() {
        return $('div[data-test="city-error"] > div');
    }

    public get state() {
        return $('input[data-test="state"]');
    }

    public get stateErr() {
        return $('div[data-test="state-error"] > div');
    }

    public get code() {
        return $('input[data-test="postal_code"]');
    }

    public get codeErr() {
        return $('div[data-test="postal_code-error"] > div');
    }

    public get country() {
        return $('select[data-test="country"]');
    }

    public get countryErr() {
        return $('div[data-test="country-error"] > div');
    }

    public get phone() {
        return $('input[data-test="phone"]');
    }

    public get phoneErr() {
        return $('div[data-test="phone-error"] > div');
    }

    public get email() {
        return $('#email');
    }

    public get emailErr() {
        return $('div[data-test="email-error"] > div');
    }

    public get password() {
        return $('#password');
    }

    public get passwordErr() {
        return $('div[data-test="password-error"] > div');
    }

    public get button() {
        return $('button[data-test="register-submit"]');
    }

    async enterAllCredentials(credentials: any) {
        await this.fname.setValue(credentials.firstName);
        await this.lname.setValue(credentials.lastName);
        await this.bday.setValue(credentials.bday);
        await this.address.setValue(credentials.address);
        await this.city.setValue(credentials.city);
        await this.state.setValue(credentials.state);
        await this.code.setValue(credentials.postalCode);
        await this.country.selectByVisibleText(credentials.country);
        await this.phone.setValue(credentials.phone);
        await this.email.setValue(credentials.email);
        await this.password.setValue(credentials.password);
    }

    async enterCredentialsWithoutpassword(credentials: any) {
        await this.fname.setValue(credentials.firstName);
        await this.lname.setValue(credentials.lastName);
        await this.bday.setValue(credentials.bday);
        await this.address.setValue(credentials.address);
        await this.city.setValue(credentials.city);
        await this.state.setValue(credentials.state);
        await this.code.setValue(credentials.postalCode);
        await this.country.selectByVisibleText(credentials.country);
        await this.phone.setValue(credentials.phone);
        await this.email.setValue(credentials.email);
    }

    async enterCredentialsWithoutName(credentials: any) {
        await this.lname.setValue(credentials.lastName);
        await this.bday.setValue(credentials.bday);
        await this.address.setValue(credentials.address);
        await this.city.setValue(credentials.city);
        await this.state.setValue(credentials.state);
        await this.code.setValue(credentials.postalCode);
        await this.country.selectByVisibleText(credentials.country);
        await this.phone.setValue(credentials.phone);
        await this.email.setValue(credentials.email);
        await this.password.setValue(credentials.password);
    }

    async enterFirstName(firstName: string) {
        await this.fname.setValue(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lname.setValue(lastName);
    }

    async enterEmail(email: string) {
        await this.email.setValue(email);
    }

    async enterPassword(password: string) {
        await this.password.setValue(password);
    }

    async enterPhone(phone: string) {
        await this.phone.setValue(phone);
    }

    async enterCity(city: string) {
        await this.city.setValue(city);
    }

    async selectCountry(country: string) {
        await this.country.selectByVisibleText(country);
    }

    async clickRegister() {
        await this.button.click();
    }

    async getFirstNameError() {
        await this.fnameErr.waitForDisplayed();
        return await this.fnameErr.getText();
    }

    async getLastNameError() {
        await this.lnameErr.waitForDisplayed();
        return await this.lnameErr.getText();
    }

    async getEmailError() {
        await this.emailErr.waitForDisplayed();
        return await this.emailErr.getText();
    }

    async getPasswordError() {
        await this.passwordErr.waitForDisplayed();
        return await this.passwordErr.getText();
    }

    async getPhoneError() {
        await this.phoneErr.waitForDisplayed();
        return await this.phoneErr.getText();
    }

    async getCityError() {
        await this.cityErr.waitForDisplayed();
        return await this.cityErr.getText();
    }

    register() {
        this.button.click();
    }
}