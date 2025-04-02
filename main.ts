namespace SpriteKind {
    export const NPC1 = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const NPC5 = SpriteKind.create()
    export const NPC6 = SpriteKind.create()
    export const NPC7 = SpriteKind.create()
    export const NPC8 = SpriteKind.create()
    export const NPC9 = SpriteKind.create()
    export const NPC10 = SpriteKind.create()
    export const NPC11 = SpriteKind.create()
    export const NPC12 = SpriteKind.create()
    export const NPC13 = SpriteKind.create()
    export const Enemy1 = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const Enemy5 = SpriteKind.create()
    export const Enemy6 = SpriteKind.create()
    export const Enemy7 = SpriteKind.create()
    export const Enemy8 = SpriteKind.create()
    export const Enemy9 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC10, function (sprite, otherSprite) {
    if (otherSprite == NetherSkeletonKing) {
        timer.throttle("action", 1000, function () {
            NetherSkeletonKing.sayText("Don't get burned!", 1000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Warp0`, function (sprite, location) {
    tiles.placeOnRandomTile(Player1, assets.tile`Warp1`)
    level = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy1, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC7, function (sprite, otherSprite) {
    if (otherSprite == Grassy_Rat) {
        timer.throttle("action", 1000, function () {
            Grassy_Rat.sayText("Don't make me get my buddies!", 1000, true)
            animation.runMovementAnimation(
            Grassy_Rat,
            animation.animationPresets(animation.bobbing),
            1000,
            false
            )
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC5, function (sprite, otherSprite) {
    if (otherSprite == Injured_Dungeon_Skeleton) {
        timer.throttle("action", 1000, function () {
            Injured_Dungeon_Skeleton.sayText("It's not safe..", 1000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Warp6`, function (sprite, location) {
    tiles.placeOnRandomTile(Player1, assets.tile`Warp7`)
    level = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite, otherSprite) {
    if (otherSprite == Dungeon_Rat) {
        timer.throttle("action", 1000, function () {
            Dungeon_Rat.sayText("Good luck!", 1000, true)
            animation.runMovementAnimation(
            Dungeon_Rat,
            animation.animationPresets(animation.bobbing),
            1000,
            false
            )
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC12, function (sprite, otherSprite) {
    if (otherSprite == Nether_Bat) {
        timer.throttle("action", 1000, function () {
            Nether_Bat.sayText("I'm craving the famous Lava Blood from the king himself!", 1000, true)
            animation.runMovementAnimation(
            Nether_Bat,
            animation.animationPresets(animation.bobbing),
            500,
            false
            )
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    if (otherSprite == Dungeon_Bat) {
        timer.throttle("action", 1000, function () {
            Dungeon_Bat.sayText("Turn back while you can.", 1000, true)
            animation.runMovementAnimation(
            Dungeon_Bat,
            animation.animationPresets(animation.bobbing),
            500,
            false
            )
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Warp4`, function (sprite, location) {
    tiles.placeOnRandomTile(Player1, assets.tile`Warp5`)
    level = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC9, function (sprite, otherSprite) {
    if (otherSprite == Grassy_Snake) {
        timer.throttle("action", 1000, function () {
            Grassy_Snake.sayText("I'll bite you if you don't keep walking.", 1000, true)
            animation.runMovementAnimation(
            Grassy_Snake,
            animation.animationPresets(animation.bobbing),
            1000,
            false
            )
        })
    }
})
info.onCountdownEnd(function () {
    game.showLongText("The family gem was destroyed and the dimensions have collapsed!", DialogLayout.Bottom)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC4, function (sprite, otherSprite) {
    if (otherSprite == Dungeon_Snake) {
        timer.throttle("action", 1000, function () {
            Dungeon_Snake.sayText("You're not even close, but good luck!", 1000, true)
            animation.runMovementAnimation(
            Dungeon_Snake,
            animation.animationPresets(animation.bobbing),
            1000,
            false
            )
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    level = 2
    tiles.setCurrentTilemap(tilemap`Nether Dimension`)
    tiles.placeOnRandomTile(Player1, assets.tile`Dimension Underworld 2`)
    NetherSkeletonKing = sprites.create(assets.image`Nether Skeleton King`, SpriteKind.NPC10)
    tiles.placeOnTile(NetherSkeletonKing, tiles.getTileLocation(24, 21))
    Nether_Rat = sprites.create(assets.image`Nether Rat`, SpriteKind.NPC11)
    tiles.placeOnTile(Nether_Rat, tiles.getTileLocation(9, 21))
    Nether_Bat = sprites.create(assets.image`Nether Bat`, SpriteKind.NPC12)
    tiles.placeOnTile(Nether_Bat, tiles.getTileLocation(36, 32))
    Nether_Snake = sprites.create(assets.image`Nether Snake`, SpriteKind.NPC13)
    tiles.placeOnTile(Nether_Snake, tiles.getTileLocation(27, 6))
    Nether_Skeleton1 = sprites.create(assets.image`Nether Skeleton`, SpriteKind.Enemy7)
    tiles.placeOnTile(Nether_Skeleton1, tiles.getTileLocation(10, 9))
    tiles.placeOnTile(Nether_Skeleton1, tiles.getTileLocation(33, 9))
    Nether_Skeleton2 = sprites.create(assets.image`Nether Skeleton`, SpriteKind.Enemy8)
    tiles.placeOnTile(Nether_Skeleton2, tiles.getTileLocation(6, 18))
    tiles.placeOnTile(Nether_Skeleton2, tiles.getTileLocation(6, 33))
    Nether_Skeleton3 = sprites.create(assets.image`Nether Skeleton`, SpriteKind.Enemy9)
    tiles.placeOnTile(Nether_Skeleton3, tiles.getTileLocation(30, 30))
    tiles.placeOnTile(Nether_Skeleton3, tiles.getTileLocation(43, 30))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC11, function (sprite, otherSprite) {
    if (otherSprite == Nether_Rat) {
        timer.throttle("action", 1000, function () {
            Nether_Rat.sayText("I'm craving Lava Cheese!", 1000, true)
            animation.runMovementAnimation(
            Nether_Rat,
            animation.animationPresets(animation.bobbing),
            1000,
            false
            )
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite, otherSprite) {
    if (otherSprite == DungeonSkeletonKing) {
        timer.throttle("action", 1000, function () {
            DungeonSkeletonKing.sayText("Careful of my buddies!", 1000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Warp8`, function (sprite, location) {
    tiles.placeOnRandomTile(Player1, assets.tile`Warp9`)
    level = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC6, function (sprite, otherSprite) {
    if (otherSprite == GrassyTerrainSkeletonKing) {
        timer.throttle("action", 1000, function () {
            GrassyTerrainSkeletonKing.sayText("Don't get poison ivy!", 1000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Warp10`, function (sprite, location) {
    tiles.placeOnRandomTile(Player1, assets.tile`Warp11`)
    level = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC13, function (sprite, otherSprite) {
    if (otherSprite == Nether_Snake) {
        timer.throttle("action", 1000, function () {
            Nether_Snake.sayText("I'm craving Lava Rats!", 1000, true)
            animation.runMovementAnimation(
            Nether_Snake,
            animation.animationPresets(animation.bobbing),
            1000,
            false
            )
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Warp2`, function (sprite, location) {
    tiles.placeOnRandomTile(Player1, assets.tile`Warp3`)
    level = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Family Gem`, function (sprite, location) {
    game.showLongText("Congrats, you found the family gem!", DialogLayout.Bottom)
    game.gameOver(true)
    level = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC8, function (sprite, otherSprite) {
    if (otherSprite == Grassy_Bat) {
        timer.throttle("action", 1000, function () {
            Grassy_Bat.sayText("Imagine if I sent my friends after you.", 1000, true)
            animation.runMovementAnimation(
            Grassy_Bat,
            animation.animationPresets(animation.bobbing),
            500,
            false
            )
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Warp12`, function (sprite, location) {
    tiles.placeOnRandomTile(Player1, sprites.dungeon.collectibleRedCrystal)
    level = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Warp Grassy Terrain 1`, function (sprite, location) {
    level = 1
    tiles.setCurrentTilemap(tilemap`Grassy Terrain Dimension`)
    tiles.placeOnRandomTile(Player1, assets.tile`Warp Grassy Terrain 2`)
    GrassyTerrainSkeletonKing = sprites.create(assets.image`Grassy Terrain Skeleton King`, SpriteKind.NPC6)
    tiles.placeOnTile(GrassyTerrainSkeletonKing, tiles.getTileLocation(5, 42))
    Grassy_Rat = sprites.create(assets.image`Grassy Rat`, SpriteKind.NPC7)
    tiles.placeOnTile(Grassy_Rat, tiles.getTileLocation(27, 32))
    Grassy_Bat = sprites.create(assets.image`Grassy Bat`, SpriteKind.NPC8)
    tiles.placeOnTile(Grassy_Bat, tiles.getTileLocation(16, 20))
    Grassy_Snake = sprites.create(assets.image`Grassy Snake`, SpriteKind.NPC9)
    tiles.placeOnTile(Grassy_Snake, tiles.getTileLocation(24, 2))
    Grass_Skeleton1 = sprites.create(assets.image`Grassy Terrain Skeleton`, SpriteKind.Enemy4)
    tiles.placeOnTile(Grass_Skeleton1, tiles.getTileLocation(31, 45))
    tiles.placeOnTile(Grass_Skeleton1, tiles.getTileLocation(31, 49))
    Grass_Skeleton2 = sprites.create(assets.image`Grassy Terrain Skeleton`, SpriteKind.Enemy5)
    tiles.placeOnTile(Grass_Skeleton2, tiles.getTileLocation(31, 12))
    tiles.placeOnTile(Grass_Skeleton2, tiles.getTileLocation(24, 12))
    Grass_Skeleton3 = sprites.create(assets.image`Grassy Terrain Skeleton`, SpriteKind.Enemy6)
    tiles.placeOnTile(Grass_Skeleton3, tiles.getTileLocation(18, 26))
    tiles.placeOnTile(Grass_Skeleton3, tiles.getTileLocation(7, 26))
})
let Grass_Skeleton3: Sprite = null
let Grass_Skeleton2: Sprite = null
let Grass_Skeleton1: Sprite = null
let Grassy_Bat: Sprite = null
let GrassyTerrainSkeletonKing: Sprite = null
let Nether_Skeleton3: Sprite = null
let Nether_Skeleton2: Sprite = null
let Nether_Skeleton1: Sprite = null
let Nether_Snake: Sprite = null
let Nether_Rat: Sprite = null
let Grassy_Snake: Sprite = null
let Nether_Bat: Sprite = null
let Grassy_Rat: Sprite = null
let NetherSkeletonKing: Sprite = null
let level = 0
let Injured_Dungeon_Skeleton: Sprite = null
let Dungeon_Snake: Sprite = null
let Dungeon_Bat: Sprite = null
let Dungeon_Rat: Sprite = null
let DungeonSkeletonKing: Sprite = null
let Player1: Sprite = null
let Maps = [tilemap`Dungeon Dimension`, tilemap`Grassy Terrain Dimension`, tilemap`Nether Dimension`]
Player1 = sprites.create(assets.image`Player1`, SpriteKind.Player)
controller.moveSprite(Player1)
scene.cameraFollowSprite(Player1)
tiles.setCurrentTilemap(tilemap`Dungeon Dimension`)
DungeonSkeletonKing = sprites.create(assets.image`Dungeon Skeleton King`, SpriteKind.NPC1)
tiles.placeOnTile(DungeonSkeletonKing, tiles.getTileLocation(5, 42))
Dungeon_Rat = sprites.create(assets.image`Dungeon Rat`, SpriteKind.NPC2)
tiles.placeOnTile(Dungeon_Rat, tiles.getTileLocation(20, 35))
Dungeon_Bat = sprites.create(assets.image`Dungeon Bat`, SpriteKind.NPC3)
tiles.placeOnTile(Dungeon_Bat, tiles.getTileLocation(32, 43))
Dungeon_Snake = sprites.create(assets.image`Dungeon Snake`, SpriteKind.NPC4)
tiles.placeOnTile(Dungeon_Snake, tiles.getTileLocation(34, 6))
Injured_Dungeon_Skeleton = sprites.create(assets.image`Injured Dungeon Skeleton`, SpriteKind.NPC5)
tiles.placeOnTile(Injured_Dungeon_Skeleton, tiles.getTileLocation(11, 3))
let Dungeon_Skeleton1 = sprites.create(assets.image`Dungeon Skeleton`, SpriteKind.Enemy1)
tiles.placeOnTile(Dungeon_Skeleton1, tiles.getTileLocation(13, 12))
tiles.placeOnTile(Dungeon_Skeleton1, tiles.getTileLocation(13, 16))
let Dungeon_Skeleton2 = sprites.create(assets.image`Dungeon Skeleton`, SpriteKind.Enemy2)
tiles.placeOnTile(Dungeon_Skeleton2, tiles.getTileLocation(41, 21))
tiles.placeOnTile(Dungeon_Skeleton2, tiles.getTileLocation(37, 21))
let Dungeon_Skeleton3 = sprites.create(assets.image`Dungeon Skeleton`, SpriteKind.Enemy3)
tiles.placeOnTile(Dungeon_Skeleton3, tiles.getTileLocation(28, 43))
tiles.placeOnTile(Dungeon_Skeleton3, tiles.getTileLocation(41, 43))
level = 0
info.setLife(3)
info.startCountdown(900)
tiles.placeOnRandomTile(Player1, assets.tile`myTile0`)
game.onUpdate(function () {
    if (level != 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC2)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC3)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC4)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC5)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy3)
    }
    if (level != 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC6)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC7)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC8)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC9)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy4)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy5)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy6)
    }
    if (level != 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC10)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC11)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC12)
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC13)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy7)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy8)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy9)
    }
})
