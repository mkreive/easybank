import React from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';

const Header = function () {
    const linkStyle = {
        textDecoration: 'none',
    };
    return (
        <header className='header'>
            <div className='header__logo'>
                <img
                    className='header__logo--icon'
                    src='https://res.cloudinary.com/kreiva/image/upload/v1663828096/EasyBank/logo_aejzhq.svg'
                    alt='logo'
                />
            </div>

            <nav className='header__nav'>
                <div className='nav'>
                    <Link to='/home' style={linkStyle} className='nav__link'>
                        Home
                    </Link>
                    <Link to='/about' style={linkStyle} className='nav__link'>
                        About
                    </Link>
                    <Link to='/contact' style={linkStyle} className='nav__link'>
                        Contact
                    </Link>
                    <Link to='/blog' style={linkStyle} className='nav__link'>
                        Blog
                    </Link>
                    <Link to='/careers' style={linkStyle} className='nav__link'>
                        Careers
                    </Link>
                </div>
            </nav>

            <div className='header__btns'>
                <button className='btn btn--gradient'>Request Invite</button>
                <button className='btn btn--gradient'>Login</button>
            </div>
        </header>
    );
};

export default Header;
