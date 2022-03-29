import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    const {id,name,username} = props.user

    const navigate = useNavigate()

    const showUserDetails = () => {
        const path = `/users/${id}`
        navigate(path)
    }
    return (
        <div>
            <h3>Name:{name}</h3>
            <button onClick={showUserDetails}>{username} id: {id}</button>
        </div>
    );
};

export default User;