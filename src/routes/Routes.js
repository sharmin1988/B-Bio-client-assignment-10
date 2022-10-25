import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Bolg/Blog";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/Other/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Main from "../layout/Main/Main";
import Faq from "../pages/Other/faq/Faq";

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
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    },
])