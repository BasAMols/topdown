var exampleIndoor = {

    backgroundcolor: undefined,
    height         : undefined,
    width          : undefined,
    start          : {x: 13, y: 8},
    JSON           : 'map/example-indoor/level.json',

    // THIS OBJECT CONTAINS ALL WALLS THAT THE CHARACTER IS BLOCKED BY
    walls : {

        // Vertical Lines
        X : [
            { X:  4, Y:  0, length:  1 },
            { X:  6, Y:  0, length:  1 },
            { X:  14, Y:  4.5, length:  5.5 },
            { X:  14, Y:  11.5, length:  0.5 },
            { X:  1, Y:  11.5, length:  0.5 },
            { X:  12, Y:  1, length:  2 },
            { X:  14, Y:  1, length:  2 },
            { X:  11, Y:  6.5, length:  2.5 },
            { X:  13, Y:  6.5, length:  2.5 },
            { X:  3, Y:  8, length:  0.5 },
            { X:  3, Y:  6, length:  1 },
            { X:  4, Y:  7, length:  1 },
        ],

        // Horizontal lines
        Y : [
            { X:  0, Y:  1, length:  4 },
            { X:  6, Y:  1, length:  9 },
            { X:  4, Y:  0, length:  2 },
            { X:  0, Y:  12, length:  1 },
            { X:  14, Y:  12, length:  1 },
            { X:  1, Y:  11.5, length:  13 },
            { X:  14, Y:  10, length:  1 },
            { X:  14, Y:  4.5, length:  1 },
            { X:  11, Y:  6.5, length:  2 },
            { X:  11, Y:  9, length:  2 },
            { X:  0, Y:  8.5, length:  3 },
            { X:  3, Y:  7, length:  1 },
            { X:  3, Y:  8, length:  1 },
            { X:  0, Y:  6, length:  3 },
            { X:  12, Y:  1.5, length:  2 },
            { X:  12, Y:  3, length:  0 }, //end stopper
            { X:  14, Y:  3, length:  0 }, //end stopper
        ],
    },

    event_trigger : {
        warp : [
            { 
                X:  4, 
                Y:  0, 
                width: 2, 
                height: 1, 
                level: 'exampleLevel', 
                spawn: {
                    X: 3,
                    Y: 14,
                } 
            },  // Exiting house
            { 
                X:  12, 
                Y:  1, 
                width: 2, 
                height: 2, 
                level: 'level_dungeon', 
                spawn: {
                    X: 1.5,
                    Y: 14,
                } 
            },  // Entering dungeon
        ]
    },

    // THIS ARRAY CONTAINS ALL ORIGINAL SIZED SPRITES
    unrendered_sprites: undefined,

    // THIS OBJECT WILL CONTAIN ALL SPRITES AFTER THEY HAVE BEEN PROCESSED AND RESISED. IT IS AUTOMATICALLY FILLED WITH ALL RENDERED SPRITES
    rendered_sprites : {},

    // THIS ARRAY DETERMINES THE POSITION OF THE TILES ABOVE. THE NAME NEEDS TO MATCH A SPRITE
    tiles : {
        ground     : [],
        objects    : [],
        decorations: [],
        overlay    : [],
    },

};  