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
