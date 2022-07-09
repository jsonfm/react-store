export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: string| number;
    title: string;
    price: number;
    description: string;
    rating: Rating;
    category: string;
    image: string;
}

export interface ProductServiceDriver {
    getAll(): Product[] | Promise<Product[]>;
    findOne(id: Product["id"]): Product | Promise<Product>;
}
