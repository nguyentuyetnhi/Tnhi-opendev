import { useState } from "react";
import { Menu, X } from "lucide-react";
import footer from "../assets/footer.png";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white px-6 py-4 flex items-center z-50">

            <div className=" img-logo flex-1">
                <img src={footer} alt="logo" className="h-12 w-auto object-contain" />
            </div>


            <div className="global flex items-center justify-center flex-1">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full">
                    <GlobeAltIcon className="w-8 h-8 text-black" />
                </div>
            </div>


            <div className="flex-1 flex justify-end">
                <button className=" menu-icon md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                {/* Menu Dropdown */}
                {menuOpen && (
                    <div className=" absolute top-14 right-0 w-48 bg-black bg-opacity-90 p-5 flex flex-col space-y-4 md:hidden rounded-lg shadow-lg">
                        <a href="#" className="hover:text-red-500">Home</a>
                        <a href="#" className="hover:text-red-500">Registration</a>
                        <a href="#" className="hover:text-red-500">Attractions</a>
                        <a href="#" className="hover:text-red-500">Contact</a>
                        <span className="mt-4 font-semibold">+420 737 878 891</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
