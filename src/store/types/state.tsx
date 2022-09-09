import { Product } from "./product";


export interface ApplicationState {
    products: Array<Product>;
    filter: string;
    filteredProducts: Array<Product>;
    shoppingProducts: Array<Product>;
    categories: string[];
    searching: string;
    loading: boolean;
    error: boolean;
    showHeaderCollapse: boolean;
    showShoppingCollapse: boolean;
}
