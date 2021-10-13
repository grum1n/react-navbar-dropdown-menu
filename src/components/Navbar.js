import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar () {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Grumin
                </Link>
                <div className='manu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    )
}


export default Navbar;