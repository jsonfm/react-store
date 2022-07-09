import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const Header = () => {
    const [showMenu, setShowMenu] = React.useState<boolean>(false);

    const toogleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <header className="sticky top-0 w-full h-16 z-30 overscroll-y-none overflow-y-none">
            <nav className="relative w-full h-full flex justify-between items-center px-6">
                <div className="nav-brand">
                    <Link to="/" className="flex items-center text-2xl">
                        <FaReact /><p className="ml-2">RStore</p>
                    </Link>
                </div>
                <div className={`${showMenu ? 'visible' : 'invisible'} fixed top-0 left-0 flex flex-col bg-gray-300/50 h-screen w-full z-30 overflow-y-none overscroll-y-none`}>
                    <div className="flex" onClick={toogleMenu}>
                        <p>Cerrar</p>
                        <AiFillCloseCircle/>
                    </div>
                    <div className="flex text-white w-full">
                        <BsCartFill />
                        <p>Cart</p>
                    </div>
                </div>
                <div className={`text-2xl`} onClick={toogleMenu}>
                    <GiHamburgerMenu />
                </div>
            </nav>
        </header>
    );
};

export { Header };
