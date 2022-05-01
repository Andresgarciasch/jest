// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One dollar should be 129.79 yen", function(){
    const { dollarToYen } = require('./app.js')

    const yen = dollarToYen(3.5)

    const expected = 3.5 * 129.79; 
    
     expect(dollarToYen(3.5)).toBe(454.265); 
})

test("One euro should be 1.206 dollars", function(){
    const { euroToDollar } = require('./app.js')

    const dollars = euroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(euroToDollar(3.5)).toBe(4.2); 
})

test("One yen should be 0.0061 pound", function(){
    const { yenToPound } = require('./app.js')

    const pound = yenToPound(10)

    const expected = 10 * 0.0061; 
    
     expect(yenToPound(10)).toBe(0.061); 
})