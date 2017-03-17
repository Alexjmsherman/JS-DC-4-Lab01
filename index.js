var Person = require('./person.js')
var Card = require('./card.js')

var person1 = new Person.Player('John Stewart')
var person2 = new Person.Player('John Oliver')
var testDeck = new Card.Deck()


score = {person1:0,person2:0}

playGame = function () {
	testDeck.createNewDeck()


	for (i=0; i<27; i++) {
		person1card = testDeck.dealHand(1)
		person2card = testDeck.dealHand(1)

		// console.log(person1card[0].score)
		// console.log(person2card[0].score)

		if (person1card[0].score > person2card[0].score) {
			score['person1'] += 1
		} else {
			score['person2'] += 1
		}
	}
	console.log(score)
	console.log(testDeck.cards.length)
}

playGame()




