enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    platform,
    fuel
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("secret unloked good job by jake", DialogLayout.Bottom)
    info.changeScoreBy(1000000)
    scene.setBackgroundImage(assets.image`game title`)
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    gameover = 1
    game.over(false)
})
let jet = 0
let difficulty = 0
let gameover = 0
music.setVolume(255)
gameover = 0
music.magicWand.play()
scene.setBackgroundImage(assets.image`game title`)
game.showLongText("SPODERMAN 2 (beta/0.02) ", DialogLayout.Bottom)
info.setScore(0)
let fuel = 100
let ground = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555559999999999555555555555552222222222244444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999555555999999999999999999999995559999999555555555555552222222222244444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999555555999999999999999999999999999999999999999955555555555555222222222244444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555222222222224444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555522222222222444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555552222222222444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555222222222244444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555599999999555555555555555522222222224444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555599999999999999555555555555555552222222222224444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955559999999999999999999555555555555555555222222222222444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995599999999999999999999999955555555555555555522222222222224444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999999999999999999999955555555555555555552222222222222244444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555599999999999999999999999999995555555555555555555522222222222224444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955999999999999999999999999999999995555555555555555555552222222222222244
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999995599999999999999999999999999999999999555555555555555555555522222222222224
    9999999999999999999999999999999999999999999999999999999999999999999999999999999555555559999999999999999999999999999999999999955555555555555555555552222222222222
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555222222222222
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555522222222222
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955999999999999955555555555555555555552222222222
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995599999999999999955555555555555555555555222222222
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999995555555555555555555555552222222
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999999999999999555555555555555555555555222222
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999599999999999999999999955555555555555555555555522222
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955999999999999999999999995555555555555555555555552222
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999599999999999999999999999999955555555555555555555555552
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999999999599999995555555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999559999999999999999999999599999999955555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955999999999999999999999999599999999995555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995599999999999999999999999995599999999999555555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999559999999999999999999999999995999999999999955555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999995999955555555999999999999999999999999999959999999999999995555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999555599999999999999999999999999999999999599999999999999999955555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999999995555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999999999999999999955555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995599999999999999999999999999555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999999999999999955555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999999999999999999999999999955555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999599999999999999999999999999999999999999555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999999999999999959999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999999999999999959999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999599999999999999999999959999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999599999999999999999999959999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999995999999999999999999999959999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999995999999999999999999999959999999999999995999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999995999999999999999999999599999999999999995999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999959999999999999999999999599999999999999995999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999959999999999999999999999599999999999999959999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999959999999999999999999999599999999999999959999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999599999999999999959999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999995999999999999999959999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999bb999bbbbbbbbbbbbbbbbbb9999999999999999999999999999999995999999999999999959999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bb999bbbbbbbbbbbbbbbbbb9999999999999999999999999999999995999999999999999959999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bb999bbbbbbbbbbbbbbbbbb9999999999999999999999999999999995999999999999999959999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999995999999999999999959999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999959999999999999999959999999
    9999999999bbbb999bbb999bbb999bbbb9999999999999999999999999999999999999999999999bb999b999bb999bbbbbbbbb9999999999999999999999999999999959999999999999999959999999
    9999999999bbbb999bbb999bbb999bbbb9999999999999999999999999999999999999999999999bb999b999bb999bbbbbbbbb9999999999999999999999999999999959999999999999999959999999
    9999999999bbbb999bbb999bbb999bbbb9999999999999999999999999999999999999999999999bb999b999bb999bbbbbbbbb9999999999999999999999999999999959999999999999999959999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999959999999999999999995999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999ddddddddddd9999999999959999999999999999995999999
    9999999999bbbb999bbb999bbb999bbbb9999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999ddddddddddd9999999999999999999999999999995999999
    9999999999bbbb999bbb999bbb999bbbb9999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999ddddddddddd9999999999999999999999999999995999999
    9999999999bbbb999bbb999bbb999bbbb9999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999ddddddddddd9999999999999999999999999999995999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bb999bbbbbbbbbbbbbbbbbb9999999999ddddddddddd9999999999999999999999999999995599999
    9999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bb999bbbbbbbbbbbbbbbbbb9999999999ddddddddddd9999999999999999999999999999999999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999bb999bbbbbbbbbbbbbbbbbb9999999999ddddddddddd9999999999999999999999999999999999999
    9999999999bbbb999bbb999bbb999bbbb9999999999999999999999999999999999999999999999bbbbbbbbbbbb999bbbbbbbbbbbbbbbbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbb999bbb999bbb999bbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bb999bbbbbbb999bbbbbbbbbbbbbbbbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbb999bbb999bbb999bbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bb999bbbbbbb999bbbbbbbbbbbbbbbbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bb999bbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbb999bbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbb999bbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbb999bbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999b999bbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999b999bbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbb99999999999999999999999999999999
    9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999b999bbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbb99999999999999999999999999999999
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbb99999999999999999999999999999999
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b999bb999bbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b999bb999bbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b999bb999bbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb999bbbbbbbbbbbbbbbdddddddddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbb999bbbbb999bbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb999bbbbbbbbbbbbbbbdddddddddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbb999bbbbb999bb999bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb999bbbbbbbbbbbbbbbdddddddddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbb999bbbbb999bb999bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbb999bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd888ddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd888ddddddddddbb999999999999999dddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd888ddddddddddbb999999999999999ddd888dddddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbb999999999999999ddd888dddddddddddddddbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbddd888dddddddddddddddbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb
    ddddddddddddddddddbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb
    ddddddddddddddddddbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddd888ddddddddddbbbbbbbbbbbbbbbbbbbb
    ddddddddddddddddddbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbfffbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddd888ddddddddddbbbbbbbbbbbbbbbbbbbb
    ddddddddddddddddddbbbbbbbbbbbbbbbbbbbddddddddddddddddffffbffbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddd888ddddddddddbbbbbbbbbbbbbbbbbbbb
    ddddddddddddddddddbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbfbbbbbbbbbbbdddddd888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb
    ddddddddddddddddddbbbbbbbbbbbbbbbbbbbdddddddbbbbbdddddbbbbbfbbbbbbbbbbbdddddd888ddddddddddddddd888ddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb
    dddd888dd888ddddddbbbbbbbbbbbbbbbbbbbdddddddbbbbbdddddbbbbbfbbbbbbbbbbbdddddd888ddddddddddddddd888ddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb
    dddd888dd888ddddddbbbbbbbbbbbbbbbbbbbdddddddbbbbbdddddbbbbbfbbbbbbbbbbbdddddddddddddddddddddddd888ddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb
    dddd888dd888ddddddbbbbbbfffffffffbbbbdddddddbbbbbdddddbbbbbfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888dddddddddddddddddddddd
    ddddddddddddddddddbbbbbbfbbbbbbbffbbbdddddddbbbbbdddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddd888dddddddddddddddddddddd
    ddddddddddddddddddbbbbbbffbbbbbbbbbbbdddddddbbbbbdddddbbbbbddddddddddddddddddddddddddddbbbbbddddddddddddddddddddbbbbbdddddddddddddddddd888dddddddddddddddddddddd
    dddddddddddddddddddddddddfdbbbbbddddddddddddbbbbbdddddbbbbbbbbbbbbbddddddddddddddddddddbbbbbddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddd
    dddbbbbbbbbbbddddddddddddfdbbbbbbbbbbdddddddbbbbbdddddbbbbbbbbbbbbbddddddddddddddddddddbbbbbddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddd
    dddbbbbbbbbbbddddddddddddddbbbbbbbbbbdddddddbbbbbdddddbbbbbbbbbbbbbddddddddddddddddddddbbbbbddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddd
    dddbbbbbbbbbbddddddddddddddbbbbbbbbbbdddddddbbbbbdddbbbbbbbbbbbbbbbddddddddddddddddddddbbbbbddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddd
    dbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbddddddddddbbbbdddddddddddddbbbbbbbbdddd
    dbbbb88888bbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbb88888bbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbddddddddddbbbbdddddddddddddbbbbbbbbdddd
    dbbbb88888bbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbb88888bbbbbbbbbbdddddbbbbbbb88888bbbbbbbbddddddddddbbbbdddddddddddddbbbbbbbbdddd
    dbbbb88888bbbbbbbbbbdddddbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbdddddbbbb88888bbbbbbbbbbdddddbbbbbbb88888bbbbbbbbddddddddddbbbbdddddddddddddbbbbbbbbbbbb
    dbbbb88888bbbbbbbbbbdddddbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbdddddbbbb88888bbbbbbbbbbdddddbbbbbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbb
    dbbbb88888bbbbbbbbbbdddddbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbdddddbbbb88888bbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbb
    dbbbbbbbbbbbbbbbbbbbdddddbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbbbbbbbbbbbbbbbbbbbdddddbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
