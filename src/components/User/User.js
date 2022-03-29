import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = (props) => {
    const {id,name,username} = props.user

    const navigate = useNavigate()

    const showUserDetails = () => {
        const path = `/user/${id}`
        navigate(path)
    }
    return (
        <div>
            <h3>Name:{name}</h3>
            <Link to={`/user/${id}`}>Click here for details</Link>
            <button onClick={showUserDetails}>{username} id: {id}</button>
        </div>
    );
};

export default User;