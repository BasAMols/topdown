var canvas = {

    constructor() {
        
        this.PXwidth        = document.documentElement.clientWidth;
        this.PXheight       = document.documentElement.clientHeight;
        this.sprites        = [];

        this.frame = document.createElement('canvas');
        this.frame.setAttribute('id', 'Canvas');
        this.frame.setAttribute('width', this.PXwidth);
        this.frame.setAttribute('height', this.PXheight);
        document.body.appendChild(this.frame);
        this.ctx = this.frame.getContext('2d');
        
        this.frame.addEventListener('click', game.start.bind(this));

    },

    // FUNCTION TO TURN UNRENDERED SPRITES INTO RENDERED SPRITES AT THE APPROPRIATE SIZE
    // TODO: SEE IF IT IS ACTUALLY RELEVANT AS A SEPERATE CHARACTER DRAWER VS SPRITE DRAWER
    renderSprite(img) {

        // Create canvas for original size image
        var spriteCanvas1 = document.createElement('canvas');
        spriteCanvas1.width = img.width;
        spriteCanvas1.height = img.height;
        var spriteCanvas1CTX = spriteCanvas1.getContext('2d');

        // Place image in canvas
        spriteCanvas1CTX.drawImage(img, 0, 0, img.width, img.height);

        // Create canvas for resized image
        var spriteCanvas2 = document.createElement('canvas');
        spriteCanvas2.setAttribute('id', 'Canvas');
        spriteCanvas2.setAttribute('width', img.width * game.characterRenderSize);
        spriteCanvas2.setAttribute('height', img.height * game.characterRenderSize);
        var spriteCanvas2CTX = spriteCanvas2.getContext('2d');

        for (x = 0; x < spriteCanvas1.width; x++) {
            for (y = 0; y < spriteCanvas1.height; y++) {

                var pixelData = spriteCanvas1.getContext('2d').getImageData(x, y, 1, 1).data;
                var hex = tools.rgbToHex(pixelData);
                
                spriteCanvas2CTX.fillStyle = hex;
                spriteCanvas2CTX.fillRect(
                    x * game.characterRenderSize,
                    y * game.characterRenderSize,
                    game.characterRenderSize,
                    game.characterRenderSize  
                );

            }
        }

        var img = new Image();
        img.src = spriteCanvas2.toDataURL();

        return img

    },

}