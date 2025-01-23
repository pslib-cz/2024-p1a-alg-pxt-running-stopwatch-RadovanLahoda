let bomboklada = false
let casomira = 0

basic.forever(function () {
    if (bomboklada) {
        basic.pause(100)
        casomira+=1
        whaleysans.showNumber(casomira)
    }
})

input.onButtonPressed(Button.B, function () {
    if (bomboklada) {
        bomboklada = false
        whaleysans.showNumber(casomira)
        basic.clearScreen()
        basic.pause(500)
        basic.showString("seconds")
    }
})

input.onButtonPressed(Button.A, function () {
    if (!bomboklada) {
        bomboklada = true
        casomira = 0
    }
})