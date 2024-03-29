import { NavLink } from "react-router-dom";
import Responsive from "../Container/Responsive";
import MenuDropdown from "./MenuDropDown";
import MenuDrop from "./MenuDrop";


const Nav = () => {

const nav=<div className="flex gap-4 items-center">
       <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-700 p-1 rounded text-white" : ""}>Home</NavLink>

       <NavLink to="/sellCar" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-700 p-1 rounded text-white" : ""}>Sell</NavLink>
</div>



    return (
        <div className="fixed z-10 w-full mx-auto  opacity-80">
            <Responsive>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    

       

      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      </ul>
    </div>


      <MenuDrop/>

  
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    <img className="w-24 rounded-full"   src={"https://i.ibb.co/0FVfG13/432085-14455703-2670575-a39f71ad-image.jpg"} alt="" />

    </ul>
  </div>


  <div className="navbar-end">
     <MenuDropdown/>
  </div>
</div>
            </Responsive>
        </div>
    );
};

export default Nav;