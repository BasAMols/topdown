var level = {

    constructor() {
        level.active = game.level;
        game.pos.currentX = level.active.start.x * game.spriteRenderSize;
        game.pos.currentY = level.active.start.y * game.spriteRenderSize;
        
        level.drawBackground();
    },

    loadJson(jsonURL, callbackFunction = false) {
        $.getJSON(jsonURL,function(json){
            level.json = json;
            level.populateLevel();
            level.renderTiles(function(){
                if (callbackFunction){
                    callbackFunction();
                }
            });
        });
    },

    drawBackground() {

        // Rendering Canvas
        canvas.ctx.fillStyle = level.active.backgroundcolor;
        canvas.ctx.fillRect(0, 0, canvas.PXwidth, canvas.PXheight);

    },

    populateLevel() {
        level.active.tiles.ground       = level.json.terrain;
        level.active.tiles.objects      = level.json.objects;
        level.active.tiles.decorations  = level.json.decorations;
        level.active.tiles.overlay      = level.json.overlay;
        level.active.height             = level.json.height;
        level.active.width              = level.json.width;
        level.active.backgroundcolor    = level.json.background;
        level.active.unrendered_sprites = level.json.sprites;
    },

    // THIS FUNCTION TURNS EVERY UNRENDERED SPRITE INTO RENDERED SPRITES
    renderTiles(callbackFunction = false) {

        var unrendered_sprites = this.active.unrendered_sprites;
        var counter = 0;
        var maxCounter = unrendered_sprites.length;

        unrendered_sprites.forEach(sprite => {
            
            img = new Image();
            img.sprite = sprite;

            img.onload = function() { 

                img     = canvas.renderSprite(this);
                name    = this.sprite.name; 
                
                level.active.rendered_sprites[name] = img

                counter++;
                if (counter == maxCounter && callbackFunction){
                    callbackFunction();
                }
                
            }

            img.src = sprite.url;

        });

    },



    // FUNCTION TO DRAW THE TILES TO THE SCREEN AT THE APPROPRIATE LOCATION.
    drawTiles() {

        // Draw ground tiles
        if (settings.renderGround){
            
            for (e = 0; e < level.active.tiles.ground.length; e++) { 
            
                var tile = level.active.tiles.ground[e];

                var X = tile.X * game.spriteRenderSize - view.currentX
                var Y = tile.Y * game.spriteRenderSize - view.currentY + game.spriteRenderSize
                
                canvas.ctx.drawImage(
                    level.active.rendered_sprites[tile.type], 
                    X, 
                    canvas.PXheight - Y
                );
                
            }

        }
       
        if (settings.renderObjects){

            for (e = 0; e < level.active.tiles.objects.length; e++) { 
            
                var tile = level.active.tiles.objects[e];
                
                var X = tile.X * game.spriteRenderSize - view.currentX
                var Y = tile.Y * game.spriteRenderSize - view.currentY + game.spriteRenderSize
                
                canvas.ctx.drawImage(
                    level.active.rendered_sprites[tile.type], 
                    X, 
                    canvas.PXheight - Y
                );
            }
            
        }

        if (settings.renderDecorations){

            for (e = 0; e < level.active.tiles.decorations.length; e++) { 
            
                var tile = level.active.tiles.decorations[e];
                
                var X = tile.X * game.spriteRenderSize - view.currentX
                var Y = tile.Y * game.spriteRenderSize - view.currentY + game.spriteRenderSize
                
                canvas.ctx.drawImage(
                    level.active.rendered_sprites[tile.type], 
                    X, 
                    canvas.PXheight - Y
                );
            }
            
        }

    },

    drawOverlay(){
        if (settings.renderOverlay){

            for (e = 0; e < level.active.tiles.overlay.length; e++) { 
            
                var tile = level.active.tiles.overlay[e];
                
                var X = tile.X * game.spriteRenderSize - view.currentX
                var Y = tile.Y * game.spriteRenderSize - view.currentY + game.spriteRenderSize
                
                canvas.ctx.drawImage(
                    level.active.rendered_sprites[tile.type], 
                    X, 
                    canvas.PXheight - Y
                );

            }
            
        }
    }

}