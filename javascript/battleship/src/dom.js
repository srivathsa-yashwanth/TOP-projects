import './style.css'
import { player1,player2} from'./index'

const drawBoards = () => {
    let screen = document.querySelector('#screen')
    let game1 = document.createElement('div');
    let game2 = document.createElement('div');
    game1.setAttribute('id','board1');
    game1.classList.add('board');

    game2.setAttribute('id','board2');
    game2.classList.add('board');

    for (let i = 0; i<10; i++){
        for (let j = 0; j<10; j++){
        
            let cell1 = document.createElement('div');
            cell1.setAttribute('data-coor',`${i},${j}`);
            cell1.addEventListener('click',attackCell);
            cell1.classList.add('cell');
            cell1.classList.add('board1');
            game1.appendChild(cell1);
            
            let cell2 = document.createElement('div');
            cell2.setAttribute('data-coor',`${i},${j}`);
            cell2.addEventListener('click',attackCell);
            cell2.classList.add('cell');
            cell2.classList.add('board2');
            game2.appendChild(cell2);

        }
    }

    screen.appendChild(game1)
    screen.appendChild(game2)
}

function attackCell(event){

    let cell = event.target;
    let coors = cell.getAttribute('data-coor');
    let x = Number(coors[0]);
    let y = Number(coors[2]);
    let outcome;

    if (cell.classList.contains('board1'))
    {
        outcome = player1.attack(x,y);
    }
    else if (cell.classList.contains('board2'))
    {
        outcome = player2.attack(x,y);
    }

    if (outcome == 'hit'){
        cell.classList.add('hit');
    }
    else if (outcome == 'miss') {
        cell.classList.add('miss');
    }

    if (player1.gameboard.allSunk() || player2.gameboard.allSunk() ){
        declareWinner();
    };

    cell.removeEventListener('click',attackCell)

};

const showWinner = (name) => {
    let out = document.createElement('div');
    let message = document.createElement('h2');
    message.textContent = `The winner is ${name}`;
    let closer = document.createElement('button');
    closer.textContent = 'x';
    closer.onclick = (event) => {event.target.parentElement.style.display = 'none'};
    out.appendChild(message);
    out.appendChild(closer);

    return out;
}

function declareWinner() {
let winner;
if (player1.gameboard.allSunk()) winner = 'player2';
if (player2.gameboard.allSunk()) winner = 'player1';
let winnerWin = showWinner(winner);
document.body.appendChild(winnerWin);}

export {drawBoards, attackCell, showWinner}