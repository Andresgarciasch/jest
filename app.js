const dollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 129.79;
    return valueInYen;
}

const euroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const yenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0061;
    return  valueInYen;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, euroToDollar, dollarToYen, yenToPound };
