import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Page/Home";

const Router = createBrowserRouter([
    {
       path:'/',
       element:<Layout/>,
       children:[
        {
            path:"/",
            element:<Home/>
        }
       ] 
    }
])

export default Router;