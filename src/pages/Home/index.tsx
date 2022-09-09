import React from "react";
import { ProductCard } from "@/components/ProductCard";
import { PageProps } from "@/store/types/pages";
import { Spinner } from "@/components/Spinner";



const Home = ({ state, dispatch, ctx }: PageProps) => {

    const tags = state.categories;
    const { shoppingProducts } = state;

    if (!tags.includes("All items"))
        tags.push("All items");

    const renderContent = () => {

        if(state.filteredProducts.length > 0) {
            return (
                <>
                <div className="flex lg:justify-center gap-4 mx-auto max-w-[1000px] cursor-pointer overflow-x-auto mt-4 py-4 lg:mt-8 px-4">
                    {tags.map((tag) => (
                        <div className="py-2 bg-gray border border-gray-900 px-4 w-full flex items-center justify-center rounded-lg capitalize">
                            {tag}
                        </div>
                    ))}
                </div>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-4 min-h-screen px-5 lg:px-16 py-12">
                {state.products.map((product, index) => (
                    <ProductCard
                        product={product}
                        key={`product-${index}`}
                        dispatch={dispatch}
                        isSelected={shoppingProducts.includes(product)}
                    />
                ))}
                </section>
                </>
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
