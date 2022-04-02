import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();

    const [friend,setFriend] = useState({});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[friendId])

    return (
        <div>
            <h1>Friend details in this pages</h1>
            <h1>Name: {friend.name}</h1>
            <h2>Email: {friend.email}</h2>
            <h3>Address:Street: {friend.address?.street}, Suite {friend.address?.suite}, City: {friend.address?.city}</h3>

        </div>
    );
};

export default FriendDetail;