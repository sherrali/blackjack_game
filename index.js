
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let  messageEl = document.getElementById("message-el"); 
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let player= {
    name : "mastan",
    chips : 200
}
playerEl.textContent = player.name + ": $ 200";
function getRandomCard(){
   let randomNumber= Math.floor(Math.random()*13)+1;
   if(randomNumber > 10){
    return 10
   }else if(randomNumber === 1){
    return 10;
   }else{
    return randomNumber
   }
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function renderGame(){
    if (player.chips === 0){
        messageEl.textContent = "you don't have enough money"  
        isAlive=false;
        return;
    }
    cardsEl.textContent = "cards:"
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent  += cards[i] + " ";
    }
    sumEl.textContent = "sum:" + sum;
    if(sum < 21){
        messageEl.textContent = "Do you want to draw a new card? 🙂"
    }else if(sum === 21){
        player.chips = player.chips + 50;
        playerEl.textContent = player.name + ": $ "+ player.chips;
        messageEl.textContent = "Wohoo! You've got Blackjack!"
        hasBlackjack = true;
    }else{
        player.chips = player.chips - 50
        playerEl.textContent = player.name + " $ "+ player.chips;
        messageEl.textContent = "You're out of the game! 😭"
        isAlive = false;
    }
}

function newcard(){
    if (isAlive === true && sum < 21){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}
}