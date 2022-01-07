var checks = {


    X() {

        var hitboxX = character.active.hitbox.X * game.characterRenderSize;
        var hitboxY = character.active.hitbox.Y * game.characterRenderSize;

        // Check for edge of level
        if(
            game.pos.nextX < 0 ||
            game.pos.nextX > game.spriteRenderSize * level.active.width - hitboxX
        ){

            // Return data for what we hit
            var returnData = {
                type: 'border',
                data: null
            }
            return returnData;
        }

        // Check for collision with walls
        for (w = 0; w < level.active.walls.X.length; w++) {
            var wall = level.active.walls.X[w];

            var X       = wall.X * game.spriteRenderSize;
            var Y       = wall.Y * game.spriteRenderSize;
            var length  = wall.length * game.spriteRenderSize;

            if (
                X - hitboxX <= game.pos.nextX &&
                X >= game.pos.nextX &&
                Y - hitboxY <= game.pos.currentY &&
                Y + length >= game.pos.currentY
            ){

                // Return data for what we hit
                var returnData = {
                    type: 'wall',
                    data: wall
                }
                return returnData;
            }

        }

        return true;

    },


    Y() {
    
        var hitboxX = character.active.hitbox.X * game.characterRenderSize;
        var hitboxY = character.active.hitbox.Y * game.characterRenderSize;

        // Check for edge of level
        if(
            game.pos.nextY < 0 ||
            game.pos.nextY > game.spriteRenderSize * level.active.height - hitboxY
        ){
            // Return data for what we hit
            var returnData = {
                type: 'border',
                data: null
            }
            return returnData;
        }

        // Check for collision with walls
        for (w = 0; w < level.active.walls.Y.length; w++) {
            var wall = level.active.walls.Y[w];

            var X       = wall.X * game.spriteRenderSize;
            var Y       = wall.Y * game.spriteRenderSize;
            var length  = wall.length * game.spriteRenderSize;

            if (
                Y >= game.pos.nextY &&
                Y <= game.pos.nextY + hitboxY &&
                X - hitboxX <= game.pos.currentX &&
                X + length >= game.pos.currentX
            ){
                // Return data for what we hit
                var returnData = {
                    type: 'wall',
                    data: wall
                }
                return returnData;
            }

        }

        return true;

    },

}