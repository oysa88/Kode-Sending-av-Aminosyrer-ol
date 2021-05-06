input.onButtonPressed(Button.A, function () {
    SendeTekst = teksttabell.shift()
    basic.showString(SendeTekst)
    radio.sendValue(SendeTekst, 1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(SluttMottak)
})
input.onButtonPressed(Button.B, function () {
    SluttSending = kodeTabell.shift()
    basic.showString(SluttSending)
    radio.sendValue(SluttSending, 2)
})
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        basic.showString(name)
        if (name == "ABC") {
            TekstMottatt = "UTG"
        } else if (name == "DEF") {
            TekstMottatt = "WHO"
        } else if (name == "GHI") {
            TekstMottatt = "FHI"
        } else if (name == "JKL") {
            TekstMottatt = "KRF"
        }
    }
    if (value == 2) {
        basic.showString(name)
        if (name == "UTG") {
            SluttMottak = "AMINO"
        } else if (name == "WHO") {
            SluttMottak = "SYRE"
        } else if (name == "FHI") {
            SluttMottak = "BASE"
        } else if (name == "KRF") {
            SluttMottak = "RISLING"
        }
    }
})
let TekstMottatt = ""
let SluttSending = ""
let SluttMottak = ""
let SendeTekst = ""
let kodeTabell: string[] = []
let teksttabell: string[] = []
teksttabell = ["ABC", "DEF", "GHI"]
kodeTabell = ["UTG", "FHI", "WHO"]
