import React, {useEffect, useState} from "react";
import axiosClient from "../axios-client";

export default function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getUsers();
    }, []);

    const getUsers = () => {
        setLoading(true);
        axiosClient.get('/users')
            .then(({data})=>{
                setLoading(false);
                setUsers(data);   // save users in state
                console.log(data);
            })
            .catch(() =>{
                setLoading(false);
            });
    }

    return (
        <div>
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            {!loading && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name} ({user.email})</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
