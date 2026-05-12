class FilterComponent {

    public get sortFilter() {
        return $('[data-test="sort"]')
    }


    async selectFilter(filter: string) {
        const dropdown = await this.sortFilter;

        await dropdown.waitForExist({ timeout: 10000 });
        await dropdown.waitForDisplayed({ timeout: 10000 });

        await dropdown.selectByVisibleText(filter);
    }
}

export default FilterComponent;