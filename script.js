// Start

// DOM VARIABLES

const sliderThousandSeparator = document.querySelector("#thousand-sep");
const sliderDecimalSeparator = document.querySelector("#decimal-sep");

const deleteIcon = document.querySelector("#delete-icon");

const clearAll = document.querySelector("#clear-all");
const plusMinus = document.querySelector("#plus-minus");
const percent = document.querySelector("#percent");

const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const equal = document.querySelector("#equal");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");


// NON-DOM VARIABLES

let valueOne = inputNumbers[inputNumbers.length-2]
let valueTwo = inputNumbers[inputNumbers.length-1]
let latestOperator;
let inputNumbers = [];
let displayCalc = []
let result;
let decimalEntered = false;
let commaAsThousandSeparator = false;
let dotAsDecimalSeparator = false;


// SLIDER FEATURES



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