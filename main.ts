radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.motors(50, 50)
    }
    if (receivedNumber == 2) {
        cuteBot.moveTime(cuteBot.Direction.left, 20, 1)
    }
    if (receivedNumber == 3) {
        cuteBot.moveTime(cuteBot.Direction.forward, 20, 1)
    }
    if (receivedNumber == 4) {
        cuteBot.moveTime(cuteBot.Direction.backward, 25, 2)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
