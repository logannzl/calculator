const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display');
const btnClear = document.querySelector('.clear');
const btnDelete = document.querySelector('.delete');
const btnEquals = document.querySelector('.equals');
const btnDecimal = document.querySelector('.decimal');
let displayValue = '';
let x = '';
let y = '';
let operatorType = '';
let oldOperator = '';
let answer = '';

btnDecimal.addEventListener('click', ()=>{
    if (display.textContent.includes('.')){
    }
    else{
        displayValue += btnDecimal.textContent;
        display.textContent = displayValue;
    }
})

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
    y = parseFloat(displayValue);
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
        if (answer % 1 !== 0){
            answer = parseFloat(answer).toFixed(2);
        }
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
        if (display.textContent == answer){
            return;
        }
        console.log('this');
        y = parseFloat(displayValue)
        answer = operate(oldOperator, x, y);
        if (answer % 1 !== 0){
            answer = parseFloat(answer).toFixed(2);
        }
        oldOperator = operatorType;
        display.textContent = answer;
        displayValue = '';
        x = answer;
        y = '';
    }
    else {
        console.log('no way');
        displayValue = display.textContent;
        x = parseFloat(displayValue);
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
