var loader = {
    
    constructor() {
        this.currentFrame = 0; 
        this.maxFrame = 15; 
        this.framerate = 15
    },

    fadeOut(callbackFunction = false) {

        loader.currentFrame = 0; 
        loader.interval = setInterval(function(){

            loader.currentFrame++;

            level.drawBackground();
            level.drawTiles();
            character.drawCharacter();
            level.drawOverlay();

            var frame = loader.currentFrame / loader.maxFrame;
            var rgba = "rgba(0,0,0," + frame + ")";
            canvas.ctx.fillStyle = rgba;
            canvas.ctx.fillRect(0, 0, canvas.PXwidth, canvas.PXheight);

            if(loader.maxFrame == loader.currentFrame){
                clearInterval(loader.interval);

                if(callbackFunction){
                    callbackFunction()
                }
            }

        }, loader.framerate);

    },

    fadeIn(callbackFunction = false) {

        loader.currentFrame = 0; 
        loader.interval = setInterval(function(){

            loader.currentFrame++;

            level.drawBackground();
            level.drawTiles();
            character.drawCharacter();
            level.drawOverlay();

            var frame = 1 - (loader.currentFrame / loader.maxFrame);
            var rgba = "rgba(0,0,0," + frame + ")";
            canvas.ctx.fillStyle = rgba;
            canvas.ctx.fillRect(0, 0, canvas.PXwidth, canvas.PXheight);

            if(loader.maxFrame == loader.currentFrame){
                clearInterval(loader.interval);

                if(callbackFunction){
                    callbackFunction()
                }
            }

        }, loader.framerate);

    },

}