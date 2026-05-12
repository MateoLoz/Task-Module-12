import { Given, When, Then } from '@wdio/cucumber-framework';
import expect from 'expect';
import loginPage from '../pageobjects/login.page';

Given('the user opens the login page', async () => {
    await loginPage.open();
    await browser.maximizeWindow();
});

When('the user enters password {string}', async (password: string) => {
    await loginPage.loginForm.enterPassword(password);
});

When('the user submits the login form', async () => {
    await loginPage.loginForm.login();
});

Then(
    'the email required error should be displayed',
    async () => {
        const errorText = await loginPage.loginForm.getEmailErrorMsg();

        expect(errorText).toContain(
            'El correo electrónico es obligatorio'
        );
    }
);