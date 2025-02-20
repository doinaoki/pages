
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Home from './page/Home';
import Programming from './page/Programming';
import Study from './page/Study';


export default function PageRoot(){
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/programming' element={<Programming />} />
                <Route exact path='/study' element={<Study />} />
            </Routes>
        </HashRouter>
    );
}