let fuelicon = sprites.create(img`
    . 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 9 9 9 9 9 9 1 
    1 1 1 1 1 1 1 1 
    . 1 1 1 1 1 1 . 
    `, SpriteKindLegacy.fuel)
fuelicon.setPosition(10, 12)
let platform = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    fff11111fffffff11111fffff111111f
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKindLegacy.platform)
let platform2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    fff11111fffffff11111fffff111111f
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKindLegacy.platform)
let platform3 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    fff11111fffffff11111fffff111111f
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKindLegacy.platform)
let platform4 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    fff11111fffffff11111fffff111111f
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKindLegacy.platform)
let platform5 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    fff11111fffffff11111fffff111111f
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKindLegacy.platform)
let platform6 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    fff11111fffffff11111fffff111111f
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKindLegacy.platform)
let platform7 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    fff11111fffffff11111fffff111111f
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKindLegacy.platform)
let platform8 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    fff11111fffffff11111fffff111111f
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKindLegacy.platform)
let mySprite2 = sprites.create(assets.image`spooder man`, SpriteKindLegacy.Player)
platform.x = 32
platform3.x = 96
platform5.x = 160
platform7.x = 224
platform.y = 105
platform3.y = 105
platform5.y = 105
platform7.y = 105
mySprite2.y = 60
mySprite2.x = 50
let electric = sprites.create(img`
    . . . . . . . . 9 . . . . . . . 
    . 9 . . . . . 9 . . . . . 9 . . 
    9 . 9 . . . . . 2 . . . 9 9 . . 
    . . . . 2 2 2 2 2 2 2 2 . . . 9 
    . . . 2 2 2 2 2 2 1 2 2 2 . 9 . 
    9 . 2 2 2 1 2 2 2 2 2 2 2 2 . . 
    . . 2 2 1 2 2 2 2 2 2 1 2 2 . . 
    . . 2 2 1 2 2 1 1 1 2 2 2 2 . . 
    . 2 2 2 2 1 1 1 1 1 1 2 2 2 . 9 
    . . 2 2 2 2 2 2 1 2 2 2 2 2 . . 
    . . 2 2 1 2 1 2 1 2 1 2 2 2 . . 
    9 . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
    . . . 2 2 1 2 2 2 2 2 2 2 . . . 
    . 9 . . 2 2 2 2 2 2 2 2 . 9 . . 
    . . . . 2 . . . . . . . 9 . . . 
    9 . . . . . . . 9 . . . . 9 . . 
    `, SpriteKindLegacy.Enemy)
