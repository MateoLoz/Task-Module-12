import Page from './page';
import FilterComponent from './components/filters.component';
import ProductsComponent from './components/products.component';
class HomePage extends Page {

    public filterComponent = new FilterComponent();
    public productsComponent = new ProductsComponent();

    open() {
        return super.open('/');
    }
}

export default new HomePage();