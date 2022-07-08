let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.setBrightness(30)
basic.forever(function () {
    if (input.soundLevel() >= 70) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    strip.show()
    basic.showNumber(input.soundLevel())
})
