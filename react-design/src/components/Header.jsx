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

            <div className="relative inline-block">
                <a href="https://booking.funarenacheb.cz/">
                    <button className="clip-left bg-blue-500 text-white text-xl font-bold py-3 px-6 relative z-10">
                        RESERVE
                    </button>
                </a>
                <a href="https://booking.funarenacheb.cz/">
                    <button className="clip-right bg-red-500 text-white text-xl font-bold py-3 px-6 absolute top-0 left-[calc(100%-40px)] z-0">
                        NOW!
                    </button>
                </a>
            </div>

        </header>
    );
};

export default Header;
