

function random(n)
{
    return Math.floor(Math.random()*n);
}

function addColor(event)
{
    event.target.style.backgroundColor = getColor(boolini);
    
}

function started(event)
{
    event.target.style.backgroundColor = getColor(boolini);
    cells.forEach((cell)=>cell.addEventListener('mouseenter',addColor));
    
}

function stopped(event)
{
    cells.forEach((cell) => cell.removeEventListener('mouseenter',addColor));
}

function clearAll(event)
{
    cells.forEach((cell) => cell.style.backgroundColor = 'white')
}



function setSize(event)
{
    side = event.target.value;  

    while (grid.firstChild)
    {
        grid.removeChild(grid.firstChild);
    }
    
    for (let i=0; i<side*side; i++)
    {
        newDiv = document.createElement('div');
        newDiv.classList.add("cell");
        newDiv.setAttribute('draggable','false');
        newDiv.style.cssText = `height: ${700/side}px; width:${700/side}px`;

        const r1 = random(256);
        const r2 = random(256);
        const r3 = random(256);
        //newDiv.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
        
        grid.appendChild(newDiv);
    }

    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => cell.addEventListener('mousedown',started));
    cells.forEach((cell)=>cell.addEventListener('mouseup',stopped));

    cells.forEach((cell)=> cell.addEventListener('dragstart', (e) => { e.preventDefault() }))
    cells.forEach((cell)=> cell.addEventListener('drop', (e) => { e.preventDefault() }))

}

function getColor(flag)
{
    if (flag)
    {
        const r1 = random(256);
        const r2 = random(256);
        const r3 = random(256);
        return `rgb(${r1},${r2},${r3})`;
    }
    else
    {
        return 'black';    
    }
}

let side;
let newDiv;
let boolini = false;



grid = document.querySelector('#grids');

for (let i=0; i<32*32; i++)
{
    newDiv = document.createElement('div');
    newDiv.classList.add("cell");
    newDiv.setAttribute('draggable','false');

    const r1 = random(256);
    const r2 = random(256);
    const r3 = random(256);
    //newDiv.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    
    grid.appendChild(newDiv);
}


function rgbify(event)
{
    
    if (event.target.value == 'BnW')
    {
        boolini = false;
        event.target.value = 'RGB';
        event.target.textContent = 'RGB';
    }
    else if (event.target.value == 'RGB')
    {
        boolini = true;  
        event.target.value = 'BnW';
        event.target.textContent = 'BnW';
    }
}




cells = document.querySelectorAll('.cell');
cells.forEach((cell) => cell.addEventListener('mousedown',started));
cells.forEach((cell)=>cell.addEventListener('mouseup',stopped));

cells.forEach((cell)=> cell.addEventListener('dragstart', (e) => { e.preventDefault() }))
cells.forEach((cell)=> cell.addEventListener('drop', (e) => { e.preventDefault() }))

size = document.querySelector('#size');
size.addEventListener('change',setSize);

clr = document.querySelector('#clr');
clr.addEventListener('click',clearAll);

rgb = document.querySelector('#rgb');
rgb.addEventListener('click',rgbify);






