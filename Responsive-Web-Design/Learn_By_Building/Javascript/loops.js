//For...of...loop
//Array looping
const items = ['book', 'pen', 'chair'];
for (const i of items){
    console.log(i);
}
//String looping
const str = 'John';
for (const i of str){
    console.log(i);
}
//Maps Looping
const map = new Map();
map.set("name", 'John');
map.set('age', 30);
for (const [key, value] of map){
    console.log(key, value);
}
//For...In...Loop
//Object Looping
const color = {
    color1: 'red',
    color2: 'blue',
    color3: 'green'
};
for (const key in color) {
    console.log(key, color[key]);
}
//Array looping
const colors = ['red', 'blue', 'green'];
for (const key in colors){
    console.log(colors[key]);
}
//For...Each Array
const socials = ['fb', 'x', 'wa', 'ig'];
socials.forEach(function(element) {
    console.log(element);
});
//Array of Objects
const social = [
    {
        name: 'john',
        age: 80,
    }
];
social.forEach((item) => console.log(item));
//Filter 
const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers);
//Array.Map
const doubledNumbers = numbers.map(function(number)
{
    return number * 2;
});
console.log(doubledNumbers);
//chain map methods
const squareAndDouble = numbers.map(function(number)
{
    return Math.sqrt(number);
})
.map(function (sqrt)
{
    return sqrt * 2;
});
console.log(squareAndDouble);

//Array.reduce()
const sum = numbers.reduce(function(accumulator, currentValue)
{
    return accumulator + currentValue;
}, 0);
console.log(sum);