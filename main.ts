input.onGesture(Gesture.Shake, function () {
    player1 = randint(0, 2)
    if (player1 == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (player1 == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
        basic.clearScreen()
    }
    basic.pause(1000)
    player2 = randint(0, 2)
    if (player2 == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (player2 == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (player1 == 0 && player2 == 0) {
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (player1 == 0 && player2 == 1) {
        basic.pause(1000)
        player2_pontok += 0.5
    }
    if (player1 == 1 && player2 == 1) {
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (player1 == 2 && player2 == 1) {
        basic.pause(1000)
        player1_pontok += 0.5
    }
    if (player1 == 2 && player2 == 2) {
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (player1 == 0 && player2 == 2) {
        basic.pause(1000)
        player1_pontok += 0.5
    }
    if (player1 == 1 && player2 == 0) {
        basic.pause(1000)
        player1_pontok += 0.5
    }
    if (player1 == 1 && player2 == 2) {
        basic.pause(1000)
        player2_pontok += 0.5
    }
    if (player1 == 2 && player2 == 0) {
        basic.pause(1000)
        player2_pontok += 0.5
    }
    player1 = 0
    player2 = 0
    if (player1_pontok == 1) {
        basic.showString("P1-1")
        player1_pontok += 0.5
    }
    if (player1_pontok == 2) {
        basic.showString("P1-2")
        player1_pontok += 0.5
    }
    if (player1_pontok == 3) {
        basic.showString("P1-3")
        player1_pontok += 0.5
    }
    if (player1_pontok == 4) {
        basic.showString("P1-4")
        player1_pontok += 0.5
    }
    if (player1_pontok == 5) {
        basic.showString("P1 Win!")
        music.playMelody("C C G G A A G - ", 120)
    }
    if (player2_pontok == 1) {
        basic.showString("P2-1")
        player2_pontok += 0.5
    }
    if (player2_pontok == 2) {
        basic.showString("P2-2")
        player2_pontok += 0.5
    }
    if (player2_pontok == 3) {
        basic.showString("P2-3")
        player2_pontok += 0.5
    }
    if (player2_pontok == 4) {
        basic.showString("P2-4")
        player2_pontok += 0.5
    }
    if (player2_pontok == 5) {
        basic.showString("P2 Win!")
        music.playMelody("C C G G A A G - ", 120)
    }
})
let player2 = 0
let player1 = 0
let player2_pontok = 0
let player1_pontok = 0
music.playMelody("G G G G C - - - ", 120)
player1_pontok = 0.5
player2_pontok = 0.5
basic.forever(function () {
    if ((player1_pontok || player2_pontok) == 5) {
        basic.pause(500)
        player1 = 0
        player2 = 0
        player1_pontok = 0
        player2_pontok = 0
    }
})
