import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]) 
    return (
        <div>
            <h1>All Friends</h1>
            {
                users.map(user=><Friend key={user.id} friend={user}></Friend>)
            }
        </div>
    );
};

export default Friends;