import { useState } from "react";
import { Menu, X } from "lucide-react";
import attraction from "../assets/attraction.png"
import slide1 from "../assets/slideshow1.png";
import slide2 from "../assets/slideshow2.png";
import slide3 from "../assets/slideshow3.png";
import slide4 from "../assets/slideshow4.png";
import slide5 from "../assets/slideshow5.png";
import video from "../assets/video.png";
const Attraction = () => {


    return (
        <header className=" att text-white w-full bg-black">
            <div className="flex w-full">
                <div className="our w-2/5 flex flex-col space-y-4 items-start text-left">
                    <h2 className=" our-text text-xl font-bold">OUR ATTRACTIONS</h2>

                    <div
                        className="step-att flex items-center space-x-4 mt-20"
                        style={{ backgroundImage: `url(${slide1})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(0.5px)" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">kartarena</h3>
                        </div>
                    </div>

                    <div
                        className="step-att flex items-center space-x-4"
                        style={{ backgroundImage: `url(${slide2})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">jumparenan</h3>
                        </div>
                    </div>

                    <div
                        className="step-att flex items-center space-x-4"
                        style={{ backgroundImage: `url(${slide3})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">virtual reality</h3>
                        </div>
                    </div>
                    <div
                        className="step-att flex items-center space-x-4"
                        style={{ backgroundImage: `url(${slide4})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">multiball</h3>
                        </div>
                    </div>
                    <div
                        className="step-att flex items-center space-x-4"
                        style={{ backgroundImage: `url(${slide5})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">laser shooting range</h3>
                        </div>
                    </div>
                    <div
                        className="step-att flex items-center space-x-4"
                        style={{ backgroundImage: `url(${video})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">company events</h3>
                        </div>
                    </div>
                </div>

                <div className="w-3/5">
                    <img
                        src={attraction}
                        alt="Attraction"
                        className=" Attraction w-full h-screen object-cover"
                    />
                </div>
            </div>


        </header>
    );
};



export default Attraction;
