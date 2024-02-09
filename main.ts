function makeorb() {
    
    mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
                                . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
                                . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
                                . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
                                . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
                                . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
    animation.runImageAnimation(mySprite, [img`
                . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
                                        . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
                                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
                                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
                                        . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
                                        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . 2 2 2 2 . . .
                                        . . . . . . . 2 2 1 1 1 1 2 . .
                                        . . . . 2 2 3 3 1 1 1 1 1 1 . .
                                        . . 3 3 3 3 1 1 1 1 1 1 1 1 . .
                                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
                                        . . 3 3 2 2 3 1 1 1 1 1 1 1 . .
                                        . . . . . . 2 2 3 1 1 1 1 2 . .
                                        . . . . . . . . . 2 2 2 2 . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                                        . . . . . . . . . . . . . . . .
                                        . . . . . . . 1 1 3 . . . . . .
                                        . . . . . . 1 3 . 3 3 . . . . .
                                        . . . . . . 1 . . . 3 2 2 3 . .
                                        . . . . . 1 3 . . . 2 2 1 3 3 .
                                        . . . . . 1 3 . 2 2 3 1 1 1 3 .
                                        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 .
                                        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 .
                                        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 .
                                        . . . . . 1 3 . 2 2 3 1 1 1 3 .
                                        . . . . . 1 3 . . . 2 2 1 3 3 .
                                        . . . . . . 1 . . . 3 2 2 3 . .
                                        . . . . . . 1 3 . 3 3 . . . . .
                                        . . . . . . . 1 1 3 . . . . . .
                                        . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                                        . . . . . 3 3 . . . 3 . . . . .
                                        . . . . 3 3 . . . . 3 3 . . . .
                                        . . . . 3 . . . . . . 3 3 . . .
                                        . . . . . . . . . . . . 3 . . .
                                        . . . . . . . . . . . . . . . .
                                        . . 3 . . . . . . . . . . . . .
                                        . . 3 . . . . . . . . . . 3 . .
                                        . . 3 . . . . . . . . . . 3 . .
                                        . . . . . . . . . . . . . 3 . .
                                        . . . . . . . . . . . . . . . .
                                        . . . 3 . . . . . . . . . . . .
                                        . . . 3 3 . . . . . . 3 . . . .
                                        . . . . 3 3 . . . . 3 3 . . . .
                                        . . . . . . . . . 3 3 . . . . .
                                        . . . . . . . . . . . . . . . .
            `], 500, false)
    mySprite.changeScale(0.111, ScaleAnchor.Middle)
    mySprite.setPosition(playa.x, playa.y)
    mySprite.setVelocity(50, 0)
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    makeorb()
})
function randomTilemap(): tiles.TileMapData {
    
    tilemapList = [tilemap`
            level1
        `, tilemap`
            level2
        `, tilemap`
            level3
        `, tilemap`
            level4
        `, tilemap`
            level5
        `]
    return tilemapList[0]
    tiles.setCurrentTilemap(tilemapList[0])
}

let tilemapList : tiles.TileMapData[] = []
let mySprite : Sprite = null
let playa : Sprite = null
tiles.setCurrentTilemap(randomTilemap())
playa = sprites.create(img`
        . . . . . . f f f f f f . . . .
                    . . . . f f e e e e f 2 f . . .
                    . . . f f e e e e f 2 2 2 f . .
                    . . . f e e e f f e e e e f . .
                    . . . f f f f e e 2 2 2 2 e f .
                    . . . f e 2 2 2 f f f f e 2 f .
                    . . f f f f f f f e e e f f f .
                    . . f f e 4 4 e b f 4 4 e e f .
                    . . f e e 4 d 4 1 f d d e f . .
                    . . . f e e e 4 d d d d f . . .
                    . . . . f f e e 4 4 4 e f . . .
                    . . . . . 4 d d e 2 2 2 f . . .
                    . . . . . e d d e 2 2 2 f . . .
                    . . . . . f e e f 4 5 5 f . . .
                    . . . . . . f f f f f f . . . .
                    . . . . . . . f f f . . . . . .
    `, SpriteKind.Player)
