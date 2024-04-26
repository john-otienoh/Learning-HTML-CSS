const shopping = [
    {id: 1, name: 'product 1', price: 100},
    {id: 2, name: 'product 2', price: 200},
    {id: 3, name: 'product 3', price: 300},
    {id: 4, name: 'product 4', price: 400},
    {id: 5, name: 'product 5', price: 500},
];
const shoppingPrice = shopping.reduce(function(accumulator, products)
{
    return accumulator + products.price;
}, 0);
console.log(shoppingPrice);