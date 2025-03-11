import { useState } from "react";
import { Menu, X } from "lucide-react";

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute top-10 right-10 w-auto bg-black bg-opacity-50 text-white px-6 py-4 flex items-center justify-between z-50 rounded-lg">
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {menuOpen && (
                <div className="absolute top-16 right-0 bg-black bg-opacity-90 p-5 flex flex-col space-y-4 md:hidden rounded-lg">
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
