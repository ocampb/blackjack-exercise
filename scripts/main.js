window.addEventListener('DOMContentLoaded', function () {
  // Execute after page load
})

const dealerHandContainer = document.getElementById("dealer-hand");
const playerHandContainer = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button")
const playerPointsDisplayContainer = document.getElementById("player-points")
const dealerPointsDisplayContainer = document.getElementById("dealer-points")
const deck = []
const dealerHand = []
const playerHand = []
const suits = ["hearts", "spades", "clubs", "diamonds"]
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let playerTotal = 0
let dealerTotal = 0
const playerStatus = document.createElement("p")
const dealerStatus = document.createElement("p")
playerPointsDisplayContainer.append(playerStatus)
dealerPointsDisplayContainer.append(dealerStatus)



// LOGIC TO CREATE DECK: 

const makeDeck = (rank, suit) => {
  let value = 0
  if (rank === 1) { value = 11 }
  else if (rank >= 10) { value = 10 }
  else { value = rank }
  const card = {
    rank: rank,
    suit: suit,
    // value: rank > 9 ? 10 : rank
    value: value
  }
  deck.push(card)
}


for (let suit of suits) {
  for (const rank of ranks) {
    const deck = makeDeck(rank, suit);
  }
}


console.log(deck)

// LOGIC FOR CALCULATIONS 

const calculatePlayerTotal = function () {
  let sum = 0
  for (let index = 0; index < playerHand.length; index++) {
    sum = sum + playerHand[index].value
  }
  if (sum < 21 && )
    playerTotal = sum
}

const calculateDealerTotal = function () {
  let sum = 0
  for (let index = 0; index < dealerHand.length; index++) {
    sum = sum + dealerHand[index].value
  }
  dealerTotal = sum
}

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

const changePointsDisplay = function () {
  calculatePlayerTotal()
  calculateDealerTotal()
  playerStatus.innerHTML = playerTotal
  dealerStatus.innerHTML = dealerTotal
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

const changeDealerCardDisplay = function () {
  dealerHandContainer.innerHTML = "";

  for (let card of dealerHand) {
    const rank = card.rank
    const suit = card.suit

    const dealerCard = document.createElement('img')


    if (rank === 1) {
      dealerCard.src = `images/ace_of_${suit}.png`

    } else if (rank === 11) {
      dealerCard.src = `images/jack_of_${suit}.png`

    } else if (rank === 12) {
      dealerCard.src = `images/queen_of_${suit}.png`

    } else if (rank === 13) {
      dealerCard.src = `images/king_of_${suit}.png`
    }
    else {
      dealerCard.src = `images/${rank}_of_${suit}.png`
    }

    dealerHandContainer.append(dealerCard)
  }

}

dealButton.onclick = function () {
  const newCard1 = dealOneCard()
  console.log(newCard1)
  playerHand.push(newCard1)
  console.log(playerHand)
  const newCard2 = dealOneCard()
  playerHand.push(newCard2)
  console.log(dealerHand)
  const newCard3 = dealOneCard()
  console.log(newCard3)
  dealerHand.push(newCard3)
  console.log(dealerHand)
  const newCard4 = dealOneCard()
  dealerHand.push(newCard4)
  console.log(dealerHand)
  console.log(playerHand)
  changePlayerCardDisplay()
  changeDealerCardDisplay()
  changePointsDisplay()
};

hitButton.onclick = function () {
  const newCard1 = dealOneCard()
  console.log(newCard1)
  playerHand.push(newCard1)
  console.log(playerHand)
  changePlayerCardDisplay()
  changePointsDisplay()
  if (playerTotal > 21) {
    endOfGame()
  }
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
  changeDealerCardDisplay()
  changePointsDisplay()
}

const endOfGame = function () {
  calculateDealerTotal()
  calculatePlayerTotal()
  if (dealerTotal > 21) {
    console.log("PLAYER WINS")
    playerStatus.innerHTML = `${playerTotal} PLAYER WINS`
    dealerStatus.innerHTML = `${dealerTotal} PLAYER WINS`
  }
  else if (playerTotal > 21) {
    console.log("DEALER WINS")
    playerStatus.innerHTML = `${playerTotal} DEALER WINS`
    dealerStatus.innerHTML = `${dealerTotal} DEALER WINS`
  }
  else if (playerTotal === dealerTotal) {
    console.log("TIE")
    playerStatus.innerHTML = `${playerTotal} TIE`
    dealerStatus.innerHTML = `${dealerTotal} TIE`
  }
  else if (playerTotal < dealerTotal) {
    console.log("DEALER WINS")
    playerStatus.innerHTML = `${playerTotal} DEALER WINS`
    dealerStatus.innerHTML = `${dealerTotal} DEALER WINS`
  }
  else {
    console.log("PLAYER WINS")
    playerStatus.innerHTML = `${playerTotal} PLAYER WINS`
    dealerStatus.innerHTML = `${dealerTotal} PLAYER WINS`
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



