
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from './page/Home';
import Programming from './page/Programming';
import Study from './page/Study';


export default function PageRoot(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/pages/' element={<Home />} />
                <Route path='/pages/programming' element={<Programming />} />
                <Route path='/pages/study' element={<Study />} />
            </Routes>
        </BrowserRouter>
    );
}