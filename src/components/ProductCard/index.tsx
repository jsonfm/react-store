import React from "react";
import { Product } from "../../store/types/product";
import  { AiFillStar } from "react-icons/ai";


interface Props {
    children?: React.ReactNode;
    product: Product;
}


const ProductCard = ({ children, product }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                loading="lazy"
                src={product.image}
                className="min-h-[350px] max-h-[450px] w-full"
            />
            <div className="w-full space-y-2">
                <p className="text-2xl font-bold">{product.title}</p>
                <p className="text-xl">$ {product.price}</p>
                <p className="text-xl capitalize">{product.category}</p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-xl">{product.rating.rate} <AiFillStar/></div>
                    <button className="w-36 bg-green-500 text-white text-xl py-1">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export { ProductCard };
