//Startovní čára
radio.setGroup(73)
enum State { READY, RUNNING, FINISH }
let akce: State;
let stopwatch: number;
let finalTime: number;
const reset = () => {
    akce = State.READY
    stopwatch = 0
    finalTime = 0
    Sensors.SetLightLevel()
}
reset()

radio.onReceivedNumber(function (receivedNumber: number) {

    if (akce === State.FINISH && receivedNumber === 0) {
        reset();
    }
    // music.playTone(400,300)
    if (akce === State.READY && receivedNumber === 1) {
        stopwatch = input.runningTime()
        basic.showNumber(receivedNumber)
        akce = State.RUNNING
    }

    if (receivedNumber === 2) {
        reset();
    }
})
input.onButtonPressed(Button.A, function() {
    if (akce === State.FINISH) {
        basic.showNumber(finalTime)
    }
})

input.onButtonPressed(Button.B, function() {
   radio.sendNumber(0)
   reset()
})

Sensors.OnLightDrop(function () {
    if (akce === State.RUNNING) {
        finalTime = (input.runningTime() - stopwatch) / 1000
        radio.sendValue("endTime", finalTime)
        basic.showNumber(finalTime)

        // Store the final time for later use
        akce = State.FINISH
    }
})