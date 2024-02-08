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

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
            case "level1":
            case "level1":return tiles.createTilemap(hex`11001000060202020202020202020202020202020409010101010101010101010101010e010809010f010e010f0f0f0f010101010101080901010f0f01010f010f010101010101080901010101011010010101010c010101080901010f010110010f01010e010101010809010101010101010101010e0e0e01010809010e01010d010c01010c0d010e0101080901010e01010101010101010e010101080901010101010d010101010e010c01010809010f0101010110100101010101010108090e010101011001100101010101010108090101011001010101010101010e01010809010101010101060b04010101010101080901010101010109120301010101010108050a0a0a0a0a0a0a110a0a0a0a0a0a0a07`, img`
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
`, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleSwitchUp,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark0,sprites.dungeon.floorDark4,sprites.dungeon.floorDark5,sprites.dungeon.floorDark1,sprites.dungeon.stairNorth,sprites.dungeon.stairSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
