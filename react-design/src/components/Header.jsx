import { useState } from "react";
import { Menu, X } from "lucide-react";
import Slideshow from "./Slideshow";
import menu from "../assets/menu.png";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className=" header w-full">
            <Slideshow />

            <div className="relative inline-block">
                <a href="https://booking.funarenacheb.cz/">
                    <button className="clip-left bg-blue-500 text-white text-xl font-bold py-3 px-6 relative z-10">
                        <p className="no-skew">RESERVE</p>
                    </button>
                </a>
                <a href="https://booking.funarenacheb.cz/">
                    <button className="clip-right bg-red-500 text-white text-xl font-bold py-3 px-6 absolute top-0 left-[calc(100%-40px)] z-0">
                        <p className="no-skew now">NOW!</p>
                    </button>
                </a>
            </div>

        </header>
    );
};

export default Header;
