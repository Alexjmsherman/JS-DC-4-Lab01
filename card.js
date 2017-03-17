var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
var rankScores = {
  ace: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  king: 12,
  queen: 13
}

function Card ( suit, rank ) {
  this.suit = suit
  this.rank = rank
  this.title = rank + ' of ' + suit 
  this.score = rankScores[ rank ] 
}

module.exports.Deck = function() {

  this.createNewDeck = function() {

    var deck = []

    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        deck.push( new Card( suits[i], ranks[j] ) )
      }
    }

    return deck
  }
  
//  this.cards = this.createNewDeck()

  this.dealHand = function( length ) {

    if ( this.cards.length === 0 ) {
      return
//      this.cards = this.createNewDeck()
    }

    var handLength = length || 1
    
    if ( handLength === 1 ) {
      return card = this.cards.splice( Math.random() * this.cards.length, 1 )
    
    } else {
      
      var hand = []

      for (var i = 0; i < handLength; i++) {
        var card = this.cards.splice( Math.random() * this.cards.length, 1 )
        hand.push( card )
      }

      return hand
    }

  }

}




