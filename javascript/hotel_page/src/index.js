import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'

import './style.css'
import { isContainer } from 'postcss-selector-parser';

let content = document.createElement('div');
content.setAttribute('id','content');

let title = document.createElement('div');
title.setAttribute('id','title');
title.textContent = "Twisted Cones";
content.appendChild(title);

let header = document.createElement('div');
header.setAttribute('id','header');
header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);

content.appendChild(header);

let middle = document.createElement('div');
middle.setAttribute('id','middle');
let screen = document.createElement('div');
write_home();
screen.setAttribute('id','middle-window');
middle.appendChild(screen);
content.appendChild(middle);

home.addEventListener('click',write_home);

function write_home(){
    screen.innerHTML = '';
    screen.style.cssText = "dispay:flex; flex-direction:column; box-sizing:border-box; padding:50px; ";
    let text1 = document.createElement('h1');
    text1.setAttribute('id', 'text1');
    text1.textContent = "The best Ice Cream chain around.";

    let text2 = document.createElement('h3');
    text2.setAttribute('id', 'text2');
    text2.textContent = "Ice Creams are personal. So create your own flavour and make your cone your own. The possibilites are limitless.";


    screen.appendChild(text1);
    screen.appendChild(text2);

}

menu.addEventListener('click', write_menu)

function write_menu(){
    screen.innerHTML = '';
    screen.style.cssText = "display: grid; box-sizing: border-box; grid-template: 1fr 1fr/ 1fr 1fr; gap:20px; padding:40px;";

    let card1 = document.createElement('div');
    card1.classList.add('card');
    card1.textContent = "Chocolate";
    card1.style.backgroundColor = "brown";
    card1.style.color = 'white';

    let card2 = document.createElement('div');
    card2.classList.add('card');
    card2.textContent = "Strawberry";
    card2.style.backgroundColor = "pink";
    card2.style.color = 'black';

    let card3 = document.createElement('div');
    card3.classList.add('card');
    card3.textContent = "Pista";
    card3.style.backgroundColor = "lightgreen";
    card3.style.color = 'black';

    let card4 = document.createElement('div');
    card4.classList.add('card');
    card4.textContent = "Black Currant";
    card4.style.backgroundColor = "gray";
    card4.style.color = 'white';

    screen.appendChild(card1);
    screen.appendChild(card2);
    screen.appendChild(card3);
    screen.appendChild(card4);

}

contact.addEventListener('click', write_contact)

function write_contact(){
    screen.innerHTML = '';
    screen.style.cssText = "";

    let c1 = document.createElement('div');
    let p11 = document.createElement('p');
    p11.textContent = "Rocky Bhai"
    p11.style.fontSize = "30px";

    let p12 = document.createElement('p');
    p12.textContent = "CEO of India";

    let p13 = document.createElement('p');
    p13.textContent = "rockyash@narachi.co.in";
    c1.appendChild(p11);
    c1.appendChild(p12);
    c1.appendChild(p13);

    screen.appendChild(c1);

    
eateElement('div');
    


}

document.body.appendChild(content);
