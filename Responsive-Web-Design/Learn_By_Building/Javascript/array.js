//Creating Arrays
const numbers = [1, 2, 3, 4];
const fruits = new Array('apple', 'banana', 'orange');
let x;
//Array Length
x = numbers.length;
//Accessing Array Members
x = fruits[2];
//Adding New Element
fruits[fruits.length] = 'pears';
x = fruits;
//Array Methods
//1)Push
x = numbers.push(100);
//2)pop
x = numbers.pop();
//3)Reverse
x = numbers.reverse();
//4)Includes
x = numbers.includes(5);
//Nesting in Arrays
fruits.push(numbers);
x = fruits;
//Accessing nested Array Elements Members
x = fruits[3] [1];
//concat
x = fruits.concat(numbers);
//Spread Operator (...)
x = [...fruits, ...numbers];
//Flatten
x = numbers.flat();
//Static Methods On Array Objects
x = Array.isArray(numbers);
x = Array.from('12345');
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);
//Destructuring
const [first, second] = numbers
console.log(x);