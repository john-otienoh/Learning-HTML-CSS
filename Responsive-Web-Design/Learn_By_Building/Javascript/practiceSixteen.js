const words = ['coder', 'programmer', 'developer'];
let upperOne = words[0][0].toUpperCase();
let upperOneNew = words[0].slice(1);
let upperTwo = words[1][0].toUpperCase();
let upperTwoNew = words[1].slice(1);
let upperThree = words[2][0].toUpperCase();
let upperThreeNew = words[2].slice(1);
let x = upperOne + upperOneNew;
let y = upperTwo + upperTwoNew;
let z = upperThree + upperThreeNew;
words[0] = x;
words[1] = y;
words[2] = z;
console.log(words);