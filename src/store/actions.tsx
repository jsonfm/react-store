import { Product } from "./types/product";


export interface GetAllProducts {
    type: "GET_ALL_PRODUCTS";
    payload: Product[];
}

export interface ToogleHeaderCollapse {
    type: "TOOGLE_HEADER_COLLAPSE"
    payload: boolean;
}

export interface ErrorInterface {
    type: "ERROR"
    payload?: Error
}


export type ApplicationAction = 
    | GetAllProducts
    | ToogleHeaderCollapse
    | ErrorInterface

