import { Product } from "./types/product";


// For Visual Components
export interface ToggleHeaderCollapse {
    type: "TOGGLE_HEADER_COLLAPSE";
    payload: boolean;
}

// For product services
export interface GetAllProducts {
    type: "GET_ALL_PRODUCTS";
    payload: Product[];
}

export interface GetAllCategories {
    type: "GET_ALL_CATEGORIES";
    payload: string[];
}

// For Cart management
export interface ToggleShoppingCollapse {
    type: "TOGGLE_SHOPPING_COLLAPSE";
    payload: boolean;
}

export interface AddProductToCart {
    type: "ADD_PRODUCT_TO_CART";
    payload: Product;
}

export interface RemoveProductFromCart {
    type: "REMOVE_PRODUCT_FROM_CART";
    payload: Product;
}

// Error management
export interface ErrorInterface {
    type: "ERROR"
    payload?: Error
}


export type ApplicationAction = 
    // service
    | GetAllProducts
    | GetAllCategories
    // Header
    | ToggleHeaderCollapse
    | ErrorInterface
    // Shoping Cart
    | ToggleShoppingCollapse
    | AddProductToCart
    | RemoveProductFromCart

