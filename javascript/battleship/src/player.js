import { gameBoard } from "./gameboard";

const Player = () => {

    let name = '';
    let gameboard = gameBoard();
    let madeMoves = [];
    let avlMoves = [];

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            avlMoves.push(`${i},${j}`);
        }
    }

    gameboard.placeShip(2,3,4,'x');
    gameboard.placeShip(6,6,3,'x');
    gameboard.placeShip(1,1,3,'y');
    gameboard.placeShip(4,5,2,'x');
    gameboard.placeShip(5,3,4,'y');

    // console.log(gameboard.board)

    const randomAttack = ()=>{
        let rand = Math.floor(Math.random() * avlMoves.length);
        let move = avlMoves.splice(rand,1);
        madeMoves.push(move[0]);
        let x = Number(move[0][0])
        let y = Number(move[0][2])
        return gameboard.receiveAttack(x,y);
    }

    const attack = (x,y) => {
        let move = `${x},${y}`;
        let index = avlMoves.indexOf(move);
        avlMoves.splice(index,1);
        madeMoves.push(move);
        return gameboard.receiveAttack(x,y);
    }


    return {name, gameboard, avlMoves, madeMoves, randomAttack, attack}
}

export {Player};