enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    platform,
    fuel
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    gameover = 1
    game.over(false)
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.platform, function (sprite, otherSprite) {
    ground = 1
})
let jet = 0
let difficulty = 0
let ground = 0
let gameover = 0
music.setVolume(255)
gameover = 0
music.magicWand.play()
scene.setBackgroundImage(assets.image`game title`)
game.showLongText("Press A to Start. Avoid missiles, asteroids and electric things. Use  DPad and A to jetpack.", DialogLayout.Bottom)
info.setScore(0)
let fuel = 100
ground = 0
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888858888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888588888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888885888888888888888888888888888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888aa555aaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888aa555aaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888aa555aaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888aaaa555aaa555aaa555aaaa8888888888888888888888888888888888888888888888aa555a555aa555aaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888aaaa555aaa555aaa555aaaa8888888888888888888888888888888888888888888888aa555a555aa555aaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888aaaa555aaa555aaa555aaaa8888888888888888888888888888888888888888888888aa555a555aa555aaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888ccccccccccc8888888888888888888888888888888888888
    8888888888aaaa555aaa555aaa555aaaa8888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888ccccccccccc8888888888888888888888588888888888888
    8888888888aaaa555aaa555aaa555aaaa8888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888ccccccccccc8888888888888888888888888888888888888
    8888888888aaaa555aaa555aaa555aaaa8888888888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888ccccccccccc8888888888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888aa555aaaaaaaaaaaaaaaaaa8888888888ccccccccccc8888888888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888aa555aaaaaaaaaaaaaaaaaa8888888888ccccccccccc8888888888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888aa555aaaaaaaaaaaaaaaaaa8888888888ccccccccccc8888888888888888888888888888888888888
    8888888888aaaa555aaa555aaa555aaaa8888888888888888888888888888888888888888888888aaaaaaaaaaaa555aaaaaaaaaaaaaaaaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaa555aaa555aaa555aaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888888aa555aaaaaaa555aaaaaaaaaaaaaaaaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaa555aaa555aaa555aaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888888aa555aaaaaaa555aaaaaaaaaaaaaaaaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888888aa555aaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaa555aaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaa555aaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaa555aaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa555a555aaaaaa88888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa555a555aaaaaa88888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaa88888888888888888888888888888888
    8888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa555a555aaaaaa88888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaa88888888888888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888588888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaa88888888888888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    a555aa555aaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    a555aa555aaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    a555aa555aaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaa555aaaaaaaaaaaaaaacccccccccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaa555aaaaa555aaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaa555aaaaaaaaaaaaaaacccccccccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaa555aaaaa555aa555aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaa555aaaaaaaaaaaaaaacccccccccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaa555aaaaa555aa555aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaa555aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccc444ccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccc444ccccccccccaa888888888888888cccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccc444ccccccccccaa888888888888888ccc444cccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaa888888888888888ccc444cccccccccccccccaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaccc444cccccccccccccccaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaa
    ccccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaa
    ccccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccaaaaaaaaaaaaaaaaaaaa
    ccccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccaaaaaaaaaaaaaaaaaaaa
    ccccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccc444ccccccccccaaaaaaaaaaaaaaaaaaaa
    ccccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaacccccc444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaa
    ccccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccbbbbbcccccaaaaaaaaaaaaaaaaacccccc444ccccccccccccccc444ccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaa
    cccc444cc444ccccccaaaaaaaaaaaaaaaaaaacccccccbbbbbcccccbbbbbaaaaaaaaaaaacccccc444ccccccccccccccc444ccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaa
    cccc444cc444ccccccaaaaaaaaaaaaaaaaaaacccccccbbbbbcccccbbbbbaaaaaaaaaaaacccccccccccccccccccccccc444ccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaa
    cccc444cc444ccccccaaaaaaaaaaaaaaaaaaacccccccbbbbbcccccbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444cccccccccccccccccccccc
    ccccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccbbbbbcccccbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccc444cccccccccccccccccccccc
    ccccccccccccccccccaaaaaaaaabbbbbaaaaacccccccbbbbbcccccbbbbbccccccccccccccccccccccccccccbbbbbccccccccccccccccccccbbbbbcccccccccccccccccc444cccccccccccccccccccccc
    cccccccccccccccccccccccccccbbbbbccccccccccccbbbbbcccccbbbbbbbbbbbbbccccccccccccccccccccbbbbbccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccc
    cccbbbbbbbbbbccccccccccccccbbbbbbbbbbcccccccbbbbbcccccbbbbbbbbbbbbbccccccccccccccccccccbbbbbccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccc
    cccbbbbbbbbbbccccccccccccccbbbbbbbbbbcccccccbbbbbcccccbbbbbbbbbbbbbccccccccccccccccccccbbbbbccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccc
    cccbbbbbbbbbbccccccccccccccbbbbbbbbbbcccccccbbbbbcccbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbccccccccccbbbbcccccccccccccbbbbbbbbcccc
    cbbbb44444bbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbb44444bbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbccccccccccbbbbcccccccccccccbbbbbbbbcccc
    cbbbb44444bbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbb44444bbbbbbbbbbcccccbbbbbbb44444bbbbbbbbccccccccccbbbbcccccccccccccbbbbbbbbcccc
    cbbbb44444bbbbbbbbbbcccccbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbb44444bbbbbbbbcccccbbbb44444bbbbbbbbbbcccccbbbbbbb44444bbbbbbbbccccccccccbbbbcccccccccccccbbbbbbbbbbbb
    cbbbb44444bbbbbbbbbbcccccbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbb44444bbbbbbbbcccccbbbb44444bbbbbbbbbbcccccbbbbbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbb
    cbbbb44444bbbbbbbbbbcccccbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbb44444bbbbbbbbcccccbbbb44444bbbbbbbbbbbbbbbbbbbbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbb
    cbbbbbbbbbbbbbbbbbbbcccccbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cbbbbbbbbbbbbbbbbbbbcccccbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbb44444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
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
let asteroid = sprites.create(assets.image`turd`, SpriteKindLegacy.Enemy)
let mySprite = sprites.create(assets.image`balls`, SpriteKindLegacy.Enemy)
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
asteroid.x = 800
mySprite.x = 1000
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
    mySprite.startEffect(effects.warmRadial, 100)
    mySprite.x += -4 - difficulty
    if (mySprite.x < -10) {
        pause(randint(0, 2000))
        mySprite.x = randint(300, 600)
        mySprite.y = randint(20, 110)
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
    if (controller.right.isPressed() && mySprite2.x < 150) {
        mySprite2.x += 1
    }
})
forever(function () {
    asteroid.startEffect(effects.trail, 1000)
    asteroid.setImage(img`
        . . . . . e e e e e e . . . . . 
        . . . e e e e b b e e e . . . . 
        . . e e e e f e e c e e e e . . 
        . e e e c e f e c c e e e e e . 
        e e e c e e f f c e e b e e e . 
        e e e c b b e f e e e e e e e e 
        e c e e e e e f e e e e e e e e 
        e c e e e e e e e e e e e e b e 
        e b e e e e e e e e e e e e e e 
        e e e f e e e e e e e e f e e e 
        e e e f f f e e e e e f f e e e 
        e e e e e e f e c c f f e e e e 
        . e e e e e e e e b b e e e e e 
        . . . e e e c e e b e e e e . . 
        . . . . e e e e e e e e e . . . 
        . . . . . . e e e e . . . . . . 
        `)
    pause(100)
    asteroid.setImage(img`
        . . . . . e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . e e e e e e e e e e e e . . 
        . e e c c e e f f f c e e e e . 
        e e e e e e e f c c e e e e e . 
        e e e e e e e c e e e e e b e e 
        e c e e e e e e e e e e e e e e 
        e e e e e e e e e e f f f c e e 
        e e e f c e e e e f f c c e e e 
        e e e f c e e e e c c e b e e e 
        e e e f f c e e e e e e b e e e 
        e e e e e e e e e e b b b e e e 
        . e e e e e e e e b b e e e e e 
        . . . e e e c c e b e e e e . . 
        . . . . e e e c e e e e e . . . 
        . . . . . . e e e e . . . . . . 
        `)
    pause(100)
    asteroid.setImage(img`
        . . . . . e e e e e e . . . . . 
        . . . e e e e b b e e e . . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e c e e e e . 
        e e e e e e f f f c e e e e e . 
        e e e e b b f c e e e e e b e e 
        e c c c e e f e e e e e e e e e 
        e e e c e e e e e e e e e e e e 
        e b e f e e e e e e e e e e e e 
        e e e f e e e e e e e e f e e e 
        e e e f f b b e e e e e f e e e 
        e e e e b b e e e e e f f e e e 
        . e e e b e e e e e e e e e e e 
        . . . e e e e e e e e e e e . . 
        . . . . e e e e e e e e e . . . 
        . . . . . . e e e e . . . . . . 
        `)
    pause(100)
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
    for (let index = 0; index < 4; index++) {
        asteroid.x += -1
    }
    asteroid.y += 1
    pause(12 / difficulty)
    if (asteroid.x < -200) {
        asteroid.x = randint(800, 1000)
        asteroid.y = randint(-100, -150)
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
