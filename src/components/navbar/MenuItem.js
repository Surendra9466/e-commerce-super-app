import React from 'react'
import { Link } from "react-router-dom";


export default function MenuItem({isMenuOpen, toggleMenu, isMobileMenu}) {
    
    return (
        <div className={`${isMobileMenu ? 'navbar_mobile z-10' : 'navbar_desktop'} ${isMenuOpen ? 'active' : ''}`} >
            <nav>
                <ul className='list_wrapper' onClick={isMobileMenu ? toggleMenu : undefined}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>
        </div>
    )
}
