var action = {

    checkWarp() {

        // Check if we are in position to warp
        warp = false;
        warpData = undefined;
        level.active.event_trigger.warp.forEach(function (element) {

            var xStart = (element.X * game.spriteRenderSize);
            var xEnd = (element.X * game.spriteRenderSize) + (element.width * game.spriteRenderSize);
            var yStart = (element.Y * game.spriteRenderSize);
            var yEnd = (element.Y * game.spriteRenderSize) + (element.height * game.spriteRenderSize);

            if (
                game.pos.nextX > xStart &&
                game.pos.nextX + game.character.hitbox.X * game.characterRenderSize < xEnd &&
                game.pos.nextY > yStart &&
                game.pos.nextY + game.character.hitbox.X * game.characterRenderSize < yEnd
            ) {
                warp = true;
                warpData = element;
                return;
            }

        });

        if (warp) {

            this.warp(warpData);

        }

    },

    warp(warpData){

        // Give callback code to start again
        game.stop(function(){
            // Set active level from data
            level.active = window[warpData.level]
            level.loadJson(level.active.JSON, function () {
                
                // Setting our start position
                game.pos.currentX = (warpData.spawn.X * game.spriteRenderSize) + (character.active.hitboxoffset.X * 2);
                game.pos.currentY = (warpData.spawn.Y * game.spriteRenderSize) + (character.active.hitboxoffset.Y);

                // Stop our movement
                movement.stopX();
                movement.stopY();

                // Reset animation cycle
                animation.rotation();
                animation.cycle();

                // Reset the view centered on the character
                view.forceView();
                
                // Start the game again
                game.start();

            });
        });

    },

}