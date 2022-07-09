import { Product } from "./product";

export interface StateInterface {
    products: Product[];
    filteredProducts: Product[];
    shoppingProducts: Product[];
    searching: string,
    loading: boolean;
    error: boolean;

}
