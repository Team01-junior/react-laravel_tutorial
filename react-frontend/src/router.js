import {createBrowserRouter, Navigate} from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import UserForm from "./views/UserForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            { path: '/', element: <Navigate to="/login" replace /> },
            { path: 'login', element: <Login /> },
            { path: 'signup', element: <Signup /> },
        ]
    },
    {
        path: '/app',
        element: <DefaultLayout />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'users', element: <Users /> },
            { path: 'users/new', element: <UserForm key="userCreate" /> },
            { path: 'users/:id', element: <UserForm key="userUpdate" /> },
        ]
    },
    { path: '*', element: <NotFound /> }
]);

export default router;