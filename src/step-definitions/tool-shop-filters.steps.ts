import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../pageobjects/home.page';
Given('the user opens the tool shop page', async () => {
    await browser.maximizeWindow();
    await homePage.open();
});

When(
    'the user selects the {string} filter',
    async (filter: string) => {
        await homePage.filterComponent.selectFilter(filter);
        await browser.pause(2500);
    }
);

Then(
    'the products should be ordered by {string} in {string} order',
    async (criteria: string, order: string) => {

        let items: any[] = [];

        switch (criteria) {

            case 'name':
                items = await homePage.productsComponent.getAllNames();
                break;

            case 'price':
                items = await homePage.productsComponent.getAllPrices();
                break;

            case 'co2':
                items = await homePage.productsComponent.getAllCo2();
                break;

            default:
                throw new Error(`Unsupported criteria: ${criteria}`);
        }

        let sortedItems: any[];

        if (criteria === 'price') {

            sortedItems =
                order === 'asc'
                    ? [...items].sort((a, b) => a - b)
                    : [...items].sort((a, b) => b - a);

        } else {

            sortedItems =
                order === 'asc'
                    ? [...items].sort((a, b) => a.localeCompare(b))
                    : [...items]
                        .sort((a, b) => a.localeCompare(b))
                        .reverse();
        }

        await expect(items).toEqual(sortedItems);
    }
);