let firstCard = 3, secondCard = 8, thirdCard= 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let cash = false, isAlive = true;
let message = '';
let paraOne = document.querySelector("#para-one");
let paraThree = document.querySelector("#para-three");
let paraTwo = document.querySelector("#para-two");
function startGame() {
    if (sum <= 20){
        message = 'Draw a new card ?';
    }
    else if(sum === 21){
        message = 'You\'ve won blackjack';
        cash = true;
    }
    else {
        message = 'You\'re out of the game';
        isAlive = false;
    }
    paraOne.textContent = message;
    paraThree.textContent = 'Sum: ' + sum;
    paraTwo.textContent = 'Cards: ' + cards[0] + ' ' + cards[1];
}
function newCard(){
    sum += thirdCard;
    cards.push(thirdCard);
    startGame(); 
}