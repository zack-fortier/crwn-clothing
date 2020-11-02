import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

// Header for entire website
const Header = () => (
    <div className='header'>
        {/* Crown Logo */}
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        {/* Shop and Contact Buttons */}
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;