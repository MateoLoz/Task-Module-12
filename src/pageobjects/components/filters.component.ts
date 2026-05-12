class FilterComponent {

    public get sortFilter() {
        return $('[data-test="sort"]')
    }


    async selectFilter(filter: string) {
        await this.sortFilter.waitForDisplayed()
        await this.sortFilter.click();
        await this.sortFilter.selectByVisibleText(filter);
    }
}

export default FilterComponent;