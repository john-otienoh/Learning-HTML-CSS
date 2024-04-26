const arr = [1, 2, 3, 4, 5];
let x;
arr[arr.length] = 6;
x = arr.reverse();
arr[arr.length] = 0;
x = arr;
console.log(x);