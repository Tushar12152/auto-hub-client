import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Page/Home";
import SellCar from "../Page/SellCar";
import Register from "../Component/Register";
import Login from "../Component/Logi";
import Dashboard from "../Layouts/Dashboard";

const Router = createBrowserRouter([
    {
       path:'/',
       element:<Layout/>,
       children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:'/sellCar',
            element:<SellCar></SellCar>
        }
       ] 
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    }
])

export default Router;