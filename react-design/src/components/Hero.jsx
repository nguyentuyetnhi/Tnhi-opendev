import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent text-white px-6 py-4 flex items-center justify-between z-50">


            <div className="text-xl font-bold">
                <img src={logo} alt="Fun Arena" className="h-12" />
            </div>
            {/*<nav className="hidden md:flex space-x-8 text-lg font-semibold">
                <a href="#" className="hover:text-blue-400">Home</a>
                <a href="#" className="hover:text-blue-400">Registration</a>
                <a href="#" className="hover:text-blue-400">Attractions</a>
                <a href="#" className="hover:text-blue-400">Contact</a>
    </nav>*/}


            <div className="hidden md:flex items-center space-x-3">
                <span className="font-semibold">+420 737 878 891</span>
                <button className="bg-red-600 p-2 rounded-full">
                    <img src="/assets/phone-icon.png" alt="Call" className="w-6 h-6" />
                </button>
            </div>


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

export default Hero;
