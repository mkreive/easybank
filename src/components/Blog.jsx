import React from 'react';
import '../index.scss';

const Blog = function () {
    return (
        <div className='container'>
            <div className='blog'>
                <h2 className='heading--big'>Latest Articles</h2>
                <div className='article--blog'>
                    <img
                        className='article__photo'
                        src='https://res.cloudinary.com/kreiva/image/upload/v1663828095/EasyBank/image-currency_yw5rdk.jpg'
                        alt='bank cards icon'
                    />
                    <h3 className='heading--medium'>Online Banking</h3>
                    <div className='text'>
                        Our modern web and mobile aplication allow you to keep track of your finances whenever yuo are
                        in the world.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
