var action = {

    check() {

        // Check if we are in position to warp
        warpPass = false;
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
                warpPass = true;
                warpData = element;
                return;
            }

        });

        if (warpPass) {

            this.doWarp(warpData);

        }

        // Check if we are in position to warp
        speechPass = false;
        speechData = undefined;
        level.active.event_trigger.speech.forEach(function (element) {

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
                speechPass = true;
                speechData = element;
                return;
            }

        });

        if (speechPass) {

            this.doSpeech(speechData);

        }

    },

    doWarp(warpData){

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

                // reset any action poses (attacks)
                character.overwritePose = undefined;

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

    doSpeech(speechData){

        speech.start(speechData.id);

    },

    attack(){
        animation.interval = 0;
        character.overwritePose = 'attack';

    }

}