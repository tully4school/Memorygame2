var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("you've found a match!");
	} else {
		console.log("try again")
	};
};
function flipCard(cardId) {
	console.log("user flipped " + cards[cardId]);
		cardsInPlay.push(cards[cardId]);
		if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};
flipCard(0);
flipCard(2);
