import React from 'react';
import { Routes, Route, HashRouter} from 'react-router-dom'

import Home from './components/Home'
import Catalog from './components/Catalog'

const RouteSwitch = () => {


    return (
        <HashRouter>
            <Routes>
                <Route path='/'  element={<Home/>} />
                <Route path='/catalog' element={<Catalog/>} />
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch