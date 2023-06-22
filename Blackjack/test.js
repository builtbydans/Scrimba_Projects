// Blackjack Game
// 1. Ensure all DOM variables can be interacted with
let cards = [];
let sum = 0;
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');
let messageEl = document.getElementById('message-el');
let hasBlackJack = false;
let isInGame = true;
let message = "";

const getRandomCard = () => {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  return randomCard;
};

const renderCard = () => {
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + "-"
  };
};

const newCard = () => {
  if (!isInGame && hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderCard();
  } else {
    console.log('Hello');
  }
}

const startGame = () => {
  cardsEl.textContent += cards;
  sumEl.textContent = 'Sum: ' + sum;

  if (sum <= 20) {
      message = `Your sum is ${sum}. Draw card!`
  } else if (sum === 20) {
      message = "Blackjack! Congratulations!"
      hasBlackJack = true;
  } else {
      message = "Better luck next time! Try again?"
      isInGame = false;
  };
  messageEl.textContent = message;
}


// 5. Create the Start Game function that resets all of the variables above.
