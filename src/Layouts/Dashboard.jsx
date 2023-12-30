import {   FaCar,  FaCarSide,  FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts,} from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";





const Dashboard = () => {
   
  

    return (
        <div className="grid grid-cols-12 h-full">
               
            <div className="col-span-7 md:col-span-9  p-4 md:p-8">
                <Outlet></Outlet>
            </div>

            <div className="col-span-5 md:col-span-3  min-h-screen bg-red-700 text-white">
                <ul className="menu p-4">
                   <>
                            <li>
                                <NavLink to="/dashboard/Profile">
                                <CgProfile />
                                    Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addCar">
                                <MdManageAccounts />
                                   Add My Car</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/my-adds">
                                <FaCarSide/>
                                 My Added</NavLink>
                            </li>


                            <li>
                                <NavLink to="/dashboard/order">
                                    <FaCar/>
                                    My order</NavLink>
                            </li>
                            
                          
                        </>
                          
             



                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                   
                </ul>
            </div>
            {/* dashboard content */}
        </div>
    );
};

export default Dashboard;