import { Product } from "./product";


export interface ApplicationState {
    products: Array<Product>;
    filteredProducts: Array<Product>;
    shoppingProducts: Array<Product>;
    searching: string;
    loading: boolean;
    error: boolean;
    showHeaderCollapse: boolean;
    showShoppingCollapse: boolean;
}
