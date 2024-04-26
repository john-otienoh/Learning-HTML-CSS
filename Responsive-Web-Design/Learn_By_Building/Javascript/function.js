//Creating Functions
function sayHello() {
    console.log("Hello World!");
}
//Calling or Invoking the function
sayHello();
//Function with Parameters i.e num1 and num2
function add(num1, num2) {
    console.log(num1 + num2);
}
add(12, 8);
//Function with return
function subtract(num1, num2) {
    return num2 - num1;
}
const result = subtract(20, 12);
console.log(result);
console.log(subtract(20, 12));
//Parameters and Argument
function registerUser(user) {
    return user + ' is registered';
}
console.log(registerUser('John'));
function registerUser(user = 'John')//Default Parameters 
{
    return user + ' is registered';
}
console.log(registerUser());
function digits(...nums)//Rest Operator
{
    return nums;
}
console.log(digits(1, 2, 3, 4, 5));
//Objects as parameter
function loginUser(user)
{
    return `The User's name is ${user.name} and he is ${user.age} years old`;
}
const user = {
    name: 'John',
    age: 20,
};
console.log(loginUser(user));
//Array as Parameter
function getRandom(myArray) {
    const randonIndex = Math.floor(Math.random() * myArray.length);
    const element = myArray[randonIndex];
    console.log(element);
}
getRandom([1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 0, 109]);
//Nested Function
function first() {
    const x = 100;
    function second() {
        const y = 150;
        console.log(x + y);
    }
    second();
}
first();
//Function Expression
const addDollar = function (value) {
    return '$' + value;
};
console.log(addDollar(200));
//Arrow Function
const multiplication = (a, b) => {
    console.log(a * b);
}
multiplication(2, 3);
//Returning an Object
const returnObject = () => ({
    name: 'John',
});
console.log(returnObject());
//Arrow Fuction in a callback
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((n) => console.log(n));
//IIFE Immediately Invoked Function Expression
(function () {
    const user = 'John';
    console.log(user);
}) ();
//IIFE with parameters
(function (name) {
    console.log('Hello ' + name);
})('John');