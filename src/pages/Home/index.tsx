import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { PageProps } from "../../store/types/pages";
import { Spinner } from "../../components/Spinner";


const Home = ({ state, dispatch, ctx }: PageProps) => {
    const renderContent = () => {
        console.log("Home State: ", state.filteredProducts);
        if(state.filteredProducts.length > 0) {
            return (
                <section className="grid lg:grid-cols-3 gap-4 min-h-screen px-5 lg:px-16">
                {state.products.map((product, index) => (
                    <ProductCard
                        product={product}
                        key={`product-${index}`}
                    />
                ))}
                </section>
            )
        }
        else {
            return <section className="h-[80vh] flex justify-center items-center text-2xl"><Spinner/></section>
        }
    }
    return (
        renderContent()
    );
}

export { Home };
