# WebdriverIO Automation Framework

End-to-end automation testing framework built with:

- WebdriverIO
- TypeScript
- Cucumber (BDD)
- Page Object Model (POM)

The project validates multiple flows from the Practice Software Testing application.

---

# Project Architecture

This framework follows:

- Page Object Model (POM)
- Separation of concerns
- Reusable test data
- Reusable step definitions
- Multi-browser execution
- Headless and UI execution modes

---

# Folder Structure

```bash
src/
│
├── features/
│   ├── login-missing-email.feature
│   ├── registration-validation.feature
│   └── tool-shop-filters.feature
│
├── pageobjects/
│   ├── login.page.ts
│   ├── register.page.ts
│   └── components/
│       ├── login.form.ts
│       └── register.form.ts
│
├── step-definitions/
│   ├── login.steps.ts
│   ├── registration.steps.ts
│   └── tool-shop.steps.ts
│
├── test-data/
│   └── registration/
│       └── registration.data.ts
│
└── utils/
```

---

# Framework Design

## Features

Contains all Gherkin scenarios.

Example:

```gherkin
Feature: Registration validation
```

---

## Step Definitions

Implements the business logic for every Gherkin step.

Example:

```ts
Given('the user opens the registration page', async () => {
    await registerPage.open();
});
```

---

## Page Objects

Encapsulates page behavior and selectors.

Example:

```ts
public get email() {
    return $('#email');
}
```

This improves:
- Maintainability
- Readability
- Reusability

---

## Test Data

Centralized test data objects used by the tests.

Example:

```ts
export const invalidEmailRegistration = {
    firstName: 'John',
    email: 'invalid-email'
}
```

---

# Installation

## Clone repository

```bash
git clone <repository-url>
```

---

## Install dependencies

```bash
npm install
```

---

# Run Tests

---

# Run All Tests (UI Mode)

```bash
npx wdio run ./wdio.conf.ts
```

---

# Run All Tests (Headless Mode)

```bash
npx wdio run ./wdio.headless.conf.ts
```

---

# Run Specific Feature

## Login Validation

```bash
npx wdio run ./wdio.conf.ts --spec ./src/features/login-missing-email.feature
```

---

## Registration Validation

```bash
npx wdio run ./wdio.conf.ts --spec ./src/features/registration-validation.feature
```

---

## Tool Shop Filters

```bash
npx wdio run ./wdio.conf.ts --spec ./src/features/tool-shop-filters.feature
```

---

# Supported Browsers

The framework supports:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

---

# Headless Configuration

Example:

```ts
capabilities: [
    {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless=new']
        }
    },

    {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless']
        }
    },

    {
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
            args: ['--headless=new']
        }
    }
]
```

---

# Configuration Files

## UI Execution

```bash
wdio.conf.ts
```

Used for visible browser execution.

---

## Headless Execution

```bash
wdio.headless.conf.ts
```

Used for CI/CD and background execution.

---

# Best Practices Used

- Page Object Model
- Reusable components
- Reusable test data
- Independent scenarios
- Explicit validations
- Separation between UI and headless configurations
- Multi-browser support
- TypeScript typing

---

# Reporting

Current reporter:

```ts
reporters: ['spec']
```

Possible future integrations:
- Allure Reporter
- HTML Reporter
- JUnit Reporter

---

# Future Improvements

- CI/CD integration
- Docker support
- API testing integration
- Parallel execution optimization
- Environment configuration
- Screenshot reporting
- Retry strategy
- Test tagging

---

# Tech Stack

- WebdriverIO
- TypeScript
- Cucumber
- Node.js
- ChromeDriver
- FirefoxDriver
- EdgeDriver

---

# Author

Mateo Lozano