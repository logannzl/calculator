const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnAdd = document.getElementById('btnAdd');
const btnSubtract = document.getElementById('btnSubtract');
const btnMultiply = document.getElementById('btnMultiply');
const btnDivide = document.getElementById('btnDivide');
let display = document.querySelector('.display');
const btnClear = document.querySelector('.clear');
const btnDelete = document.querySelector('.delete');
const btnEquals = document.querySelector('.equals');
let displayValue = '';
let x;
let y;
let operator;
btn0.addEventListener('click', ()=>{
    displayValue += btn0.textContent;
    display.textContent = displayValue;
});
btn1.addEventListener('click', ()=>{
    displayValue += btn1.textContent;
    display.textContent = displayValue;
});
btn2.addEventListener('click', ()=>{
    displayValue += btn2.textContent;
    display.textContent = displayValue;
});
btn3.addEventListener('click', ()=>{
    displayValue += btn3.textContent;
    display.textContent = displayValue;
});
btn4.addEventListener('click', ()=>{
    displayValue += btn4.textContent;
    display.textContent = displayValue;
});
btn5.addEventListener('click', ()=>{
    displayValue += btn5.textContent;
    display.textContent = displayValue;
});
btn6.addEventListener('click', ()=>{
    displayValue += btn6.textContent;
    display.textContent = displayValue;
});
btn7.addEventListener('click', ()=>{
    displayValue += btn7.textContent;
    display.textContent = displayValue;
});
btn8.addEventListener('click', ()=>{
    displayValue += btn8.textContent;
    display.textContent = displayValue;
});
btn9.addEventListener('click', ()=>{
    displayValue += btn9.textContent;
    display.textContent = displayValue;
});
btnAdd.addEventListener('click', ()=>{
    x = parseInt(displayValue);
    display.textContent = displayValue + '+';
    displayValue = '';
    operator = '+';

});
btnSubtract.addEventListener('click', ()=>{
    x = parseInt(displayValue);
    display.textContent = displayValue + '-';
    displayValue = '';
    operator = '-';
});
btnMultiply.addEventListener('click', ()=>{
    x = parseInt(displayValue);
    display.textContent = displayValue + 'x';
    displayValue = '';
    operator = '*';
});
btnDivide.addEventListener('click', ()=>{
    x = parseInt(displayValue);
    display.textContent = displayValue + '/';
    displayValue = '';
    operator = '/';
});
btnEquals.addEventListener('click', ()=>{
    y = parseInt(displayValue);
    let answer = operate(operator, x, y);
    display.textContent = answer.toFixed(4);
    displayValue = answer;

})
btnDelete.addEventListener('click', ()=>{
    displayValue = displayValue.slice(0,displayValue.length - 1);
    display.textContent = displayValue;
})
btnClear.addEventListener('click', ()=>{
    displayValue = '';
    x = '';
    y = '';
    operator = '';
    display.textContent = '';
})



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

function operate(operator, num1, num2){
    let result = 0;
    if (operator === '/'){
        result = divide(num1, num2);
    }
    else if (operator === '*'){
        result = multiply(num1, num2);
    }
    else if (operator === '-'){
        result = subtract(num1, num2);
    }
    else if (operator === '+'){
        result = add(num1, num2);
    }
    return result;
    
}

