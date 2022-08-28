// React
import React from "react";

// State
import { ApplicationState } from "@/store/types/state";
import { Product } from "@/store/types/product";


interface PaymentProps {
    state: ApplicationState
}


export const Payment = ({ state }:PaymentProps) => {
    const { shoppingProducts } = state;

    const calculateTaxes = (taxesPercentage: number = 0.12, price: number = 0) =>{
        return taxesPercentage * price;
    }

    const getSumOfPrices = (products: Product[]) => {
        let total = 0;
        products.map(({ price }) => total += price);
        return total;
    }


    const subtotal = getSumOfPrices(shoppingProducts);
    const taxes = calculateTaxes(0.12, subtotal);
    const total = subtotal + taxes;


    return (
        <section className="min-h-[80vh] py-8">
            <div className="max-w-[800px] mx-auto h-full px-4 lg:px-16">
                {shoppingProducts.length < 1 
                ? <div className="text-4x mx-auto my-auto font-bold h-96 w-full flex items-center justify-center"> There are not products on Cart.</div>
                :<div className="grid gap-2 place-content-center">
                    <p className="font-semibold mb-16 text-xl uppercase text-center">Selected Products</p>
                    {shoppingProducts.map((product, index) =>(
                        <div className="grid grid-cols-2 gap-2 h-72" key={`key-${index}`}>
                            <img
                                loading="lazy"
                                className="h-56 max-w-56"
                                src={product.image}
                            />
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">{product.title}</p>
                                {/* <div className="h-[30%] overflow-y-auto">{product.description}</div> */}
                                <p>$ {product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}

                    <div className="border border-black flex flex-col gap-3 px-4 py-6">
                        <div className="flex justify-between">
                            <p className="font-black">Subtotal</p>
                            <p>{`$ ${subtotal.toFixed(2)}`}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-black">Taxes</p>
                            <p>{`$ ${taxes.toFixed(2)}`}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-black">Total</p>
                            <p>{`$ ${total.toFixed(2)}`}</p>
                        </div>
                    </div>
                </div>
                }
            </div>
        </section>
    );
};

