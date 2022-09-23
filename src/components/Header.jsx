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
                    <li component={Link} to={'/home'} className='nav__link'>
                        Home
                    </li>
                    <li component={Link} to={'/about'} className='nav__link'>
                        About
                    </li>
                    <li component={Link} to={'/contact'} className='nav__link'>
                        Contact
                    </li>
                    <li component={Link} to={'/blog'} className='nav__link'>
                        Blog
                    </li>
                    <li component={Link} to={'/careers'} className='nav__link'>
                        Careers
                    </li>
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
