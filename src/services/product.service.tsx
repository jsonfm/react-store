import axios from "axios";
import { Product, ProductServiceDriver } from "../store/types/product";


/** A product service manager */
export class ProductService implements ProductServiceDriver {
    constructor(
        protected url: string
    ){}

    /** Returns a list of products */
    async getAll() {
        try {
            const { data } = await axios.get<Product[]>(this.url);
            return data
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    /**
     * Returns a product given an ID
     * @param id: Id of the product
     */
    async findOne(id: Product["id"]){
        const { data } = await axios.get<Product>(`${this.url}/${id}`);
        return data;
    }
}
