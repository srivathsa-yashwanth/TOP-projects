const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./script')

test('string -> String', ()=>{
    expect(capitalize('string')).toBe('String');
});

test('string -> gnirts', ()=>{
    expect(reverseString('string')).toBe('gnirts');
});

let calc = calculator();

test('2+5 -> 7', ()=>{
    expect(calc.add(2,5)).toBe(7);
});

test('9-8 -> 1', ()=>{
    expect(calc.sub(9,8)).toBe(1);
});

test('4*6 -> 24', ()=>{
    expect(calc.mul(4,6)).toBe(24);
});

test('8/4 -> 2', ()=>{
    expect(calc.div(8,4)).toBe(2);
});

test('defend the east wall of the castle -> efgfoe uif fbtu xbmm pg uif dbtumf', ()=>{
    expect(caesarCipher('defend the east wall of the castle',1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});


test('analyzing array', ()=>{
    expect(analyzeArray([1,8,3,4,2,6]).toString()).toBe({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      }.toString());
});