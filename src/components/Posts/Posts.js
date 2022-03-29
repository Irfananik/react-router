import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState({})

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h2>Here is all facebook posts:{posts.length}</h2>
            {
               
            }
        </div>
    );
};

export default Posts;