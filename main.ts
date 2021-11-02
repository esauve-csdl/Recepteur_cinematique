radio.onReceivedValue(function (name, value) {
    if (name == "acc") {
        acceleration = value
    }
    if (name == "T") {
        temps = value
        acceleration = acceleration * 0.0098
        serial.writeLine("" + temps + " ; " + acceleration)
    }
})
let acceleration = 0
let temps = 0
basic.showLeds(`
    # # # . .
    # . . # .
    # # # . .
    # . . # .
    # . . # .
    `)
radio.setGroup(1)
serial.redirectToUSB()
temps = 0
radio.sendNumber(temps)
