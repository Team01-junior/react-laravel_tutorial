import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";

export default function DefaultLayout() {
    const { user, token, setUser, setToken } = useStateContext();

    // fetch user data when token exists
    useEffect(() => {
        if (token) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    setUser(data);
                })
                .catch(() => {
                    // if token expired or invalid, clear and redirect
                    setUser(null);
                    setToken(null);
                });
        }
    }, [token, setUser, setToken]);

    // logout function
    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post('/logout') // Laravel API logout route
            .then(() => {
                setUser(null);
                setToken(null);
            })
            .catch(() => {
                // even if backend fails, clear client session
                setUser(null);
                setToken(null);
            });
    };

    // redirect if no token
    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/app/dashboard">Dashboard</Link>
                <Link to="/app/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>
                        {user?.name}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
