radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.motors(35, 43)
    }
    if (receivedNumber == 2) {
        cuteBot.moveTime(cuteBot.Direction.left, 30, 0.4)
    }
    if (receivedNumber == 3) {
        cuteBot.stopcar()
        cuteBot.moveTime(cuteBot.Direction.right, 30, 0.4)
    }
    if (receivedNumber == 4) {
        cuteBot.stopcar()
    }
    if (receivedNumber == 5) {
        cuteBot.motors(-40, -32)
    }
})
radio.setGroup(1)
