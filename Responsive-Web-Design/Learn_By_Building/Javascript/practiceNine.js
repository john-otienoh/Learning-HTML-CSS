//Using a Switch Case
function calculator(num1, num2, operator){
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operand";
    }
    return result;
}
let add = calculator(5, 2, '+');
let subtract = calculator(5, 2, '-');
let multiply = calculator(5, 2, '*');
let divide = calculator(5, 2, '/');
let address = calculator(5, 2, '%');
console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);
console.log(address);
//Using if...Else