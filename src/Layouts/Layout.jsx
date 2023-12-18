import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";

const Layout = () => {
    return (
        <div >
            {/* className="bg-gray-400 text-white" */}
           <div className="min-h-screen">
           <Nav/>
            <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default Layout;