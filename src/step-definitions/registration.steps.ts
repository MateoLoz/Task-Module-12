import { Given, When, Then } from '@wdio/cucumber-framework';
import registerPage from '../pageobjects/register.page';

import {
    invalidEmailRegistration,
    invalidNameRegistration,
    invalidPasswordRegistration
} from '../test-data/registration/registration.data';

Given('the user opens the registration page', async () => {
    await registerPage.open();
    await browser.maximizeWindow();
});

When(
    'the user completes the registration form with invalid email',
    async () => {
        await registerPage.registerForm.enterAllCredentials(
            invalidEmailRegistration
        );
    }
);

When(
    'the user completes the registration form without password',
    async () => {
        await registerPage.registerForm.enterCredentialsWithoutpassword(
            invalidPasswordRegistration
        );
    }
);

When(
    'the user completes the registration form without first name',
    async () => {
        await registerPage.registerForm.enterCredentialsWithoutName(
            invalidNameRegistration
        );
    }
);

When('the user submits the registration form', async () => {
    await registerPage.registerForm.register();
});

Then(
    'the invalid email validation message should be displayed',
    async () => {
        await expect(
            registerPage.registerForm.emailErr
        ).toHaveText(
            'El formato del correo electrónico no es válido'
        );
    }
);

Then(
    'the required password validation message should be displayed',
    async () => {
        await expect(
            registerPage.registerForm.passwordErr
        ).toHaveText(
            'La contraseña es obligatoria'
        );
    }
);

Then(
    'the required first name validation message should be displayed',
    async () => {
        await expect(
            registerPage.registerForm.fnameErr
        ).toHaveText(
            'El nombre es obligatorio'
        );
    }
);