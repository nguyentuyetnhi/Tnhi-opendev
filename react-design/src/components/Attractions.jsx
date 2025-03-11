import { useState } from "react";
import { Menu, X } from "lucide-react";

const Attraction = () => {


    return (
        <header className=" att text-white w-full bg-black">
            <div className="container ">
                <div className="att-left"></div>
                <h2 className="text-5xl md:text-7xl font-bold uppercase leading-tight"> OUR ATTRACTIONS</h2>
                <div>
                    <div className="step flex items-center space-x-4">
                        <div className="step-content flex flex-col">
                            <h3 className="no-skew" >Choose an Attraction</h3>
                        </div>
                    </div>
                    <div className="step flex items-center space-x-4">
                        <div className="step-content flex flex-col">
                            <h3 className="no-skew" >Choose an Attraction</h3>
                        </div>
                    </div>
                    <div className="step flex items-center space-x-4">
                        <div className="step-content flex flex-col">
                            <h3 className="no-skew" >Choose an Attraction</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="att-right">

            </div>

        </header>
    );
};



export default Attraction;
