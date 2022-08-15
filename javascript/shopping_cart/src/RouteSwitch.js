import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Catalog from './components/Catalog'
import AboutUs from './components/AboutUs'
import Cart from './components/Cart'

const RouteSwitch = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/catalog' element={<Catalog/>} />
                <Route path='/about' element={<AboutUs/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch