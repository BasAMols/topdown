var view = {

    constructor() {
        this.blocks        = [];
        this.currentX      = 0;
        this.currentY      = 0;
        this.lastX         = undefined;
        this.lastY         = undefined;

    },

    moveX() {
        this.lastX = this.currentX;
        this.currentX = game.pos.currentX - (canvas.PXwidth / 2) + (game.character.hitbox.Y * game.characterRenderSize / 2);
        if(
            this.currentX < 0 || 
            this.currentX > (level.active.width * game.spriteRenderSize) - canvas.PXwidth)
        {
            this.currentX = this.lastX;
        }

    },

    moveY() {
        this.lastY = this.currentY;
        this.currentY = game.pos.currentY - (canvas.PXheight / 2) + (game.character.hitbox.Y * game.characterRenderSize / 2);

        if(
            this.currentY < 0 || 
            this.currentY > (level.active.height * game.spriteRenderSize) - canvas.PXheight)
        {
            this.currentY = this.lastY;
        }

    },

    forceView(){
        this.currentX = game.pos.currentX - (canvas.PXwidth / 2) + (game.character.hitbox.Y * game.characterRenderSize / 2);
        this.currentX = +tools.range(
            this.currentX, 
            0, 
            (level.active.width * game.spriteRenderSize) - canvas.PXwidth
        );

        this.currentY = game.pos.currentY - (canvas.PXheight / 2) + (game.character.hitbox.Y * game.characterRenderSize / 2);
        this.currentY = +tools.range(
            this.currentY, 
            0, 
            (level.active.height * game.spriteRenderSize) - canvas.PXheight
        );
    }
}