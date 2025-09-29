import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login.js";
import Signup from "./views/Signup.js";
import Users from "./views/Users.js";
import NotFound from "./views/NotFound.js";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '*',
        element: <NotFound />
    }

]);

export default router;
