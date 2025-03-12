import footer from "../assets/footer.png";

const Footer = () => {
    return (
        <footer className="text-white w-full bg-black py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between gap-4">
                    <div className="w-1/3  p-4 text-left">Cột thứ 1</div>
                    <div className="w-1/3  p-4 text-left">Cột thứ 2</div>
                    <div className="w-1/3 p-4 text-left">Cột thứ 3</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
