window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
})
// TO DO:
// create logic to connect the deck of cards array to the array for each player so that when the dealOneCard function is run, an array is appended. 

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

const dealOneCard = function(){
  // const newCard = document.createElement("img")
  // newCard.src = "images/2_of_clubs.png"
  console.log("new card")
}

dealButton.onclick = function(){
  const newCard = dealOneCard()
  dealerHand.push(newCard)
  console.log(dealerHand)

};

const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit
  }
  deck.push(card)
}

for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
    console.log(deck)
  }
}
