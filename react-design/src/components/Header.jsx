import { useState } from "react";
import { Menu, X } from "lucide-react";
import Slideshow from "./Slideshow";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full">
            <header className="fixed top-0 left-0 w-full bg-transparent text-white px-6 py-4 flex items-center justify-between z-50"></header>
            <Slideshow />

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>


            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-5 flex flex-col space-y-4 md:hidden">
                    <a href="#" className="hover:text-red-500">Home</a>
                    <a href="#" className="hover:text-red-500">Registration</a>
                    <a href="#" className="hover:text-red-500">Attractions</a>
                    <a href="#" className="hover:text-red-500">Contact</a>
                    <span className="mt-4 font-semibold">+420 737 878 891</span>
                </div>
            )}
        </header>
    );
};

export default Header;
