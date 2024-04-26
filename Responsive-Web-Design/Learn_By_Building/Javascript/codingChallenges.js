//Challenge 1 - Print numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
//Challenge 2 - Print Odd number less than 100
for (var i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);   
    }
}
//Challenge 3 - Print the multiplication table with 7
for (var i = 1; i <= 7; i++) {
    for (var j = 0; j <= 7; j++) {
        console.log(i * j);
    }
}
//Challenge 5 - Sum of numbers from 1 to 10
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);
//Challenege 6 - calculate 10!
function factorial(n) {
    if (n <= 0)
    {
        return 1;
    }
    return factorial(n - 1) * n;
}
var fact = factorial(10);
console.log(fact);
//Challenge 7 - Sum of even numbers greater than 10 and less than 30
var sum = 0;
for (var i = 10; i <= 30; i + 2) {
    sum = sum + i;
}
console.log(sum);
//Challenge 8 - Fahrenheit to Celcius Degree converter
function getCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(`The temperature is ${getCelcius(32)} \xB0C`);
//Challenge 9 - Celcius Degree to Fahrenheit converter
function getFahrenheit(degree) {
    return ((5 / 9) * degree) + 32;
}
console.log(`The temperature is ${getFahrenheit(0)} Fahrenheit`);
//Challenge 10 - Sum of numbers in an array
var myArray = [1, 2, 3, 4, 5], sum = 0;
for (var i = 0; i < myArray.length; i++) {
    sum = sum + myArray[i];
}
console.log(sum);
//Challenge 11 - Calculate the average of numbers in an array
var myArray = [1, 2, 3, 4, 5], sum = 0;
for (var i = 0; i < myArray.length; i++) {
    sum = sum + myArray[i];
}
var average = sum / myArray.length;
console.log(average);
/*Challenge 12 - Function that receives an array of numbers as an argument
and returns only positive numbers*/
function positiveInteger(myArray) { 
    var myArrayTwo = [];
    for (var i = 0; i < myArray.length; i++) { 
        var element = myArray[i];
        if (element >= 0)
        {
            myArrayTwo.push(element);
        }
    } 
    return myArrayTwo;
}
var array = [1, 2, 3, 4, -5];
var arrayTwo = positiveInteger(array);
console.log(arrayTwo);
/*Method 2*/
function positiveInteger(myArray) {
    return myArray.filter(function(element){
        return element >= 0;
    });
}
var array = [1, 2, 3, 4, -5];
var arrayTwo = positiveInteger(array);
console.log(arrayTwo);
//Challenge 13 Maximum element in an array
/*Method 1*/
var array = [1, 2, 3, 4, -5];
var maxElement = Math.max(...array);
console.log(maxElement);
/*Method 2*/ 
function largestElement(myArray){
    var large = myArray[0];
    for (var i = 0; i < myArray.length; i++)
    {
        if(myArray[i] > large)
        {
            large = myArray[i];
        }
    }
    console.log(large);
}
var array = [1, 2, 3, 4, -5];
var maxElement = largestElement(array);
//Challenge 14 - First !0 fibonacci without recursion
var n = 10; var a = 0, b = 1, c;
for (var i = 0; i <= n; i++)
{
    c = a + b;
    a = b;
    b = c;
    console.log(c);
}
//Challenge 15 - Fibonacci using recursion
var a = 0, b = 1, c; 
function fibo(n){
    if (n > 0)
    {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
        fibo(n - 1);
    } 
};
fibo(10);
//Challenge 16 - Prime Number check using boolean
function prime(n) {
    for (var i = 2; i <= n - 1; i++){
        if (n % i == 0){
            console.log(false);
            break;
        }
    }
    if (i == n){
        console.log(true);
    }
}
//Challenge 17 - Sum of digits in a positive integer
function sumDigits(n){
    var rem = 0, sum = 0;
    while (n > 0){
        rem = n % 10;
        sum = sum + rem;
        n = n / 10;
    }
    console.log(sum);
}
sumDigits(22);
//Challenge 18 - Print first 100 prime numbers
function prime(n) {
    for (var i = 2; i <= n - 1; i++){
        if (n % i == 0){
            return 0;
            break;
        }
    }
    if (i == n){
        return 1; 
    }
}
//Game.js
var score = 12;
console.log(`This program is a computer game, please type in a number: ${score}`);
var scoreOne = score * 2;
console.log(scoreOne);
console.log(scoreOne + 1);
console.log(scoreOne + 2); 
//Challenge 18
var num = 17;
var ans = num / Math.PI;
console.log(`Your number divided by Pi is 5.411268065124442 ${ans}`);
//Challenge 19
var num = 17;
var ans = Math.sqrt(num);
console.log(`The square root of your number is ${ans}`);
//Challenge 20
var userDigit = 8;
if (userDigit < 0){
    console.log('Its a Negative Number');
}
else {
    console.log('It\'s a Positive Number');
}

