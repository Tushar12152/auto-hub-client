import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Page/Home";
import SellCar from "../Page/SellCar";
import Register from "../Component/Register";

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
    }
])

export default Router;