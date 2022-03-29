import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className="text-primary mt-5">
            <h1>Learn About React Router</h1>
            <CustomLink className=" me-3" to="/">Home</CustomLink>
            <CustomLink className=" me-3" to="/users">Users</CustomLink>
            <CustomLink className=" me-3" to="/about">About</CustomLink>
            <CustomLink className=" me-3" to="/contact">Contact</CustomLink>
        </div>
    );
};

export default Header;