import { ApplicationAction } from "./actions";
import { Product } from "./types/product";
import { ApplicationState } from "./types/state";


export const initialState = (): ApplicationState => ({
    products: [],
    filteredProducts: [],
    shoppingProducts: [],
    searching: "",
    loading: true,
    error: false,
    showHeaderCollapse: false,
});


export const reducer = (state: ApplicationState, action: ApplicationAction): ApplicationState => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            state.products = action.payload as Product[]
            state.filteredProducts = state.products;
            return {
                ...state,
                loading: false,
            }
        
        case "TOOGLE_HEADER_COLLAPSE":
            state.showHeaderCollapse = action.payload as boolean;
            return {...state}

        case "ERROR":
            console.log("ERROR", action.payload)
            return {...state}    

        default:
            return {...state};
    }
}
