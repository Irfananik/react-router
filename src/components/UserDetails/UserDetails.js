import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams()

    const [ user, setUser ] = useState({})

    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div>
            <h2>This is user details...................{userId}.........................!</h2>
            <h3>Name: {user.name}</h3>
            <h4>Email: {user.email}</h4>
            <h5>Address: {user.address?.city}</h5>
            <h5>{user.address?.geo?.lat}</h5>
            <h5>{user.address?.geo?.lng}</h5>
        </div>
    );
};

export default UserDetails;