import { ApplicationAction } from "./actions";
import { ApplicationState } from "./types/state";


export const initialState = (): ApplicationState => ({
    products: [],
    filteredProducts: [],
    shoppingProducts: [],
    searching: "",
    loading: false,
    error: false,
});


export const reducer = (state: ApplicationState, action: ApplicationAction): ApplicationState => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            state.filteredProducts = state.products;
            return {
                ...state,
                products: action.payload,
            }

        case "ERROR":
            console.log("ERROR", action.payload)
            return {...state}    

        default:
            return {...state};
    }
}
