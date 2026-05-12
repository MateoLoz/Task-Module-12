class ProductsComponent {

    get productNames() {
        return $$('[data-test="product-name"]');
    }

    get sortingCompleted() {
        return $$('[data-test="sorting_completed"]')
    }

    get productPrices() {
        return $$('[data-test="product-price"]');
    }

    get productCo2() {
        return $$('[data-test="co2-rating-badge"]');
    }

    async getAllNames(): Promise<string[]> {
        await browser.pause(2500);
        const elements = await this.productNames;

        const names: string[] = [];

        for (const element of elements) {
            names.push(await element.getText());
        }

        return names;
    }

    async getAllPrices(): Promise<number[]> {
        await browser.pause(2500);
        const elements = await this.productPrices;

        const prices: number[] = [];

        for (const element of elements) {

            const text = await element.getText();

            prices.push(
                Number(text.replace('$', '').trim())
            );
        }

        return prices;
    }

    async getAllCo2(): Promise<string[]> {
        await browser.pause(2500);
        const elements = await this.productCo2;

        const co2Values: string[] = [];

        for (const element of elements) {
            co2Values.push(await element.getText());
        }

        return co2Values;
    }
}

export default ProductsComponent;