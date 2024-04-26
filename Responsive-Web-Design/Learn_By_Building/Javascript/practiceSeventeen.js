//Custom InsertAfter()
function insertAfter(newElement, exElement) {
    exElement.parentElement.insertBefore(newElement, exElement.nextSibling);
}