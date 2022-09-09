import { ApplicationAction } from "./actions";
import { Product } from "./types/product";
import { ApplicationState } from "./types/state";


export const initialState = (): ApplicationState => ({
    products: [],
    filter: "",
    filteredProducts: [],
    shoppingProducts: [],
    categories: [],
    searching: "",
    loading: true,
    error: false,
    showHeaderCollapse: false,
    showShoppingCollapse: false,
});


export const reducer = (state: ApplicationState, action: ApplicationAction): ApplicationState => {
    switch (action.type) {
        // Visuals
        case "TOGGLE_HEADER_COLLAPSE":
            state.showHeaderCollapse = action.payload as boolean;
            return {...state}

        // Product service
        case "GET_ALL_PRODUCTS":
            state.products = action.payload as Product[]
            state.filteredProducts = state.products;
            return {
                ...state,
                loading: false,
            }

        case "GET_ALL_CATEGORIES":
            if(action.payload){
                state.categories = action.payload as Array<string>;
            }
            return {...state}
        
        // Cart Management
        case "TOGGLE_SHOPPING_COLLAPSE":
            state.showShoppingCollapse = action.payload as boolean;
            return {...state}

        case "ADD_PRODUCT_TO_CART":
            if(!state.shoppingProducts.includes(action.payload)){
                state.shoppingProducts.push(action.payload as Product);
            }
            return {
                ...state
            }
        
        case "REMOVE_PRODUCT_FROM_CART":
            const productIndex = state.shoppingProducts.indexOf(action.payload);
            if(productIndex > -1){
                state.shoppingProducts.splice(productIndex, 1);
            }
            return {...state}
        
        case "ERROR":
            console.log("ERROR", action.payload)
            return {...state}    

        default:
            return {...state};
    }
}
