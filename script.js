// Start

// DOM VARIABLES

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
const operators = document.querySelectorAll(".operator");

const userMessage = document.querySelector(".user-message");


// NON-DOM VARIABLES

// Variables for calculations
let latestOperator;
let displayInput = "";
let inputNumbers = [];
let displayCalc = []
let valueOne;
let valueTwo;
let result;
let additionSymbol = addition.textContent;
let subtractionSymbol = subtraction.textContent;
let multiplicationSymbol = multiplication.textContent;
let divisionSymbol = division.textContent;
let equalSymbol = equal.textContent;

// Variables for displaying
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
            inputDisplay.textContent = "0" + displayInput;
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
            inputDisplay.textContent = "0" + displayInput;
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
    
    if (displayInput.startsWith("0,")) {            //  Zero allowed when trailing "0,"
        zero.style.pointerEvents = "auto";
    } else if (displayInput.startsWith("0")) {      // Only one leading zero allowed
        zero.style.pointerEvents = "none";
    }

    if (displayInput.includes(",") || displayInput.includes(".")) {    // Only one decimal allowed
        decimalEntered = true;
        decimal.style.pointerEvents = "none";
        console.log(decimalEntered);
    }

    if (displayInput.length > numDigitsReduceFontSize) {      // Shrinks fontsize in display with large number
        inputDisplay.style.fontSize = fontSizeDisplayReduced;
    }

    if (displayInput.length >= displayMaxDigit) {       // Disable input pad if display is full and throw user message
        padDigits.forEach(button => {
            button.style.pointerEvents = "none";
        })
        userMessage.textContent = "Maximum number of digits reached"
    }
    inputDisplay.textContent = displayInput;
    //displayInput = Number(displayInput);
    console.log(displayInput);
};

let insertMinusInDisplay = () => {
    if (displayInput.startsWith("-")) {
        displayInput = displayInput.slice(1);
    } else {
        displayInput = "-" + displayInput;
    }
    inputDisplay.textContent = displayInput;
};


padDigits.forEach(pad => {
    pad.addEventListener("click", populateDisplay)
})

plusMinus.addEventListener("click", insertMinusInDisplay);


// DELETE DIGITS FROM DISPLAY

let deleteDigit = () => {
    if (displayInput.length > 0) {                  // Remove right-most digit from display string
        displayInput = displayInput.slice(0, -1);
    }

    if (displayInput.length < displayMaxDigit) {
        padDigits.forEach(button => {
            button.style.pointerEvents = "auto";
        })
        userMessage.textContent = "";
    }

    if ((!displayInput.includes(",")) && (!displayInput.includes("."))) {    // Only one decimal allowed
        decimalEntered = false;
        decimal.style.pointerEvents = "auto"
    }

    if (decimalEntered === true) {
        decimal.style.pointerEvents = "none"
    }

    if (displayInput.length <= numDigitsReduceFontSize) {        // Increases fontsize in display when deleting down to certain number of digits
        inputDisplay.style.fontSize = fontSizeDisplayNormal;
    }

    if (displayInput.length === 0) {                    // Inserts zero in display when display string is empty
        inputDisplay.textContent = "0" + displayInput;
    } else {
        inputDisplay.textContent = displayInput;        // Else, shows content of display string
    }
};

deleteIcon.addEventListener("click", deleteDigit);



// CLEAR MEMORY AND RESET CALCULATOR

let clearMemory = () => {
    displayInput = "";
    inputDisplay.textContent = "0" + displayInput
    inputDisplay.style.fontSize = fontSizeDisplayNormal;
    decimalEntered = false;
    decimal.style.pointerEvents = "auto";
    latestOperator;
    inputNumbers = [];
    displayCalc = [];
    calculationDisplay.textContent = "0" + displayCalc;
    result;
    zero.style.pointerEvents = "auto";
};

clearAll.addEventListener("click", clearMemory);





// MATH OPERATIONS

let convertArrayToNumbers = () => {
}

let operate = (valueOne, valueTwo, operator) => {
    
    if (operator === additionSymbol) {
        latestOperator = additionSymbol;
        displayCalc.push(latestOperator);
        additionFunction(valueOne, valueTwo);

    } else if (operator === subtractionSymbol) {
        latestOperator = subtractionSymbol;
        displayCalc.push(latestOperator);
        subtractFunction(valueOne, valueTwo);

    } else if (operator === multiplicationSymbol) {
        latestOperator = multiplicationSymbol;
        displayCalc.push(latestOperator);
        multiplyFunction(valueOne, valueTwo);

    } else if (operator === divisionSymbol) {
        latestOperator = divisionSymbol;
        displayCalc.push(latestOperator);
        divideFunction(valueOne, valueTwo);

    } else if (operator === equalSymbol) {
        latestOperator = equalSymbol;
        displayCalc.push(latestOperator);
    }
};


let additionFunction = (a, b) => result = a + b // addition
let subtractFunction = (a, b) => result = a - b // subtraction
let multiplyFunction = (a, b) => result = a * b // multiplication
let divideFunction = (a, b) => result = a / b // division


operators.forEach(operator => {
    // operator.addEventListener("click", convertArrayToNumbers);
    operator.addEventListener("click", function () {operate(valueOne, valueTwo, operator.textContent)});
})








// End