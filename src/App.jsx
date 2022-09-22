import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Topics from './components/Topics';

const App = function () {
    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route index element={<Topics />} />
                <Route path='/' element={<Topics />} />
            </Routes>
        </div>
    );
};

export default App;
