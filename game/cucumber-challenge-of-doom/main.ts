namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Chilli_flower = SpriteKind.create()
    export const Checkpoint = SpriteKind.create()
    export const Chilli_lava = SpriteKind.create()
    export const Coin_10 = SpriteKind.create()
    export const Springboard = SpriteKind.create()
    export const Flag_pole = SpriteKind.create()
    export const Flag_pole_top = SpriteKind.create()
    export const Thingy_that_can_drop = SpriteKind.create()
    export const Jumping_chilli = SpriteKind.create()
    export const Jumping_chilli_flower = SpriteKind.create()
    export const Character_Picker = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Checkpoint, function (sprite, otherSprite) {
    if (0 == Checkpoint_for_level_1 && (1 == World && 1 == Level)) {
        Checkpoint_for_level_1 += 1
        music.magicWand.play()
        Checkpoint_for_level_1_sprite.setImage(img`
            ....ff..ff..ff..
            ..ff77ff77ff77ff
            ..f777777777777f
            ..f77777777777f.
            ..f7775555577f..
            ..f77757777777f.
            ..f777577777777f
            ..f777577777777f
            ..f77757777777f.
            ..f7775555577f..
            ..f77777777777f.
            ..f777777777777f
            ..f7ff77ff77ff7f
            ..ff..ff..ff..ff
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            .fff............
            fffff...........
            `)
    } else if (0 == Checkpoint_for_level_2 && (1 == World && 2 == Level)) {
        Checkpoint_for_level_2 += 1
        music.magicWand.play()
        Checkpoint_for_level_2_sprite.setImage(img`
            ....ff..ff..ff..
            ..ff77ff77ff77ff
            ..f777777777777f
            ..f77777777777f.
            ..f7775555577f..
            ..f77757777777f.
            ..f777577777777f
            ..f777577777777f
            ..f77757777777f.
            ..f7775555577f..
            ..f77777777777f.
            ..f777777777777f
            ..f7ff77ff77ff7f
            ..ff..ff..ff..ff
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            .fff............
            fffff...........
            `)
    }
})
function StartLevel () {
    if (1 == World && 1 == Level) {
        tiles.setTilemap(tilemap`level1`)
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999999999999999999999111111111111199999999999
            9999999999999911111111111111111199999999999999999991111111111111111119999999999999999999999999999999999999999999999999999999999999991111111111111111119999999999
            9999999991111111111111111111111111999999999999999111111111111111111111199999999999999999999999999999999999999999999999999999999999111111111111111111111999999999
            9999999911111111111111111111111111199999999999911111111111111111111111111999999999999999999999999999999999999999999999999999999911111111111111111111111199999999
            9999999111111111111111111111111111119999999999111111111111111111111111111199999999999999999111111111111111111111199999999999999111111111111111111111111119999999
            9999999111111111111111111111111111119999999991111111111111111111111111111111999999999999111111111111111111111111111999999999991111111111111111111111111119999999
            9999999111111111111111111111111111119999999991111111111111111111111111111111999999999991111111111111111111111111111199999999991111111111111111111111111111999999
            9999999111111111111111111111111111111999999991111111111111111111111111111111199999999111111111111111111111111111111119999999991111111111111111111111111111999999
            9999999111111111111111111111111111111999999991111111111111111111111111111111199999999111111111111111111111111111111111999999991111111111111111111111111111999999
            9999999111111111111111111111111111111999999991111111111111111111111111111111119999999111111111111111111111111111111111199999991111111111111111111111111111999999
            9999999111111111111111111111111111111999999991111111111111111111111111111111119999999111111111111111111111111111111111119999991111111111111111111111111119999999
            9999999111111111111111111111111111119999999991111111111111111111111111111111119999991111111111111111111111111111111111119999999111111111111111111111111119999999
            9999999911111111111111111111111111199999999991111111111111111111111111111111119999991111111111111111111111111111111111111999999911111111111111111111111199999999
            9999999991111111111111111111111199999999999999991111111111111111111111111111119999991111111111111111111111111111111111111999999991111111111111111111111999999999
            9999999999911111111111111111119999999999999999999991111111111111111111111111199999999111111111111111111111111111111111111999999999911111111111111111199999999999
            9999999999999999999999999999999999999999999999999999991111111199999999999999999999999999911111111111111111111111111111119999999999999111111111111199999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111199999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111199999
            9999999999999999999999999991111199999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111119999
            9999999999911111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111119999
            9999999999111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111999
            9999999999111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111999
            9999999991111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111999
            9999999991111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111199
            9999999991111111111111111111111111111111111119999999999999999999999955555555555555599999999999999999999999911111111111111111111111111111111111111111111111111199
            9999999991111111111111111111111111111111111119999999999999999999955555555555555555555599999999999999999999911111111111111111111111111111111111111111111111111999
            9999999991111111111111111111111111111111111119999999999999999995555555555555555555555555999999999999999999911111111111111111111111111111111111111111111111119999
            9999999999111111111111111111111111111111111119999999999999999555555555555555555555555555559999999999999999911111111111111111111111111111111111111111111111199999
            9999999999111111111111111111111111111111111199999999999999955555555555555555555555555555555599999999999999911111111111111111111111111111111111111111111111199999
            9999999999111111111111111111111111111111111199999999999999555555555555555555555555555555555559999999999999911111111111111111111111111111111111111111119999999999
            9999999999111111111111111111111111111111111199999999999995555555555555555555555555555555555555999999999999999111111111111111111111111111111111119999999999999999
            9999999999111111111111111111111111111111111999999999999555555555555555555555555555555555555555559999999999999999111111111111111111111111199999999999999999999999
            9999999999911111111111111111111111111111119999999999995555555555555555555555555555555555555555555999999999999999991111111111111111199999999999999999999999999999
            9999999999999111111111111111111111111999999999999999995555555555555555555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999
            9999999999999991111111111111111119999999999999999999955555555555555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999
            9999999999999999999911111119999999999999999999999999555555555555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999995555555555555555555555555555555555555555555555555999999999999999c99999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999555555555555555555555555555555555555555555555555599999999999999ccc9999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999555555555555555555555555555555555555555555555555555999999999999ccccc999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999555555555555555555555555555555555555555555555555555999999999999cccccc99999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999555555555555555555555555555555555555555555555555555559999999999cccccccc9999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999555555555555555555555555555c5555555555555555555555555999999999cccccccccc999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999555555555555555555555555555ccc555555555555555555555555599999999ccccccccccc99999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999555555555555555555555555555ccc55555555555555555555555559999999ccccccccccccc9999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999955555555555555555555555555cccc5555555555555555555555555999999ccccccccccccccc999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999555555555555555555555555555ccccc55555555555555555555555559999ccccccccccccccccc99999999999999999999999999cc9999999
            9999999999999999999999999999999999999999999999955555555555555555555555555c7cccc55555555555555555555555559999cccccccccccccccccc999999999999999999999999cccc999999
            9999999999999999999999999999999999999999999999955555555555555555555555555c7cccc5555555555555555555555555999ccccccccccccccccccccc999999999999999999999ccccccc9999
            999999999999999999999999999999999999999999999ccc555555555555555555555555c777ccc555555555555555555555555599ccccccccccccccccccccccc9999999999999999999ccccccccc999
            99999999999999999999999999999999999999999999ccccc55555555555555555555555c777cccc55555555555555555555555599cccccccccccccccccccccccc99999999999999999cccccccccccc9
            99999999999999999999999999999999999999999999ccccc5555555555555555555555c77777ccc5555555555555555555555559cccccccccccccccccccccccccc999999999999999cccccccccccccc
            99999999999999999999999999999c9999999999999ccccccc555555555555555555555c77777ccc555555555555555555555555cccccccccccccccccccccccccccc999999999999cccccccccccccccc
            9999999999c99999999999999999ccc999999999999cccccccc5555555555555555555ccccecccccc55555555555555555555555ccccccccccccccccccccccdcccccc9999999999ccccccccccccccccc
            999999999cc99999999999999999ccc99999999999cccccccccc555555555555555555ccccecccccc55555555555555555555555cccccccccccccccccccccdddcccccc99999999cccccccccccc7ccccc
            999999999cc9999999999999999cccc99999999999ccccccccccc5555555555555555ccccddcccccc555555555555555555555cccccccccccccccccccccccdddccccccc999999ccccccccccccc7ccccc
            99999999cccc99999999999999ccccc9999999999cc7ccccdcccc555555555555555ccccddddcccccc5555555555555555555ccccccccccccccccccccccccdddcccccccc9999ccccccccccccc777cccc
            99999999cccc99999999999999ccccc9999999999cc7cccdddcccc55555555555555ccccddddcccccc5555555555555555555ccc7cccccccccccccccccccdddddcccccccc99cccccccccccccc777cccc
            9999999cccccc999999999999ccccccc99999999cc777cddddccccc555555555555cccccddddcccccc555555555555555555cccc7cccccccccccccccccccdddddccccccccccccccccccccccc77777ccc
            999999ccccccc99999999999cccccccc99999999cc777cddddcccccc55555555555ccccddddddcccccc5555555555555555cccc777cccccccccccccccccddddddccccccccccccccccccccccc77777ccc
            999999cccccccc9999999999cccccccc9999999cc77777dddddcccccc555555555cccccddddddcccccc5555555555555555cccc777cccccccccccccccccddddddcc7cccccccccccccccddccccceccccc
            99999ccccccccc999999999cccc7cccc9999999cc77777dddddcccccc555555555cc7ccdddddddcc7cc555555555555555cccc77777ccccccccccccccccdddddddc7ccccccccccccccddddddcceccccc
            99999cccccccccc99999999cccc7cccc999999cccccedddddddccccccc5555555ccc7cddddddddcc7cc55555555555555ccccc77777cccccccccccccccdddddddd777cccccccccccccdddddddddddccc
            9999cccccccccccc999999cccc777cccc99999ccccceddddddddcc7cccc555555cc777ddddddddc777cc555555555555cccccdddecccccccccccccccccdddddddd777ccccccccc7ccddddddddddddddd
            9999cccccccccccc99999ccccc777cccc9999ccccccdddddddddcc7ccccc5555ccc777ddddddddd777cc555555555555cccccdddeccccccccccccc7ccdddddddd77777cccccccc7ccddddddddddddddd
            999cccccccccccccc9999cccc77777ccc9999ccccccdddddddddd777ccccc555cc77777ddddddd77777c55555555555cccccdddddccccccccccccc7ccdddddddd77777ccccccc777cddddddddddddddd
            999cccccccccccccc999ccccc77777ccc999cc7cccddddddddddd777ccccc55ccc77777ddddddd77777cc555555555ccccccdddddcccccccccccc777cddddddddddeccccccccc777dddddddddddddddd
            99ccccccccdcc7cccc9ccccccddecccccc99cc7cccdddddddddd77777ccccc5cccccedddddddddddecccc555555555cccccdddddddccccccccccc777dddddddddddecccccccc77777ddddddddddddddd
            9ccccccccdddc7cccc9c7cccdddecccccc9cc777cddddddddddd77777cccccccccccedddddddddddecccc55555555ccccccdddddddcccccccccc77777dddddddddddcccccccc77777ddddddddddddddd
            9cccccccdddd777ccccc7ccdddddcccccc9cc777cdddddddddddddecccccccccccccdddddddddddddccccc555555ccccccddddddddcccccccccc77777dddddddddddcccccccccceddddddddddddddddd
            ccccccccdddd777cccc777cddddddccccc9c77777dddddddddddddecccccccccccccdddddddddddddccccc55555cc7cccddddddddddcccccccccccedddddddddddddcccccccccceddddddddddddddddd
            cc7ccccdddd77777ccc777dddddddccccccc77777ddddddddddddddccccccccccccddddddddddddddccccc55555cc7cccddddddddddccccccccccceddddddddddddddcccccccccdddddddddddddddddd
            cc7cccddddd77777cc77777dddddddcccccccceddddddddddddddddccccccccccccdddddddddddddddcccc5555cc777cddddddddddddccccccccccdddddddddddddddcccccccccdddddddddddddddddd
            c777ccdddddddecccc77777dddddddcccccccceddddddddddddddddccccccccccccdddddddddddddddccccc55ccc777cddddddddddddccccccccccdddddddddddddddccccccccddddddddddddddddddd
            c777cddddddddecccccceddddddddddcccccccdddddddddddddddddcccccccccccddddddddddddddddccccc55cc77777dddddddddddddcccccccccdddddddddddddddccccccccddddddddddddddddddd
            77777dddddddddccccccedddddddddddccccccddddddddddddddddddccccccccccdddddddddddddddddcccc5ccc77777dddddddddddddccccccccdddddddddddddddddccccccdddddddddddddddddddd
            77777dddddddddccccccddddddddddddcccccddddddddddddddddddddcccccccccdddddddddddddddddcccccccccceddddddddddddddddcccccccdddddddddddddddddccccccdddddddddddddddddddd
            ccedddddddddddccccccdddddddddddddccccddddddddddddddddddddccccccccdddddddddddddddddddccccccccceddddddddddddddddccc7ccddddddddddddddddddcc7cccdddddddddddddddddddd
            cceddddddddddddcccccddddddddddddddccdddddddddddddddddddddccccccccdddddddddddddddddddcccccccccddddddddddddddddddcc7ccdddddddddddddddddddc7ccddddddddddddddddddddd
            ccdddddddddddddccccdddddddddddddddccddddddddddddddddddddddccccccddddddddddddddddddddcccccccccddddddddddddddddddc777cddddddddddddddddddd777cddddddddddddddddddddd
            cddddddddddddddccccdddddddddddddddddddddddddddddddddddddddccccccdddddddddddddddddddddcc7ccccdddddddddddddddddddc777dddddddddddddddddddd777dddddddddddddddddddddd
            ddddddddddddddddccddddddddddddddddddddddddddddddddddddddddccccccdddddddddddddddddddddcc7ccccddddddddddddddddddd77777dddddddddddddddddd77777ddddddddddddddddddddd
            ddddddddddddddddccdddddddddddddddddddddddddddddddddddddddddcc7ccdddddddddddddddddddddc777ccdddddddddddddddddddd77777dddddddddddddddddd77777ddddddddddddddddddddd
            ddddddddddddddddccdddddddddddddddddddddddddddddddddddddddddcc7cddddddddddddddddddddddd777cdddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddc777dddddddddddddddddddddd77777dddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777dddddddddddddddddddddd77777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777dddddddddddddddddddddddecddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777dddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7ddddddddddd
            dddddddddddddddddddddddddddddd7dddddddddddddd7ddddd7dddd7dddd7ddddd7dddddd7ddddddd7dddd7ddd7ddddddddddddddddddddddddd7dddddd7dddd7dddd7ddd77ddd7ddd777dddd77dddd
            ddddddddddddddddddddd7ddddddd777ddddd7dddddd777ddd777dd777dd777ddd777ddddd777dddd777dd777d777ddddd7dddd7dddddd7ddddd777dddd777dd777dd77dd777dd777dd777ddd7777ddd
            ddddddddddddd7dddddd777ddddd7777dddd777ddddd777ddd777dd777dd777dd7777dddd77777dd7777d7777d7777ddd777dd777dddd777ddd77777ddd777d7777d777dd7777d777d7777ddd7777ddd
            dddddddd7ddd777dddd77777ddd77777ddd77777ddd77777d77777d7777d777dd77777d7777777d77777d7777d7777dd7777dd777ddd7777dd777777dd7777d7777d777d77777d777d77777d777777dd
            dd77ddd777d77777ddd777777d7777777d777777ddd77777d77777d7777d77777777777777777777777777777777777d77777d7777d77777d77777777777777777777777777777777777777d7777777d
            d7777d77777777777d77777777777777777777777d77777777777777777777777777777777777777777777777777777777777d7777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        if (0 == Checkpoint_for_level_1) {
            for (let Value_2 of tiles.getTilesByType(assets.tile`tile25`)) {
                if (Chosen_Character__Cucumber_Creature == true) {
                    tiles.placeOnRandomTile(Cucumber_Creature, assets.tile`tile25`)
                    tiles.setTileAt(Value_2, assets.tile`transparency16`)
                } else if (Chosen_Character__Ketchup_Kind == true) {
                    tiles.placeOnRandomTile(Ketchup_Kind, assets.tile`tile25`)
                    tiles.setTileAt(Value_2, assets.tile`transparency16`)
                } else if (Chosen_Character__Potato_Person == true) {
                    tiles.placeOnRandomTile(Potato_Person, assets.tile`tile25`)
                    tiles.setTileAt(Value_2, assets.tile`transparency16`)
                } else if (Chosen_Character__Strawberry_Sister == true) {
                    tiles.placeOnRandomTile(Strawberry_Sister, assets.tile`tile25`)
                    tiles.setTileAt(Value_2, assets.tile`transparency16`)
                }
            }
            for (let Value_7 of tiles.getTilesByType(assets.tile`tile26`)) {
                tiles.setTileAt(Value_7, assets.tile`transparency16`)
            }
        } else if (1 == Checkpoint_for_level_1) {
            for (let Value_4 of tiles.getTilesByType(assets.tile`tile11`)) {
                Checkpoint_for_level_1_sprite.setImage(img`
                    ....ff..ff..ff..
                    ..ff77ff77ff77ff
                    ..f777777777777f
                    ..f77777777777f.
                    ..f7775555577f..
                    ..f77757777777f.
                    ..f777577777777f
                    ..f777577777777f
                    ..f77757777777f.
                    ..f7775555577f..
                    ..f77777777777f.
                    ..f777777777777f
                    ..f7ff77ff77ff7f
                    ..ff..ff..ff..ff
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    .fff............
                    fffff...........
                    `)
                tiles.setTileAt(Value_4, assets.tile`transparency16`)
            }
            for (let Value_7 of tiles.getTilesByType(assets.tile`tile26`)) {
                if (Chosen_Character__Cucumber_Creature == true) {
                    tiles.placeOnRandomTile(Cucumber_Creature, assets.tile`tile26`)
                    tiles.setTileAt(Value_7, assets.tile`transparency16`)
                } else if (Chosen_Character__Ketchup_Kind == true) {
                    tiles.placeOnRandomTile(Ketchup_Kind, assets.tile`tile26`)
                    tiles.setTileAt(Value_7, assets.tile`transparency16`)
                } else if (Chosen_Character__Potato_Person == true) {
                    tiles.placeOnRandomTile(Potato_Person, assets.tile`tile26`)
                    tiles.setTileAt(Value_7, assets.tile`transparency16`)
                } else if (Chosen_Character__Strawberry_Sister == true) {
                    tiles.placeOnRandomTile(Strawberry_Sister, assets.tile`tile26`)
                    tiles.setTileAt(Value_7, assets.tile`transparency16`)
                }
            }
        }
        for (let Checkpoint_for_level_1_sprite2 of sprites.allOfKind(SpriteKind.Checkpoint)) {
            Checkpoint_for_level_1_sprite2.destroy()
        }
        info.startCountdown(300)
    } else if (1 == World && 2 == Level) {
        tiles.setTilemap(tilemap`level2`)
        if (Checkpoint_for_level_2 == 0) {
            for (let Value_21 of tiles.getTilesByType(assets.tile`tile25`)) {
                if (Chosen_Character__Cucumber_Creature == true) {
                    tiles.placeOnRandomTile(Cucumber_Creature, assets.tile`tile25`)
                    tiles.setTileAt(Value_21, assets.tile`transparency16`)
                } else if (Chosen_Character__Ketchup_Kind == true) {
                    tiles.placeOnRandomTile(Ketchup_Kind, assets.tile`tile25`)
                    tiles.setTileAt(Value_21, assets.tile`transparency16`)
                } else if (Chosen_Character__Potato_Person == true) {
                    tiles.placeOnRandomTile(Potato_Person, assets.tile`tile25`)
                    tiles.setTileAt(Value_21, assets.tile`transparency16`)
                } else if (Chosen_Character__Strawberry_Sister == true) {
                    tiles.placeOnRandomTile(Strawberry_Sister, assets.tile`tile25`)
                    tiles.setTileAt(Value_21, assets.tile`transparency16`)
                }
            }
            for (let Value_7 of tiles.getTilesByType(assets.tile`tile26`)) {
                tiles.setTileAt(Value_7, assets.tile`transparency16`)
            }
            for (let Value_15 of tiles.getTilesByType(assets.tile`tile11`)) {
                Checkpoint_for_level_2_sprite = sprites.create(img`
                    ....ff..ff..ff..
                    ..ffffffffffffff
                    ..ffffffffffffff
                    ..fffffffffffff.
                    ..ffffffffffff..
                    ..fffffffffffff.
                    ..ffffffffffffff
                    ..ffffffffffffff
                    ..fffffffffffff.
                    ..ffffffffffff..
                    ..fffffffffffff.
                    ..ffffffffffffff
                    ..ffffffffffffff
                    ..ff..ff..ff..ff
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    .fff............
                    fffff...........
                    `, SpriteKind.Checkpoint)
                tiles.placeOnTile(Checkpoint_for_level_2_sprite, Value_15)
            }
        } else if (1 == Checkpoint_for_level_2) {
            for (let Value_7 of tiles.getTilesByType(assets.tile`tile26`)) {
                if (Chosen_Character__Cucumber_Creature == true) {
                    tiles.placeOnRandomTile(Cucumber_Creature, assets.tile`tile26`)
                    tiles.setTileAt(Value_7, assets.tile`transparency16`)
                } else if (Chosen_Character__Ketchup_Kind == true) {
                    tiles.placeOnRandomTile(Ketchup_Kind, assets.tile`tile26`)
                    tiles.setTileAt(Value_7, assets.tile`transparency16`)
                } else if (Chosen_Character__Potato_Person == true) {
                    tiles.placeOnRandomTile(Potato_Person, assets.tile`tile26`)
                    tiles.setTileAt(Value_7, assets.tile`transparency16`)
                } else if (Chosen_Character__Strawberry_Sister == true) {
                    tiles.placeOnRandomTile(Strawberry_Sister, assets.tile`tile26`)
                    tiles.setTileAt(Value_7, assets.tile`transparency16`)
                }
            }
            for (let Value_4 of tiles.getTilesByType(assets.tile`tile11`)) {
                Checkpoint_for_level_2_sprite.setImage(img`
                    ....ff..ff..ff..
                    ..ff77ff77ff77ff
                    ..f777777777777f
                    ..f77777777777f.
                    ..f7775555577f..
                    ..f77757777777f.
                    ..f777577777777f
                    ..f777577777777f
                    ..f77757777777f.
                    ..f7775555577f..
                    ..f77777777777f.
                    ..f777777777777f
                    ..f7ff77ff77ff7f
                    ..ff..ff..ff..ff
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    ..f.............
                    .fff............
                    fffff...........
                    `)
                tiles.setTileAt(Value_4, assets.tile`transparency16`)
            }
            for (let Value_2 of tiles.getTilesByType(assets.tile`tile25`)) {
                tiles.setTileAt(Value_2, assets.tile`transparency16`)
            }
        }
        info.startCountdown(300)
    }
    for (let Cucumber_1_coin2 of sprites.allOfKind(SpriteKind.Coin)) {
        Cucumber_1_coin2.destroy()
    }
    for (let Chilli_plant2 of sprites.allOfKind(SpriteKind.Chilli_flower)) {
        Chilli_plant2.destroy()
    }
    for (let Flying_chilli2 of sprites.allOfKind(SpriteKind.Enemy)) {
        Flying_chilli2.destroy()
    }
    for (let Chilli_lava2 of sprites.allOfKind(SpriteKind.Chilli_lava)) {
        Chilli_lava2.destroy()
    }
    for (let _10_Coin2 of sprites.allOfKind(SpriteKind.Coin_10)) {
        _10_Coin2.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
        Cucumber_1_coin = sprites.create(img`
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 f 7 7 7 7 f 7 7 f f . 
            . f 5 7 7 7 f 7 7 f 7 7 7 7 f . 
            . f 5 7 7 7 7 f f 7 7 7 7 7 f . 
            . f 5 7 7 7 7 f f 7 7 7 7 7 f . 
            . f 5 7 7 7 f 7 7 f 7 7 7 7 f . 
            . f f 5 7 f 7 7 7 7 f 7 7 f f . 
            . . f 5 7 7 7 7 7 7 7 7 7 f . . 
            . . f f 5 7 7 7 7 7 7 7 f f . . 
            . . . f 5 7 7 7 7 7 7 7 f . . . 
            . . . f 5 5 5 5 5 7 7 7 f . . . 
            . . . . f f f f f f f f . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        Cucumber_1_coin,
        [img`
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 f 7 7 7 7 f 7 7 f f . 
            . f 5 7 7 7 f 7 7 f 7 7 7 7 f . 
            . f 5 7 7 7 7 f f 7 7 7 7 7 f . 
            . f 5 7 7 7 7 f f 7 7 7 7 7 f . 
            . f 5 7 7 7 f 7 7 f 7 7 7 7 f . 
            . f f 5 7 f 7 7 7 7 f 7 7 f f . 
            . . f 5 7 7 7 7 7 7 7 7 7 f . . 
            . . f f 5 7 7 7 7 7 7 7 f f . . 
            . . . f 5 7 7 7 7 7 7 7 f . . . 
            . . . f 5 5 5 5 5 7 7 7 f . . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . f f 7 7 7 7 7 7 f f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . f f 7 f 7 7 7 7 f 7 f f . . 
            . . f 5 7 7 f 7 7 f 7 7 7 f . . 
            . . f 5 7 7 7 f f 7 7 7 7 f . . 
            . . f 5 7 7 7 f f 7 7 7 7 f . . 
            . . f 5 5 7 f 7 7 f 7 7 7 f . . 
            . . f f 5 f 7 7 7 7 f 7 f f . . 
            . . . f 5 5 7 7 7 7 7 7 f . . . 
            . . . f f 5 7 7 7 7 7 f f . . . 
            . . . . f 5 7 7 7 7 7 f . . . . 
            . . . . f 5 5 5 5 7 7 f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f f 7 7 7 7 f f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . . f 5 7 f 7 7 f 7 7 f . . . 
            . . . f 5 7 7 f f 7 7 7 f . . . 
            . . . f 5 7 7 f f 7 7 7 f . . . 
            . . . f 5 5 f 7 7 f 7 7 f . . . 
            . . . f f 5 7 7 7 7 f f f . . . 
            . . . . f 5 5 7 7 7 7 f . . . . 
            . . . . f f 5 7 7 7 f f . . . . 
            . . . . . f 5 7 7 7 f . . . . . 
            . . . . . f 5 5 5 7 f . . . . . 
            . . . . . . f f f f . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f f 7 7 f f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f f 7 7 7 7 f f . . . . 
            . . . . f 5 f 7 7 f 7 f . . . . 
            . . . . f 5 7 f f 7 7 f . . . . 
            . . . . f 5 7 f f 7 7 f . . . . 
            . . . . f 5 5 7 7 f 7 f . . . . 
            . . . . f f 5 7 7 7 f f . . . . 
            . . . . . f 5 5 7 7 f . . . . . 
            . . . . . f f 5 7 f f . . . . . 
            . . . . . . f 5 7 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f f 7 7 f f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f f 7 7 7 7 f f . . . . 
            . . . . f 5 f 7 7 f 7 f . . . . 
            . . . . f 5 7 f f 7 7 f . . . . 
            . . . . f 5 7 f f 7 7 f . . . . 
            . . . . f 5 5 7 7 f 7 f . . . . 
            . . . . f f 5 7 7 7 f f . . . . 
            . . . . . f 5 5 7 7 f . . . . . 
            . . . . . f f 5 7 f f . . . . . 
            . . . . . . f 5 7 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f f 7 7 7 7 f f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . . f 5 7 f 7 7 f 7 7 f . . . 
            . . . f 5 7 7 f f 7 7 7 f . . . 
            . . . f 5 7 7 f f 7 7 7 f . . . 
            . . . f 5 5 f 7 7 f 7 7 f . . . 
            . . . f f 5 7 7 7 7 f f f . . . 
            . . . . f 5 5 7 7 7 7 f . . . . 
            . . . . f f 5 7 7 7 f f . . . . 
            . . . . . f 5 7 7 7 f . . . . . 
            . . . . . f 5 5 5 7 f . . . . . 
            . . . . . . f f f f . . . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . f f 7 7 7 7 7 7 f f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . f f 7 f 7 7 7 7 f 7 f f . . 
            . . f 5 7 7 f 7 7 f 7 7 7 f . . 
            . . f 5 7 7 7 f f 7 7 7 7 f . . 
            . . f 5 7 7 7 f f 7 7 7 7 f . . 
            . . f 5 5 7 f 7 7 f 7 7 7 f . . 
            . . f f 5 f 7 7 7 7 f 7 f f . . 
            . . . f 5 5 7 7 7 7 7 7 f . . . 
            . . . f f 5 7 7 7 7 7 f f . . . 
            . . . . f 5 7 7 7 7 7 f . . . . 
            . . . . f 5 5 5 5 7 7 f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 f 7 7 7 7 f 7 7 f f . 
            . f 5 7 7 7 f 7 7 f 7 7 7 7 f . 
            . f 5 7 7 7 7 f f 7 7 7 7 7 f . 
            . f 5 7 7 7 7 f f 7 7 7 7 7 f . 
            . f 5 7 7 7 f 7 7 f 7 7 7 7 f . 
            . f f 5 7 f 7 7 7 7 f 7 7 f f . 
            . . f 5 7 7 7 7 7 7 7 7 7 f . . 
            . . f f 5 7 7 7 7 7 7 7 f f . . 
            . . . f 5 7 7 7 7 7 7 7 f . . . 
            . . . f 5 5 5 5 5 7 7 7 f . . . 
            . . . . f f f f f f f f . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(Cucumber_1_coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let Value_3 of tiles.getTilesByType(assets.tile`tile9`)) {
        Chilli_plant = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . 5 5 5 5 . . 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . 5 5 5 5 9 9 9 9 5 5 5 5 . . 
            . . 5 5 5 5 9 9 9 9 5 5 5 5 . . 
            . . . . . 5 9 9 9 9 5 . . . . . 
            . . . . 5 5 9 9 9 9 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 . 1 1 . 5 5 5 . . . 
            . . . . 5 . . 1 1 . . 5 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            `, SpriteKind.Chilli_flower)
        tiles.placeOnTile(Chilli_plant, Value_3)
        tiles.setTileAt(Value_3, assets.tile`transparency16`)
    }
    for (let Value_5 of tiles.getTilesByType(assets.tile`tile12`)) {
        Chilli_lava = sprites.create(sprites.dungeon.hazardLava0, SpriteKind.Chilli_lava)
        animation.runImageAnimation(
        Chilli_lava,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 . . . . . . . . 
            . . . 4 4 4 4 4 4 . . . . . . . 
            . 4 4 4 2 2 2 2 4 4 . . . 4 4 4 
            4 4 2 2 2 2 2 2 2 2 4 4 4 4 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 4 4 4 4 2 2 2 2 2 2 2 2 
            4 4 4 4 2 2 2 4 4 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 4 4 4 2 4 4 4 2 
            2 2 2 2 2 2 2 2 2 2 4 4 2 2 4 4 
            2 2 2 2 2 2 2 4 4 4 4 2 2 2 2 2 
            2 2 4 4 4 4 4 4 4 2 2 2 2 2 2 2 
            4 4 2 2 2 2 2 2 4 4 4 4 4 2 2 2 
            2 2 2 2 2 2 2 2 2 4 4 4 4 4 2 2 
            2 2 2 2 2 2 2 4 4 4 2 2 2 4 4 4 
            2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 4 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            4 4 4 4 4 4 . . . . . . . . . 4 
            2 2 2 2 2 4 4 4 . . . . . 4 4 4 
            2 2 2 2 2 2 2 4 4 4 4 4 4 4 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 4 4 4 2 2 2 2 2 2 2 2 2 2 2 
            4 4 2 2 4 4 2 2 2 2 2 2 2 4 4 4 
            2 2 2 2 2 4 4 2 2 2 2 4 4 4 2 2 
            2 2 2 2 2 2 4 4 4 4 4 4 2 2 2 2 
            2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 
            2 2 2 4 4 4 4 4 2 2 2 2 2 4 4 4 
            2 4 4 4 2 2 2 2 4 2 2 2 4 4 2 2 
            4 4 2 2 2 2 2 2 2 4 4 2 4 2 2 2 
            2 2 2 2 2 2 2 2 2 2 4 4 4 2 2 2 
            2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 2 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 4 4 
            4 4 4 4 4 4 . . . . . . 4 4 4 2 
            2 2 2 2 2 4 4 4 4 4 4 4 4 2 2 2 
            2 2 4 4 4 4 2 2 2 2 2 2 2 2 2 2 
            4 4 2 2 2 4 4 2 2 2 2 2 2 4 4 4 
            4 2 2 2 2 2 4 4 2 2 2 4 4 4 2 2 
            2 2 2 2 2 2 2 4 4 4 4 4 2 2 2 2 
            2 2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 
            2 2 2 2 2 4 4 2 2 2 2 2 2 4 4 4 
            4 4 4 4 4 4 2 2 2 2 2 4 4 4 2 4 
            2 2 2 2 2 4 4 2 2 2 2 4 2 2 2 2 
            2 2 2 2 2 2 4 4 4 4 4 4 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 4 4 4 4 . 
            4 4 . . . . . . . . 4 4 2 2 4 4 
            2 4 4 . . . . . . 4 4 2 2 2 2 2 
            2 2 4 4 4 . . 4 4 2 2 2 2 2 2 2 
            2 2 2 2 4 4 4 4 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 
            2 2 4 4 4 4 4 2 2 2 2 2 4 4 4 4 
            4 4 2 2 2 2 4 4 4 4 4 4 4 2 2 2 
            2 2 2 4 4 4 4 4 2 2 2 2 2 2 2 2 
            2 2 4 4 2 2 2 2 4 2 2 2 2 2 2 2 
            4 4 2 2 2 2 2 2 4 2 2 2 2 2 2 4 
            4 2 2 2 2 2 2 2 4 4 4 2 4 4 4 4 
            2 2 2 2 2 2 2 2 2 2 4 4 4 2 2 2 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 4 4 4 4 . . . 
            4 4 . . . . 4 4 2 2 2 2 4 4 . . 
            2 4 4 4 4 4 4 2 2 2 2 2 2 4 4 4 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 
            4 4 2 2 4 4 4 4 2 2 2 2 2 2 4 4 
            2 2 2 2 2 2 2 4 4 4 4 2 2 4 4 2 
            2 2 2 2 2 2 2 2 4 4 4 4 4 4 2 2 
            2 2 2 2 2 4 4 4 2 4 4 4 2 2 2 2 
            4 4 2 2 4 4 2 2 2 2 2 4 4 2 2 2 
            2 4 4 4 2 2 2 2 2 2 2 2 4 4 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            4 4 4 4 4 4 4 . . . . . . 4 4 4 
            2 2 2 2 2 2 4 4 4 4 4 4 4 4 2 2 
            2 2 2 2 2 2 2 2 2 4 4 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 
            4 4 2 2 2 4 4 4 4 2 2 2 2 2 2 4 
            2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 
            2 2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 
            4 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
            2 4 4 4 4 4 2 4 4 4 4 4 4 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 
            `],
        200,
        true
        )
        tiles.placeOnTile(Chilli_lava, Value_5)
        tiles.setTileAt(Value_5, assets.tile`transparency16`)
    }
    for (let Value_4 of tiles.getTilesByType(assets.tile`tile11`)) {
        Checkpoint_for_level_1_sprite = sprites.create(img`
            ....ff..ff..ff..
            ..ffffffffffffff
            ..ffffffffffffff
            ..fffffffffffff.
            ..ffffffffffff..
            ..fffffffffffff.
            ..ffffffffffffff
            ..ffffffffffffff
            ..fffffffffffff.
            ..ffffffffffff..
            ..fffffffffffff.
            ..ffffffffffffff
            ..ffffffffffffff
            ..ff..ff..ff..ff
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            .fff............
            fffff...........
            `, SpriteKind.Checkpoint)
        tiles.placeOnTile(Checkpoint_for_level_1_sprite, Value_4)
        tiles.setTileAt(Value_4, assets.tile`transparency16`)
    }
    for (let Value_8 of tiles.getTilesByType(assets.tile`tile14`)) {
        _10_Coin = sprites.create(img`
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
            `, SpriteKind.Coin_10)
        animation.runImageAnimation(
        _10_Coin,
        [img`
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . f 7 7 f 7 7 7 f f 7 7 f . . 
            . f f 7 f f 7 7 f 7 7 f 7 f f . 
            . f 5 7 7 f 7 7 f 7 7 f 7 7 f . 
            . f 5 7 7 f 7 7 f 7 7 f 7 7 f . 
            . f 5 7 7 f 7 7 f 7 7 f 7 7 f . 
            . f 5 7 f f f 7 7 f f 7 7 7 f . 
            . f f 5 7 7 7 7 7 7 7 7 7 f f . 
            . . f 5 7 7 7 7 7 7 7 7 7 f . . 
            . . f f 5 7 7 7 7 7 7 7 f f . . 
            . . . f 5 7 7 7 7 7 7 7 f . . . 
            . . . f 5 5 5 5 5 7 7 7 f . . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . f f 7 7 7 7 7 7 f f . . . 
            . . . f 7 f 7 7 7 f f 7 f . . . 
            . . f f f f 7 7 f 7 7 f f f . . 
            . . f 5 7 f 7 7 f 7 7 f 7 f . . 
            . . f 5 7 f 7 7 f 7 7 f 7 f . . 
            . . f 5 7 f 7 7 f 7 7 f 7 f . . 
            . . f 5 f f f 7 7 f f 7 7 f . . 
            . . f f 5 7 7 7 7 7 7 7 f f . . 
            . . . f 5 5 7 7 7 7 7 7 f . . . 
            . . . f f 5 7 7 7 7 7 f f . . . 
            . . . . f 5 7 7 7 7 7 f . . . . 
            . . . . f 5 5 5 5 7 7 f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f f 7 7 7 7 f f . . . . 
            . . . . f f 7 7 7 f f f . . . . 
            . . . f f f 7 7 f 7 7 f f . . . 
            . . . f 5 f 7 7 f 7 7 f f . . . 
            . . . f 5 f 7 7 f 7 7 f f . . . 
            . . . f 5 f 7 7 f 7 7 f f . . . 
            . . . f f f f 7 7 f f 7 f . . . 
            . . . f f 5 7 7 7 7 7 f f . . . 
            . . . . f 5 5 7 7 7 7 f . . . . 
            . . . . f f 5 7 7 7 f f . . . . 
            . . . . . f 5 7 7 7 f . . . . . 
            . . . . . f 5 5 5 7 f . . . . . 
            . . . . . . f f f f . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f f 7 7 f f . . . . . 
            . . . . f f 7 7 f 7 7 f . . . . 
            . . . . f f 7 7 f 7 7 f . . . . 
            . . . . f f 5 7 f 7 7 f . . . . 
            . . . . f f 5 7 f 7 7 f . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . . . f 5 7 7 7 f . . . . . 
            . . . . . f 5 5 7 7 f . . . . . 
            . . . . . f f 5 7 f f . . . . . 
            . . . . . . f 5 7 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f f 7 7 f f . . . . . 
            . . . . f f 7 7 f 7 7 f . . . . 
            . . . . f f 7 7 f 7 7 f . . . . 
            . . . . f f 5 7 f 7 7 f . . . . 
            . . . . f f 5 7 f 7 7 f . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . . . f 5 7 7 7 f . . . . . 
            . . . . . f 5 5 7 7 f . . . . . 
            . . . . . f f 5 7 f f . . . . . 
            . . . . . . f 5 7 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f f 7 7 7 7 f f . . . . 
            . . . . f f 7 7 7 f f f . . . . 
            . . . f f f 7 7 f 7 7 f f . . . 
            . . . f 5 f 7 7 f 7 7 f f . . . 
            . . . f 5 f 7 7 f 7 7 f f . . . 
            . . . f 5 f 7 7 f 7 7 f f . . . 
            . . . f f f f 7 7 f f 7 f . . . 
            . . . f f 5 7 7 7 7 7 f f . . . 
            . . . . f 5 5 7 7 7 7 f . . . . 
            . . . . f f 5 7 7 7 f f . . . . 
            . . . . . f 5 7 7 7 f . . . . . 
            . . . . . f 5 5 5 7 f . . . . . 
            . . . . . . f f f f . . . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . f f 7 7 7 7 7 7 f f . . . 
            . . . f 7 f 7 7 7 f f 7 f . . . 
            . . f f f f 7 7 f 7 7 f f f . . 
            . . f 5 7 f 7 7 f 7 7 f 7 f . . 
            . . f 5 7 f 7 7 f 7 7 f 7 f . . 
            . . f 5 7 f 7 7 f 7 7 f 7 f . . 
            . . f 5 f f f 7 7 f f 7 7 f . . 
            . . f f 5 7 7 7 7 7 7 7 f f . . 
            . . . f 5 5 7 7 7 7 7 7 f . . . 
            . . . f f 5 7 7 7 7 7 f f . . . 
            . . . . f 5 7 7 7 7 7 f . . . . 
            . . . . f 5 5 5 5 7 7 f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . f 7 7 f 7 7 7 f f 7 7 f . . 
            . f f 7 f f 7 7 f 7 7 f 7 f f . 
            . f 5 7 7 f 7 7 f 7 7 f 7 7 f . 
            . f 5 7 7 f 7 7 f 7 7 f 7 7 f . 
            . f 5 7 7 f 7 7 f 7 7 f 7 7 f . 
            . f 5 7 f f f 7 7 f f 7 7 7 f . 
            . f f 5 7 7 7 7 7 7 7 7 7 f f . 
            . . f 5 7 7 7 7 7 7 7 7 7 f . . 
            . . f f 5 7 7 7 7 7 7 7 f f . . 
            . . . f 5 7 7 7 7 7 7 7 f . . . 
            . . . f 5 5 5 5 5 7 7 7 f . . . 
            . . . . f f f f f f f f . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(_10_Coin, Value_8)
        tiles.setTileAt(Value_8, assets.tile`transparency16`)
    }
    for (let Value_9 of tiles.getTilesByType(assets.tile`tile15`)) {
        Springboard = sprites.create(img`
            7777777777777777
            7777777777777777
            7777777777777777
            ......f11f......
            .....f1111f.....
            ....f11ff11f....
            ...f11f..f11f...
            ..f11f....f11f..
            .feef......feef.
            .fef........fef.
            .feef......feef.
            ..f11f....f11f..
            ...f11f..f11f...
            ....f11ff11f....
            .....f1111f.....
            ......f11f......
            7777777777777777
            7777777777777777
            7777777777777777
            `, SpriteKind.Springboard)
        tiles.placeOnTile(Springboard, Value_9)
        tiles.setTileAt(Value_9, assets.tile`transparency16`)
    }
    for (let Value_10 of tiles.getTilesByType(assets.tile`tile16`)) {
        Flag_Pole = sprites.create(img`
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            . . . . . . f 1 1 f . . . . . . 
            `, SpriteKind.Flag_pole)
        tiles.placeOnTile(Flag_Pole, Value_10)
        tiles.setTileAt(Value_10, assets.tile`transparency16`)
    }
    for (let Value_11 of tiles.getTilesByType(assets.tile`tile18`)) {
        Flag_Pole_Top = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            `, SpriteKind.Flag_pole_top)
        tiles.placeOnTile(Flag_Pole_Top, Value_11)
        tiles.setTileAt(Value_11, assets.tile`transparency16`)
    }
    for (let Value_12 of tiles.getTilesByType(assets.tile`tile17`)) {
        Flag_pole_flag = sprites.create(img`
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . f 2 2 2 2 f . . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f 2 2 f f f 2 f . . . . . . 
            . f 2 2 2 f 2 2 2 f . . . . . . 
            f 2 2 2 2 f 2 2 2 f . . . . . . 
            f 2 2 2 2 f f f 2 f . . . . . . 
            . f 2 2 2 2 2 2 2 f . . . . . . 
            . . f 2 2 2 2 2 2 f . . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . . . f 2 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            `, SpriteKind.Flag_pole)
        tiles.placeOnTile(Flag_pole_flag, Value_12)
        tiles.setTileAt(Value_12, assets.tile`transparency16`)
    }
    for (let Value_13 of tiles.getTilesByType(assets.tile`tile19`)) {
        Thingy_that_will_drop = sprites.create(img`
            . . . f . f . f . f . f . f . . 
            . . . f . f . f . f . f . f . . 
            f f f f f f f f f f f f f f . . 
            . . f d d f d d d d f d d f f f 
            f f f d d d f d d f d d d f . . 
            . . f d d d d f f d d d d f f f 
            f f f d d f f d d f f d d f . . 
            . . f d d f f d d f f d d f f f 
            f f f d d d d d d d d d d f . . 
            . . f d d d d f f d d d d f f f 
            f f f d d d f d d f d d d f . . 
            . . f d d f d d d d f d d f f f 
            f f f d d d d d d d d d d f . . 
            . . f f f f f f f f f f f f f f 
            . . f . f . f . f . f . f . . . 
            . . f . f . f . f . f . f . . . 
            `, SpriteKind.Thingy_that_can_drop)
        Thingy_that_will_drop.vy = 100
        tiles.placeOnTile(Thingy_that_will_drop, Value_13)
        tiles.setTileAt(Value_13, assets.tile`transparency16`)
    }
    for (let Value_14 of tiles.getTilesByType(assets.tile`tile20`)) {
        Jumping_chilli_flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 . . . . 2 2 . . . . 
            . . . 2 2 2 2 . . 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . 2 2 2 2 5 5 5 5 2 2 2 2 . . 
            . . 2 2 2 2 5 5 5 5 2 2 2 2 . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . 2 2 5 5 5 5 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 . 9 9 . 2 2 2 . . . 
            . . . . 2 . . 9 9 . . 2 . . . . 
            . . . . . 9 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 9 . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            `, SpriteKind.Jumping_chilli_flower)
        tiles.placeOnTile(Jumping_chilli_flower, Value_14)
        tiles.setTileAt(Value_14, assets.tile`transparency16`)
    }
}
controller.combos.attachCombo("ua", function () {
    if (Chosen_Character__Cucumber_Creature == true) {
        if (0 == Big_boy_jump_power_up && Cucumber_Creature.isHittingTile(CollisionDirection.Bottom)) {
            Cucumber_Creature.vy = -400
        } else if (1 >= Big_boy_jump_power_up && Cucumber_Creature.isHittingTile(CollisionDirection.Bottom)) {
            Cucumber_Creature.vy = -500
        }
    } else if (Chosen_Character__Ketchup_Kind == true) {
        if (0 == Big_boy_jump_power_up && Ketchup_Kind.isHittingTile(CollisionDirection.Bottom)) {
            Ketchup_Kind.vy = -480
        } else if (1 >= Big_boy_jump_power_up && Ketchup_Kind.isHittingTile(CollisionDirection.Bottom)) {
            Ketchup_Kind.vy = -600
        }
    } else if (Chosen_Character__Potato_Person == true) {
        if (0 == Big_boy_jump_power_up && Potato_Person.isHittingTile(CollisionDirection.Bottom)) {
            Potato_Person.vy = -400
        } else if (1 >= Big_boy_jump_power_up && Potato_Person.isHittingTile(CollisionDirection.Bottom)) {
            Potato_Person.vy = -500
        }
    } else if (Chosen_Character__Strawberry_Sister == true) {
        if (0 == Big_boy_jump_power_up && Strawberry_Sister.isHittingTile(CollisionDirection.Bottom)) {
            Strawberry_Sister.vy = -400
        } else if (1 >= Big_boy_jump_power_up && Strawberry_Sister.isHittingTile(CollisionDirection.Bottom)) {
            Strawberry_Sister.vy = -500
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Chosen_Character__Cucumber_Creature == true) {
        if (Math.percentChance(10)) {
            info.changeScoreBy(2)
        } else {
            info.changeScoreBy(1)
        }
    } else {
        info.changeScoreBy(1)
    }
})
function EnemyOnScreen () {
    if (1 <= Flying_chilli_on_screen) {
        Flying_chilli = sprites.create(img`
            . . . . . . . 7 . . . . . . . 
            . . . c . . . . 7 . . . . c . 
            . . c c c . . . 7 . . . c c c 
            . . . c c c . 7 7 7 . c c c . 
            2 . . . c c 2 2 2 2 4 c c . . 
            4 2 2 . . . 2 1 2 2 4 . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . 
            . . . 4 4 4 4 . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Flying_chilli,
        [img`
            . . . . . . . 7 . . . . . . . . 
            . . . c . . . . 7 . . . . c . . 
            . . c c c . . . 7 . . . c c c . 
            . . . c c c . 7 7 7 . c c c . . 
            2 . . . c c 2 2 2 2 4 c c . . . 
            4 2 2 . . . 2 1 2 2 4 . . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . c c c c . 7 7 7 . c c c c . 
            2 . c c c c 2 2 2 2 4 c c c c . 
            4 2 2 . . . 2 1 2 2 4 . . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            2 . . . c c 2 2 2 2 4 c c . . . 
            4 2 2 c c c 2 1 2 2 4 c c c . . 
            . 4 c c c 2 2 1 2 2 4 . c c c . 
            . . 4 c 1 1 1 2 2 4 . . . c . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            2 . . . c c 2 2 2 2 4 c c . . . 
            4 2 2 c c c 2 1 2 2 4 c c c . . 
            . 4 c c c 2 2 1 2 2 4 . c c c . 
            . . 4 c 1 1 1 2 2 4 . . . c . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . c c c c . 7 7 7 . c c c c . 
            2 . c c c c 2 2 2 2 4 c c c c . 
            4 2 2 . . . 2 1 2 2 4 . . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . c . . . . 7 . . . . c . . 
            . . c c c . . . 7 . . . c c c . 
            . . . c c c . 7 7 7 . c c c . . 
            2 . . . c c 2 2 2 2 4 c c . . . 
            4 2 2 . . . 2 1 2 2 4 . . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        if (Chosen_Character__Cucumber_Creature == true) {
            Flying_chilli.setPosition(Cucumber_Creature.x + 80, Cucumber_Creature.y - 80)
            Flying_chilli.follow(Cucumber_Creature, 50)
        } else if (Chosen_Character__Ketchup_Kind == true) {
            Flying_chilli.follow(Ketchup_Kind, 50)
            Flying_chilli.setPosition(Ketchup_Kind.x + 80, Cucumber_Creature.y - 80)
        } else if (Chosen_Character__Potato_Person == true) {
            Flying_chilli.follow(Potato_Person, 50)
            Flying_chilli.setPosition(Potato_Person.x + 80, Cucumber_Creature.y - 80)
        } else if (Chosen_Character__Strawberry_Sister == true) {
            Flying_chilli.follow(Strawberry_Sister, 50)
            Flying_chilli.setPosition(Strawberry_Sister.x + 80, Cucumber_Creature.y - 80)
        }
    }
}
sprites.onOverlap(SpriteKind.Character_Picker, SpriteKind.Player, function (sprite, otherSprite) {
    if (Character_Picker.overlapsWith(Cucumber_Creature)) {
        if (true == Character_info_for_Cucumber_Creature) {
            Ketchup_Kind.destroy()
            Potato_Person.destroy()
            Strawberry_Sister.destroy()
            game.splash("You choose Cucumber Creature!")
            controller.moveSprite(Cucumber_Creature, 80, 0)
            Chosen_Character__Cucumber_Creature = true
            scene.cameraFollowSprite(Cucumber_Creature)
            Character_Picker.destroy()
            StartLevel()
        } else if (false == Character_info_for_Cucumber_Creature) {
            game.showLongText("This is Cucumber Creature. When you eat a cucumber there is a 10% chance that you will receive 2 cucumbers instead of one. This is because he loves cucumbers so much he has a stomach for cucumbers and sometimes he will be able to get all from the cucumber rather than half. ", DialogLayout.Bottom)
            Character_info_for_Cucumber_Creature = true
            tiles.placeOnTile(Character_Picker, tiles.getTileLocation(4, 1))
        }
    } else if (Character_Picker.overlapsWith(Ketchup_Kind)) {
        if (true == Character_info_for_Ketchup_Kind) {
            Cucumber_Creature.destroy()
            Potato_Person.destroy()
            Strawberry_Sister.destroy()
            game.splash("You choose Ketchup Kind!")
            controller.moveSprite(Ketchup_Kind, 80, 0)
            Chosen_Character__Ketchup_Kind = true
            scene.cameraFollowSprite(Ketchup_Kind)
            Character_Picker.destroy()
            StartLevel()
        } else if (false == Character_info_for_Ketchup_Kind) {
            game.showLongText("This is Ketchup Kind. When ketchup kind jumps ketchup kind jumps 20% higher than everyone else. This is because he has ketchup jetpacks which propels him up.", DialogLayout.Bottom)
            Character_info_for_Ketchup_Kind = true
            tiles.placeOnTile(Character_Picker, tiles.getTileLocation(4, 1))
        }
    } else if (Character_Picker.overlapsWith(Potato_Person)) {
        if (true == Character_info_for_potato_person) {
            Cucumber_Creature.destroy()
            Ketchup_Kind.destroy()
            Strawberry_Sister.destroy()
            game.splash("You choose Potato Person!")
            controller.moveSprite(Potato_Person, 80, 0)
            Chosen_Character__Potato_Person = true
            scene.cameraFollowSprite(Potato_Person)
            Character_Picker.destroy()
            StartLevel()
        } else if (false == Character_info_for_potato_person) {
            game.showLongText("This is potato person. When you get lives potato person has a 15% chance to give you another life. This is because sometimes the potatoes in potato person's stomach makes a heart.", DialogLayout.Bottom)
            Character_info_for_potato_person = true
            tiles.placeOnTile(Character_Picker, tiles.getTileLocation(4, 1))
        }
    } else if (Character_Picker.overlapsWith(Strawberry_Sister)) {
        if (Character_info_for_strawberry_sister == true) {
            Cucumber_Creature.destroy()
            Ketchup_Kind.destroy()
            Potato_Person.destroy()
            game.splash("You choose Strawberry Sister!")
            controller.moveSprite(Strawberry_Sister, 80, 0)
            Chosen_Character__Strawberry_Sister = true
            scene.cameraFollowSprite(Strawberry_Sister)
            Character_Picker.destroy()
            StartLevel()
        } else if (Character_info_for_strawberry_sister == false) {
            game.showLongText("This is strawberry sister. When strawberry sister shoots projectiles one will go up down left and right but it only uses 1 score. This is because strawberry sister has 4 mouths so she can eat more strawberries at once.", DialogLayout.Bottom)
            Character_info_for_strawberry_sister = true
            tiles.placeOnTile(Character_Picker, tiles.getTileLocation(4, 1))
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flag_pole, function (sprite, otherSprite) {
    Level += 1
    StartLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Chosen_Character__Cucumber_Creature == true) {
        if (controller.left.isPressed()) {
            if (1 <= info.score()) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . 7 f 7 f f f 7 f 7 . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Cucumber_Creature, -50, 0)
                info.changeScoreBy(-1)
            }
        } else if (controller.right.isPressed()) {
            if (1 <= info.score()) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . 7 f 7 f f f 7 f 7 . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Cucumber_Creature, 50, 0)
                info.changeScoreBy(-1)
            }
        } else {
            if (1 <= info.score()) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . 7 f 7 f f f 7 f 7 . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Cucumber_Creature, 50, 0)
                info.changeScoreBy(-1)
            }
        }
    } else if (Chosen_Character__Ketchup_Kind == true) {
        if (controller.left.isPressed()) {
            if (1 <= info.score()) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . 7 f 7 f f f 7 f 7 . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Ketchup_Kind, -50, 0)
                info.changeScoreBy(-1)
            }
        } else if (controller.right.isPressed()) {
            if (1 <= info.score()) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . 7 f 7 f f f 7 f 7 . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Ketchup_Kind, 50, 0)
                info.changeScoreBy(-1)
            }
        } else {
            if (1 <= info.score()) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . 7 f 7 f f f 7 f 7 . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Ketchup_Kind, 50, 0)
                info.changeScoreBy(-1)
            }
        }
    } else if (Chosen_Character__Potato_Person == true) {
        if (controller.left.isPressed()) {
            if (1 <= info.score()) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . 7 f 7 f f f 7 f 7 . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Potato_Person, -50, 0)
                info.changeScoreBy(-1)
            }
        } else if (controller.right.isPressed()) {
            if (1 <= info.score()) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . 7 f 7 f f f 7 f 7 . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Potato_Person, 50, 0)
                info.changeScoreBy(-1)
            }
        } else {
            if (1 <= info.score()) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . 7 f 7 f f f 7 f 7 . . . . 
                    . . . 5 7 5 7 f 7 5 7 5 . . . . 
                    . . . . 5 f 5 7 5 f 5 . . . . . 
                    . . . . . 5 7 f 7 5 . . . . . . 
                    . . . . . . 5 7 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Potato_Person, 50, 0)
                info.changeScoreBy(-1)
            }
        }
    } else if (Chosen_Character__Strawberry_Sister == true) {
        if (1 <= info.score()) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 7 5 . . . . . . . 
                . . . . . 5 7 f 7 5 . . . . . . 
                . . . . 5 f 5 7 5 f 5 . . . . . 
                . . . 5 7 5 7 f 7 5 7 5 . . . . 
                . . . 7 f 7 f f f 7 f 7 . . . . 
                . . . 5 7 5 7 f 7 5 7 5 . . . . 
                . . . . 5 f 5 7 5 f 5 . . . . . 
                . . . . . 5 7 f 7 5 . . . . . . 
                . . . . . . 5 7 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Strawberry_Sister, -50, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 7 5 . . . . . . . 
                . . . . . 5 7 f 7 5 . . . . . . 
                . . . . 5 f 5 7 5 f 5 . . . . . 
                . . . 5 7 5 7 f 7 5 7 5 . . . . 
                . . . 7 f 7 f f f 7 f 7 . . . . 
                . . . 5 7 5 7 f 7 5 7 5 . . . . 
                . . . . 5 f 5 7 5 f 5 . . . . . 
                . . . . . 5 7 f 7 5 . . . . . . 
                . . . . . . 5 7 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Strawberry_Sister, 50, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 7 5 . . . . . . . 
                . . . . . 5 7 f 7 5 . . . . . . 
                . . . . 5 f 5 7 5 f 5 . . . . . 
                . . . 5 7 5 7 f 7 5 7 5 . . . . 
                . . . 7 f 7 f f f 7 f 7 . . . . 
                . . . 5 7 5 7 f 7 5 7 5 . . . . 
                . . . . 5 f 5 7 5 f 5 . . . . . 
                . . . . . 5 7 f 7 5 . . . . . . 
                . . . . . . 5 7 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Strawberry_Sister, 0, -50)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 7 5 . . . . . . . 
                . . . . . 5 7 f 7 5 . . . . . . 
                . . . . 5 f 5 7 5 f 5 . . . . . 
                . . . 5 7 5 7 f 7 5 7 5 . . . . 
                . . . 7 f 7 f f f 7 f 7 . . . . 
                . . . 5 7 5 7 f 7 5 7 5 . . . . 
                . . . . 5 f 5 7 5 f 5 . . . . . 
                . . . . . 5 7 f 7 5 . . . . . . 
                . . . . . . 5 7 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Strawberry_Sister, 0, 50)
            info.changeScoreBy(-1)
        }
    }
})
function EnemyOnScreenJumpingChilli () {
    if (1 <= Jumping_Chilli_On_Screen) {
        Jumping_Chilli = sprites.create(img`
            . . . . . . . 7 . . . 
            . . . . . . . . 7 . . 
            . . . . . . . . 7 . . 
            . . . . . . . 7 7 7 . 
            2 . . . . . 2 2 2 2 4 
            4 2 2 . . . 2 1 2 2 4 
            . 4 1 2 2 2 2 1 2 2 4 
            . . 4 1 1 1 1 2 2 4 . 
            . . 4 2 2 2 2 4 4 . . 
            . . c 4 4 4 4 c . . . 
            . . c c . . c c . . . 
            . . c c . . c c . . . 
            `, SpriteKind.Jumping_chilli)
    }
    if (Chosen_Character__Cucumber_Creature == true) {
        Jumping_Chilli.setPosition(Cucumber_Creature.x + 80, Cucumber_Creature.y - 80)
        Does_jumping_chilli_exsist = true
    } else if (Chosen_Character__Ketchup_Kind == true) {
        Jumping_Chilli.setPosition(Ketchup_Kind.x + 80, Ketchup_Kind.y - 80)
        Does_jumping_chilli_exsist = true
    } else if (Chosen_Character__Potato_Person == true) {
        Jumping_Chilli.setPosition(Potato_Person.x + 80, Potato_Person.y - 80)
        Does_jumping_chilli_exsist = true
    } else if (Chosen_Character__Strawberry_Sister == true) {
        Jumping_Chilli.setPosition(Strawberry_Sister.x + 80, Strawberry_Sister.y - 80)
        Does_jumping_chilli_exsist = true
    }
}
controller.combos.attachCombo("uuddlrlrba", function () {
    info.changeLifeBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chilli_flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (1 >= Flying_chilli_on_screen) {
        Flying_chilli_on_screen += 1
    } else if (0 == Flying_chilli_on_screen) {
        Flying_chilli = sprites.create(img`
            . . . . . . . 7 . . . . . . . 
            . . . c . . . . 7 . . . . c . 
            . . c c c . . . 7 . . . c c c 
            . . . c c c . 7 7 7 . c c c . 
            2 . . . c c 2 2 2 2 4 c c . . 
            4 2 2 . . . 2 1 2 2 4 . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . 
            . . . 4 4 4 4 . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Flying_chilli,
        [img`
            . . . . . . . 7 . . . . . . . . 
            . . . c . . . . 7 . . . . c . . 
            . . c c c . . . 7 . . . c c c . 
            . . . c c c . 7 7 7 . c c c . . 
            2 . . . c c 2 2 2 2 4 c c . . . 
            4 2 2 . . . 2 1 2 2 4 . . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . c c c c . 7 7 7 . c c c c . 
            2 . c c c c 2 2 2 2 4 c c c c . 
            4 2 2 . . . 2 1 2 2 4 . . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            2 . . . c c 2 2 2 2 4 c c . . . 
            4 2 2 c c c 2 1 2 2 4 c c c . . 
            . 4 c c c 2 2 1 2 2 4 . c c c . 
            . . 4 c 1 1 1 2 2 4 . . . c . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            2 . . . c c 2 2 2 2 4 c c . . . 
            4 2 2 c c c 2 1 2 2 4 c c c . . 
            . 4 c c c 2 2 1 2 2 4 . c c c . 
            . . 4 c 1 1 1 2 2 4 . . . c . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . c c c c . 7 7 7 . c c c c . 
            2 . c c c c 2 2 2 2 4 c c c c . 
            4 2 2 . . . 2 1 2 2 4 . . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 7 . . . . . . . . 
            . . . c . . . . 7 . . . . c . . 
            . . c c c . . . 7 . . . c c c . 
            . . . c c c . 7 7 7 . c c c . . 
            2 . . . c c 2 2 2 2 4 c c . . . 
            4 2 2 . . . 2 1 2 2 4 . . . . . 
            . 4 1 2 2 2 2 1 2 2 4 . . . . . 
            . . 4 1 1 1 1 2 2 4 . . . . . . 
            . . 4 2 2 2 2 4 4 . . . . . . . 
            . . . 4 4 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        if (Chosen_Character__Cucumber_Creature == true) {
            Flying_chilli.setPosition(Cucumber_Creature.x + 80, Cucumber_Creature.y - 80)
            Flying_chilli.follow(Cucumber_Creature, 50)
        } else if (Chosen_Character__Ketchup_Kind == true) {
            Flying_chilli.follow(Ketchup_Kind, 50)
            Flying_chilli.setPosition(Ketchup_Kind.x + 80, Cucumber_Creature.y - 80)
        } else if (Chosen_Character__Potato_Person == true) {
            Flying_chilli.follow(Potato_Person, 50)
            Flying_chilli.setPosition(Potato_Person.x + 80, Cucumber_Creature.y - 80)
        } else if (Chosen_Character__Strawberry_Sister == true) {
            Flying_chilli.follow(Strawberry_Sister, 50)
            Flying_chilli.setPosition(Strawberry_Sister.x + 80, Cucumber_Creature.y - 80)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flag_pole_top, function (sprite, otherSprite) {
    if (3 == Level) {
        World += 1
        Level = 1
    } else {
        Level += 1
    }
    info.changeLifeBy(1)
    StartLevel()
})
info.onCountdownEnd(function () {
    StartLevel()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Jumping_chilli_flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (1 >= Jumping_Chilli_On_Screen) {
        Jumping_Chilli_On_Screen += 1
        EnemyOnScreenJumpingChilli()
    } else if (0 == Jumping_Chilli_On_Screen) {
        Jumping_Chilli = sprites.create(img`
            . . . . . . . 7 . . . 
            . . . . . . . . 7 . . 
            . . . . . . . . 7 . . 
            . . . . . . . 7 7 7 . 
            2 . . . . . 2 2 2 2 4 
            4 2 2 . . . 2 1 2 2 4 
            . 4 1 2 2 2 2 1 2 2 4 
            . . 4 1 1 1 1 2 2 4 . 
            . . 4 2 2 2 2 4 4 . . 
            . . c 4 4 4 4 c . . . 
            . . c c . . c c . . . 
            . . c c . . c c . . . 
            `, SpriteKind.Jumping_chilli)
        if (Chosen_Character__Cucumber_Creature == true) {
            Jumping_Chilli.setPosition(Cucumber_Creature.x + 80, Cucumber_Creature.y - 80)
            Does_jumping_chilli_exsist = true
        } else if (Chosen_Character__Ketchup_Kind == true) {
            Jumping_Chilli.setPosition(Ketchup_Kind.x + 80, Ketchup_Kind.y - 80)
            Does_jumping_chilli_exsist = true
        } else if (Chosen_Character__Potato_Person == true) {
            Jumping_Chilli.setPosition(Potato_Person.x + 80, Potato_Person.y - 80)
            Does_jumping_chilli_exsist = true
        } else if (Chosen_Character__Strawberry_Sister == true) {
            Jumping_Chilli.setPosition(Strawberry_Sister.x + 80, Strawberry_Sister.y - 80)
            Does_jumping_chilli_exsist = true
        }
    }
})
sprites.onOverlap(SpriteKind.Checkpoint, SpriteKind.Player, function (sprite, otherSprite) {
    if (0 == Checkpoint_for_level_1 && (1 == World && 1 == Level)) {
        Checkpoint_for_level_1 += 1
        music.magicWand.play()
        Checkpoint_for_level_1_sprite.setImage(img`
            ....ff..ff..ff..
            ..ff77ff77ff77ff
            ..f777777777777f
            ..f77777777777f.
            ..f7775555577f..
            ..f77757777777f.
            ..f777577777777f
            ..f777577777777f
            ..f77757777777f.
            ..f7775555577f..
            ..f77777777777f.
            ..f777777777777f
            ..f7ff77ff77ff7f
            ..ff..ff..ff..ff
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            .fff............
            fffff...........
            `)
    } else if (0 == Checkpoint_for_level_2 && (1 == World && 2 == Level)) {
        Checkpoint_for_level_2 = 0
        music.magicWand.play()
        Checkpoint_for_level_2_sprite.setImage(img`
            ....ff..ff..ff..
            ..ff77ff77ff77ff
            ..f777777777777f
            ..f77777777777f.
            ..f7775555577f..
            ..f77757777777f.
            ..f777577777777f
            ..f777577777777f
            ..f77757777777f.
            ..f7775555577f..
            ..f77777777777f.
            ..f777777777777f
            ..f7ff77ff77ff7f
            ..ff..ff..ff..ff
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            ..f.............
            .fff............
            fffff...........
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chilli_lava, function (sprite, otherSprite) {
    StartLevel()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Jumping_chilli, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (Math.percentChance(10)) {
        music.powerUp.play()
        Big_boy_jump_power_up += 1
    }
    Jumping_Chilli_On_Screen += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Springboard, function (sprite, otherSprite) {
    if (Chosen_Character__Cucumber_Creature == true) {
        if (1 <= Cucumber_Creature.vy) {
            music.jumpUp.play()
            animation.runImageAnimation(
            Springboard,
            [img`
                7777777777777777
                7777777777777777
                7777777777777777
                ......f11f......
                .....f1111f.....
                ....f11ff11f....
                ...f11f..f11f...
                ..f11f....f11f..
                .feef......feef.
                .fef........fef.
                .feef......feef.
                ..f11f....f11f..
                ...f11f..f11f...
                ....f11ff11f....
                .....f1111f.....
                ......f11f......
                7777777777777777
                7777777777777777
                7777777777777777
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                `,img`
                7777777777777777
                7777777777777777
                7777777777777777
                ......f11f......
                .....f1111f.....
                ....f11ff11f....
                ...f11f..f11f...
                ..f11f....f11f..
                .feef......feef.
                .fef........fef.
                .feef......feef.
                ..f11f....f11f..
                ...f11f..f11f...
                ....f11ff11f....
                .....f1111f.....
                ......f11f......
                7777777777777777
                7777777777777777
                7777777777777777
                `],
            100,
            false
            )
            Cucumber_Creature.vy = -1000
        }
    } else if (Chosen_Character__Ketchup_Kind == true) {
        if (1 <= Ketchup_Kind.vy) {
            music.jumpUp.play()
            animation.runImageAnimation(
            Springboard,
            [img`
                7777777777777777
                7777777777777777
                7777777777777777
                ......f11f......
                .....f1111f.....
                ....f11ff11f....
                ...f11f..f11f...
                ..f11f....f11f..
                .feef......feef.
                .fef........fef.
                .feef......feef.
                ..f11f....f11f..
                ...f11f..f11f...
                ....f11ff11f....
                .....f1111f.....
                ......f11f......
                7777777777777777
                7777777777777777
                7777777777777777
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                `,img`
                7777777777777777
                7777777777777777
                7777777777777777
                ......f11f......
                .....f1111f.....
                ....f11ff11f....
                ...f11f..f11f...
                ..f11f....f11f..
                .feef......feef.
                .fef........fef.
                .feef......feef.
                ..f11f....f11f..
                ...f11f..f11f...
                ....f11ff11f....
                .....f1111f.....
                ......f11f......
                7777777777777777
                7777777777777777
                7777777777777777
                `],
            100,
            false
            )
            Ketchup_Kind.vy = -1000
        }
    } else if (Chosen_Character__Potato_Person == true) {
        if (1 <= Potato_Person.vy) {
            music.jumpUp.play()
            animation.runImageAnimation(
            Springboard,
            [img`
                7777777777777777
                7777777777777777
                7777777777777777
                ......f11f......
                .....f1111f.....
                ....f11ff11f....
                ...f11f..f11f...
                ..f11f....f11f..
                .feef......feef.
                .fef........fef.
                .feef......feef.
                ..f11f....f11f..
                ...f11f..f11f...
                ....f11ff11f....
                .....f1111f.....
                ......f11f......
                7777777777777777
                7777777777777777
                7777777777777777
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                `,img`
                7777777777777777
                7777777777777777
                7777777777777777
                ......f11f......
                .....f1111f.....
                ....f11ff11f....
                ...f11f..f11f...
                ..f11f....f11f..
                .feef......feef.
                .fef........fef.
                .feef......feef.
                ..f11f....f11f..
                ...f11f..f11f...
                ....f11ff11f....
                .....f1111f.....
                ......f11f......
                7777777777777777
                7777777777777777
                7777777777777777
                `],
            100,
            false
            )
            Potato_Person.vy = -1000
        }
    } else if (Chosen_Character__Strawberry_Sister == true) {
        if (1 <= Strawberry_Sister.vy) {
            music.jumpUp.play()
            animation.runImageAnimation(
            Springboard,
            [img`
                7777777777777777
                7777777777777777
                7777777777777777
                ......f11f......
                .....f1111f.....
                ....f11ff11f....
                ...f11f..f11f...
                ..f11f....f11f..
                .feef......feef.
                .fef........fef.
                .feef......feef.
                ..f11f....f11f..
                ...f11f..f11f...
                ....f11ff11f....
                .....f1111f.....
                ......f11f......
                7777777777777777
                7777777777777777
                7777777777777777
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                7777777777777777
                `,img`
                7777777777777777
                7777777777777777
                7777777777777777
                ......f11f......
                .....f1111f.....
                ....f11ff11f....
                ...f11f..f11f...
                ..f11f....f11f..
                .feef......feef.
                .fef........fef.
                .feef......feef.
                ..f11f....f11f..
                ...f11f..f11f...
                ....f11ff11f....
                .....f1111f.....
                ......f11f......
                7777777777777777
                7777777777777777
                7777777777777777
                `],
            100,
            false
            )
            Strawberry_Sister.vy = -1000
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin_10, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Chosen_Character__Cucumber_Creature == true) {
        if (Math.percentChance(10)) {
            info.changeScoreBy(10)
        } else {
            info.changeScoreBy(10)
        }
    } else {
        info.changeScoreBy(10)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (Math.percentChance(10)) {
        Big_boy_jump_power_up += 1
        music.powerUp.play()
    }
    Flying_chilli_on_screen += -1
    EnemyOnScreen()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.powerDown.play()
    if (1 <= Big_boy_jump_power_up) {
        Big_boy_jump_power_up += -1
    } else {
        info.changeLifeBy(-1)
    }
    Flying_chilli_on_screen += -1
    EnemyOnScreen()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Jumping_chilli, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.powerDown.play()
    if (1 >= Jumping_Chilli_On_Screen) {
        Jumping_Chilli_On_Screen += -1
    } else {
        info.changeLifeBy(-1)
    }
    Jumping_Chilli_On_Screen += -1
    EnemyOnScreenJumpingChilli()
})
let Does_jumping_chilli_exsist = false
let Jumping_Chilli: Sprite = null
let Jumping_Chilli_On_Screen = 0
let projectile: Sprite = null
let Flying_chilli: Sprite = null
let Jumping_chilli_flower: Sprite = null
let Thingy_that_will_drop: Sprite = null
let Flag_pole_flag: Sprite = null
let Flag_Pole_Top: Sprite = null
let Flag_Pole: Sprite = null
let Springboard: Sprite = null
let _10_Coin: Sprite = null
let Chilli_lava: Sprite = null
let Chilli_plant: Sprite = null
let Cucumber_1_coin: Sprite = null
let Checkpoint_for_level_2_sprite: Sprite = null
let Checkpoint_for_level_1_sprite: Sprite = null
let Checkpoint_for_level_2 = 0
let Checkpoint_for_level_1 = 0
let Strawberry_Sister: Sprite = null
let Potato_Person: Sprite = null
let Ketchup_Kind: Sprite = null
let Cucumber_Creature: Sprite = null
let Character_Picker: Sprite = null
let Level = 0
let World = 0
let Big_boy_jump_power_up = 0
let Flying_chilli_on_screen = 0
let Character_info_for_strawberry_sister = false
let Character_info_for_potato_person = false
let Character_info_for_Ketchup_Kind = false
let Character_info_for_Cucumber_Creature = false
let Chosen_Character__Strawberry_Sister = false
let Chosen_Character__Potato_Person = false
let Chosen_Character__Ketchup_Kind = false
let Chosen_Character__Cucumber_Creature = false
scene.setBackgroundColor(1)
let Character_Selection = false
Chosen_Character__Cucumber_Creature = false
Chosen_Character__Ketchup_Kind = false
Chosen_Character__Potato_Person = false
Chosen_Character__Strawberry_Sister = false
Character_info_for_Cucumber_Creature = false
Character_info_for_Ketchup_Kind = false
Character_info_for_potato_person = false
Character_info_for_strawberry_sister = false
Flying_chilli_on_screen = 0
Big_boy_jump_power_up = 0
World = 1
Level = 1
game.setDialogCursor(img`
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 7 7 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 f 5 5 f 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 f 5 5 f 5 . . . . . 
    . . . . 7 7 7 f f 7 7 7 . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 5 5 5 5 7 7 7 7 7 . 
    7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 
    5 5 . . 7 7 5 5 5 5 7 7 . . 5 5 
    5 5 . . 7 7 7 7 7 7 7 7 . . 5 5 
    . . . . 7 7 7 . . 7 7 7 . . . . 
    . . . f f f . . . . f f f . . . 
    . . f f f f . . . . f f f f . . 
    `)
game.setDialogFrame(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 8 9 5 5 5 5 5 5 5 5 5 9 8 9 
    9 9 9 5 7 5 7 5 7 5 7 5 9 9 9 
    9 8 9 5 5 1 1 1 1 1 5 5 9 8 9 
    9 9 9 5 7 1 1 1 1 1 7 5 9 9 9 
    9 8 9 5 5 1 1 1 1 1 5 5 9 8 9 
    9 9 9 5 7 1 1 1 1 1 7 5 9 9 9 
    9 8 9 5 5 1 1 1 1 1 5 5 9 8 9 
    9 9 9 5 7 5 7 5 7 5 7 5 9 9 9 
    9 8 9 5 5 5 5 5 5 5 5 5 9 8 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `)
game.showLongText("Version 0.5", DialogLayout.Full)
game.showLongText("What's new: Instructions and story at the beginning. Also now you can choose your character, however the pixel art for them is not done. Now you can sprint using B as well.", DialogLayout.Full)
game.showLongText("Bug Patches: None", DialogLayout.Full)
game.setDialogFrame(img`
    2 2 7 7 7 7 7 7 7 7 7 7 7 2 2 
    2 2 8 1 8 1 8 1 8 1 8 1 8 2 2 
    7 8 1 8 1 8 1 8 1 8 1 8 1 8 7 
    7 1 8 2 2 2 2 2 2 2 2 2 8 1 7 
    7 8 1 2 1 1 1 1 1 1 1 2 1 8 7 
    7 1 8 2 1 1 1 1 1 1 1 2 8 1 7 
    7 8 1 2 1 1 1 1 1 1 1 2 1 8 7 
    7 1 8 2 1 1 1 1 1 1 1 2 8 1 7 
    7 8 1 2 1 1 1 1 1 1 1 2 1 8 7 
    7 1 8 2 1 1 1 1 1 1 1 2 8 1 7 
    7 8 1 2 1 1 1 1 1 1 1 2 1 8 7 
    7 1 8 2 2 2 2 2 2 2 2 2 8 1 7 
    7 8 1 8 1 8 1 8 1 8 1 8 1 8 7 
    2 2 8 1 8 1 8 1 8 1 8 1 8 2 2 
    2 2 7 7 7 7 7 7 7 7 7 7 7 2 2 
    `)
game.showLongText("Story: All of the cucumbers have been stolen and you have to get them back. Good luck! You'll need it!", DialogLayout.Full)
game.showLongText("Instructions: Use left and right to move. Use up to jump. Use down to stop jumping and go down. Use B to sprint. Use space bar to shoot. Note: every time you shoot 1 cucumber is used. For character selection go to a character once to find out more information and a second time in order to choose it. If you press up and A at the same time you will jump higher.", DialogLayout.Full)
game.setDialogCursor(img`
    . . . . f f f f f f f f . . . . 
    . . . f 7 7 7 7 7 7 7 7 f . . . 
    . . . f 7 7 7 7 7 7 7 7 f . . . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . f 7 7 7 7 7 7 7 7 7 7 f . . 
    . f f 7 7 f 7 7 7 7 f 7 7 f f . 
    . f 5 7 7 7 f 7 7 f 7 7 7 7 f . 
    . f 5 7 7 7 7 f f 7 7 7 7 7 f . 
    . f 5 7 7 7 7 f f 7 7 7 7 7 f . 
    . f 5 7 7 7 f 7 7 f 7 7 7 7 f . 
    . f f 5 7 f 7 7 7 7 f 7 7 f f . 
    . . f 5 7 7 7 7 7 7 7 7 7 f . . 
    . . f f 5 7 7 7 7 7 7 7 f f . . 
    . . . f 5 7 7 7 7 7 7 7 f . . . 
    . . . f 5 5 5 5 5 7 7 7 f . . . 
    . . . . f f f f f f f f . . . . 
    `)
game.showLongText("I am a coin. I will grant you one point.", DialogLayout.Full)
game.setDialogCursor(img`
    . . . . f f f f f f f f . . . . 
    . . . f 7 7 7 7 7 7 7 7 f . . . 
    . . . f 7 7 7 7 7 7 7 7 f . . . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . f 7 7 f 7 7 7 f f 7 7 f . . 
    . f f 7 f f 7 7 f 7 7 f 7 f f . 
    . f 5 7 7 f 7 7 f 7 7 f 7 7 f . 
    . f 5 7 7 f 7 7 f 7 7 f 7 7 f . 
    . f 5 7 7 f 7 7 f 7 7 f 7 7 f . 
    . f 5 7 f f f 7 7 f f 7 7 7 f . 
    . f f 5 7 7 7 7 7 7 7 7 7 f f . 
    . . f 5 7 7 7 7 7 7 7 7 7 f . . 
    . . f f 5 7 7 7 7 7 7 7 f f . . 
    . . . f 5 7 7 7 7 7 7 7 f . . . 
    . . . f 5 5 5 5 5 7 7 7 f . . . 
    . . . . f f f f f f f f . . . . 
    `)
game.showLongText("I am a 10 coin. I will grant you ten points.", DialogLayout.Full)
game.setDialogCursor(img`
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
    `)
tiles.setTilemap(tilemap`level3`)
Character_Picker = sprites.create(img`
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    `, SpriteKind.Character_Picker)
controller.moveSprite(Character_Picker)
for (let Value_16 of tiles.getTilesByType(assets.tile`tile7`)) {
    Cucumber_Creature = sprites.create(img`
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . 7 7 7 f f 7 7 7 . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 5 5 5 5 7 7 7 7 7 . 
        7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 
        5 5 . . 7 7 5 5 5 5 7 7 . . 5 5 
        5 5 . . 7 7 7 7 7 7 7 7 . . 5 5 
        . . . . 7 7 7 . . 7 7 7 . . . . 
        . . . f f f . . . . f f f . . . 
        . . f f f f . . . . f f f f . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Cucumber_Creature, assets.tile`tile7`)
    tiles.setTileAt(Value_16, assets.tile`transparency16`)
}
for (let Value_17 of tiles.getTilesByType(assets.tile`tile21`)) {
    Ketchup_Kind = sprites.create(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . 2 2 2 f f 2 2 2 . . . . 
        . . 2 2 2 2 4 2 4 2 2 2 2 2 . . 
        . 2 2 2 2 2 4 2 4 2 2 2 2 2 2 . 
        2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 4 2 4 2 2 2 2 2 2 2 
        5 5 . . 2 2 4 2 4 2 2 2 . . 5 5 
        5 5 . . 2 2 2 2 2 2 2 2 . . 5 5 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        . . . f f f . . . . f f f . . . 
        . . f f f f . . . . f f f f . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Ketchup_Kind, assets.tile`tile21`)
    tiles.setTileAt(Value_17, assets.tile`transparency16`)
}
for (let Value_18 of tiles.getTilesByType(assets.tile`tile23`)) {
    Potato_Person = sprites.create(img`
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e e e e . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . e e e f f e e e . . . . 
        . . e e e e e d e e e e e e . . 
        . e e e e e d e d e e e e e e . 
        e e e e e e d d e e e e e e e e 
        e e e e e e d e e e e e e e e e 
        5 5 . . e e d e e e e e . . 5 5 
        5 5 . . e e e e e e e e . . 5 5 
        . . . . e e e . . e e e . . . . 
        . . . f f f . . . . f f f . . . 
        . . f f f f . . . . f f f f . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Potato_Person, assets.tile`tile23`)
    tiles.setTileAt(Value_18, assets.tile`transparency16`)
}
for (let Value_19 of tiles.getTilesByType(assets.tile`tile27`)) {
    Strawberry_Sister = sprites.create(img`
        . . . . . . 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 3 3 . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . 3 3 3 f f 3 3 3 . . . . 
        . . 3 3 3 3 2 2 2 2 3 3 3 3 . . 
        . 3 3 3 3 3 2 3 3 3 3 3 3 3 3 . 
        3 3 3 3 3 3 2 2 2 2 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 2 3 3 3 3 3 3 
        5 5 . . 3 3 2 2 2 2 3 3 . . 5 5 
        5 5 . . 3 3 3 3 3 3 3 3 . . 5 5 
        . . . . 3 3 3 . . 3 3 3 . . . . 
        . . . f f f . . . . f f f . . . 
        . . f f f f . . . . f f f f . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Strawberry_Sister, assets.tile`tile27`)
    tiles.setTileAt(Value_19, assets.tile`transparency16`)
}
for (let Value_20 of tiles.getTilesByType(assets.tile`tile25`)) {
    tiles.placeOnRandomTile(Character_Picker, assets.tile`tile25`)
    tiles.setTileAt(Value_20, assets.tile`transparency16`)
}
info.setLife(10)
game.onUpdate(function () {
    if (controller.up.isPressed()) {
        if (Chosen_Character__Cucumber_Creature == true) {
            if (0 == Big_boy_jump_power_up && Cucumber_Creature.isHittingTile(CollisionDirection.Bottom)) {
                Cucumber_Creature.vy = -300
            } else if (1 >= Big_boy_jump_power_up && Cucumber_Creature.isHittingTile(CollisionDirection.Bottom)) {
                Cucumber_Creature.vy = -400
            }
        } else if (Chosen_Character__Ketchup_Kind == true) {
            if (0 == Big_boy_jump_power_up && Ketchup_Kind.isHittingTile(CollisionDirection.Bottom)) {
                Ketchup_Kind.vy = -360
            } else if (1 >= Big_boy_jump_power_up && Ketchup_Kind.isHittingTile(CollisionDirection.Bottom)) {
                Ketchup_Kind.vy = -480
            }
        } else if (Chosen_Character__Potato_Person == true) {
            if (0 == Big_boy_jump_power_up && Potato_Person.isHittingTile(CollisionDirection.Bottom)) {
                Potato_Person.vy = -300
            } else if (1 >= Big_boy_jump_power_up && Potato_Person.isHittingTile(CollisionDirection.Bottom)) {
                Potato_Person.vy = -400
            }
        } else if (Chosen_Character__Strawberry_Sister == true) {
            if (0 == Big_boy_jump_power_up && Strawberry_Sister.isHittingTile(CollisionDirection.Bottom)) {
                Strawberry_Sister.vy = -300
            } else if (1 >= Big_boy_jump_power_up && Strawberry_Sister.isHittingTile(CollisionDirection.Bottom)) {
                Strawberry_Sister.vy = -400
            }
        }
    }
})
game.onUpdate(function () {
    if (true == Does_jumping_chilli_exsist) {
        if (Cucumber_Creature.x < Jumping_Chilli.x) {
            Jumping_Chilli.x += -1
        } else if (Cucumber_Creature.x > Jumping_Chilli.x) {
            Jumping_Chilli.x += 1
        }
    }
})
game.onUpdate(function () {
    if (100 <= info.score()) {
        info.changeScoreBy(-50)
        info.changeLifeBy(1)
    }
})
game.onUpdate(function () {
    if (true == Does_jumping_chilli_exsist) {
        if (!(Jumping_Chilli.isHittingTile(CollisionDirection.Bottom))) {
            Jumping_Chilli.ay = 1000
        } else if (Jumping_Chilli.isHittingTile(CollisionDirection.Bottom)) {
            Jumping_Chilli.ay = 0
        }
    }
})
game.onUpdate(function () {
    if (true == Does_jumping_chilli_exsist) {
        if ((Jumping_Chilli.isHittingTile(CollisionDirection.Left) || Jumping_Chilli.isHittingTile(CollisionDirection.Right)) && Jumping_Chilli.isHittingTile(CollisionDirection.Bottom)) {
            Jumping_Chilli.vy += -300
        }
    }
})
game.onUpdate(function () {
    if (Chosen_Character__Cucumber_Creature == true) {
        if (!(Cucumber_Creature.isHittingTile(CollisionDirection.Bottom))) {
            Cucumber_Creature.ay = 1000
        } else if (Cucumber_Creature.isHittingTile(CollisionDirection.Bottom)) {
            Cucumber_Creature.ay = 0
        }
    } else if (Chosen_Character__Ketchup_Kind == true) {
        if (!(Ketchup_Kind.isHittingTile(CollisionDirection.Bottom))) {
            Ketchup_Kind.ay = 1000
        } else if (Ketchup_Kind.isHittingTile(CollisionDirection.Bottom)) {
            Ketchup_Kind.ay = 0
        }
    } else if (Chosen_Character__Potato_Person == true) {
        if (!(Potato_Person.isHittingTile(CollisionDirection.Bottom))) {
            Potato_Person.ay = 1000
        } else if (Potato_Person.isHittingTile(CollisionDirection.Bottom)) {
            Potato_Person.ay = 0
        }
    } else if (Chosen_Character__Strawberry_Sister == true) {
        if (!(Strawberry_Sister.isHittingTile(CollisionDirection.Bottom))) {
            Strawberry_Sister.ay = 1000
        } else if (Strawberry_Sister.isHittingTile(CollisionDirection.Bottom)) {
            Strawberry_Sister.ay = 0
        }
    }
})
game.onUpdate(function () {
    if (Cucumber_Creature.vy < 0) {
        Cucumber_Creature.setImage(img`
            . . . . . . 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 7 7 . . . 
            . . . . . 5 5 5 5 5 5 . . . 5 5 
            5 5 . . . 5 f 5 5 f 5 . . . 5 5 
            5 5 . . . 5 5 5 5 5 5 . . . 7 7 
            7 7 . . . 5 f 5 5 f 5 . . . 7 7 
            7 7 . 7 7 7 7 f f 7 7 7 . 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . 7 7 7 7 7 5 5 5 5 7 7 7 7 7 . 
            . . . 7 7 7 5 7 7 7 7 7 7 . . . 
            . . . 7 7 7 5 7 7 7 7 7 7 . . . 
            . f f f 7 7 5 5 5 5 7 7 f f f . 
            f f f f 7 7 7 7 7 7 7 7 f f f f 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Cucumber_Creature.vy > 0) {
        Cucumber_Creature.setImage(img`
            . . . . . . 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 7 7 . . . 
            . . . . . 5 5 5 5 5 5 . . . 5 5 
            5 5 . . . 5 f 5 5 f 5 . . . 5 5 
            5 5 . . . 5 5 5 5 5 5 . . . 7 7 
            7 7 . . . 5 f 5 5 f 5 . . . 7 7 
            7 7 . 7 7 7 7 f f 7 7 7 . 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . 7 7 7 7 7 5 5 5 5 7 7 7 7 7 . 
            . . . 7 7 7 5 7 7 7 7 7 7 . . . 
            . . . 7 7 7 5 7 7 7 7 7 7 . . . 
            . f f f 7 7 5 5 5 5 7 7 . . . . 
            f f f f 7 7 7 7 7 7 7 7 . . . . 
            . . . . . . . . . . 7 7 . . . . 
            . . . . . . . . . . f f f . . . 
            . . . . . . . . . . f f f f . . 
            `)
    } else if (Cucumber_Creature.x % 2 == 0) {
        Cucumber_Creature.setImage(img`
            . . . . . . 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 7 7 . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . 7 7 7 f f 7 7 7 . . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 7 7 7 7 7 5 5 5 5 7 7 7 7 7 . 
            7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 
            5 5 . . 7 7 5 5 5 5 7 7 . . 5 5 
            5 5 . . 7 7 7 7 7 7 7 7 . . 5 5 
            . . . . 7 7 7 . . 7 7 7 . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f . . . . f f f . . . 
            `)
    } else {
        Cucumber_Creature.setImage(img`
            . . . . . . 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 7 7 . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . 7 7 7 f f 7 7 7 . . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 7 7 7 7 7 5 5 5 5 7 7 7 7 7 . 
            7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 
            5 5 . . 7 7 5 5 5 5 7 7 . . 5 5 
            5 5 . . 7 7 7 7 7 7 7 7 . . 5 5 
            . . . . 7 7 7 . . 7 7 7 . . . . 
            . . . f f f . . . . f f f . . . 
            . . f f f f . . . . f f f f . . 
            `)
    }
})
game.onUpdate(function () {
    if (Ketchup_Kind.vy < 0) {
        Ketchup_Kind.setImage(img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . . 5 5 5 5 5 5 . . . 5 5 
            5 5 . . . 5 f 5 5 f 5 . . . 5 5 
            5 5 . . . 5 5 5 5 5 5 . . . 2 2 
            2 2 . . . 5 f 5 5 f 5 . . . 2 2 
            2 2 . 2 2 2 2 f f 2 2 2 . 2 2 2 
            2 2 2 2 2 2 4 2 4 2 2 2 2 2 2 2 
            . 2 2 2 2 2 4 2 4 2 2 2 2 2 2 . 
            . . . 2 2 2 4 4 2 2 2 2 2 . . . 
            . . . 2 2 2 4 2 4 2 2 2 2 . . . 
            . f f f 2 2 4 2 4 2 2 2 f f f . 
            f f f f 2 2 2 2 2 2 2 2 f f f f 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Ketchup_Kind.vy > 0) {
        Ketchup_Kind.setImage(img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . . 5 5 5 5 5 5 . . . 5 5 
            5 5 . . . 5 f 5 5 f 5 . . . 5 5 
            5 5 . . . 5 5 5 5 5 5 . . . 2 2 
            2 2 . . . 5 f 5 5 f 5 . . . 2 2 
            2 2 . 2 2 2 2 f f 2 2 2 . 2 2 2 
            2 2 2 2 2 2 4 2 4 2 2 2 2 2 2 2 
            . 2 2 2 2 2 4 2 4 2 2 2 2 2 2 . 
            . . . 2 2 2 4 4 2 2 2 2 2 . . . 
            . . . 2 2 2 4 2 4 2 2 2 2 . . . 
            . f f f 2 2 4 2 4 2 2 2 . . . . 
            f f f f 2 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . f f f . . . 
            . . . . . . . . . . f f f f . . 
            `)
    } else if (Ketchup_Kind.x % 2 == 0) {
        Ketchup_Kind.setImage(img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . 2 2 2 f f 2 2 2 . . . . 
            . . 2 2 2 2 4 2 4 2 2 2 2 2 . . 
            . 2 2 2 2 2 4 2 4 2 2 2 2 2 2 . 
            2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 4 2 4 2 2 2 2 2 2 2 
            5 5 . . 2 2 4 2 4 2 2 2 . . 5 5 
            5 5 . . 2 2 2 2 2 2 2 2 . . 5 5 
            . . . . 2 2 2 . . 2 2 2 . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f . . . . f f f . . . 
            `)
    } else {
        Ketchup_Kind.setImage(img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . 2 2 2 f f 2 2 2 . . . . 
            . . 2 2 2 2 4 2 4 2 2 2 2 2 . . 
            . 2 2 2 2 2 4 2 4 2 2 2 2 2 2 . 
            2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 4 2 4 2 2 2 2 2 2 2 
            5 5 . . 2 2 4 2 4 2 2 2 . . 5 5 
            5 5 . . 2 2 2 2 2 2 2 2 . . 5 5 
            . . . . 2 2 2 . . 2 2 2 . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f . . . . f f f . . . 
            `)
    }
})
game.onUpdate(function () {
    if (Potato_Person.vy < 0) {
        Potato_Person.setImage(img`
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e e e e . . . 
            . . . . . 5 5 5 5 5 5 . . . 5 5 
            5 5 . . . 5 f 5 5 f 5 . . . 5 5 
            5 5 . . . 5 5 5 5 5 5 . . . e e 
            e e . . . 5 f 5 5 f 5 . . . e e 
            e e . e e e e f f e e e . e e e 
            e e e e e e e d e e e e e e e e 
            . e e e e e d e d e e e e e e . 
            . . . e e e d d e e e e e . . . 
            . . . e e e d e e e e e e . . . 
            . f f f e e d e e e e e f f f . 
            f f f f e e e e e e e e f f f f 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Potato_Person.vy > 0) {
        Potato_Person.setImage(img`
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e e e e . . . 
            . . . . . 5 5 5 5 5 5 . . . 5 5 
            5 5 . . . 5 f 5 5 f 5 . . . 5 5 
            5 5 . . . 5 5 5 5 5 5 . . . e e 
            e e . . . 5 f 5 5 f 5 . . . e e 
            e e . e e e e f f e e e . e e e 
            e e e e e e e d e e e e e e e e 
            . e e e e e d e d e e e e e e . 
            . . . e e e d d e e e e e . . . 
            . . . e e e d e e e e e e . . . 
            . f f f e e d e e e e e . . . . 
            f f f f e e e e e e e e . . . . 
            . . . . . . . . . . e e . . . . 
            . . . . . . . . . . f f f . . . 
            . . . . . . . . . . f f f f . . 
            `)
    } else if (Potato_Person.x % 2 == 0) {
        Potato_Person.setImage(img`
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e e e e . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . e e e f f e e e . . . . 
            . . e e e e e d e e e e e e . . 
            . e e e e e d e d e e e e e e . 
            e e e e e e d d e e e e e e e e 
            e e e e e e d e e e e e e e e e 
            5 5 . . e e d e e e e e . . 5 5 
            5 5 . . e e e e e e e e . . 5 5 
            . . . . e e e . . e e e . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f . . . . f f f . . . 
            `)
    } else {
        Potato_Person.setImage(img`
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e e e e . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . e e e f f e e e . . . . 
            . . e e e e e d e e e e e e . . 
            . e e e e e d e d e e e e e e . 
            e e e e e e d d e e e e e e e e 
            e e e e e e d e e e e e e e e e 
            5 5 . . e e d e e e e e . . 5 5 
            5 5 . . e e e e e e e e . . 5 5 
            . . . . e e e . . e e e . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f . . . . f f f . . . 
            `)
    }
})
game.onUpdate(function () {
    if (Strawberry_Sister.vy < 0) {
        Strawberry_Sister.setImage(img`
            . . . . . . 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 3 3 3 . . . 
            . . . . . 5 5 5 5 5 5 . . . 5 5 
            5 5 . . . 5 f 5 5 f 5 . . . 5 5 
            5 5 . . . 5 5 5 5 5 5 . . . 3 3 
            3 3 . . . 5 f 5 5 f 5 . . . 3 3 
            3 3 . 3 3 3 3 f f 3 3 3 . 3 3 3 
            3 3 3 3 3 3 2 2 2 2 3 3 3 3 3 3 
            . 3 3 3 3 3 2 3 3 3 3 3 3 3 3 . 
            . . . 3 3 3 2 2 2 2 3 3 3 . . . 
            . . . 3 3 3 3 3 3 2 3 3 3 . . . 
            . f f f 3 3 2 2 2 2 3 3 f f f . 
            f f f f 3 3 3 3 3 3 3 3 f f f f 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Strawberry_Sister.vy > 0) {
        Strawberry_Sister.setImage(img`
            . . . . . . 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 3 3 3 . . . 
            . . . . . 5 5 5 5 5 5 . . . 5 5 
            5 5 . . . 5 f 5 5 f 5 . . . 5 5 
            5 5 . . . 5 5 5 5 5 5 . . . 3 3 
            3 3 . . . 5 f 5 5 f 5 . . . 3 3 
            3 3 . 3 3 3 3 f f 3 3 3 . 3 3 3 
            3 3 3 3 3 3 2 2 2 2 3 3 3 3 3 3 
            . 3 3 3 3 3 2 3 3 3 3 3 3 3 3 . 
            . . . 3 3 3 2 2 2 2 3 3 3 . . . 
            . . . 3 3 3 3 3 3 2 3 3 3 . . . 
            . f f f 3 3 2 2 2 2 3 3 . . . . 
            f f f f 3 3 3 3 3 3 3 3 . . . . 
            . . . . . . . . . . 3 3 . . . . 
            . . . . . . . . . . f f f . . . 
            . . . . . . . . . . f f f f . . 
            `)
    } else if (Strawberry_Sister.x % 2 == 0) {
        Strawberry_Sister.setImage(img`
            . . . . . . 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 3 3 3 . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . 3 3 3 f f 3 3 3 . . . . 
            . . 3 3 3 3 2 2 2 2 3 3 3 3 . . 
            . 3 3 3 3 3 2 3 3 3 3 3 3 3 3 . 
            3 3 3 3 3 3 2 2 2 2 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 2 3 3 3 3 3 3 
            5 5 . . 3 3 2 2 2 2 3 3 . . 5 5 
            5 5 . . 3 3 3 3 3 3 3 3 . . 5 5 
            . . . . 3 3 3 . . 3 3 3 . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f . . . . f f f . . . 
            `)
    } else {
        Strawberry_Sister.setImage(img`
            . . . . . . 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 3 3 3 . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . 5 f 5 5 f 5 . . . . . 
            . . . . 3 3 3 f f 3 3 3 . . . . 
            . . 3 3 3 3 2 2 2 2 3 3 3 3 . . 
            . 3 3 3 3 3 2 3 3 3 3 3 3 3 3 . 
            3 3 3 3 3 3 2 2 2 2 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 2 3 3 3 3 3 3 
            5 5 . . 3 3 2 2 2 2 3 3 . . 5 5 
            5 5 . . 3 3 3 3 3 3 3 3 . . 5 5 
            . . . . 3 3 3 . . 3 3 3 . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f . . . . f f f . . . 
            `)
    }
})
game.onUpdate(function () {
    if (controller.B.isPressed()) {
        if (true == Chosen_Character__Cucumber_Creature) {
            controller.moveSprite(Cucumber_Creature, 160, 0)
        } else if (true == Chosen_Character__Ketchup_Kind) {
            controller.moveSprite(Ketchup_Kind, 160, 0)
        } else if (true == Chosen_Character__Potato_Person) {
            controller.moveSprite(Potato_Person, 160, 0)
        } else if (true == Chosen_Character__Strawberry_Sister) {
            controller.moveSprite(Strawberry_Sister, 160, 0)
        }
    } else if (!(controller.B.isPressed())) {
        if (true == Chosen_Character__Cucumber_Creature) {
            controller.moveSprite(Cucumber_Creature, 80, 0)
        } else if (true == Chosen_Character__Ketchup_Kind) {
            controller.moveSprite(Ketchup_Kind, 80, 0)
        } else if (true == Chosen_Character__Potato_Person) {
            controller.moveSprite(Potato_Person, 80, 0)
        } else if (true == Chosen_Character__Strawberry_Sister) {
            controller.moveSprite(Strawberry_Sister, 80, 0)
        }
    }
})
game.onUpdate(function () {
    if (controller.down.isPressed()) {
        if (true == Chosen_Character__Cucumber_Creature) {
            Cucumber_Creature.vy = 100
        } else if (true == Chosen_Character__Ketchup_Kind) {
            Ketchup_Kind.vy = 100
        } else if (true == Chosen_Character__Potato_Person) {
            Potato_Person.vy = 100
        } else if (true == Chosen_Character__Strawberry_Sister) {
            Strawberry_Sister.vy = 100
        }
    }
})
forever(function () {
    music.playMelody("C5 B G E C E G E ", 120)
    music.playMelody("A F C A C5 G E B ", 120)
    music.playMelody("D F A C5 E A B G ", 120)
    music.playMelody("C5 F G A B C5 B A ", 120)
    music.playMelody("C E G B C5 B G E ", 120)
    music.playMelody("E G F A E A G B ", 120)
})
