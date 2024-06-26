import { createBrowserRouter } from "react-router-dom";
import Layout from '../pages/layout/Layout'
import Intro from "../pages/Intro/Intro";
import Calendar from "../pages/calendar/Calendar";
import Memo from "../pages/memo/Memo";
import notFoundError from "../pages/notFoundError/notFoundError";
import Main from "../pages/main/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Main/>
            },
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
    },
    {
        path:'*',
        element:<notFoundError/>
    }
])
export default router;