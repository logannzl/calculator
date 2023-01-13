const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display');
const btnClear = document.querySelector('.clear');
const btnDelete = document.querySelector('.delete');
const btnEquals = document.querySelector('.equals');
let displayValue = '';
let x = '';
let y = '';
let operatorType = '';
let oldOperator = '';
let answer = '';

numbers.forEach(number =>{
    number.addEventListener('click', ()=>{
        displayValue += number.textContent;
        display.textContent = displayValue; 
    });   
});

operators.forEach(operator =>{
    operator.addEventListener('click', ()=>{
        operatorType = operator.textContent;
        action(); 
    })
})

btnEquals.addEventListener('click', ()=>{
    y = parseInt(displayValue);
    if (operatorType == '/' && y == 0){
        alert("Obviously the answer will be 0");
        displayValue = '';
        x = '';
        y = '';
        operatorType = '';
        display.textContent = '';
    }
    else{
        answer = operate(operatorType, x, y);
        display.textContent = answer;
        displayValue = '';
        x = answer;
        y = '';
    }

})
btnDelete.addEventListener('click', ()=>{
    displayValue = displayValue.slice(0,displayValue.length - 1);
    display.textContent = displayValue;
})
btnClear.addEventListener('click', ()=>{
    displayValue = '';
    x = '';
    y = '';
    operatorType = '';
    display.textContent = '';
})

function action(){
    if (x !== '' && y == ''){
        console.log('this');
        y = parseInt(displayValue)
        answer = operate(oldOperator, x, y);
        oldOperator = operatorType;
        display.textContent = answer;
        displayValue = '';
        x = answer;
        y = '';
    }
    else {
        console.log('no way');
        displayValue = display.textContent;
        x = parseInt(displayValue);
        oldOperator = operatorType;
        displayValue = '';

    }
}

function add(num1, num2){
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2){
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

function divide(num1, num2){
    let result = num1 / num2;
    return result;
}

function operate(operatorType, num1, num2){
    let result = 0;
    if (operatorType === '/'){
        result = divide(num1, num2);
    }
    else if (operatorType === '*'){
        result = multiply(num1, num2);
    }
    else if (operatorType === '-'){
        result = subtract(num1, num2);
    }
    else if (operatorType === '+'){
        result = add(num1, num2);
    }
    return result;
    
}
