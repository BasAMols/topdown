var exampleCharacter = {
    pose: 'idle',
    oldpose: undefined,
    movespeed: 22,
    hitbox: {
        X: 12,
        Y: 12,
    },
    hitboxoffset: {
        X: 6,
        Y: 10,
    },
    rot: 180,
    interval: 0,
    unrendered_sprites: [

        // IDLE
        { url: 'characters/sprite/idle_0_0.png',    pose: 'idle',   rot: 0,     interval: 0 },
        { url: 'characters/sprite/idle_0_0.png',    pose: 'idle',   rot: 0,     interval: 1 },
        { url: 'characters/sprite/idle_0_0.png',    pose: 'idle',   rot: 0,     interval: 2 },

        { url: 'characters/sprite/idle_90_0.png',   pose: 'idle',   rot: 90,    interval: 0 },
        { url: 'characters/sprite/idle_90_1.png',   pose: 'idle',   rot: 90,    interval: 1 },
        { url: 'characters/sprite/idle_90_2.png',   pose: 'idle',   rot: 90,    interval: 2 },

        { url: 'characters/sprite/idle_180_0.png',  pose: 'idle',   rot: 180,   interval: 0 },
        { url: 'characters/sprite/idle_180_1.png',  pose: 'idle',   rot: 180,   interval: 1 },
        { url: 'characters/sprite/idle_180_2.png',  pose: 'idle',   rot: 180,   interval: 2 },

        { url: 'characters/sprite/idle_270_0.png',  pose: 'idle',   rot: 270,   interval: 0 },
        { url: 'characters/sprite/idle_270_1.png',  pose: 'idle',   rot: 270,   interval: 1 },
        { url: 'characters/sprite/idle_270_2.png',  pose: 'idle',   rot: 270,   interval: 2 },

        // WALK
        { url: 'characters/sprite/walk_0_0.png',    pose: 'walk',   rot: 0,     interval: 0 },
        { url: 'characters/sprite/walk_0_1.png',    pose: 'walk',   rot: 0,     interval: 1 },
        { url: 'characters/sprite/walk_0_2.png',    pose: 'walk',   rot: 0,     interval: 2 },
        { url: 'characters/sprite/walk_0_3.png',    pose: 'walk',   rot: 0,     interval: 3 },
        { url: 'characters/sprite/walk_0_4.png',    pose: 'walk',   rot: 0,     interval: 4 },
        { url: 'characters/sprite/walk_0_5.png',    pose: 'walk',   rot: 0,     interval: 5 },
        { url: 'characters/sprite/walk_0_6.png',    pose: 'walk',   rot: 0,     interval: 6 },
        { url: 'characters/sprite/walk_0_7.png',    pose: 'walk',   rot: 0,     interval: 7 },
        { url: 'characters/sprite/walk_0_8.png',    pose: 'walk',   rot: 0,     interval: 8 },
        { url: 'characters/sprite/walk_0_9.png',    pose: 'walk',   rot: 0,     interval: 9 },

        { url: 'characters/sprite/walk_90_0.png',   pose: 'walk',   rot: 90,    interval: 0 },
        { url: 'characters/sprite/walk_90_1.png',   pose: 'walk',   rot: 90,    interval: 1 },
        { url: 'characters/sprite/walk_90_2.png',   pose: 'walk',   rot: 90,    interval: 2 },
        { url: 'characters/sprite/walk_90_3.png',   pose: 'walk',   rot: 90,    interval: 3 },
        { url: 'characters/sprite/walk_90_4.png',   pose: 'walk',   rot: 90,    interval: 4 },
        { url: 'characters/sprite/walk_90_5.png',   pose: 'walk',   rot: 90,    interval: 5 },
        { url: 'characters/sprite/walk_90_6.png',   pose: 'walk',   rot: 90,    interval: 6 },
        { url: 'characters/sprite/walk_90_7.png',   pose: 'walk',   rot: 90,    interval: 7 },
        { url: 'characters/sprite/walk_90_8.png',   pose: 'walk',   rot: 90,    interval: 8 },
        { url: 'characters/sprite/walk_90_9.png',   pose: 'walk',   rot: 90,    interval: 9 },

        { url: 'characters/sprite/walk_180_0.png',  pose: 'walk',   rot: 180,   interval: 0 },
        { url: 'characters/sprite/walk_180_1.png',  pose: 'walk',   rot: 180,   interval: 1 },
        { url: 'characters/sprite/walk_180_2.png',  pose: 'walk',   rot: 180,   interval: 2 },
        { url: 'characters/sprite/walk_180_3.png',  pose: 'walk',   rot: 180,   interval: 3 },
        { url: 'characters/sprite/walk_180_4.png',  pose: 'walk',   rot: 180,   interval: 4 },
        { url: 'characters/sprite/walk_180_5.png',  pose: 'walk',   rot: 180,   interval: 5 },
        { url: 'characters/sprite/walk_180_6.png',  pose: 'walk',   rot: 180,   interval: 6 },
        { url: 'characters/sprite/walk_180_7.png',  pose: 'walk',   rot: 180,   interval: 7 },
        { url: 'characters/sprite/walk_180_8.png',  pose: 'walk',   rot: 180,   interval: 8 },
        { url: 'characters/sprite/walk_180_9.png',  pose: 'walk',   rot: 180,   interval: 9 },

        { url: 'characters/sprite/walk_270_0.png',  pose: 'walk',   rot: 270,   interval: 0 },
        { url: 'characters/sprite/walk_270_1.png',  pose: 'walk',   rot: 270,   interval: 1 },
        { url: 'characters/sprite/walk_270_2.png',  pose: 'walk',   rot: 270,   interval: 2 },
        { url: 'characters/sprite/walk_270_3.png',  pose: 'walk',   rot: 270,   interval: 3 },
        { url: 'characters/sprite/walk_270_4.png',  pose: 'walk',   rot: 270,   interval: 4 },
        { url: 'characters/sprite/walk_270_5.png',  pose: 'walk',   rot: 270,   interval: 5 },
        { url: 'characters/sprite/walk_270_6.png',  pose: 'walk',   rot: 270,   interval: 6 },
        { url: 'characters/sprite/walk_270_7.png',  pose: 'walk',   rot: 270,   interval: 7 },
        { url: 'characters/sprite/walk_270_8.png',  pose: 'walk',   rot: 270,   interval: 8 },
        { url: 'characters/sprite/walk_270_9.png',  pose: 'walk',   rot: 270,   interval: 9 },
    ],
    rendered_sprites: {
        idle: {0: {},90: {},180: {},270: {}},
        walk: {0: {},90: {},180: {},270: {}},
    }
};