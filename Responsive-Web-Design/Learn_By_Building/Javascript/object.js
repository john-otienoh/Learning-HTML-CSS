//Creating Objects
let x;
const person = {
    name: 'John',
    age: 20,
    location: 'Kisumu',
    address: {
        street: 'Ringroad',
        centre: 'Kilo',
    },
    hobbies: ['cycling','Chapati']
};
const person2 = {
    name: 'John',
    age: 20,
    location: 'Kisumu',
    address: {
        street: 'Ringroad',
        centre: 'Kilo',
    },
    hobbies: ['cycling','Chapati']
};
//Accessing Objects Key
x = person.name;
x = person['location'];
x = person.address.street;
//Changing Values
person.name = 'Charles';
//Remove items
delete person.age;
person.Status = 'single';
//using functions
person.greet = function () {
    console.log(`Hello i am ${this.name}`);
}
x = person.greet();
//Object Spread Operator & Method
x = {...person, ...person2};
//Object to Array
x = Object.keys(person);
//Object Length
x = Object.keys(person).length;
//Destructuring
const { name } = person;
//Convert to JSON
x = JSON.stringify(person);
//JSON to string
const y = JSON.parse(x)
console.log(y);