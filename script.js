// Global variables
 let displayValue = '0';
 let firstVal = '';
 let secVal = '';
 let operator = '';

// functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

// update display
const displayUpdate = () => {
const display = document.querySelector(".display");
display.innerText = displayValue;
};

// clear memory(reset)

// store variables
