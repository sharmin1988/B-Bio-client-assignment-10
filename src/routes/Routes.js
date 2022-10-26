import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Bolg/Blog";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/Other/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Main from "../layout/Main/Main";
import Faq from "../pages/Other/faq/Faq";
import CourseDetails from "../pages/Courses/CourseDetails";
import CourseCheckOut from "../pages/Courses/CourseCheckOut";
import PrivateRoute from "./PrivateRoute";

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
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/courses/checkout/:id',
                loader: ({params}) => fetch(`http://localhost:5000/courses/checkout/${params.id}`),
                element: <PrivateRoute><CourseCheckOut></CourseCheckOut></PrivateRoute>
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