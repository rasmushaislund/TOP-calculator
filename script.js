// Start

// DOM VARIABLES

// const sliderThousandSeparator = document.querySelector("#thousand-sep");
const sliderDecimalSeparator = document.querySelector("#decimal-sep");

const deleteIcon = document.querySelector("#delete-icon");

const calculationDisplay = document.querySelector("#display-calc");
const inputDisplay = document.querySelector("#display-input");

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

// let valueOne = inputNumbers[inputNumbers.length-2]
// let valueTwo = inputNumbers[inputNumbers.length-1]
// let latestOperator;
let displayInput = "";
// let inputNumbers = [];
// let displayCalc = []
// let result;
let decimalEntered = false;
let commaAsThousandSeparator = false;
let dotAsDecimalSeparator = false;


// ENABLE SLIDER/RANGE FEATURES

// let enableThousandSeparator = () => {
//     if (sliderThousandSeparator.value === "1") {
//         sliderThousandSeparator.style.backgroundColor = "#17C150";
//     } else {
//         sliderThousandSeparator.style.backgroundColor = "rgba(255, 255, 255, .3)";
//     }
// };

// sliderThousandSeparator.addEventListener("change", enableThousandSeparator);

let enableDecimalSeparator = () => {
    if (sliderDecimalSeparator.value === "1") {
        sliderDecimalSeparator.style.backgroundColor = "#17C150";
        decimal.textContent = ".";
        if (decimalEntered === true) {
            displayInput = displayInput.replace(",", ".");
        }
        inputDisplay.textContent = displayInput;
        commaAsThousandSeparator = true;
        dotAsDecimalSeparator = true;
    } else {
        sliderDecimalSeparator.style.backgroundColor = "rgba(255, 255, 255, .3)";
        decimal.textContent = ",";
        if (decimalEntered === true) {
            displayInput = displayInput.replace(".", ",");
        }
        inputDisplay.textContent = displayInput;
        commaAsThousandSeparator = false;
        dotAsDecimalSeparator = false;
    }
};

sliderDecimalSeparator.addEventListener("change" ,enableDecimalSeparator);


// POPULATE DISPLAY

let populateDisplay = (e) => {
    let target = e.target;

    displayInput += target.textContent;
    console.log(displayInput);
    
    if (displayInput.startsWith("," || ".")) {  // Inserts leading zero if first input is "." or ","
        displayInput = "0" + displayInput;
    }
    
    if (displayInput.startsWith("0")) {         // Only one leading zero allowed
        zero.style.pointerEvents = "none";
    }

    if (displayInput.includes("," || ".")) {    // Only one decimal allowed
        decimal.style.pointerEvents = "none";
    }

    if (displayInput.length > 8) {
        inputDisplay.style.fontSize = "1.5rem";
    }


    
    inputDisplay.textContent = displayInput;

    
};

one.addEventListener("click", populateDisplay);
two.addEventListener("click", populateDisplay);
three.addEventListener("click", populateDisplay);
four.addEventListener("click", populateDisplay);
five.addEventListener("click", populateDisplay);
six.addEventListener("click", populateDisplay);
seven.addEventListener("click", populateDisplay);
eight.addEventListener("click", populateDisplay);
nine.addEventListener("click", populateDisplay);
zero.addEventListener("click", populateDisplay);
decimal.addEventListener("click", populateDisplay);


// DELETE DIGITS FROM DISPLAY


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