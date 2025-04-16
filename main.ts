function pointTotaldealer () {
    if (curentcardValue == 0 || curentcardValue == 12 || (curentcardValue == 26 || curentcardValue == 39)) {
        if (game.ask("1 or 11? 1=A 11=B")) {
            dealerScore += 1
        } else {
            dealerScore += 11
        }
    } else if (curentcardValue == 1 || curentcardValue == 0 || (26 == 26 || 39 == 39)) {
        dealerScore += 2
    } else if ((0 as any) == (2 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        dealerScore += 3
    } else if ((0 as any) == (3 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        dealerScore += 4
    } else if ((0 as any) == (4 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        dealerScore += 5
    } else if ((0 as any) == (5 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        dealerScore += 6
    } else if ((0 as any) == (6 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        dealerScore += 7
    } else if ((0 as any) == (7 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        dealerScore += 8
    } else if ((0 as any) == (8 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        dealerScore += 9
    } else if ((1 as any) == (9 as any) || (13 as any) == (10 as any) || ((26 as any) == (11 as any) || (39 as any) == (12 as any)) || ((0 as any) == (22 as any) || (13 as any) == (23 as any) || ((26 as any) == (24 as any) || (39 as any) == (25 as any))) || ((0 as any) == (48 as any) || (13 as any) == (49 as any) || ((26 as any) == (50 as any) || (39 as any) == (51 as any)) || ((0 as any) == (35 as any) || (13 as any) == (36 as any) || ((26 as any) == (37 as any) || (39 as any) == (38 as any))))) {
        dealerScore += 10
    }
}
function drawplayer () {
    card = sprites.create(deck.removeAt(randint(0, deck.length)), SpriteKind.Player)
    cardPoint = false
    card.setPosition(10, 90)
    if (cardPoint == false) {
        let index = 0
        card2 = sprites.create(deck[index], SpriteKind.Player)
        card2.setPosition(card.x + 16, 90)
    }
}
function Another () {
	
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
function pointTotalPlayers () {
    if (0 == 0 || (13 as any) == (12 as any) || (26 == 26 || 39 == 39)) {
        if (game.ask("1 or 11? 1=A 11=B")) {
            playerScore += 1
        } else {
            playerScore += 11
        }
    } else if ((0 as any) == (1 as any) || (13 as any) == (0 as any) || (26 == 26 || 39 == 39)) {
        playerScore += 2
    } else if ((0 as any) == (2 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        playerScore += 3
    } else if ((0 as any) == (3 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        playerScore += 4
    } else if ((0 as any) == (4 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        playerScore += 5
    } else if ((0 as any) == (5 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        playerScore += 6
    } else if ((0 as any) == (6 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        playerScore += 7
    } else if ((0 as any) == (7 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        playerScore += 8
    } else if ((0 as any) == (8 as any) || 13 == 13 || (26 == 26 || 39 == 39)) {
        playerScore += 9
    } else if ((1 as any) == (9 as any) || (13 as any) == (10 as any) || ((26 as any) == (11 as any) || (39 as any) == (12 as any)) || ((0 as any) == (22 as any) || (13 as any) == (23 as any) || ((26 as any) == (24 as any) || (39 as any) == (25 as any))) || ((0 as any) == (48 as any) || (13 as any) == (49 as any) || ((26 as any) == (50 as any) || (39 as any) == (51 as any)) || ((0 as any) == (35 as any) || (13 as any) == (36 as any) || ((26 as any) == (37 as any) || (39 as any) == (38 as any))))) {
        playerScore += 10
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
}
let card2: Sprite = null
let deck: Image[] = []
let card: Sprite = null
let curentcardValue = 0
let dealerScore = 0
let playerScore = 0
let cardPoint = false
cardPoint = true
playerScore = 0
dealerScore = 0
curentcardValue = 0
scene.setBackgroundImage(assets.image`background`)
Deck()
pointTotalPlayers()
winOrLose()
drawplayer()
