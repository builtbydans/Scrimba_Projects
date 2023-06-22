// Global Variables
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// DOM variables
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard == 1) {
    return 11
  } else if (randomCard >= 11 && randomCard <= 13) {
    return 10
  } else {
    return randomCard;
  }
}

const startGame = () => {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

const renderGame = () => {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
      message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
      message = "Wohoo! You've got Blackjack! 🥳";
      hasBlackJack = true;
  } else {
      isAlive = false;
      message = "You're out of the game! 😭";
  }
  messageEl.textContent = message;
};

const newCard = () => {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
