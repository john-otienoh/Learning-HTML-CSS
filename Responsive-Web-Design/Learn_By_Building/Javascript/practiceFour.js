const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [5, 6, 7, 8, 9, 10];
let arrThree;
arrThree = [...arrOne, ...arrTwo];
arrThree.splice(4, 1);
console.log(arrThree);