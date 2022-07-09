import React from "react";
import ReactDOM  from "react-dom";

import Header from "./components/Header";
import Paper from "./components/Paper"

import './styles/global.css'

const getPdf = () => {
    let targets = document.querySelectorAll('.print-hide');
    let paper = document.querySelector('#paper');
    targets.forEach((ele) => {ele.style.display = 'none'})
    paper.style.width = '80%';

    window.print()

    paper.style.width = '50%';
    targets.forEach((ele) => {ele.style.display = 'block'})
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div id='main'>
        < Header />
        < Paper/>
        <button className='print-hide' onClick={getPdf} >Download Pdf</button>
    </div>
)