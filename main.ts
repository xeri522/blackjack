function pointTotalPlayer (num: number, trueOrFalse: boolean) {
    if (trueOrFalse && (num == 0 || num == 13 || (num == 26 || num == 39))) {
        if (game.ask("1 or 11? 1=A 11=B")) {
            playerScore += 1
        } else {
            playerScore += 11
        }
    } else if (trueOrFalse && (num == 1 || num == 14 || (num == 27 || num == 40))) {
        playerScore += 2
    } else if (trueOrFalse && (num == 2 || num == 15 || (num == 28 || num == 41))) {
        playerScore += 3
    } else if (trueOrFalse && (num == 3 || num == 16 || (num == 29 || num == 42))) {
        playerScore += 4
    } else if (trueOrFalse && (num == 4 || num == 17 || (num == 30 || num == 43))) {
        playerScore += 5
    } else if (trueOrFalse && (num == 5 || num == 18 || (num == 31 || num == 44))) {
        playerScore += 6
    } else if (trueOrFalse && (num == 6 || num == 19 || (num == 32 || num == 45))) {
        playerScore += 7
    } else if (trueOrFalse && (num == 7 || num == 20 || (num == 33 || num == 46))) {
        playerScore += 8
    } else if (trueOrFalse && (num == 8 || num == 21 || (num == 34 || num == 47))) {
        playerScore += 9
    } else if (trueOrFalse && (num == 9 || num == 10 || (num == 11 || num == 12) || (num == 22 || num == 23 || (num == 24 || num == 25)) || (num == 48 || num == 49 || (num == 50 || num == 51) || (num == 35 || num == 36 || (num == 37 || num == 38))))) {
        playerScore += 10
    }
}
function fixerTrue () {
    trueindex = randomIndex
    if (pointDeck[randomIndex] != deck[trueindex - paint]) {
        fixer += 1
        paint += 1
    } else {
        randomIndex += fixer
        paint = 0
    }
    while (false) {
    	
    }
}
function dealerEnd () {
    if (playerTurn == false && dealerScore >= 16) {
    	
    } else {
    	
    }
    game.showLongText("Your score " + playerScore + "            " + "dealer score " + dealerScore, DialogLayout.Bottom)
    winOrLose()
}
function pointTotalDealer (num: number, trueOrFalse: boolean) {
    if (trueOrFalse && (num == 0 || num == 13 || (num == 26 || num == 39))) {
        if (dealerScore <= 10 && (num == 0 || num == 13 || (num == 26 || num == 39))) {
            dealerScore += 11
        } else {
            dealerScore += 1
        }
    } else if (trueOrFalse && (num == 1 || num == 14 || (num == 27 || num == 40))) {
        dealerScore += 2
    } else if (trueOrFalse && (num == 2 || num == 15 || (num == 28 || num == 41))) {
        dealerScore += 3
    } else if (trueOrFalse && (num == 3 || num == 16 || (num == 29 || num == 42))) {
        dealerScore += 4
    } else if (trueOrFalse && (num == 4 || num == 17 || (num == 30 || num == 43))) {
        dealerScore += 5
    } else if (trueOrFalse && (num == 5 || num == 18 || (num == 31 || num == 44))) {
        dealerScore += 6
    } else if (trueOrFalse && (num == 6 || num == 19 || (num == 32 || num == 45))) {
        dealerScore += 7
    } else if (trueOrFalse && (num == 7 || num == 20 || (num == 33 || num == 46))) {
        dealerScore += 8
    } else if (trueOrFalse && (num == 8 || num == 21 || (num == 34 || num == 47))) {
        dealerScore += 9
    } else if (trueOrFalse && (num == 9 || num == 10 || (num == 11 || num == 12) || (num == 22 || num == 23 || (num == 24 || num == 25)) || (num == 48 || num == 49 || (num == 50 || num == 51) || (num == 35 || num == 36 || (num == 37 || num == 38))))) {
        dealerScore += 10
    }
}
function Another () {
	
}
function drawcards () {
    randomIndex = deck.indexOf(deck._pickRandom())
    card = sprites.create(deck.removeAt(randomIndex), SpriteKind.Player)
    cardPoint = false
    fixerTrue()
    card.setPosition(40, 90)
    pointTotalPlayer(trueindex, true)
    randomIndex = deck.indexOf(deck._pickRandom())
    card = sprites.create(deck.removeAt(randomIndex), SpriteKind.Player)
    fixerTrue()
    cardPoint = false
    card.setPosition(120, 30)
    pointTotalDealer(trueindex, true)
    console.log(playerScore)
    console.log(dealerScore)
    game.showLongText("Your score " + playerScore, DialogLayout.Bottom)
    game.showLongText("dealer score " + dealerScore, DialogLayout.Bottom)
}
function winOrLose () {
    if (playerScore > dealerScore) {
        if (game.ask("win? do you want to play again?")) {
            Another()
        } else {
        	
        }
    } else if (playerScore < dealerScore) {
        if (game.ask("lose? do you want to play again?")) {
            Another()
        } else {
        	
        }
    } else if (playerScore == dealerScore) {
        if (game.ask("tie? do you want to play again?")) {
            Another()
        } else {
        	
        }
    }
}
function Deck () {
    deck = [
    assets.image`cardSuitHA`,
    assets.image`cardSuitH2`,
    assets.image`cardSuitH3`,
    assets.image`cardSuitH4`,
    assets.image`cardSuitH5`,
    assets.image`cardSuitH6`,
    assets.image`cardSuitH7`,
    assets.image`cardSuitH8`,
    assets.image`cardSuitH9`,
    assets.image`cardSuitH10`,
    assets.image`cardSuitHU`,
    assets.image`cardSuitHQ`,
    assets.image`cardSuitHK`,
    assets.image`cardSuitDA`,
    assets.image`cardSuitD2`,
    assets.image`cardSuitD3`,
    assets.image`cardSuitD4`,
    assets.image`cardSuitD5`,
    assets.image`cardSuitD6`,
    assets.image`cardSuitD7`,
    assets.image`cardSuitD8`,
    assets.image`cardSuitD9`,
    assets.image`cardSuitD10`,
    assets.image`cardSuitDU`,
    assets.image`cardSuitDQ`,
    assets.image`cardSuitDK`,
    assets.image`cardSuitSA`,
    assets.image`cardSuitS2`,
    assets.image`cardSuitS3`,
    assets.image`cardSuitS4`,
    assets.image`cardSuitS5`,
    assets.image`cardSuitS6`,
    assets.image`cardSuitS7`,
    assets.image`cardSuitS8`,
    assets.image`cardSuitS9`,
    assets.image`cardSuitS10`,
    assets.image`cardSuitSU`,
    assets.image`cardSuitSQ`,
    assets.image`cardSuitSK`,
    assets.image`cardSuitCA`,
    assets.image`cardSuitC2`,
    assets.image`cardSuitC3`,
    assets.image`cardSuitC4`,
    assets.image`cardSuitC5`,
    assets.image`cardSuitC6`,
    assets.image`cardSuitC7`,
    assets.image`cardSuitC8`,
    assets.image`cardSuitC9`,
    assets.image`cardSuitC10`,
    assets.image`cardSuitCU`,
    assets.image`cardSuitCQ`,
    assets.image`cardSuitCK`
    ]
    pointDeck = [
    assets.image`cardSuitHA`,
    assets.image`cardSuitH2`,
    assets.image`cardSuitH3`,
    assets.image`cardSuitH4`,
    assets.image`cardSuitH5`,
    assets.image`cardSuitH6`,
    assets.image`cardSuitH7`,
    assets.image`cardSuitH8`,
    assets.image`cardSuitH9`,
    assets.image`cardSuitH10`,
    assets.image`cardSuitHU`,
    assets.image`cardSuitHQ`,
    assets.image`cardSuitHK`,
    assets.image`cardSuitDA`,
    assets.image`cardSuitD2`,
    assets.image`cardSuitD3`,
    assets.image`cardSuitD4`,
    assets.image`cardSuitD5`,
    assets.image`cardSuitD6`,
    assets.image`cardSuitD7`,
    assets.image`cardSuitD8`,
    assets.image`cardSuitD9`,
    assets.image`cardSuitD10`,
    assets.image`cardSuitDU`,
    assets.image`cardSuitDQ`,
    assets.image`cardSuitDK`,
    assets.image`cardSuitSA`,
    assets.image`cardSuitS2`,
    assets.image`cardSuitS3`,
    assets.image`cardSuitS4`,
    assets.image`cardSuitS5`,
    assets.image`cardSuitS6`,
    assets.image`cardSuitS7`,
    assets.image`cardSuitS8`,
    assets.image`cardSuitS9`,
    assets.image`cardSuitS10`,
    assets.image`cardSuitSU`,
    assets.image`cardSuitSQ`,
    assets.image`cardSuitSK`,
    assets.image`cardSuitCA`,
    assets.image`cardSuitC2`,
    assets.image`cardSuitC3`,
    assets.image`cardSuitC4`,
    assets.image`cardSuitC5`,
    assets.image`cardSuitC6`,
    assets.image`cardSuitC7`,
    assets.image`cardSuitC8`,
    assets.image`cardSuitC9`,
    assets.image`cardSuitC10`,
    assets.image`cardSuitCU`,
    assets.image`cardSuitCQ`,
    assets.image`cardSuitCK`
    ]
}
let card: Sprite = null
let deck: Image[] = []
let pointDeck: Image[] = []
let randomIndex = 0
let trueindex = 0
let paint = 0
let fixer = 0
let dealerScore = 0
let playerScore = 0
let cardPoint = false
let playerTurn = false
playerTurn = true
cardPoint = true
playerScore = 0
dealerScore = 0
let curentcardValue = 0
fixer = 0
paint = 0
scene.setBackgroundImage(assets.image`background`)
Deck()
drawcards()
