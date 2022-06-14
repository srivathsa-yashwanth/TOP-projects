import './style.css'
import { Ship } from './ship';
import { gameBoard } from './gameboard';
import { Player } from './player';
import {drawBoards, attackCell, showWinner} from './dom';

let player1 = Player();
let player2 = Player();
let winner;

drawBoards();

// while (!player1.gameboard.allSunk() || !player1.gameboard.allSunk())
// {
//     player2.randomAttack();
//     player1.randomAttack();
// }

console.log(player1.gameboard.board)
console.log(player2.gameboard.board)



export {player1, player2}