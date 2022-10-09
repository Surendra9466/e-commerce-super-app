import React, { useState } from 'react'
import siteLogo from '../../assets/site-logo.svg'
import './navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import MenuItem from './MenuItem'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className='navbar-container-wrapper bg-primary px-4'>
                <div className='navbar-container flex justify-between items-center py-5'>
                    <div className='logo'>
                        <Link to='/'>
                            <img className='w-full h-full' src={siteLogo} alt="logo" />
                        </Link>
                    </div>
                    <div className='hidden lg:block'>
                        <MenuItem isMobileMenu={false} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                    </div>
                    <div className='flex'>
                        <div className='shoppingCart relative mr-5 cursor-pointer'>
                            <ShoppingCartIcon sx={{ fontSize: 25, color: '#AB7A5F' }} />
                            <span className='cart-size absolute rounded-full bg-accent p-1 text-xs flex items-center justify-center font-poppins font-semibold'>10</span>
                        </div>
                        <div className='hamburger-menu cursor-pointer lg:hidden' onClick={toggleMenu}>
                            {isMenuOpen ? <CloseIcon sx={{ fontSize: 25, color: '#AB7A5F' }} /> : <MenuIcon sx={{ fontSize: 25, color: '#AB7A5F' }} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <MenuItem isMobileMenu={true} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>

        </>
    )
}

export default Navbar;