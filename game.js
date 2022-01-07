var game = {
    
    constructor() {
        
        this.started            = false;
        this.frameRate          = 30; // 60 FPS; 1FPS = 1000
        this.framecount         = 0;
        this.zoom               = 6;

        this.spriteSize         = 16;
        this.spriteRenderSize   = this.zoom * this.spriteSize;

        this.character          = exampleCharacter;
        this.characterSize      = 1;
        this.characterRenderSize= this.zoom * this.characterSize;

        this.level              = exampleLevel;

        this.pos                = {
            currentX    : undefined,
            currentY    : undefined,
            lastX       : undefined,
            lastY       : undefined,
            nextX       : undefined,
            nextY       : undefined,
        };

        this.debug              = {
            gridY       : undefined,
        }
        
        view.constructor();
        canvas.constructor();
        character.constructor();
        animation.constructor();
        loader.constructor();
        keyhandling.constructor();
        movement.constructor();
        level.constructor();

        // Load the level
        level.loadJson(level.active.JSON, function(){

            // Load the character
            character.renderCharacter(function(){
                canvas.frame.click(); 
            });

        });

    },

    start() {

        if (!game.started) {

            game.started = true;
            view.forceView();

            // Start fading in. include callback function for when animation is done. 
            loader.fadeIn(function(){

                // Start the game
                game.interval = setInterval(game.mainLoop.bind(game), game.frameRate);

            });

        }

    },

    stop(callbackFunction = false) {
        game.started = false;
        clearInterval(game.interval);

        // Start fading out. include callback function for when animation is done. 
        loader.fadeOut(function(){
            if (callbackFunction){
                callbackFunction();
            }
        });

    },

    mainLoop() {

        game.framecount++;

        movement.moveX();
        movement.moveY();

        animation.rotation();
        animation.cycle();

        view.moveX();
        view.moveY();
        
        level.drawBackground();
        level.drawTiles();
        character.drawCharacter();
        level.drawOverlay();

        action.checkWarp();

        dev.activator();


    },

}

// Prevent window movement on arrowkeys and space
window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

// Run the main constructor to set up the game when everything is loaded.
document.addEventListener("DOMContentLoaded", () => {
    
    game.constructor();

});
