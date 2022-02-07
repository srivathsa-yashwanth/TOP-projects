grid = document.querySelector('#grids');

let newDiv;
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

function random(n)
{
    return Math.floor(Math.random()*n);
}

function addColor(event)
{
    event.target.style.backgroundColor = 'black';
    
}

function started(event)
{
    event.target.style.backgroundColor = 'black';
    cells.forEach((cell)=>cell.addEventListener('mouseenter',addColor));
    
}

function stopped(event)
{
    cells.forEach((cell) => cell.removeEventListener('mouseenter',addColor));
}

cells = document.querySelectorAll('.cell');
cells.forEach((cell) => cell.addEventListener('mousedown',started));
cells.forEach((cell)=>cell.addEventListener('mouseup',stopped));

cells.forEach((cell)=> cell.addEventListener('dragstart', (e) => { e.preventDefault() }))
cells.forEach((cell)=> cell.addEventListener('drop', (e) => { e.preventDefault() }))

// features

