import { ArrowRight } from "lucide-react";

const Entertainment = () => {
    return (
        <header className="w-full bg-black text-white py-16 flex flex-col items-center">
            <div className=" entertai w-full max-w-6xl px-6 md:px-24 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-bold uppercase leading-tight">
                    New Entertainment <br /> Centre Near Cheb
                </h2>
                <span className="text-lg md:text-xl mt-6 block">
                    We have been entertaining children and adults <br />
                    in western Bohemia for more than 10 years!
                </span>
            </div>
            <div className="find-more-container flex items-center">
                Find more about us
                <div className="ml-[10px]">
                    <ArrowRight size={20} />
                </div>
            </div>


        </header>
    );
};

export default Entertainment;
