import { StateInterface } from "../types/state";


export const initialState = (): StateInterface => ({
    products: [],
    filteredProducts: [],
    shoppingProducts: [],
    searching: "",
    loading: false,
    error: false,
});
