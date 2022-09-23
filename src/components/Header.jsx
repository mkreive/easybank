import React from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';

const Header = function () {
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
                <ul className='nav'>
                    <Link to={'/home'} style={{ textDecoration: 'none' }}>
                        <li className='nav__link'>Home</li>
                    </Link>
                    <Link to={'/about'} style={{ textDecoration: 'none' }}>
                        <li className='nav__link'>About</li>
                    </Link>
                    <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                        <li className='nav__link'>Contact</li>
                    </Link>
                    <Link to={'/blog'} style={{ textDecoration: 'none' }}>
                        <li className='nav__link'>Blog</li>
                    </Link>
                    <Link to={'/careers'} style={{ textDecoration: 'none' }}>
                        <li className='nav__link'>Careers</li>
                    </Link>
                </ul>
            </nav>

            <div className='header__btns'>
                <button className='btn btn--gradient'>Request Invite</button>
                <button className='btn btn--gradient'>Login</button>
            </div>
        </header>
    );
};

export default Header;
