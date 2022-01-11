var keyhandling = {
    
    constructor() {
        this.input = { 
            X: 0, 
            Y: 0,
        };

        this.pressed = {
            left:   false,
            right:  false,
            up:     false,
            down:   false,
        }

        // Fysical buttons
        document.addEventListener('keyup', this.keyUp.bind(this));
        document.addEventListener('keydown', this.keyDown.bind(this));

        // On screen buttons
        var events = [

            // On screen buttons pressed on mobile
            {id: "up",          action: "touch",     pressFunction: this.pressUp,     releaseFunction: this.releaseUp},
            {id: "left",        action: "touch",     pressFunction: this.pressLeft,   releaseFunction: this.releaseLeft},
            {id: "down",        action: "touch",     pressFunction: this.pressDown,   releaseFunction: this.releaseDown},
            {id: "right",       action: "touch",     pressFunction: this.pressRight,  releaseFunction: this.releaseRight},

            // Angles buttons pressed on mobile
            {id: "upleft",      action: "touch",     pressFunction: this.pressUp,     releaseFunction: this.releaseUp},
            {id: "upleft",      action: "touch",     pressFunction: this.pressLeft,   releaseFunction: this.releaseLeft},
            {id: "upright",     action: "touch",     pressFunction: this.pressUp,     releaseFunction: this.releaseUp},
            {id: "upright",     action: "touch",     pressFunction: this.pressRight,  releaseFunction: this.releaseRight},
            {id: "downleft",    action: "touch",     pressFunction: this.pressDown,   releaseFunction: this.releaseDown},
            {id: "downleft",    action: "touch",     pressFunction: this.pressLeft,   releaseFunction: this.releaseLeft},
            {id: "downright",   action: "touch",     pressFunction: this.pressDown,   releaseFunction: this.releaseDown},
            {id: "downright",   action: "touch",     pressFunction: this.pressRight,  releaseFunction: this.releaseRight},

            // On screen buttons used on desktop
            {id: "up",          action: "desktop",   pressFunction: this.pressUp,     releaseFunction: this.releaseUp},
            {id: "left",        action: "desktop",   pressFunction: this.pressLeft,   releaseFunction: this.releaseLeft},
            {id: "down",        action: "desktop",   pressFunction: this.pressDown,   releaseFunction: this.releaseDown},
            {id: "right",       action: "desktop",   pressFunction: this.pressRight,  releaseFunction: this.releaseRight},

            // Angles buttons used on desktop for angles
            {id: "upleft",      action: "desktop",   pressFunction: this.pressUp,     releaseFunction: this.releaseUp},
            {id: "upleft",      action: "desktop",   pressFunction: this.pressLeft,   releaseFunction: this.releaseLeft},
            {id: "upright",     action: "desktop",   pressFunction: this.pressUp,     releaseFunction: this.releaseUp},
            {id: "upright",     action: "desktop",   pressFunction: this.pressRight,  releaseFunction: this.releaseRight},
            {id: "downleft",    action: "desktop",   pressFunction: this.pressDown,   releaseFunction: this.releaseDown},
            {id: "downleft",    action: "desktop",   pressFunction: this.pressLeft,   releaseFunction: this.releaseLeft},
            {id: "downright",   action: "desktop",   pressFunction: this.pressDown,   releaseFunction: this.releaseDown},
            {id: "downright",   action: "desktop",   pressFunction: this.pressRight,  releaseFunction: this.releaseRight},

        ];

        for (i = 0; i < events.length; i++) { 
            var event = events[i];

            if(event.action == 'touch'){
                document.getElementById(event.id).addEventListener("touchstart", event.pressFunction.bind(this));       
                document.getElementById(event.id).addEventListener("touchend", event.releaseFunction.bind(this));       
            } else {
                document.getElementById(event.id).addEventListener("mousedown", event.pressFunction.bind(this));       
                document.getElementById(event.id).addEventListener("mouseup", event.releaseFunction.bind(this));       

            }
        }

    },

    keyDown() {

        if(game.started){

            switch (event.key) {
                case "ArrowUp":
                case "w":
                    this.pressUp();
                    break;

                case "ArrowDown":
                case "s":
                    this.pressDown();
                    break;

                case "ArrowLeft":
                case "a":
                    this.pressLeft();
                    break;

                case "ArrowRight":
                case "d":
                    this.pressRight();
                    break;

                case " ":
                    this.pressAttack();
                    break;

                case "e":
                case "Enter":
                    this.pressSkip();
                    break;

                // Toggle DEV view
                case "p":
                    settings.dev = !settings.dev;
                    break;

                // Toggle ground
                case "g":
                    settings.renderGround = !settings.renderGround;
                    break;

                // Toggle objects
                case "o":
                    settings.renderObjects = !settings.renderObjects;
                    break;
                    
                default:
                    return;
            }

        }

        
    },

    keyUp() {

        switch (event.key) {
            case "ArrowUp":
            case "w":
                this.releaseUp();
                break;

            case "ArrowDown":
            case "s":
                this.releaseDown();
                break;

            case "ArrowLeft":
            case "a":
                this.releaseLeft();
                break;

            case "ArrowRight":
            case "d":
                this.releaseRight();
                break;

            default:
                return;

        }
    },

    // Button press events

    pressAttack() {

        if(game.started){

            action.attack();

        }

    },
    pressUp() {
        if(game.started){
            if(!keyhandling.pressed.up){
                if (!keyhandling.pressed.down){
                    keyhandling.pressed.up          = true;
                    keyhandling.input.Y     = 1;

                } else {
                    // stop Y movement if both pressed
                    keyhandling.pressed.up          = false;
                    keyhandling.pressed.down        = false;
                    keyhandling.input.Y     = 0;

                }
            }
        }

    },

    pressLeft() {
        if(game.started){
            if(!keyhandling.pressed.left){
                if (!keyhandling.pressed.right){
                    keyhandling.pressed.left        = true;
                    keyhandling.input.X     = -1;

                } else {
                    // stop X movement if both pressed
                    keyhandling.pressed.left        = false;
                    keyhandling.pressed.right       = false;
                    keyhandling.input.X     = 0;

                }
            }
        }

    },

    pressDown() {
        if(game.started){
            if(!keyhandling.pressed.down){
                if (!keyhandling.pressed.up){
                    keyhandling.pressed.down        = true;
                    keyhandling.input.Y     = -1;

                } else {
                    // stop Y movement if both pressed
                    keyhandling.pressed.down        = false;
                    keyhandling.pressed.up          = false;
                    keyhandling.input.Y     = 0;

                }
            }
        }

    },

    pressRight() {
        if(game.started){
            if(!keyhandling.pressed.right){
                if (!keyhandling.pressed.left){
                    keyhandling.pressed.right       = true;
                    keyhandling.input.X     = 1;

                } else {
                    // stop X movement if both pressed
                    keyhandling.pressed.right       = false;
                    keyhandling.pressed.left        = false;
                    keyhandling.input.X     = 0;

                }
            }
        }

    },

    pressSkip() {
        if (speech.active){
            speech.cycle();
        }
    },

    // BUTTON RELEASE EVENTS
    releaseUp() {
        keyhandling.pressed.up          = false;
        this.input.Y            = 0;

    },

    releaseLeft() {
        keyhandling.pressed.left        = false;
        this.input.X            = 0;
        
    },

    releaseDown() {
        keyhandling.pressed.down        = false;
        this.input.Y            = 0;

    },

    releaseRight() {
        keyhandling.pressed.right       = false;
        this.input.X            = 0;

    }
}