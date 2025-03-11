import footer from "../assets/footer.png";

const Footer = () => {
    return (
        <footer className="text-white w-full bg-black py-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start text-left px-6">
                {/* Cột 1: Hình ảnh */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <img src={footer} alt="Footer" className=" footer w-[180px] h-auto object-contain" />
                </div>

                <div className="w-full md:w-1/3 flex items-center justify-start text-left px-4 mt-4 md:mt-0">
                    <p>
                        New entertainment centre FUN arena Cheb. <br />You will find entertainment and<br />
                        sports activities for children and adults here.
                    </p>
                </div>

                <div className=" contact w-full md:w-1/3 flex flex-col items-center md:items-end justify-center mt-4 md:mt-0">
                    <p>Potočiště 3, 350 02 Odrava</p>
                    <p>fun@funarenacheb.cz</p>
                    <p>+420737878891</p>
                </div>
            </div>


            <div className="text-center mt-6 border-t border-gray-700 pt-4">
                <span>© 2025 FUN Arena Cheb. All rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
