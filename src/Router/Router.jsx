import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";

const Router = createBrowserRouter([
    {
       path:'/',
       element:<Layout/>,
       children:[
        {
            
        }
       ] 
    }
])

export default Router;