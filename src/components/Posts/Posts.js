import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Post.css'

const Posts = () => {
    const [posts,setPost] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[]);

    return (
        <div>
            <h1>All post : {posts.length}</h1>
            <div className="post">
            {
                posts.map(post=><Link 
                    to={`/posts/${post.id}`}
                    key={post.id}
                > {post.id} </Link>)
            }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;