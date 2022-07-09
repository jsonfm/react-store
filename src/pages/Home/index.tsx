import React from "react";
import axios from "axios";
import { Product } from "../../types/product";
import { ProductCard } from "../../components/ProductCard";

const Home = () => {
    const [products, setProducts] = React.useState<Product []>([]);

    const getProducts = async () => {
        const url = "https://fakestoreapi.com/products";
        try{
            const { data } = await axios.get<Product[]>(url);
            console.log(data);
            setProducts(data);
        }catch(err){
            console.log("Error: ", err);
        }
    }

    React.useEffect(() => {getProducts()}, []);

    return (
        <section className="grid lg:grid-cols-3 gap-4 min-h-screen px-5 lg:px-16">
            {products.map((product, index) => (
                <ProductCard
                    product={product}
                />
            ))}
        </section>
    );
}

export { Home };
