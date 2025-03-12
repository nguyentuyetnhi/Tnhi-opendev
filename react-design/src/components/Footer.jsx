import footer from "../assets/footer.png"
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
const Footer = () => {

    return (
        <footer className="text-white w-full bg-black py-6">
            <div className="container mx-auto px-4">
                <div className=" footer grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center">
                    <div className=" footer1 p-4 rounded">
                        <img
                            src={footer}
                            alt="footer"
                            className=" w-full h-screen object-cover absolute right-0 top-0 z-20"
                        />
                        <div className="flex justify-center items-center h-screen bg-black">
                            <button className="icon flex items-center gap-6  px-8 py-4 rounded-full shadow-lg">
                                <Facebook className="text-white w-6 h-6" style={{ marginRight: "15px" }} />
                                <Instagram className="text-white w-6 h-6" style={{ marginRight: "15px" }} />
                                <Mail className="text-white w-6 h-6" style={{ marginRight: "15px" }} />
                                <Phone className="text-white w-6 h-6" />
                            </button>
                        </div>
                    </div>
                    <div className="footer2 p-4 rounded">
                        <p>New entertainment centre FUN arena Cheb. <br />You will find entertainment and sports<br /> activities for children and adults here.</p>
                    </div>
                    <div className="footer3 p-4 rounded">

                        <p>Potočiště 3, 350 02 Odrava<br />
                            fun@funarenacheb.cz<br />
                            +420737878891
                        </p>
                    </div>
                </div>
                <div className=" copy text-end mt-6 text-gray-400 text-sm">
                    © 2024 Công ty ABC. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
