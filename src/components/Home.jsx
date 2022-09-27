import React from 'react';
import '../index.scss';

const Home = function () {
    return (
        <div className='container'>
            <div className='home'>
                <div className='home__photo' />
                <div className='home__text'>
                    <h1 className='heading--biggest'>Next generation digital banking</h1>
                    <div className='text'>
                        Take your financial life online. Your Easybank account will be one-stop-shop for spending,
                        saving, budgeting, investing and much more.
                    </div>
                    <button className='btn btn--gradient'>Request Invite</button>
                </div>
                <div className='home__img'></div>
            </div>
        </div>
    );
};

export default Home;
