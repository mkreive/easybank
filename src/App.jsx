import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Careers from './components/Careers';
import Footer from './components/Footer';

const App = function () {
    return (
        <div className='app'>
            <Header />
            <Home />
            <About />
            <Blog />
            <Footer />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/careers' element={<Careers />} />
            </Routes>
        </div>
    );
};

export default App;
