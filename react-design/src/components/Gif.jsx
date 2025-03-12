import gif from "../assets/gif.png";

const Gif = () => {
    return (
        <div className="relative flex justify-center">
            <div className="relative w-full max-w-[500px] flex flex-col items-center">
                <button className="make bg-red-600 text-white px-6 py-4 rounded-full w-full text-center mt-24 relative z-20">
                    <h3 className="font-semibold">
                        Make somebody happy with a gift voucher
                    </h3>
                    <p className="text-sm">
                        The voucher is valid for all services. Unforgettable experiences for children and adults!
                    </p>
                </button>
                <img src={gif} alt="gif" className="gif absolute top-[-50px] z-10" />
                <a href="https://vouchers.funarenacheb.cz/c/darkovy-poukaz">
                    <button className="buy bg-white text-black px-4 py-2 rounded-lg border border-black absolute right-[-10%] top-1/2 -translate-y-1/2 shadow-md z-30">
                        Buy now
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Gif;
