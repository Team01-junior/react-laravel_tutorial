import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.js";
import Signup from "./views/Signup.js";
import Users from "./views/Users.js";
import NotFound from "./views/NotFound.js";
import Defaultlayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";
import Guestlayout from "./components/GuestLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Defaultlayout />,
        children:[

            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
        ]
    },
    {
        path: '/',
        element: <Guestlayout />,
        children:[
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },

    {
        path: '*',
        element: <NotFound />
    }

]);

export default router;
