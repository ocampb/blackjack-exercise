window.addEventListener('DOMContentLoaded', function () {
  // Execute after page load
})

const dealerHandContainer = document.getElementById("dealer-hand");
const playerHandContainer = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button")
const deck = []
const dealerHand = []
const playerHand = []
const suits = ["hearts", "spades", "clubs", "diamonds"]
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let playerTotal = 0
let dealerTotal = 0
const playerCard1 = document.createElement("img")
playerHandContainer.append(playerCard1)
const playerCard2 = document.createElement("img")
playerHandContainer.append(playerCard2)
const dealerCard1 = document.createElement("img")
dealerHandContainer.append(dealerCard1)
const dealerCard2 = document.createElement("img")
dealerHandContainer.append(dealerCard2)

// DOM MANIPULATION:

const changeCardDisplayPlayer0 = function () {
  const rank = playerHand[0].rank
  const suit = playerHand[0].suit

  if (rank === 1) {
    playerCard1.src = `images/ace_of_${suit}.png`

  } else if (rank === 11) {
    playerCard1.src = `images/jack_of_${suit}.png`

  } else if (rank === 12) {
    playerCard1.src = `images/queen_of_${suit}.png`

  } else if (rank === 13) {
    playerCard1.src = `images/king_of_${suit}.png`
  }
  else {
    playerCard1.src = `images/${rank}_of_${suit}.png`
  }

}

const changeCardDisplayPlayer1 = function () {
  const rank = playerHand[1].rank
  const suit = playerHand[1].suit
  if (rank === 1) {
    playerCard2.src = `images/ace_of_${suit}.png`

  } else if (rank === 11) {
    playerCard2.src = `images/jack_of_${suit}.png`

  } else if (rank === 12) {
    playerCard2.src = `images/queen_of_${suit}.png`

  } else if (rank === 13) {
    playerCard2.src = `images/king_of_${suit}.png`
  }
  else {
    playerCard2.src = `images/${rank}_of_${suit}.png`
  }
}

const changeCardDisplayPlayer3 = function () {
  const rank = playerHand[2].rank
  const suit = playerHand[2].suit
  if (rank === 1) {
    playerCard2.src = `images/ace_of_${suit}.png`

  } else if (rank === 11) {
    playerCard2.src = `images/jack_of_${suit}.png`

  } else if (rank === 12) {
    playerCard2.src = `images/queen_of_${suit}.png`

  } else if (rank === 13) {
    playerCard2.src = `images/king_of_${suit}.png`
  }
  else {
    playerCard2.src = `images/${rank}_of_${suit}.png`
  }
}

const changeCardDisplayDealer1 = function () {
  const rank = dealerHand[0].rank
  const suit = dealerHand[0].suit
  if (rank === 1) {
    dealerCard1.src = `images/ace_of_${suit}.png`

  } else if (rank === 11) {
    dealerCard1.src = `images/jack_of_${suit}.png`

  } else if (rank === 12) {
    dealerCard1.src = `images/queen_of_${suit}.png`

  } else if (rank === 13) {
    dealerCard1.src = `images/king_of_${suit}.png`
  }
  else {
    dealerCard1.src = `images/${rank}_of_${suit}.png`
  }
}

const changeCardDisplayDealer2 = function () {
  const rank = dealerHand[1].rank
  const suit = dealerHand[1].suit
  if (rank === 1) {
    dealerCard2.src = `images/ace_of_${suit}.png`

  } else if (rank === 11) {
    dealerCard2.src = `images/jack_of_${suit}.png`

  } else if (rank === 12) {
    dealerCard2.src = `images/queen_of_${suit}.png`

  } else if (rank === 13) {
    dealerCard2.src = `images/king_of_${suit}.png`
  }
  else {
    dealerCard2.src = `images/${rank}_of_${suit}.png`
  }
}


// LOGIC TO CREATE DECK: 

const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    value: rank > 9 ? 10 : rank
  }
  deck.push(card)
}


for (let suit of suits) {
  for (const rank of ranks) {
    const deck = makeDeck(rank, suit);
  }
}


console.log(deck)


//// LOGIC FOR CLICKING BUTTONS //////

const dealOneCard = function () {
  // logic for pulling the correct image, I'll work on that later: 
  // const newCard = document.createElement("img")
  // newCard.src = "images/2_of_clubs.png"
  const newCardIndex = Math.floor(Math.random() * deck.length)
  console.log(newCardIndex)
  const newCard = deck.splice(newCardIndex, 1)[0]
  console.log(deck)
  return newCard
}

const changePlayerCardDisplay = function () {
  playerHandContainer.innerHTML = "";

  for (let card of playerHand) {
    const rank = card.rank
    const suit = card.suit

    const playerCard = document.createElement('img')


    if (rank === 1) {
      playerCard.src = `images/ace_of_${suit}.png`

    } else if (rank === 11) {
      playerCard.src = `images/jack_of_${suit}.png`

    } else if (rank === 12) {
      playerCard.src = `images/queen_of_${suit}.png`

    } else if (rank === 13) {
      playerCard.src = `images/king_of_${suit}.png`
    }
    else {
      playerCard.src = `images/${rank}_of_${suit}.png`
    }

    playerHandContainer.append(playerCard)
  }




}

dealButton.onclick = function () {
  const newCard1 = dealOneCard()
  console.log(newCard1)
  playerHand.push(newCard1)
  //changeCardDisplayPlayer0()
  console.log(playerHand)
  const newCard2 = dealOneCard()
  playerHand.push(newCard2)
  //changeCardDisplayPlayer1()

  changePlayerCardDisplay()


  console.log(dealerHand)
  const newCard3 = dealOneCard()
  console.log(newCard3)
  dealerHand.push(newCard3)
  changeCardDisplayDealer1()
  console.log(dealerHand)
  const newCard4 = dealOneCard()
  dealerHand.push(newCard4)
  console.log(dealerHand)
  console.log(playerHand)
  changeCardDisplayDealer2()
};

hitButton.onclick = function () {
  const newCard1 = dealOneCard()
  console.log(newCard1)
  playerHand.push(newCard1)
  console.log(playerHand)
  //changeCardDisplayPlayer3()
  changePlayerCardDisplay()
}


const calculatePlayerTotal = function () {
  let sum = 0
  for (let index = 0; index < playerHand.length; index++) {
    sum = sum + playerHand[index].value
  }
  playerTotal = sum
}

const calculateDealerTotal = function () {
  let sum = 0
  for (let index = 0; index < dealerHand.length; index++) {
    sum = sum + dealerHand[index].value
  }
  dealerTotal = sum
}

const dealerTurn = function () {
  console.log("dealerturn")
  calculateDealerTotal()
  console.log(dealerTotal)
  if (dealerTotal < 17) {
    dealerHand.push(dealOneCard())
  }
  calculateDealerTotal()
  console.log("dealer total" + dealerTotal)
}

const endOfGame = function () {
  calculateDealerTotal()
  calculatePlayerTotal()
  if (playerTotal === dealerTotal) {
    console.log("TIE")
  }
  if (playerTotal > dealerTotal) {
    console.log("PLAYER WINS")
  }
  if (playerTotal < dealerTotal) {
    console.log("DEALER WINS")
  }
}

standButton.onclick = function () {
  calculatePlayerTotal();
  console.log("player total" + playerTotal);
  dealerTurn();
  endOfGame()
}



//TO DO:
// Make the player and dealer bust when they hit a certain amount
// make the dealer hit until they get to certain number
// figure out the Ace card 
// incorporate pictures of cards into the game logic



