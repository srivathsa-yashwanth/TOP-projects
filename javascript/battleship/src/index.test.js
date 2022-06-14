
test('testing jest', ()=>{
    const mock = jest.fn(()=> 10);
    expect(mock()).toBe(10);
})