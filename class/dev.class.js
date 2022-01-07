var dev = {

    activator() {
        if(settings.dev){

            if(settings.drawGrid){
                dev.drawGrid();
            }

            if(settings.drawGridText){
                dev.drawGridText();
            }

            if(settings.drawWallCollision){
                dev.drawWallCollision();
            }

            if(settings.drawCharacterHitbox){
                dev.drawCharacterHitbox();
            }

            dev.drawTrigger();
            
        }
    },

    // DEV FUNCTION
    drawGrid() {

        // Rendering Grid
        for (x = 0; x < level.active.width; x++) {
            for (y = 0; y < level.active.height; y++) {

                canvas.ctx.lineWidth = 1;
                canvas.ctx.strokeStyle = '#737373';
                canvas.ctx.strokeRect(
                    x * game.spriteRenderSize - view.currentX, 
                    canvas.PXheight - (y * game.spriteRenderSize - view.currentY) - game.spriteRenderSize,
                    game.spriteRenderSize, 
                    game.spriteRenderSize
                );

            }
        }

    },

    // DEV FUNCTION
    drawGridText() {

        // Rendering Text
        for (x = 0; x < level.active.width; x++) {
            for (y = 0; y < level.active.height; y++) {

                canvas.ctx.font           = game.zoom * 3 + "px Arial";
                canvas.ctx.fillStyle      = "#a0a0a0";
                canvas.ctx.shadowColor    ="#000";
                canvas.ctx.shadowBlur     = 0;
                canvas.ctx.shadowOffsetX  = 2;
                canvas.ctx.shadowOffsetY  = 2;

                canvas.ctx.fillText(
                    'x:'+ x, 
                    x * game.spriteRenderSize - view.currentX, 
                    canvas.PXheight - (y * game.spriteRenderSize - view.currentY + 20)
                );

                canvas.ctx.fillText(
                    'y:' + y, 
                    x * game.spriteRenderSize - view.currentX, 
                    canvas.PXheight - (y * game.spriteRenderSize - view.currentY + 4)
                );

                canvas.ctx.shadowBlur     = 0;
                canvas.ctx.shadowOffsetX  = 0;
                canvas.ctx.shadowOffsetY  = 0;

            }
        }

    },

    // DEV FUNCTION
    drawWallCollision(){

        // Render Horizontal walls
        for(w = 0; w < level.active.walls.X.length; w++){
            var wall = level.active.walls.X[w];
            dev.drawWall(wall.X * game.spriteRenderSize - 1, wall.Y * game.spriteRenderSize , 'Y', wall.length, 4, 'white');

        }

        // Render vertical walls
        for(w = 0; w < level.active.walls.Y.length; w++){
            var wall = level.active.walls.Y[w];
            dev.drawWall(wall.X * game.spriteRenderSize, wall.Y * game.spriteRenderSize + 1 , 'X', wall.length, 4, 'white');
        }

    },

    // DEV FUNCTION
    drawCharacterHitbox(){

        canvas.ctx.lineWidth = 4;
        canvas.ctx.strokeStyle = 'purple';

        canvas.ctx.strokeRect(
            game.pos.currentX - view.currentX, 
            canvas.PXheight - ( game.pos.currentY + (game.character.hitbox.Y * game.characterRenderSize) - view.currentY),
            game.character.hitbox.X * game.characterRenderSize, 
            game.character.hitbox.Y * game.characterRenderSize
        );

    },

    // USED BY renderWallCollision() AS HELPER FUNCTION
    drawWall(x, y, dir, length, thickness, color) {     

        canvas.ctx.fillStyle = color;

        if (dir == 'Y'){

            canvas.ctx.fillRect(
                x - view.currentX,
                canvas.PXheight - y + view.currentY - length * game.spriteRenderSize,
                thickness,
                length * game.spriteRenderSize  
            );

        } else {

            canvas.ctx.fillRect(
                x - view.currentX,
                canvas.PXheight - y + view.currentY,
                length * game.spriteRenderSize,
                thickness  
            );

        }
    },

    drawTrigger() {
        // Rendering Trigger square 
        level.active.event_trigger.warp.forEach(function(element) {

            canvas.ctx.fillStyle = "#FFFF0050";
            canvas.ctx.fillRect(
                (element.X * game.spriteRenderSize) - view.currentX,
                canvas.PXheight - (element.Y * game.spriteRenderSize) + view.currentY,
                (element.width * game.spriteRenderSize),
                -(element.height * game.spriteRenderSize)
            );

        });
        for (x = 0; x < level.active.event_trigger.warp; x++) {
            

        }
    }
}