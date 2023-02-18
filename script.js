// Start

let valueOne;
let valueTwo;
let operator;
let result = valueOne


// MATH OPERATIONS

let additionFunction = (valueOne, valueTwo) => valueOne + valueTwo // addition
let subtractFunction = (valueOne, valueTwo) => valueOne - valueTwo // subtraction
let multiplyFunction = (valueOne, valueTwo) => valueOne * valueTwo // multiplication
let divideFunction = (valueOne, valueTwo) => valueOne / valueTwo // division


let operate = (valueOne, valueTwo, operator) => {
    if (operator === "+") {
        additionFunction(valueOne, valueTwo);
    } else if (operator === "-") {
        subtractFunction(valueOne, valueTwo);
    } else if (operator === "*") {
        multiplyFunction(valueOne, valueTwo);
    } else if (operator === "/") {
        divideFunction(valueOne, valueTwo);
    }
}








// End