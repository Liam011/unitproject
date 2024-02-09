def makeorb():
    global mySprite
    mySprite = sprites.create(img("""
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
        """),
        SpriteKind.projectile)
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """)],
        750,
        False)
    mySprite.set_bounce_on_wall(True)
    mySprite.change_scale(0.111, ScaleAnchor.MIDDLE)
    mySprite.set_position(playa.x, playa.y)
    mySprite.set_velocity(50, 0)

def on_update2():
    lastvelocityx = playa.vx
    lastvelocityy = playa.vy
game.on_update(on_update2)


def on_a_pressed():
    makeorb()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)



def on_on_overlap(sprite, otherSprite):
    sprites.destroy(otherSprite, effects.fire, 500)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.projectile, on_on_overlap)

def randomTilemap():
    global tilemapList
    tilemapList = [tilemap("""
            level1
        """),
        tilemap("""
            level2
        """),
        tilemap("""
            level3
        """),
        tilemap("""
            level4
        """),
        tilemap("""
            level5
        """)]
    return tilemapList._pick_random()
tilemapList: List[tiles.TileMapData] = []
mySprite: Sprite = None
playa: Sprite = None
tiles.set_current_tilemap(randomTilemap())
playa = sprites.create(img("""
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
    """),
    SpriteKind.player)
animation.run_image_animation(playa,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    500,
    True)
playa.set_stay_in_screen(True)
scene.camera_follow_sprite(playa)
controller.move_sprite(playa)
statusbar = statusbars.create(4, 10, StatusBarKind.health)
statusbar.attach_to_sprite(playa)