let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendCharacter(char) {
    currentInput += char;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}
function back(){
    let  apagarUm = (display.value.substring(0, display.value.length-1))
    display.value = apagarUm
    console.log("apagarUm")
}

function calculateResult() {
    let result = '';
    switch (operator) {
        case '+':
            result = String(parseFloat(firstOperand) + parseFloat(currentInput));
            break;
        case '-':
            result = String(parseFloat(firstOperand) - parseFloat(currentInput));
            break;
        case '*':
            result = String(parseFloat(firstOperand) * parseFloat(currentInput));
            break;
        case '/':
            result = String(parseFloat(firstOperand) / parseFloat(currentInput));
            break;
    }
    currentInput = result;
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}