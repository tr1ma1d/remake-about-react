import React from 'react';
import { NavLink } from "react-router-dom";
import './css/header-style.css';
const Header = function(){
    

    return(
        <header className='top'>
            <div className='top-logotype_container'>
                <span className = 'top-logotype__text'>WithNikita</span>            
            </div>
            <div className='top-links'>
                <nav>
                    <ul>
                        <li className='top-menu'>
                            <NavLink to = "#" className='top-menu__link'>About</NavLink>
                            <NavLink to = "#" className='top-menu__link'>Serivces</NavLink>
                            <NavLink to = "#" className='top-menu__link'>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;