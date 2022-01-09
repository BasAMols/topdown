var exampleLevel = {

    backgroundcolor: undefined,
    height         : undefined,
    width          : undefined,
    start          : {x: 13, y: 8},
    JSON           : 'map/example-level/level.json',

    // THIS OBJECT CONTAINS ALL WALLS THAT THE CHARACTER IS BLOCKED BY
    walls : {

        // Vertical Lines
        X : [
            { X:  7.5, Y:  11, length:  2 }, // Bridge
            { X:  9.5, Y:  11, length:  2 }, // Bridge

            { X:  1, Y:  1, length:  6 }, // Forrest
            { X:  19, Y:  1, length:  6 }, // Forrest

            { X:  11, Y:  6.5, length:  1.0 }, // Stand
            { X:  15, Y:  6.5, length:  1.0 }, // Stand
            { X:  16, Y:  6.5, length:  3.5 }, // Stand
            { X:  12, Y:  10, length:  1 },  // Stand
            { X:  17, Y:  6.5, length:  0.5 }, // Stand

            { X:  4, Y:  1, length:  1.5 },  // Bench
            { X:  8, Y:  1, length:  1.5 }, // Bench

            { X:  14, Y:  1, length:  1 },  // log
            { X:  18, Y:  1, length:  1 },  // log

            { X:  2, Y:  2.5, length:  1.5 }, // Barrel
            { X:  3, Y:  2.5, length:  1.5 }, // Barrel

            { X:  1, Y:  7.5, length:  1.5 }, // Doghouse
            { X:  3, Y:  7.5, length:  1.5 }, // Doghouse

            { X:  4, Y:  7.5, length:  1.5 }, // Statue
            { X:  6, Y:  7.5, length:  1.5 }, // Statue

            { X:  1, Y:  15.5, length:  5 }, // House
            { X:  7, Y:  15.5, length:  1 }, // House
            { X:  3, Y:  15.5, length:  0.5 }, // House
            { X:  4, Y:  15.5, length:  0.5 }, // House
            { X:  6, Y:  16.5, length:  3.5 }, // House
        ],

        // Horizontal lines
        Y : [
            { X:  0, Y:  11, length:  7.5 }, // Bridge
            { X:  9.5, Y:  11, length:  10.5 }, // Bridge
            { X:  0, Y:  13, length:  7.5 }, // Bridge
            { X:  9.5, Y:  13, length:  10.5 }, // Bridge

            { X:  0, Y:  7, length:  1 }, // forrest
            { X:  1, Y:  1, length:  18 }, // Forrest

            { X:  11, Y:  6.5, length:  4 }, // Stand
            { X:  11, Y:  7.5, length:  4 }, // Stand
            { X:  12, Y:  10, length:  4 }, // Stand
            { X:  16, Y:  6.5, length:  1 }, // Stand
            { X:  17, Y:  7, length:  2 }, // Stand

            { X:  4, Y:  2.5, length:  4 }, // Bench

            { X:  14, Y:  2, length:  4 }, // log

            { X:  2, Y:  2.5, length:  1 }, // Barrel
            { X:  2, Y:  4, length:  1 }, // Barrel

            { X:  1, Y:  7.5, length:  2 }, // Doghouse
            { X:  1, Y:  9, length:  2 }, // Doghouse

            { X:  4, Y:  7.5, length:  2 },  // Doghouse
            { X:  4, Y:  9, length:  2 },  // Doghouse

            { X:  1, Y:  15.5, length:  2 }, // House
            { X:  4, Y:  15.5, length:  3 },  // House
            { X:  6, Y:  16.5, length:  1 },  // House
            { X:  3, Y:  16, length:  1 },  // House



        ],
    },

    event_trigger : {
        warp : [
            { 
                X:  3, 
                Y:  15, 
                width: 1, 
                height: 1, 
                level: 'exampleIndoor', 
                spawn: {
                    X: 4.5,
                    Y: 1,
                } 
            },  // Entering house
        ],

        speech : [
            {
                X:  8, 
                Y:  11, 
                width: 1, 
                height: 1, 
                id: 'testtalk'
            }
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