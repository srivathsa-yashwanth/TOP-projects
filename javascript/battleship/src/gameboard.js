import { Ship } from "./ship";

const gameBoard = function(){
    let board = [];
    let ships = {};
    for (let i = 0; i<10; i++)
    {
        let row = [];
        for (let j = 0; j<10; j++)
        {
            row.push(0);
        }
        board.push(row);
    }

    const addShip = (x, y, length, spots)=>{
        let ship = Ship(length);
        ship.coors = spots;
        ships[`${x},${y}`] = ship;
        // console.log(ships)
    }

    const placeShip = (x,y,length,direction) => {

        let coors = [];
        if (x+length >= 10 || y+length >= 10){
            return 'ship overflow';
        }

        if (direction == 'x'){
            for (let i=0; i<length; i++)
            {
                board[x][y+i] = 1;
                coors.push(`${x},${y+i}`);
            }
        }
        else{
            for (let i=0; i<length; i++)
            {
                board[x+i][y] = 1;
                coors.push(`${x+i},${y}`);
            }
        }

        addShip(x,y,length, coors);
    }

    const receiveAttack = (x,y) => {

        if (board[x][y] == 0){
            board[x][y] = 2;
            return 'miss';

        }
        if (board[x][y] == 1) {
            let {ship, offset} = getShip(x,y);
            ship.hit(offset);
            board[x][y] = 3;
            return 'hit';
        }
    }

    const getShip = (x,y)=>{
        const key = `${x},${y}`;

        let shipKeys = [];
        for (let i in ships){ shipKeys.push(i)};
        for (let j of shipKeys){
            let ship = ships[j];
            if (ship.coors.includes(key))
            {
                let offset = calcOffset(ship.coors[0], key);
                return {ship, offset};
            }
        }
        
    }

    const calcOffset = (s1,s2) => {
        let a,b,c,d;
        a = Number(s1[0]);
        b = Number(s1[2]);
        c = Number(s2[0]);
        d = Number(s2[2]);

        return Math.abs(a+b-c-d);
    }

    const allSunk = ()=>{
        for (let i of board){
            for (let j of i){
                if (j == 1)
                {
                    return false;
                }
            }
        }
        return true;
    }

    return {board, ships, placeShip, receiveAttack, allSunk }


};

export {gameBoard}