radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.motors(50, 50)
    }
    if (receivedNumber == 2) {
        cuteBot.turnleft()
    }
    if (receivedNumber == 3) {
        cuteBot.turnright()
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
