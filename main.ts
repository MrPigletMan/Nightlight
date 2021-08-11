input.onGesture(Gesture.ScreenUp, function () {
    Light_On = 1
})
input.onGesture(Gesture.ScreenDown, function () {
    Light_On = 0
})
let Light_On = 0
radio.setGroup(1)
Light_On = 1
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    while (Light_On + 0 == 1) {
        if (input.lightLevel() <= 100) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (input.lightLevel() > 150) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (input.lightLevel() > 100 && input.lightLevel() < 150) {
            basic.showLeds(`
                # # # . .
                # # # . .
                # # # . .
                # # # . .
                # # # . .
                `)
        }
    }
    while (Light_On + 0 == 0) {
        if (input.lightLevel() <= 100) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (input.lightLevel() > 150) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
