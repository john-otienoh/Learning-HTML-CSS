//Step 1
const library = [
    {
    title: 'Learn Javascript',
    author: 'Brad Traversy',
    status: {
        own: true,
        reading: false,
        read: false
    }
},
{
    title: 'Learn C',
    author: 'Dennis Ritchie',
    status: {
        own: true,
        reading: false,
        read: false
    }
}
]
//Step 2
library[0].status.read = true;
library[1].status.read = true;
console.log(library);
//Step 3
const { title: firstBook } = library[0];
console.log(firstBook);
//Step 4
const toJson = JSON.stringify(library);
console.log(toJson);