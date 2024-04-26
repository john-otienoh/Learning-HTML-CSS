//Create an array of 3 items
const myArray = [1, 2, 3];
const myArray1 = new Array(1, 2, 3);
//Adding items to the array
myArray.unshift(0);//Beginning
myArray.push(4);//End
//Deleting items from array
myArray.shift();
myArray.pop();
//Convert string to array
const str = 'hello'.split('');
const Str = [...'hello'];
//Array Length
const arrayLength = str.length;
//Last item of the array
const lastItem = myArray[myArray.length - 1];
//Joining Array items together
console.log(myArray.join('-'));
//Elements alongside their indexes
for (const [index, element] of myArray.entries()){
    console.log(index + ':' + element);
}
//Finding Index of elements
const birds = ['Parrots', 'Falcons', 'Eagles', 'Emus', 'Caracarus'];
console.log(birds.indexOf("Eagles"));
//StartsWith()
const birdString = birds.toString();
console.log(birdString.startsWith('E'));