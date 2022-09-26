import React from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';

const Footer = function () {
    return (
        <div className='container'>
            <div className='footer'>
                <div className='footer__logo'>
                    <img
                        className='header__logo--icon'
                        src='https://res.cloudinary.com/kreiva/image/upload/v1663828096/EasyBank/logo_aejzhq.svg'
                        alt='logo'
                    />
                    <div className='footer__logo--icons'>
                        <img
                            src='https://res.cloudinary.com/kreiva/image/upload/v1663828093/EasyBank/icon-facebook_mhuscn.svg'
                            alt='facebook icon'
                        />
                        <img
                            src='https://res.cloudinary.com/kreiva/image/upload/v1663828095/EasyBank/icon-youtube_xar7av.svg'
                            alt='youtube icon'
                        />
                        <img
                            src='https://res.cloudinary.com/kreiva/image/upload/v1663828095/EasyBank/icon-twitter_cxgyw5.svg'
                            alt='twitter icon'
                        />
                        <img
                            src='https://res.cloudinary.com/kreiva/image/upload/v1663828094/EasyBank/icon-pinterest_ppj6jl.svg'
                            alt='pinterest icon'
                        />
                        <img
                            src='https://res.cloudinary.com/kreiva/image/upload/v1663828094/EasyBank/icon-instagram_v4aczb.svg'
                            alt='instagram icon'
                        />
                    </div>
                </div>
                <div className='footer__nav'>
                    <ul className='nav'>
                        <Link to={'/about'} style={{ textDecoration: 'none' }}>
                            <li className='nav__link'>About Us</li>
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
                        <Link to={'/support'} style={{ textDecoration: 'none' }}>
                            <li className='nav__link'>Support</li>
                        </Link>
                        <Link to={'/privacy'} style={{ textDecoration: 'none' }}>
                            <li className='nav__link'>Privacy Policy</li>
                        </Link>
                    </ul>
                </div>
                <div className='footer__btn'>
                    <button className='btn btn--gradient'>Request Invite</button>
                    <span className='text'>CEasybank. All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
