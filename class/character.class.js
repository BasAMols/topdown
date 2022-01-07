var character = {

    constructor() {
        
        this.active = game.character;

    },

    // THIS FUNCTION TURNS EVERY UNRENDERED SPRITE INTO RENDERED SPRITES
    renderCharacter(callbackFunction = false) {

        var unrendered_sprites = this.active.unrendered_sprites;

        var counter = 0;
        var maxCounter = unrendered_sprites.length;

        unrendered_sprites.forEach(sprite => {

            img = new Image();
            img.sprite = sprite;

            img.onload = function() { 
                
                img     = canvas.renderSprite(this);
                src     = this.sprite.url; 
                pose    = this.sprite.pose; 
                rot     = this.sprite.rot; 
                int     = this.sprite.interval; 

                character.active.rendered_sprites[pose][rot][int] = img

                counter++;
                if (counter == maxCounter && callbackFunction){
                    callbackFunction();
                }
                
            }

            img.src = sprite.url;
            
        });

    },

    // THIS FUNCTION DRAWS THE CHARACTER TO THE SCREEN
    drawCharacter() {

        var pose = character.active.rendered_sprites[character.active.pose][character.active.rot][character.active.interval];

        canvas.ctx.drawImage(
            pose,
            (game.pos.currentX - view.currentX) - character.active.hitboxoffset.X * game.characterRenderSize, 
            (canvas.PXheight - ( game.pos.currentY + (game.character.hitbox.Y * game.characterRenderSize) - view.currentY)) - character.active.hitboxoffset.Y * game.characterRenderSize,
        );

    },

}