import attraction from "../assets/attraction.png"
import slide1 from "../assets/slideshow1.png";
import slide2 from "../assets/slideshow2.png";
import slide3 from "../assets/slideshow3.png";
import slide4 from "../assets/slideshow4.png";
import slide5 from "../assets/slideshow5.png";
import video from "../assets/video.png";
const Attraction = () => {
    return (
        <div className="att text-white w-full bg-black">
            <div className="flex w-full">
                {/* Chỉnh sửa className để tránh bị thu nhỏ */}
                <div className="our w-3/5 flex flex-col gap-6 text-center items-center">
                    <h2 className="our-text text-xl font-bold">OUR ATTRACTIONS</h2>

                    {[
                        { title: "KARTARENA", image: slide1 },
                        { title: "JUMPARENAN", image: slide2 },
                        { title: "VIRTUAL REALITY", image: slide3 },
                        { title: "MULTIBALL", image: slide4 },
                        { title: "LASER SHOOTING RANGE", image: slide5 },
                        { title: "COMPANY EVENTS", image: video }
                    ].map((attraction, index) => (
                        <div
                            key={index}
                            className="step-att flex items-center justify-start w-full space-x-4"
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 1) 100%), url(${attraction.image})`,
                                backgroundSize: "80%",
                                backgroundPosition: "center"
                            }}
                        >
                            <div className="step-content-att flex flex-col">
                                <h3 className="no-skew">{attraction.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Đẩy phần hình ảnh Attraction sang bên phải */}
                <div className="w-2/5 relative ml-auto">
                    <img
                        src={attraction}
                        alt="Attraction"
                        className="Attraction w-full h-screen object-cover rounded-xl"
                    />
                    <p className="multi absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded-lg">
                        Multiple activities at Fun Arena Cheb
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Attraction;
