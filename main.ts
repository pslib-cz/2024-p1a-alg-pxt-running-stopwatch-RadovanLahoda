let ongoing = false
let time = 0

basic.forever(function () {
    if (ongoing) {
        basic.pause(1000)
        time++
        whaleysans.showNumber(time)
    }
})

input.onButtonPressed(Button.B, function () {
    if (ongoing) {
        ongoing = false
        whaleysans.showNumber(time)
        basic.clearScreen()
        basic.pause(500)
        basic.showString("seconds")
    }
})

input.onButtonPressed(Button.A, function () {
    if (!ongoing) {
        ongoing = true
        time = 0
    }
})