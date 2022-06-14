import { gameBoard } from "./gameboard";
import { Ship } from "./ship";


let game1 = gameBoard();


test("making the board", () => {
    expect(game1.board.length).toBe(10);
    expect(game1.board[0].length).toBe(10);
    expect(game1.board[9].length).toBe(10);
})

test('checking 2d array', () => {
    game1.board[4][4] = 1;
    expect(game1.board[4]).toEqual([0,0,0,0,1,0,0,0,0,0]);
})

test('placing a ship', ()=>{
    game1.placeShip(4,4,4,'x');
    expect(game1.board[4]).toEqual([0,0,0,0,1,1,1,1,0,0]);
})

test('placing ship vertically', ()=>{
    game1.placeShip(1,1,3,'y');
    let status = game1.board[1][1] && game1.board[2][1] && game1.board[3][1];
    expect(status).toBe(1);
})

test('placing ship out of bounds', ()=>{
    let flag = game1.placeShip(5,5,5,'x');
    expect(flag).toBe('ship overflow');
})

test('adding a ship', ()=>{
    expect(game1.ships['4,4'].body).toEqual([1,1,1,1]);
    expect(game1.ships['1,1'].body).toEqual([1,1,1]);
})

test('ship coors', ()=>{
    expect(game1.ships['1,1'].coors).toEqual(['1,1','2,1','3,1']);
    expect(game1.ships['4,4'].coors).toEqual(['4,4','4,5','4,6','4,7']);
})

test('attacking a ship', () => {
    game1.receiveAttack(4,6);
    expect(game1.board[4][6]).toEqual(3);
    expect(game1.ships['4,4'].body[2]).toEqual(0);
})

test('another attack for good measure', () => {
    game1.receiveAttack(1,1);
    expect(game1.ships['1,1'].body[0]).toEqual(0);
    expect(game1.ships['1,1'].body[2]).toEqual(1);
})

test('attack that has missed', () => {
    game1.receiveAttack(0,0);
    expect(game1.board[0][0]).toEqual(2);
    expect(game1.board[0][1]).toEqual(0);
    
})

test('status of ships', () => {
    expect(game1.allSunk()).toBe(false);
})