animation.runImageAnimation(playa, [img`
            . . . . . . f f f f f f . . . .
                            . . . . f f e e e e f 2 f . . .
                            . . . f f e e e e f 2 2 2 f . .
                            . . . f e e e f f e e e e f . .
                            . . . f f f f e e 2 2 2 2 e f .
                            . . . f e 2 2 2 f f f f e 2 f .
                            . . f f f f f f f e e e f f f .
                            . . f f e 4 4 e b f 4 4 e e f .
                            . . f e e 4 d 4 1 f d d e f . .
                            . . . f e e e 4 d d d d f . . .
                            . . . . f f e e 4 4 4 e f . . .
                            . . . . . 4 d d e 2 2 2 f . . .
                            . . . . . e d d e 2 2 2 f . . .
                            . . . . . f e e f 4 5 5 f . . .
                            . . . . . . f f f f f f . . . .
                            . . . . . . . f f f . . . . . .
        `, img`
            . . . . . . . . . . . . . . . .
                            . . . . . . f f f f f f . . . .
                            . . . . f f e e e e f 2 f . . .
                            . . . f f e e e e f 2 2 2 f . .
                            . . . f e e e f f e e e e f . .
                            . . . f f f f e e 2 2 2 2 e f .
                            . . . f e 2 2 2 f f f f e 2 f .
                            . . f f f f f f f e e e f f f .
                            . . f f e 4 4 e b f 4 4 e e f .
                            . . f e e 4 d 4 1 f d d e f . .
                            . . . f e e e e e d d d f . . .
                            . . . . . f 4 d d e 4 e f . . .
                            . . . . . f e d d e 2 2 f . . .
                            . . . . f f f e e f 5 5 f f . .
                            . . . . f f f f f f f f f f . .
                            . . . . . f f . . . f f f . . .
        `, img`
            . . . . . . f f f f f f . . . .
                            . . . . f f e e e e f 2 f . . .
                            . . . f f e e e e f 2 2 2 f . .
                            . . . f e e e f f e e e e f . .
                            . . . f f f f e e 2 2 2 2 e f .
                            . . . f e 2 2 2 f f f f e 2 f .
                            . . f f f f f f f e e e f f f .
                            . . f f e 4 4 e b f 4 4 e e f .
                            . . f e e 4 d 4 1 f d d e f . .
                            . . . f e e e 4 d d d d f . . .
                            . . . . f f e e 4 4 4 e f . . .
                            . . . . . 4 d d e 2 2 2 f . . .
                            . . . . . e d d e 2 2 2 f . . .
                            . . . . . f e e f 4 5 5 f . . .
                            . . . . . . f f f f f f . . . .
                            . . . . . . . f f f . . . . . .
        `, img`
            . . . . . . . . . . . . . . . .
                        . . . . . . f f f f f f . . . .
                        . . . . f f e e e e f 2 f . . .
                        . . . f f e e e e f 2 2 2 f . .
                        . . . f e e e f f e e e e f . .
                        . . . f f f f e e 2 2 2 2 e f .
                        . . . f e 2 2 2 f f f f e 2 f .
                        . . f f f f f f f e e e f f f .
                        . . f f e 4 4 e b f 4 4 e e f .
                        . . f e e 4 d 4 1 f d d e f . .
                        . . . f e e e 4 d d d d f . . .
                        . . . . 4 d d e 4 4 4 e f . . .
                        . . . . e d d e 2 2 2 2 f . . .
                        . . . . f e e f 4 4 5 5 f f . .
                        . . . . f f f f f f f f f f . .
                        . . . . . f f . . . f f f . . .
        `], 500, true)
scene.onOverlapTile(SpriteKind.Player, img`
        d d c c c c c c c c c c c c d d
            d d c b b b b b b b b b b c d d
            d d b d d d d d d d d d d b d d
            d d c c c c c c c c c c c c d d
            d d c b b b b b b b b b b c d d
            d d b d d d d d d d d d d b d d
            d d c c c c c c c c c c c c d d
            d d c b b b b b b b b b b c d d
            d d b d d d d d d d d d d b d d
            d d c c c c c c c c c c c c d d
            d d c b b b b b b b b b b c d d
            d d b d d d d d d d d d d b d d
            d d c c c c c c c c c c c c d d
            d d c b b b b b b b b b b c d d
            b b b d d d d d d d d d d b b b
            c c c c c c c c c c c c c c c c
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    
})
playa.setStayInScreen(true)
scene.cameraFollowSprite(playa)
controller.moveSprite(playa)
