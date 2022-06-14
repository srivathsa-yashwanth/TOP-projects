import { Player } from "./player";

let p1 =  Player();
let p2 = Player();

test(' available moves', () => {
    expect(p1.avlMoves.length).toBe(100);
    expect(p2.avlMoves.length).toBe(100);
})


test('attacking p2', () => {
    p2.gameboard.placeShip(1,1,3,'x')
    p2.attack(1,1);
    expect(p2.gameboard.board[1]).toEqual([0,3,1,1,0,0,0,0,0,0]);
})

test('moves made on p2', () => {
    expect(p2.madeMoves).toEqual(['1,1'])
})


test('randomly attacking p1', () => {
    let move = p1.randomAttack();
    expect(p1.gameboard.board[move[0]][move[1]]).toBe(2);
})