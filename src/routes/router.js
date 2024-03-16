import { createBrowserRouter } from "react-router-dom";
import Layout from '../pages/layout/Layout'
import Intro from "../pages/Intro/Intro";
import Calendar from "../pages/Calendar";
import Memo from "../pages/Memo";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/calendar',
                element:<Calendar/>
            },
            {
                path:'/intro',
                element:<Intro/>
            },
            {
                path:'/memo',
                element:<Memo/>
            },
        ]
    }
])
export default router;