input.onButtonPressed(Button.A, function () {
    music.playMelody("C D E F G A B C5 ", 120)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
})
input.onButtonPressed(Button.AB, function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
basic.forever(function () {
    if (eboticsMIBO.eboticsMIBO_sonarbit(eboticsMIBO.Distance_Unit.Distance_Unit_mm) < 200) {
        if (eboticsMIBO.eboticsMIBO_sonarbit(eboticsMIBO.Distance_Unit.Distance_Unit_mm) < 150) {
            basic.showIcon(IconNames.No)
            eboticsMIBO.back()
        } else {
            basic.showIcon(IconNames.Happy)
            eboticsMIBO.forward()
        }
    } else {
        eboticsMIBO.brake()
        basic.showIcon(IconNames.Sad)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
