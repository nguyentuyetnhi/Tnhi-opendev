import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Hero from "./Hero.jsx";


import slide1 from "../assets/slideshow1.png";
import slide2 from "../assets/slideshow2.png";
import slide3 from "../assets/slideshow3.png";
import slide4 from "../assets/slideshow4.png";
import slide5 from "../assets/slideshow5.png";

const Slideshow = () => {
    return (
        <div className="relative w-full h-screen">

            {/* Slideshow */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <img src={slide1} alt="Slide 1" className="w-full h-screen object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide 2" className="w-full h-screen object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide 3" className="w-full h-screen object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="Slide 4" className="w-full h-screen object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="Slide 5" className="w-full h-screen object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


export default Slideshow;
