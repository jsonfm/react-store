import React from "react";
import { Product } from "../../store/types/product";
import  { AiFillStar } from "react-icons/ai";
import { ApplicationAction } from "../../store/actions";
import { NavigateFunction, useNavigate } from "react-router-dom";


interface Props {
    children?: React.ReactNode;
    product: Product;
    dispatch?: React.Dispatch<ApplicationAction>
}


const ProductCard = ({ children, product, dispatch }: Props) => {
    const navigateTo: NavigateFunction = useNavigate();
    
    const addProductToCart = () =>{
        if(dispatch){
            dispatch({type: "ADD_PRODUCT_TO_CART", payload: product});
        }
    }

    const goToProductDetail = () => {
        const url = `product/${product.title}`;
        navigateTo(url);
    }

    return (
        <div className="flex flex-col items-center justify-center h-[660px] max-w-[400px]">
            <img
                loading="lazy"
                src={product.image}
                className="h-[360px] w-[90%] hover:cursor-pointer mb-3"
                onClick={goToProductDetail}
            />
            <div className="w-full space-y-2 h-[30%]">
                <div className="h-[70%]">
                    <p className="text-2xl font-bold h-[50%] mb-5 overflow-y-auto" onClick={goToProductDetail}>{product.title}</p>
                    <p className="text-xl mt-auto">$ {product.price}</p>
                    <p className="text-xl capitalize">{product.category}</p>
                </div>
                <div className="flex justify-between mt-auto">
                    <div className="flex items-center gap-2 text-xl">{product.rating.rate} <AiFillStar/></div>
                    <button onClick={addProductToCart} className="add-button">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export { ProductCard };
    function useNavigation(): NavigateFunction {
        throw new Error("Function not implemented.");
    }

