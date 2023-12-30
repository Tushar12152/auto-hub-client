import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Page/Home";
import SellCar from "../Page/SellCar";
import Register from "../Component/Register";
import Login from "../Component/Logi";
import Dashboard from "../Layouts/Dashboard";
import AddCar from "../Dashboard/AddCar";
import MyAddedCAr from "../Dashboard/MyAddedCAr";
import CArUpdate from "../Dashboard/CArUpdate";

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
        element:<Dashboard/>,
        children:[
            {
                 path:"/dashboard/addCar",
                 element:<AddCar/>
            },
            {
                path:"/dashboard/my-adds",
                element:<MyAddedCAr/>
            },
            {
                path:'/dashboard/addedItemUpdate/:id',
                element:<CArUpdate/>,
                loader:({params})=>fetch(`http://localhost:5001/cars/${params.id}`)
            }
        ]
    }
])

export default Router;