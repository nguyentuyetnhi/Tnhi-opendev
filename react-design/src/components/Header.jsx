import { useState } from "react";
import { Menu, X } from "lucide-react";
import Slideshow from "./Slideshow";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full">
            {/*{menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-5 flex flex-col space-y-4 md:hidden">
                    <a href="#" className="hover:text-red-500">Home</a>
                    <a href="#" className="hover:text-red-500">Registration</a>
                    <a href="#" className="hover:text-red-500">Attractions</a>
                    <a href="#" className="hover:text-red-500">Contact</a>
                    <span className="mt-4 font-semibold">+420 737 878 891</span>
                </div>
            )}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>*/}

            <Slideshow />


            <div className="flex items-center justify-center">
                <button className="bg-blue-500 text-white font-bold text-lg uppercase px-8 py-3 clip-left">
                    RESERVE
                </button>
                <button className="bg-red-500 text-white font-bold text-lg uppercase px-8 py-3 clip-right">
                    NOW!
                </button>
            </div>
        </header>
    );
};

export default Header;
