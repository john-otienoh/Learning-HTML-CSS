const minMax = (myArray) => {
    let min = Math.min(...myArray);
    let max = Math.max(...myArray);
    return {
        min,
        max,
    };
}
console.log(minMax([1, 2, 3, 4]));