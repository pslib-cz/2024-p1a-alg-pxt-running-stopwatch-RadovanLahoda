//Startovní čára
radio.setGroup(73)
Sensors.SetLightLevel()
let start: boolean = false

Sensors.OnLightDrop(function(){
    //1 = start, 0 = zrušeno, 2 = konec
    input.onButtonPressed(Button.A){

    }
    if (!start)
    radio.sendValue("start", 1)
    start = true
})

radio.onReceivedValue(function("konec", 2){
    whaleysans.showNumber(radio.receivedPacket)
})