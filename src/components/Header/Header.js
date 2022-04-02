import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to fancy Routing</h1>
            <nav className='nav'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='posts'>Posts</CustomLink>
                <CustomLink to='friends'>Friends</CustomLink>
                <CustomLink to='about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;