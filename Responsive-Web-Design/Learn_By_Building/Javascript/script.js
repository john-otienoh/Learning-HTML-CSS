console.log(100);
console.log(20, 'hello', true);
const x = 100;
console.table({name: 'John', email: '123@gail.com'});
console.log(x);
console.error('alert');
console.warn('warning');
const styles = ('padding: 10px; color: green;');
console.log('%cHelloworld', styles);
let firstName = 'john';
let lastName = 'charles';
console.log(firstName, lastName);
let age = 30;
console.log(age);
age = 34;
console.log(age);
//string
const name = 'john charles';
console.log(typeof name);
//number
console.log(typeof age);
//symbol
const id  = Symbol('id');
console.log(typeof id);
//BigInt
const n = 56566555555565656655656n;
console.log(typeof n);
//array
const arr = [1, 2, 3];
console.log(typeof arr);
//objects
const person ={
    name: 'john',
}
console.log(typeof person);
//function
function sayHello() {
    console.log('Hello');
}
console.log(typeof sayHello);
//Stack vs Heap
const jina = 'john';
const miaka = 30;
const mtu = {
    jina: 'charles',
    miaka: 40,
};
let newJina = jina;
newJina = 'jane';
let newMtu = mtu;
newMtu.jina = 'jane';
console.log(jina, newJina);
console.log(mtu, newMtu); 
//Type Conversion
let amount = 'hello';
amount = parseInt(amount);//using parseInt()
//amount = +amount;using unary
//amount =Number(amount);using Number()
//amount = amount.toString();using toString()
//amount = String(amount);using String()
//amount = parseFloat(amount);
//0 - false & non-zero true
console.log(amount, typeof amount);
let add = 'hello' + ' world';
console.log(add);
let exp = 2 ** 3;
console.log(exp);
//Template Literals
let str;
str = `Heloo, my name is ${jina} and i am ${age} years old`;
console.log(str);
const s = 'string';
let l = s.length;
l = s.__proto__;
console.log(l);
let date = `${getFullYear()}-${getMonth()}-${getDate()}`;