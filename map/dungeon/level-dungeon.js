var level_dungeon = {

    backgroundcolor: undefined,
    height         : undefined,
    width          : undefined,
    start          : {x: 13, y: 8},
    JSON           : 'map/dungeon/level.json',

    // THIS OBJECT CONTAINS ALL WALLS THAT THE CHARACTER IS BLOCKED BY
    walls : {

        // Vertical Lines
        X : [

        ],

        // Horizontal lines
        Y : [

        ],
    },

    event_trigger : {
        warp : [
            { 
                X:  1, 
                Y:  15, 
                width: 2, 
                height: 4, 
                level: 'exampleIndoor', 
                spawn: {
                    X: 12.5,
                    Y: 3,
                } 
            },  // Exiting dungeon
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