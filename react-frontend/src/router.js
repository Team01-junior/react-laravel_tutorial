import { createBrowserRouter } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";
import ProtectedRoute from "./components/ProtectedRoute"; // <- import it

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'signup', element: <Signup /> },
        ]
    },
    {
        path: '/app',
        element: <ProtectedRoute />, // <- protect all /app routes
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'users', element: <Users /> },
        ]
    },
    { path: '*', element: <NotFound /> }
]);

export default router;
