import {createBrowserRouter, Navigate} from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound/>
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [{
            path: '/',
            element: <Navigate to="/users"/>
        },
            {
                path: '/dashboard',
                element: <Dashboard/>
        }, {
                path: '/users',
                element: <Users/>
        },]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <Signup/>
            },
        ]
    }
])

export default router;