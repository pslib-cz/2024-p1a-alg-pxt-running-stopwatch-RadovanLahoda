//Startovní čára
Sensors.SetLightLevel()
radio.setGroup(73)
enum State { READY, RUNNING, FINISH }
let akce: State = State.READY
let stopwatch: number = 0

radio.onReceivedNumber(function (receivedNumber: number) {

    if (akce === State.FINISH) {
        akce = State.READY
    }

    if (akce === State.READY) {
        stopwatch = input.runningTime()
        basic.showNumber(receivedNumber)
        akce = State.RUNNING
    }

})

Sensors.OnLightDrop(function () {
    if (akce === State.RUNNING) {
        let finalTime: number
        finalTime = (input.runningTime() - stopwatch) / 1000
        //whaleysans.showNumber(input.runningTime())
        radio.sendValue("endTime", finalTime)
        basic.showNumber(2)
        akce = State.FINISH
    }
})

