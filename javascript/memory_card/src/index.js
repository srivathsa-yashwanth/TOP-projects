import React from 'react'
import ReactDOM  from 'react-dom'

import Header from './components/Header'
import Screen from './components/Screen'

import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div id='main'>
        <Header />
        <Screen />
    </div>
)