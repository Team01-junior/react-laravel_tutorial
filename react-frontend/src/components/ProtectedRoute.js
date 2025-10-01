// src/components/ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function ProtectedRoute() {
    const { token } = useStateContext();

    // If no token, redirect to login
    if (!token) return <Navigate to="/login" replace />;

    // If token exists, render the child routes
    return <Outlet />;
}
