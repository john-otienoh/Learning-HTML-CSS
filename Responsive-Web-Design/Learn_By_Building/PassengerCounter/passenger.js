let myCount = 0;
let passengerCount = document.getElementById("pasenger-count");
let saveEl = document.getElementById("total-el");
let listEl = document.getElementById("passenger-list")
function increment() {
    myCount += 1;
    passengerCount.innerText = myCount;
}
function save() {
    let myStr = ' ' + myCount + '.';
    listEl.innerText += myStr;
    passengerCount.textContent = 0;
    myCount = 0;
}
