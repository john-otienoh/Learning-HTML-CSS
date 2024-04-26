//Using Function Keyword 
function getCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(`The temperature is ${getCelcius(32)} \xB0C`);
//Using Arrow 
const getCelcius = (fahrenheit) =>  ((fahrenheit - 32) * 5) / 9;
console.log(`The temperature is ${getCelcius(32)} \xB0C`);
