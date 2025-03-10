import { useState } from "react";
import { Menu, X } from "lucide-react";
import Slideshow from "./Slideshow";
import Hero from "./Hero";


const Entertaiment = () => {
    return (
        <header className="w-full bg-black text-white py-16">
            <div className=" enter pl-6 md:pl-24">
                <h2 className="text-5xl md:text-7xl font-bold uppercase leading-tight text-left">
                    New Entertainment <br /> Centre Near Cheb
                </h2>
                <span className="text-lg md:text-xl mt-6 block text-left">
                    We have been entertaining children and adults <br />
                    in western Bohemia for more than 10 years!
                </span>
            </div>
            <div className="flex justify-end w-full">
                <span className="text-right">Find more about us</span>
            </div>

        </header>
    );
};




export default Entertaiment;

