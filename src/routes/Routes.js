import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Bolg/Blog";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])