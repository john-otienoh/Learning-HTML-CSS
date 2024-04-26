console.log(document.body);
console.log(document.getElementById('id-name'));
console.log(document.querySelector('element, id, class name'));
document.documentElement;
document.head;
document.body;
document.body.children;
document.doctype;
document.domain;
document.URL;
document.characterSet;
document:contentType;
//Create and Append Elements
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

const text = document.createTextNode('Hello, World');
div.appendChild(text);
//Inserting Elements, text and HTML
//insertAdjacentElement
function insertElement() {
    const filter = document.querySelector('.filter');
    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';
    filter.insertAdjacentElement('beforebegin', h1);
}
//insertAdjacentText
function insertText() {
    const item = document.querySelector('li:first-child');
    item.insertAdjacentText('afterend', 'hello World');
}
//insertAdjacentHTML

//insertBefore
function insertBeforeItem() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = 'InsertBefore';
    const thirdItem = document.querySelector('li:nth-child(3)');
    ul.insertBefore(li, thirdItem);
}
//Replacing Elements
function replaceFirstItems(){
    const filter = document.querySelector('.filter');
    const h1 = document.createElement('h1');
    h1.textContent = 'hello';
    filter.replaceWith(h1);
}
//Remove items
function removeItem(){
    const clear = document.querySelector('#clear');
    clear.remove();
}
function removeItemChild(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    ul.removeChild(li);

}