electric.y = 106
electric.x = 500
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
forever(function () {
    if (info.score() > 0) {
        difficulty = 0
    }
    if (info.score() > 20) {
        difficulty = 1
    }
    if (info.score() > 40) {
        difficulty = 2
    }
    if (info.score() > 60) {
        difficulty = 3
    }
    if (info.score() > 80) {
        difficulty = 4
    }
    if (info.score() > 100) {
        difficulty = 6
    }
})
forever(function () {
    platform2.setPosition(platform.x + 31, platform.y)
    platform4.setPosition(platform3.x + 31, platform3.y)
    platform6.setPosition(platform5.x + 31, platform5.y)
    platform8.setPosition(platform7.x + 31, platform7.y)
    platform.x += -1
    platform3.x += -1
    platform5.x += -1
    platform7.x += -1
    pause(10)
})
forever(function () {
    if (controller.right.isPressed() && mySprite2.x < 150) {
        mySprite2.x += 1
    }
})
forever(function () {
    if (fuel > 100) {
        fuel = 100
    }
    if (fuel < 0) {
        fuel = 0
    }
})
forever(function () {
    if (jet == 1) {
        ground = 0
        fuel += -1
        pause(20)
        mySprite2.startEffect(effects.spray, 50)
        mySprite2.vy += -30
    } else {
        if (ground == 1) {
            mySprite2.vy = 0
        } else {
            mySprite2.vy = 100
        }
    }
})
forever(function () {
    if (controller.A.isPressed() && (fuel > 0 && mySprite2.y > 10)) {
        jet = 1
    } else {
        jet = 0
    }
})
forever(function () {
    if (fuel <= 0) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 0) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 2 2 2 2 2 2 1 
            1 2 2 2 2 2 2 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 10) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 2 2 2 2 2 2 1 
            1 2 2 2 2 2 2 1 
            1 2 2 2 2 2 2 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 20) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 2 2 2 2 2 2 1 
            1 2 2 2 2 2 2 1 
            1 2 2 2 2 2 2 1 
            1 2 2 2 2 2 2 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 30) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 40) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 50) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 60) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 70) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 80) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel > 90) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
    if (fuel >= 100) {
        fuelicon.setImage(img`
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `)
    }
})
forever(function () {
    electric.x += -1 - difficulty
    pause(12 / difficulty)
    if (electric.x < 0) {
        electric.x = randint(300, 500)
    }
})
forever(function () {
    if (controller.left.isPressed() && mySprite2.x > 10) {
        mySprite2.x += -1
    }
})
forever(function () {
    if (gameover == 0) {
        if (ground == 0) {
            music.playTone(698, music.beat(BeatFraction.Sixteenth))
            mySprite2.setImage(assets.image`spooder man`)
            pause(10)
            music.playTone(784, music.beat(BeatFraction.Sixteenth))
            mySprite2.setImage(assets.image`spooder man`)
            pause(10)
        } else {
            music.playTone(349, music.beat(BeatFraction.Quarter))
            mySprite2.setImage(assets.image`spooder man`)
            fuel += 10
            pause(150)
            music.playTone(392, music.beat(BeatFraction.Quarter))
            mySprite2.setImage(assets.image`spooder man`)
            pause(150)
        }
    }
})
forever(function () {
    electric.setImage(img`
        . . . . . . . . 9 . . . . . . . 
        . 9 . . . . . 9 . . . . . 9 . . 
        9 . 9 . . . . . 9 . . . 9 9 . . 
        . . . . 9 9 9 9 9 9 9 9 . . . 9 
        . . . 9 9 9 9 9 9 1 9 9 9 . 9 . 
        9 . 9 9 9 1 9 9 9 9 9 9 9 9 . . 
        . . 9 9 1 9 9 9 9 9 9 1 9 9 . . 
        . . 9 9 1 9 9 1 1 1 9 9 9 9 . . 
        . 9 9 9 9 1 1 1 1 1 1 9 9 9 . 9 
        . . 9 9 9 9 9 9 1 9 9 9 9 9 . . 
        . . 9 9 1 9 1 9 1 9 1 9 9 9 . . 
        9 . 9 9 9 9 9 9 1 9 9 9 9 9 9 . 
        . . . 9 9 1 9 9 9 9 9 9 9 . . . 
        . 9 . . 9 9 9 9 9 9 9 9 . 9 . . 
        . . . . 9 . . . . . . . 9 . . . 
        9 . . . . . . . 9 . . . . 9 . . 
        `)
    pause(100)
    electric.setImage(img`
        . . . . . . . . . . 9 9 . . . . 
        . . . . 9 . . . . 9 . . . . . . 
        . . 9 . . 9 . . . 9 . . 9 . . . 
        . . 9 . 9 9 9 9 9 9 9 9 . . . . 
        9 . . 9 9 9 9 1 9 9 9 9 9 . . 9 
        . 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 
        . . 9 9 9 1 9 9 9 9 9 1 1 9 . . 
        . 9 9 1 9 9 9 1 1 9 9 1 9 9 . . 
        9 . 9 1 9 9 1 1 1 9 9 9 9 9 . . 
        . . 9 1 9 9 9 9 9 9 9 9 1 9 . . 
        9 . 9 9 9 1 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 1 9 9 9 9 . . 
        . 9 . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . 9 9 9 1 9 9 9 9 9 . . 9 
        . . . 9 9 . . . 9 . . . 9 9 . . 
        . . . 9 . . . 9 . . . . . . . . 
        `)
    pause(100)
    electric.setImage(img`
        9 . . . . . . . . . . . . . 9 . 
        . . . . . 9 . . 9 9 . . 9 9 . . 
        . 9 . . . . . . 9 . . . 9 9 . . 
        . 9 9 . 9 9 9 9 9 9 9 9 . . . . 
        . . 9 9 9 9 1 9 9 9 9 1 9 . 9 . 
        . . 1 9 9 9 1 1 9 9 9 9 9 9 . . 
        . 9 9 9 9 9 9 9 9 9 9 1 9 9 9 . 
        . 9 1 9 9 1 9 9 1 1 9 9 9 9 . . 
        9 . 9 9 9 9 9 1 9 1 9 1 1 9 . . 
        . . 9 1 9 9 9 9 9 9 9 9 1 9 . . 
        . . 9 9 9 9 1 9 9 9 1 9 9 9 . . 
        9 . 9 9 9 1 1 9 9 1 9 1 9 9 . . 
        . . . 9 9 9 9 9 9 1 9 9 9 . 9 . 
        . 9 9 . 9 9 9 9 9 9 9 9 9 . . 9 
        9 9 . 9 . 9 9 . . . . 9 . . . . 
        . . . . . 9 . . . . . . 9 . . . 
        `)
    pause(100)
})
forever(function () {
    if (info.score() == 100) {
        effects.confetti.startScreenEffect(100)
    }
    if (info.score() == 200) {
        effects.confetti.startScreenEffect(200)
    }
    if (info.score() == 300) {
        effects.confetti.startScreenEffect(300)
    }
    if (info.score() == 400) {
        effects.confetti.startScreenEffect(400)
    }
    if (info.score() == 500) {
        effects.confetti.startScreenEffect(500)
    }
})
forever(function () {
    if (platform.x < -50) {
        platform.x = 172
    }
    if (platform3.x < -50) {
        platform3.x = 172
    }
    if (platform5.x < -50) {
        platform5.x = 172
    }
    if (platform7.x < -50) {
        platform7.x = 172
    }
})
