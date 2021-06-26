
import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import Participants from "./Participants";

const UserEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Participants users={users}/>
        </>
    )
}

export default UserEffectAPI