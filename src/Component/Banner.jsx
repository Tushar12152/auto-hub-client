import Responsive from "../Container/Responsive";

const Banner = () => {
    return (
        <div>
            <Responsive>
                <div className="relative">
                    <div className="bg-[url('https://i.ibb.co/dL0wStm/4.jpg')] min-h-[480px] bg-no-repeat bg-cover text-white">
                        {/* Overlay div for the black color */}
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <h1 className="text-white font-bold text-4xl text-center pt-44">Powerful Automotive Directory</h1>
                        <h3 className="text-white">Create your Automotive website within minutes, no extra plugins required.</h3>
                    </div>
                    
                </div>
            </Responsive>
        </div>
    );
};

export default Banner;
