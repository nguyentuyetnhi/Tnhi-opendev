import { ArrowRight } from "lucide-react";
import Video from "../assets/video.png";
import Play from "../assets/play.png"

const Entertainment = () => {
    return (
        <header className="w-full bg-black text-white py-16 flex flex-col items-center">
            <div className=" entertai w-full max-w-6xl px-6 md:px-24 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-bold uppercase leading-tight">
                    New Entertainment <br /> Centre Near Cheb
                </h2>
                <span className="text text-lg md:text-xl mt-6 block">
                    We have been entertaining children and adults <br />
                    in western Bohemia for more than 10 years!
                </span>
            </div>
            <div className=" text find-more-container flex items-center">
                Find more about us
                <div className="">
                    <ArrowRight size={16} />
                </div>
            </div>
            <div className="relative flex justify-center items-center ">
                {/* Video (A) */}
                <img src={Video} alt="Video" className="video" />

                {/* Play (B) - Đè lên Video */}
                <img
                    src={Play}
                    alt="Play"
                    className=" Play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
                />
            </div>



        </header>
    );
};

export default Entertainment;
