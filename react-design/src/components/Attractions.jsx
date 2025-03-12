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
        <div className=" att text-white w-full bg-black">
            <div className="flex w-full">
                <div className="our w-2/5 flex flex-col space-y-4 items-start text-left">
                    <h2 className=" our-text text-xl font-bold">OUR ATTRACTIONS</h2>

                    <div
                        className="step-att flex items-center space-x-4 mt-20"
                        style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 1) 100%), url(${slide1})`, backgroundSize: "cover", backgroundPosition: "center", backgroundSize: "80%" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">KARTARENA</h3>
                        </div>
                    </div>

                    <div
                        className="step-att flex items-end space-x-4 text-white absolute right-0 translate-x-20 z-10"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(67, 67, 67, 0.3) 40%, rgba(67, 67, 67, 1) 100%), url(${slide2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundSize: "80%",
                        }}
                    >
                        <div className="JUMPARENAN step-content-att flex flex-col">
                            <h3 className="no-skew">JUMPARENAN</h3>
                        </div>
                    </div>





                    <div
                        className="step-att flex items-center space-x-4 relative"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 1) 100%), url(${slide3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundSize: "80%"
                        }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">VIRTUAL REALITY</h3>
                        </div>
                    </div>

                    <div
                        className="step-att flex items-center space-x-4"
                        style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 1) 100%), url(${slide4})`, backgroundSize: "cover", backgroundPosition: "center", backgroundSize: "80%" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">MULTIBALL</h3>
                        </div>
                    </div>
                    <div
                        className="step-att flex items-center space-x-4"
                        style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1)100%), url(${slide5})`, backgroundSize: "cover", backgroundPosition: "center", backgroundSize: "80%" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">LASER SHOOTING RANGE</h3>
                        </div>
                    </div>
                    <div
                        className="step-att flex items-center space-x-4"
                        style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 100%), url(${video})`, backgroundSize: "cover", backgroundPosition: "center", backgroundSize: "80%" }}
                    >
                        <div className="step-content-att flex flex-col">
                            <h3 className="no-skew">COMPANY EVENTS</h3>
                        </div>
                    </div>
                </div>

                <div className="w-3/5">
                    <img
                        src={attraction}
                        alt="Attraction"
                        className="Attraction w-full h-screen object-cover absolute right-0 top-0 z-20"
                    />

                </div>
            </div>


        </div>
    );
};



export default Attraction;
