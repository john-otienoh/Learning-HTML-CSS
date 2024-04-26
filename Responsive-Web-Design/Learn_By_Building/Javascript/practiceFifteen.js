const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbers.filter(function(number)
{
    return number > 0;
})
.reduce(function(accumulator, currentValue)
{
    return accumulator + currentValue;
});
console.log(positiveSum);