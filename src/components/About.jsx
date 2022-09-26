import React from 'react';
import '../index.scss';

const About = function () {
    return (
        <div className='container'>
            <div className='about'>
                <h2 className='heading--big'>Next generation digital banking</h2>
                <div className='text'>
                    We leverage Open Banking to turn your bank account into your finantial hub. Control your finances
                    like never before
                </div>
                <div className='about__container'>
                    <div className='article--icon'>
                        <img
                            className='article__about'
                            src='https://res.cloudinary.com/kreiva/image/upload/v1663828094/EasyBank/icon-online_gonzmd.svg'
                            alt='bank cards icon'
                        />
                        <h3 className='heading--medium'>Online Banking</h3>
                        <div className='text'>
                            Our modern web and mobile aplication allow you to keep track of your finances whenever yuo
                            are in the world.
                        </div>
                    </div>
                    <div className='article--icon'>
                        <img
                            className='article__about'
                            src='https://res.cloudinary.com/kreiva/image/upload/v1663828092/EasyBank/icon-budgeting_cfuakd.svg'
                            alt='mobile phone icon'
                        />
                        <h3 className='heading--medium'>Simple Budgeting</h3>
                        <div className='text'>
                            See exactly where your money goes each month. Receive notifications when your're close to
                            hitting your limits.
                        </div>
                    </div>
                    <div className='article--icon'>
                        <img
                            className='article__about'
                            src='https://res.cloudinary.com/kreiva/image/upload/v1663828096/EasyBank/icon-onboarding_t2lmqj.svg'
                            alt='onboard icon'
                        />
                        <h3 className='heading--medium'>Fast Onboarding</h3>
                        <div className='text'>
                            We don't do branches. Open your account in minutes online and start taking control of your
                            finances right away.
                        </div>
                    </div>
                    <div className='article--icon'>
                        <img
                            className='article__about'
                            src='https://res.cloudinary.com/kreiva/image/upload/v1663828092/EasyBank/icon-api_cktjoq.svg'
                            alt='chip icon'
                        />
                        <h3 className='heading--medium'>Open API</h3>
                        <div className='text'>
                            Managa your savings, investments, pension, and much more from one account. Tracking your
                            money has never been easier.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
