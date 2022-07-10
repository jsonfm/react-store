import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { ApplicationAction } from "../../store/actions";
import { AppContext as Ctx } from "../../context";


interface HeaderProps {
    dispatch: React.Dispatch<ApplicationAction>
}


const Header = ({ dispatch }: HeaderProps) => {
    const state = React.useContext(Ctx);
    const { showHeaderCollapse } = state;

    const toogleMenu = () => {
        // console.log("dispatch: ", dispatch);
        dispatch({type: "TOOGLE_HEADER_COLLAPSE", payload:!state.showHeaderCollapse})
    }

    return(
        <header className="bg-white sticky top-0 w-full h-16 z-30 overscroll-y-none overflow-y-none">
            <nav className="relative w-full h-full flex justify-between items-center px-5">
                <div className="nav-brand">
                    <Link to="/" className="flex items-center text-2xl">
                        <FaReact /><p className="ml-2">RStore</p>
                    </Link>
                </div>
                <div className={`${showHeaderCollapse ? 'visible' : 'invisible'} fixed top-0 left-0 flex flex-col bg-white h-screen w-full z-30 overflow-y-none overscroll-y-none transition ease-in-out duration-100 text-xl`}>
                    <div className="font-bold text-3xl h-16 w-full px-5 flex items-center justify-end gap-2 text-black" onClick={toogleMenu}>
                        <IoMdClose/>
                    </div>
                    <p className="text-center mt-4">ABOUT</p>

                </div>
                <div className={`text-2xl flex gap-2`}>
                    <BiSearchAlt2 /> 
                    <BsFillCartFill />
                    <GiHamburgerMenu onClick={toogleMenu}/>
                </div>
            </nav>
        </header>
    );
};

export { Header };
