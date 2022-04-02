import React from 'react';
import "./Friend.css";
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,id} = props.friend;
    // const {street,city} = props.friend.address;

    const navigate = useNavigate();
    
    const friendDetails = () => {
        const path = `/friend/${id}`;
        navigate(path)
    }

    return (
        <div className='body'>
            <h2>Name:{name}</h2>
            <Link to={'/friend/'+id}>Show details</Link> <br />
            <button onClick={()=>friendDetails()}>Details</button>
        </div>
    );
};

export default Friend;