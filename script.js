function add(num1, num2){
    let result = num1 + num2;
    return result;
}

console.log(add(55,260));

function subtract(num1, num2){
    let result = num1 - num2;
    return result;
}

console.log(subtract(12,14));

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

console.log(multiply(20,45));

function divide(num1, num2){
    let result = num1 / num2;
    return result;
}

console.log(divide(45,9));

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
    else{
        console.log("Invalid operator");
    }
    console.log(result);
    
}

operate('5',5,4);
