const people = [
    {
        firstName: 'john',
        lastName: 'doe',
        email: 'john@gmail.com',
        phone: '123-456',
        age: 30,
    },
    {
        firstName: 'jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '456-789',
        age: 25,
    },
    {
        firstName: 'bob',
        lastName: 'foe',
        email: 'bob@gmail.com',
        phone: '789-112',
        age: 45,
    },
    {
        firstName: 'sara',
        lastName: 'soe',
        email: 'sara@gmail.com',
        phone: '101-112',
        age: 19,
    },
    {
        firstName: 'jose',
        lastName: 'koe',
        email: 'jose@gmail.com',
        phone: '131-415',
        age: 23,
    },   
];
const youngPeople = people.filter(function(people)
{
    return people.age <= 25;
})
.map(function(people)
{
    return {
        name: people.firstName + ' ' + people.lastName,
        email: people.email, 
    }
});
console.log(youngPeople);