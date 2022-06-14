import {Ship} from './ship';

let s1 = Ship(5)
test('testing ship body',()=>{
    expect(s1.body).toEqual([1,1,1,1,1]);
});

test('testing hits on ship', () => {
    s1.hit(3);
    expect(s1.body).toEqual([1,1,1,0,1]);
    expect(s1.isSunk()).toBe(false);
});

test('testing sinking of ship', ()=>{
    s1.hit(0);
    s1.hit(1);
    s1.hit(2);
    s1.hit(4);
    expect(s1.body).toEqual([0,0,0,0,0]);
    expect(s1.isSunk()).toEqual(true);
})