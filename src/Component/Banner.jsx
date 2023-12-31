import { Link } from "react-router-dom";
import Responsive from "../Container/Responsive";

const Banner = () => {
    return (
        <div>
            <Responsive>
                <div className="relative">
                    <div className="bg-[url('https://i.ibb.co/dL0wStm/4.jpg')] min-h-[480px] bg-no-repeat bg-cover text-white relative">
                        {/* Overlay div for the black color */}
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div>
                    <h1 className="text-white font-bold text-4xl text-center pt-44">Powerful Automotive Directory</h1>
                        <h3 className="text-white text-center">Create your Automotive website within minutes, no extra plugins required.</h3>
                    </div>

                    <div className="w-32 mx-auto mt-10 flex  gap-5 ">
                         <button className="btn cursor-pointer bg-red-700 text-white">Get Started</button>
                        <Link to='/login'>  <button className="btn  bg-red-700 text-white">Lets Explore</button></Link>
                    </div>
                    </div>
                    

                    

                </div>
            </Responsive>
        </div>
    );
};

export default Banner;
