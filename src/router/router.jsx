import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../component/pages/Home";
import CatagoryNews from "../component/pages/CatagoryNews";

const router = createBrowserRouter([
    {
        path:"/", 
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element: <Home></Home>
            },
            {
                path:"/category/:id",
                element: <CatagoryNews></CatagoryNews>,
                loader:() =>fetch("/news.json"),
            },

        ]
    },
    {
        path:"/auth", 
        element:<h3>authentication layouts</h3>
    },
    {
        path:"/news", 
        element:<h3>news layout</h3>
    },
    {
        path:"/*", 
        element:<h3>Error 404</h3>
    },
   
])
export default router;