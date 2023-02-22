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

const padDigits = document.querySelectorAll(".operand");


// NON-DOM VARIABLES

let valueOne;
let valueTwo;
let latestOperator;
let displayInput = "";
let inputNumbers = [];
let displayCalc = []
let result;
let decimalEntered = false;
let commaAsThousandSeparator = false;
let dotAsDecimalSeparator = false;
const displayMaxDigit = 13;
const numDigitsReduceFontSize = 8;
const fontSizeDisplayNormal = "3rem";
const fontSizeDisplayReduced = "2rem";


// ENABLE CHANGE IN USE OF DECIMAL SEPARATOR

let enableDecimalSeparator = () => {
    if (sliderDecimalSeparator.value === "1") {
        sliderDecimalSeparator.style.backgroundColor = "#17C150";
        decimal.textContent = ".";
        commaAsThousandSeparator = true;
        dotAsDecimalSeparator = true;
        if (decimalEntered === true) {
            displayInput = displayInput.replace(",", ".");
        }
        if (displayInput.length === 0) {
            inputDisplay.textContent = 0 + displayInput;
        } else {
            inputDisplay.textContent = displayInput;
        }
    } else {
        sliderDecimalSeparator.style.backgroundColor = "rgba(255, 255, 255, .3)";
        decimal.textContent = ",";
        commaAsThousandSeparator = false;
        dotAsDecimalSeparator = false;
        if (decimalEntered === true) {
            displayInput = displayInput.replace(".", ",");
        }
        if (displayInput.length === 0) {
            inputDisplay.textContent = 0 + displayInput;
        } else {
            inputDisplay.textContent = displayInput;
        }
    }
};

sliderDecimalSeparator.addEventListener("change" ,enableDecimalSeparator);


// POPULATE DISPLAY

let populateDisplay = (e) => {
    let target = e.target;
    displayInput += target.textContent;
    
    if (displayInput.startsWith(",") || displayInput.startsWith(".")) {  // Inserts leading zero if first input is "." or ","
        displayInput = "0" + displayInput;
    }
    
    if (displayInput.startsWith("0")) {             // Only one leading zero allowed
        zero.style.pointerEvents = "none";
    }

    if (displayInput.includes(",") || displayInput.includes(".")) {    // Only one decimal allowed
        decimal.style.pointerEvents = "none";
        decimalEntered = true;
    }

    if (displayInput.length > numDigitsReduceFontSize) {      // Shrinks fontsize in display with large number
        inputDisplay.style.fontSize = fontSizeDisplayReduced;
    }

    if (displayInput.length >= displayMaxDigit) {
        padDigits.forEach(button => {
            button.style.pointerEvents = "none";
        })
    }
    inputDisplay.textContent = displayInput;
};

let insertMinusInDisplay = () => {
    if (displayInput.startsWith("-")) {
        displayInput = displayInput.slice(1);
    } else {
        displayInput = "-" + displayInput;
    }
    inputDisplay.textContent = displayInput;
}

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

plusMinus.addEventListener("click", insertMinusInDisplay);


// DELETE DIGITS FROM DISPLAY

let deleteDigit = () => {
    if (displayInput.length > 0) {
        displayInput = displayInput.slice(0, -1);
    }

    if (displayInput.includes(",") || displayInput.includes(".")) {    // Only one decimal allowed
        decimal.style.pointerEvents = "none";
        decimalEntered = true;
    } else if (!displayInput.includes(",") || !displayInput.includes(".")) {
        decimal.style.pointerEvents = "auto";
        decimalEntered = false;
    }

    if (displayInput.length <= numDigitsReduceFontSize) {        // Increases fontsize in display when deleting down to certain number of digits
        inputDisplay.style.fontSize = fontSizeDisplayNormal;
    }

    if (displayInput.length < displayMaxDigit) {
        padDigits.forEach(button => {
            button.style.pointerEvents = "auto";
        })
    }

    if (displayInput.length === 0) {                    // Inserts zero in display when display string is empty
        inputDisplay.textContent = 0 + displayInput;
    } else {
        inputDisplay.textContent = displayInput;        // Else, shows content of display string
    }
};

deleteIcon.addEventListener("click", deleteDigit);



// CLEAR MEMORY AND RESET CALCULATOR

let clearMemory = () => {
    displayInput = "";
    inputDisplay.textContent = 0 + displayInput
    inputDisplay.style.fontSize = fontSizeDisplayNormal;
    decimalEntered = false;
    decimal.style.pointerEvents = "auto";
    valueOne;
    valueTwo;
    latestOperator;
    inputNumbers = [];
    displayCalc = [];
    result;   
};

clearAll.addEventListener("click", clearMemory);



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