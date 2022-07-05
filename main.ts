input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 90)
})
let sprite: game.LedSprite = null
let speed = 500
sprite = game.createSprite(2, 2)
while (!(game.isGameOver())) {
    if (sprite.isTouchingEdge()) {
        music.playMelody("C5 A B G A F G E ", 240)
        game.gameOver()
    } else {
        basic.pause(speed)
        sprite.move(1)
    }
}
basic.clearScreen()
basic.forever(function () {
    music.playMelody("F F F F F F F F ", 120)
})
