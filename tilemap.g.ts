// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`11001000060202020202020202020202020202020409010101010101010101010101010f0108090110010f01101010100101010101010809010110100101100110010101010101080901010101011111010101010d0101010809010110010111011001010f010101010809010101010101010101010f0f0f01010809010f01010e010d0101010e010f0101080901010f01010101010101010f010101080901010101010e010101010f010d0101080901100101010111110101010101010108090f010101011101110101010101010108090101011101010101010101010f01010809010101010101060b040101010101010809010101010101090c0301010101010108050a0a0a0a0a0a0a0c0a0a0a0a0a0a0a07`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 . . . . . . 2 . 2 . . . . . . 2 
2 . . . . . . 2 . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleSwitchUp,sprites.dungeon.stairSouth,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark0,sprites.dungeon.floorDark4,sprites.dungeon.floorDark5,sprites.dungeon.floorDark1], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100007080808080808080808080808080806030909090909090909090909090909040309090909090909090909090909090403090909090909090909090909090904030909090909090909090909090909040309090909090909090909090909090403090909090909090909090909090904030909090909090909090909090909040309090909090909090909090909090403090909090909090909090909090904030909090909090909090909090909040309090909090909090909090909090403090909090909090909090909090904030909090909090909090909090909040309090909090909090909090909090401020202020202020202020202020205`, img`
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
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,myTiles.tile4], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100003010101010101010101010101010101020202020202020202020202020202010201010101010101010101010101020102010202020202020202020202010201020102010101010101010101020102010201020102020202020202010201020102010201020101010101020102010201020102010201020502010201020102010201020102010204020102010201020102010201020102010101020102010201020102010201020202020201020102010201020102010101010101010201020102010201020202020202020202010201020102010101010101010101010102010201020202020202020202020202020102010101010101010101010101010101`, img`
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
`, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.hazardLava1,sprites.dungeon.stairLarge,sprites.dungeon.stairNorth,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "transparency16":return transparency16;
            case "myTile":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
