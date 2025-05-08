function pointTotalPlayer (num: number, trueOrFalse: boolean) {
    fixerTrue(randomIndex)
    if (trueOrFalse && (blue == 0 || blue == 13 || (blue == 26 || blue == 39))) {
        if (game.ask("1 or 11? 1=A 11=B")) {
            playerScore += 1
        } else {
            playerScore += 11
        }
    } else if (trueOrFalse && (blue == 1 || blue == 14 || (blue == 27 || blue == 40))) {
        playerScore += 2
    } else if (trueOrFalse && (blue == 2 || blue == 15 || (blue == 28 || blue == 41))) {
        playerScore += 3
    } else if (trueOrFalse && (blue == 3 || blue == 16 || (blue == 29 || blue == 42))) {
        playerScore += 4
    } else if (trueOrFalse && (blue == 4 || blue == 17 || (blue == 30 || blue == 43))) {
        playerScore += 5
    } else if (trueOrFalse && (blue == 5 || blue == 18 || (blue == 31 || blue == 44))) {
        playerScore += 6
    } else if (trueOrFalse && (blue == 6 || blue == 19 || (blue == 32 || blue == 45))) {
        playerScore += 7
    } else if (trueOrFalse && (blue == 7 || blue == 20 || (blue == 33 || blue == 46))) {
        playerScore += 8
    } else if (trueOrFalse && (blue == 8 || blue == 21 || (blue == 34 || blue == 47))) {
        playerScore += 9
    } else if (trueOrFalse && (blue == 9 || blue == 10 || (blue == 11 || blue == 12) || (blue == 22 || blue == 23 || (blue == 24 || blue == 25)) || (blue == 35 || blue == 36 || (blue == 37 || blue == 38) || (blue == 48 || blue == 49 || (blue == 50 || blue == 51))))) {
        playerScore += 10
    }
    randomIndex = 0
    return playerScore
}
function fixerTrue (num: number) {
    blue = num
    if (pointDeck[num] != deck[blue + paint]) {
        fixer += 1
        paint += 1
    }
    if (pointDeck[num] == deck[blue - paint]) {
        blue += blue - fixer
        paint = 0
    }
    console.log(blue)
    return blue
}
function dealerEnd () {
    if (playerTurn == false && dealerScore >= 16) {
    	
    } else {
    	
    }
    game.showLongText("Your score " + playerScore + "            " + "dealer score " + dealerScore, DialogLayout.Bottom)
    winOrLose()
}
function pointTotalDealer (ber: number, trueOrFalse: boolean) {
    fixerTrue2(ber)
    if (trueOrFalse && (blueIndex == 0 || blueIndex == 13 || (blueIndex == 26 || blueIndex == 39))) {
        if (dealerScore <= 10 && (blueIndex == 0 || blueIndex == 13 || (blueIndex == 26 || blueIndex == 39))) {
            dealerScore += 11
        } else {
            dealerScore += 1
        }
    } else if (trueOrFalse && (blueIndex == 1 || blueIndex == 14 || (blueIndex == 27 || blueIndex == 40))) {
        dealerScore += 2
    } else if (trueOrFalse && (blueIndex == 2 || blueIndex == 15 || (blueIndex == 28 || blueIndex == 41))) {
        dealerScore += 3
    } else if (trueOrFalse && (blueIndex == 3 || blueIndex == 16 || (blueIndex == 29 || blueIndex == 42))) {
        dealerScore += 4
    } else if (trueOrFalse && (blueIndex == 4 || blueIndex == 17 || (blueIndex == 30 || blueIndex == 43))) {
        dealerScore += 5
    } else if (trueOrFalse && (blueIndex == 5 || blueIndex == 18 || (blueIndex == 31 || blueIndex == 44))) {
        dealerScore += 6
    } else if (trueOrFalse && (blueIndex == 6 || blueIndex == 19 || (blueIndex == 32 || blueIndex == 45))) {
        dealerScore += 7
    } else if (trueOrFalse && (blueIndex == 7 || blueIndex == 20 || (blueIndex == 33 || blueIndex == 46))) {
        dealerScore += 8
    } else if (trueOrFalse && (blueIndex == 8 || blueIndex == 21 || (blueIndex == 34 || blueIndex == 47))) {
        dealerScore += 9
    } else if (trueOrFalse && (blueIndex == 9 || blueIndex == 10 || (blueIndex == 11 || blueIndex == 12) || (blueIndex == 22 || blueIndex == 23 || (blueIndex == 24 || blueIndex == 25)) || (blueIndex == 35 || blueIndex == 36 || (blueIndex == 37 || blueIndex == 38) || (blueIndex == 48 || blueIndex == 49 || (blueIndex == 50 || blueIndex == 51))))) {
        dealerScore += 10
    }
    randomIndex = 0
    return dealerScore
}
function Another () {
	
}
function drawcards () {
    randomIndex = deck.indexOf(deck._pickRandom())
    card = sprites.create(deck.removeAt(randomIndex), SpriteKind.Player)
    cardPoint = false
    card.setPosition(40, 90)
    pointTotalPlayer(randomIndex, true)
    randomIndex = deck.indexOf(deck._pickRandom())
    card = sprites.create(deck.removeAt(randomIndex), SpriteKind.Player)
    cardPoint = false
    card.setPosition(120, 30)
    pointTotalDealer(randomIndex, true)
    randomIndex = deck.indexOf(deck._pickRandom())
    card = sprites.create(deck.removeAt(randomIndex), SpriteKind.Player)
    cardPoint = false
    card.setPosition(56, 90)
    pointTotalPlayer(randomIndex, true)
    randomIndex = deck.indexOf(deck._pickRandom())
    card = sprites.create(deck.removeAt(randomIndex), SpriteKind.Player)
    cardPoint = false
    card.setPosition(104, 30)
    pointTotalDealer(randomIndex, true)
    game.showLongText("Your score " + playerScore, DialogLayout.Bottom)
    game.showLongText("dealer score " + dealerScore, DialogLayout.Bottom)
}
function fixerTrue2 (ber: number) {
    blueIndex = ber
    if (pointDeck[ber] != deck[blueIndex + paint]) {
        fixer += 1
        paint += 1
    }
    if (pointDeck[ber] == deck[blueIndex - paint]) {
        blueIndex += blueIndex - fixer
        paint = 0
    }
    console.log(blueIndex)
    return blueIndex
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
let blueIndex = 0
let deck: Image[] = []
let pointDeck: Image[] = []
let blue = 0
let randomIndex = 0
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
let lowestValue = 0
scene.setBackgroundImage(assets.image`background`)
Deck()
drawcards()
