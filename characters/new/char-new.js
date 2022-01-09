var char_new = {
    pose: 'idle',
    oldpose: undefined,
    movespeed: 16,
    hitbox: {
        X: 12,
        Y: 14,
    },
    hitboxoffset: {
        X: 27,
        Y: 32,
    },
    rot: 180,
    interval: 0,
    unrendered_sprites: [

        // IDLE
        { url: 'characters/new/sprite/idle/idle_000_01.png',     pose: 'idle',   rot: 0,   interval: 0 },
        { url: 'characters/new/sprite/idle/idle_000_02.png',     pose: 'idle',   rot: 0,   interval: 1 },
        { url: 'characters/new/sprite/idle/idle_000_03.png',     pose: 'idle',   rot: 0,   interval: 2 },
        { url: 'characters/new/sprite/idle/idle_000_04.png',     pose: 'idle',   rot: 0,   interval: 3 },
        { url: 'characters/new/sprite/idle/idle_000_05.png',     pose: 'idle',   rot: 0,   interval: 4 },

        { url: 'characters/new/sprite/idle/idle_090_01.png',     pose: 'idle',   rot: 90,  interval: 0 },
        { url: 'characters/new/sprite/idle/idle_090_02.png',     pose: 'idle',   rot: 90,  interval: 1 },
        { url: 'characters/new/sprite/idle/idle_090_03.png',     pose: 'idle',   rot: 90,  interval: 2 },
        { url: 'characters/new/sprite/idle/idle_090_04.png',     pose: 'idle',   rot: 90,  interval: 3 },
        { url: 'characters/new/sprite/idle/idle_090_05.png',     pose: 'idle',   rot: 90,  interval: 4 },
        
        { url: 'characters/new/sprite/idle/idle_180_01.png',     pose: 'idle',   rot: 180, interval: 0 },
        { url: 'characters/new/sprite/idle/idle_180_02.png',     pose: 'idle',   rot: 180, interval: 1 },
        { url: 'characters/new/sprite/idle/idle_180_03.png',     pose: 'idle',   rot: 180, interval: 2 },
        { url: 'characters/new/sprite/idle/idle_180_04.png',     pose: 'idle',   rot: 180, interval: 3 },
        { url: 'characters/new/sprite/idle/idle_180_05.png',     pose: 'idle',   rot: 180, interval: 4 },

        { url: 'characters/new/sprite/idle/idle_270_01.png',     pose: 'idle',   rot: 270, interval: 0 },
        { url: 'characters/new/sprite/idle/idle_270_02.png',     pose: 'idle',   rot: 270, interval: 1 },
        { url: 'characters/new/sprite/idle/idle_270_03.png',     pose: 'idle',   rot: 270, interval: 2 },
        { url: 'characters/new/sprite/idle/idle_270_04.png',     pose: 'idle',   rot: 270, interval: 3 },
        { url: 'characters/new/sprite/idle/idle_270_05.png',     pose: 'idle',   rot: 270, interval: 4 },

        // WALK
        { url: 'characters/new/sprite/walk/walk_000_01.png',     pose: 'walk',   rot: 0,   interval: 0 },
        { url: 'characters/new/sprite/walk/walk_000_02.png',     pose: 'walk',   rot: 0,   interval: 1 },
        { url: 'characters/new/sprite/walk/walk_000_03.png',     pose: 'walk',   rot: 0,   interval: 2 },
        { url: 'characters/new/sprite/walk/walk_000_04.png',     pose: 'walk',   rot: 0,   interval: 3 },
        { url: 'characters/new/sprite/walk/walk_000_05.png',     pose: 'walk',   rot: 0,   interval: 4 },
        { url: 'characters/new/sprite/walk/walk_000_06.png',     pose: 'walk',   rot: 0,   interval: 5 },

        { url: 'characters/new/sprite/walk/walk_090_01.png',     pose: 'walk',   rot: 90,  interval: 0 },
        { url: 'characters/new/sprite/walk/walk_090_02.png',     pose: 'walk',   rot: 90,  interval: 1 },
        { url: 'characters/new/sprite/walk/walk_090_03.png',     pose: 'walk',   rot: 90,  interval: 2 },
        { url: 'characters/new/sprite/walk/walk_090_04.png',     pose: 'walk',   rot: 90,  interval: 3 },
        { url: 'characters/new/sprite/walk/walk_090_05.png',     pose: 'walk',   rot: 90,  interval: 4 },
        { url: 'characters/new/sprite/walk/walk_090_06.png',     pose: 'walk',   rot: 90,  interval: 5 },

        { url: 'characters/new/sprite/walk/walk_180_01.png',     pose: 'walk',   rot: 180, interval: 0 },
        { url: 'characters/new/sprite/walk/walk_180_02.png',     pose: 'walk',   rot: 180, interval: 1 },
        { url: 'characters/new/sprite/walk/walk_180_03.png',     pose: 'walk',   rot: 180, interval: 2 },
        { url: 'characters/new/sprite/walk/walk_180_04.png',     pose: 'walk',   rot: 180, interval: 3 },
        { url: 'characters/new/sprite/walk/walk_180_05.png',     pose: 'walk',   rot: 180, interval: 4 },
        { url: 'characters/new/sprite/walk/walk_180_06.png',     pose: 'walk',   rot: 180, interval: 5 },

        { url: 'characters/new/sprite/walk/walk_270_01.png',     pose: 'walk',   rot: 270, interval: 0 },
        { url: 'characters/new/sprite/walk/walk_270_02.png',     pose: 'walk',   rot: 270, interval: 1 },
        { url: 'characters/new/sprite/walk/walk_270_03.png',     pose: 'walk',   rot: 270, interval: 2 },
        { url: 'characters/new/sprite/walk/walk_270_04.png',     pose: 'walk',   rot: 270, interval: 3 },
        { url: 'characters/new/sprite/walk/walk_270_05.png',     pose: 'walk',   rot: 270, interval: 4 },
        { url: 'characters/new/sprite/walk/walk_270_06.png',     pose: 'walk',   rot: 270, interval: 5 },

        // ATTACK
        { url: 'characters/new/sprite/attack/attack_000_01.png', pose: 'attack', rot: 0,   interval: 0 },
        { url: 'characters/new/sprite/attack/attack_000_02.png', pose: 'attack', rot: 0,   interval: 1 },
        { url: 'characters/new/sprite/attack/attack_000_03.png', pose: 'attack', rot: 0,   interval: 2 },

        { url: 'characters/new/sprite/attack/attack_090_01.png', pose: 'attack', rot: 90,  interval: 0 },
        { url: 'characters/new/sprite/attack/attack_090_02.png', pose: 'attack', rot: 90,  interval: 1 },
        { url: 'characters/new/sprite/attack/attack_090_03.png', pose: 'attack', rot: 90,  interval: 2 },

        { url: 'characters/new/sprite/attack/attack_180_01.png', pose: 'attack', rot: 180, interval: 0 },
        { url: 'characters/new/sprite/attack/attack_180_02.png', pose: 'attack', rot: 180, interval: 1 },
        { url: 'characters/new/sprite/attack/attack_180_03.png', pose: 'attack', rot: 180, interval: 2 },

        { url: 'characters/new/sprite/attack/attack_270_01.png', pose: 'attack', rot: 270, interval: 0 },
        { url: 'characters/new/sprite/attack/attack_270_02.png', pose: 'attack', rot: 270, interval: 1 },
        { url: 'characters/new/sprite/attack/attack_270_03.png', pose: 'attack', rot: 270, interval: 2 },

    ],
    rendered_sprites: {
        idle: {0: {},90: {},180: {},270: {}},
        walk: {0: {},90: {},180: {},270: {}},
        attack: {0: {},90: {},180: {},270: {}},
    }
};