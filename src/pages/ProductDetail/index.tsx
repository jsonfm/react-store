import { useParams } from "react-router-dom";
import React from "react";
import { ProductDetailProps } from "./types";
import { Product } from "../../store/types/product";




const ProductDetail = ({ state }: ProductDetailProps) => {
    const { title } = useParams();
    const { products } = state;
    const product = products.find(product => product.title.trim() === title?.trim()) as Product;
    console.log(product);
    return (
        <section className="min-h-[90vh] px-5">
          <article className="grid lg:grid-cols-2 place-content-center mt-16">
            <div className="w-full flex justify-center">
                <img
                    src={product.image}
                    className="w-full min-h-[460px] max-h-[500px] lg:w-[70%]"
                />
            </div>
           <div className="py-4 lg:px-16">
            <p className="text-xl lg:text-4xl font-bold text-center mb-4">{product.title}</p>
            <button className="bg-green-500 text-white text-xl px-6 py-3 mt-1 mb-4">Add To cart</button>
            <p className="text-xl lg:text-3xl">$ {product.price}</p>
            <p className="text-justify text-xl lg:text-3xl">{product.description}</p>
           </div>
           </article>
        </section>
    );
};

export { ProductDetail };