//Challenge 21
var height = 50;
console.log(`This program can convert your height. Please\,type in your height in centimeters : ${height}`)
var heightInches = height / 2.54;
console.log(`Your height in inches is ${heightInches}`);
var heightFeet = heightInches / 12;
var remInches = heightInches % 12;  
console.log(`This is ${Math.floor(heightFeet)} feet and ${Math.floor(remInches)} inches.`);
if (height < 60)
{
    console.log(`Only ${height} centimeters! \n Are you really so short?`)
}
else if (height > 160 && height < 190){
    console.log('That is quite an average height');
}
else if (height > 400){
    console.log('You must be a girrafe');
} 
//Challenge 22
var num = 200;
function randomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var randomNumber = randomBetween((num - 5), (num + 5));
console.log(`Please, give a number: ${num}`);
if (isNaN(num)){
    console.log('Type in a number')
}
else{
    if (num > 10 && num < 1000){
        if (num % 2 == 0){
            console.log(`${num} is even`);
        }
        else {
            console.log(`${num} is odd`);
        }
        console.log(`${num} is in range 10 ... 1000`);
        console.log(`Random number is ${randomNumber}`)
        if (num > randomNumber){
            console.log('You won this game')
        }
        else if(num < randomNumber){
            console.log('You lost this game')
        }
        else {
            console.log('Yo tied');
        }
    }
    else {
        if (num % 2 == 0){
            console.log(`${num} is even`);
        }
        else {
            console.log(`${num} is odd`);
        }
    }    
}
//Challenge 23
var miles = 10;
var kiloMetres, kiloGrams;
var userSelection = prompt('Type a letter to select a conversion table\n m: miles to kilometers \nk: kilometers to miles\np: pounds to kilograms\n e: exit')
if (userSelection === 'm' || userSelection === 'M'){
    console.log('Miles      Kilometres');
    while (miles >= 10 && miles <= 110){
        kiloMetres = miles * 1.609;
        console.log(`${miles}      ${Math.round(kiloMetres * 100) / 100}`);
        miles += 10;
    }
}
else if (userSelection === 'k' || userSelection === 'K'){
    console.log('KiloMetres     Miles');
    kiloMetres = 10;
    while (kiloMetres >= 10 && kiloMetres <= 110){
        miles = kiloMetres * 0.621;
        console.log(`${kiloMetres}      ${Math.round(miles * 100) / 100}`);
        kiloMetres += 10;
    }
}
else if (userSelection === 'p' || userSelection  === 'P'){
    console.log('Pounds    Kilograms');
    var pounds = 10;
    while (pounds >= 10 && pounds <= 110){
        kiloGrams = pounds * 0.4536;
        console.log(`${pounds}      ${Math.round(kiloGrams * 100) / 100}`);
        pounds += 10;
    }
}
//Challenge 24
var myArray = [54, 43, 6, 7, 9, 23, 21, 17, 32];
var arr = myArray.filter(value => value > 1 && value < 40);
console.log(arr.reverse());
//Challenge 25
var myName = prompt("Please, type in your name:")
var i = 0;
while (i < myName.length){
    console.log(myName[i]);
    i++;
}
console.log(i);
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString(myName));
//Challenge 26
function alphabetOrder(str)
{
    return str.split('').sort().join('');
}
//Challenge 27
var vowelList = 'aeiouAEIOU'
var countVowel = 0;
function checkVowel(str){
    for (var i = 0; i < str.length; i++){
        for (var j = 0; i < vowelList.length; j++){
            if (str[i] === vowelList[j]){
                countVowel++;
            }
        }
    }
    console.log(countVowel)
}
var myStr = checkVowel('Hello');
console.log(myStr);
