import React from "react";
import { ApplicationAction } from "../../store/actions";
import { Footer } from "../Footer";
import { Header } from "../Header";


interface Props {
    children?: React.ReactNode,
    dispatch: React.Dispatch<ApplicationAction>
}

const Layout = ({ children, dispatch }: Props) => {
    return(
        <>
        <Header dispatch={dispatch} />
        <main className="max-w-[1200px] mx-auto">
            {children}
        </main>
        <Footer />
        </>
    )
}

export { Layout };
