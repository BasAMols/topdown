var movement = {

    constructor() {

        this.Xtime = 0;
        this.Xacc = 0;
        this.Ytime = 0;
        this.Yacc = 0;

    },

    moveX() {

        /////////////////////////////////////////////////
        // ==      THIS BLOCK DEFINES THE NEXT      == //
        // ==       POSTION IN THE X DIRECTION      == //
        /////////////////////////////////////////////////

        game.pos.lastX = game.pos.currentX;
        if (keyhandling.input.X != 0) {

            // ACCELERATION
            this.Xacc = tools.range(
                this.Xacc + keyhandling.input.X * 2,
                -game.character.movespeed,
                game.character.movespeed
            )

        } else {

            // DECELERATION
            if (this.Xacc < 0) {

                this.Xacc = tools.range(
                    this.Xacc + 2,
                    this.Xacc, //irrelevant
                    0
                );

            } else if (this.Xacc > 0) {

                this.Xacc = tools.range(
                    this.Xacc - 2,
                    0,
                    this.Xacc //irrelevant
                );

            }
        }

        game.pos.nextX = game.pos.currentX + this.Xacc;

        /////////////////////////////////////////////////
        // ==      THIS BLOCK CHECKS IF NEXT X      == //
        // ==         POSITION IS NOT BLOCKED       == //
        /////////////////////////////////////////////////


        if (this.Xacc == 0) {

            // Stopped
            this.stopX();

        } else {

            var check = checks.X()
            if (check === true) {
                // Moving right
                this.animateX();

            } else {
                // Stopped

                // this.hitX(check);
                // this.animateX();
                this.stopX();

            }

        }

    },

    moveY() {

        /////////////////////////////////////////////////
        // ==      THIS BLOCK DEFINES THE NEXT      == //
        // ==       POSTION IN THE Y DIRECTION      == //
        /////////////////////////////////////////////////

        game.pos.lastY = game.pos.currentY;
        if (keyhandling.input.Y != 0) {

            // ACCELERATION
            this.Yacc = tools.range(
                this.Yacc - keyhandling.input.Y * 2,
                -game.character.movespeed,
                game.character.movespeed
            )

        } else {
            
            // DECELERATION
            if (this.Yacc < 0) {

                this.Yacc = tools.range(
                    this.Yacc + 2,
                    this.Yacc, //irrelevant
                    0
                );

            } else if (this.Yacc > 0) {

                this.Yacc = tools.range(
                    this.Yacc - 2,
                    0,
                    this.Yacc //irrelevant
                );

            }
        }

        game.pos.nextY = game.pos.currentY - this.Yacc;



        /////////////////////////////////////////////////
        // ==      THIS BLOCK CHECKS IF NEXT X      == //
        // ==         POSITION IS NOT BLOCKED       == //
        /////////////////////////////////////////////////


        if (this.Yacc == 0) {

            // Stopped
            this.stopY();

        } else {

            var check = checks.Y()
            if (check === true) {
                // Moving down
                this.animateY();

            } else {
                // Stopped
                console.log(check);

                // this.hitY(check);
                // this.animateY();
                this.stopY();

            }

        }

    },

    // hitY(obstruction) {

    //     if (obstruction.type == 'wall'){

    //         if(this.Yacc < 0){

    //             var wallPosition = obstruction.data.Y * game.spriteRenderSize;
    //             var hitBox = character.active.hitbox.Y * game.characterRenderSize;
    
    //             game.pos.nextY = wallPosition - hitBox;
    
    //         } else {

    //             var wallPosition = obstruction.data.Y * game.spriteRenderSize;
    //             var hitBox = character.active.hitbox.Y * game.characterRenderSize;
    
    //             game.pos.nextY = wallPosition;
    
    //         }

    //     } else if (obstruction.type == 'border') {

    //     }

    // },

    // hitX(obstruction) {

    //     if (obstruction.type == 'wall'){

    //         if(this.Xacc > 0){

    //             var wallPosition = obstruction.data.X * game.spriteRenderSize;
    //             var hitBox = character.active.hitbox.X * game.characterRenderSize;
    
    //             game.pos.nextX = wallPosition - hitBox;
    
    //         } else {

    //             var wallPosition = obstruction.data.X * game.spriteRenderSize;
    //             var hitBox = character.active.hitbox.X * game.characterRenderSize;
    
    //             game.pos.nextX = wallPosition;
    
    //         }

    //     } else if (obstruction.type == 'border') {

    //     }

    // },

    animateX() {

        /////////////////////////////////////////////////
        // == THIS FUNCTIONS MOVES THE CHARACTER IN == //
        // ==     THE X DIRECTION IF TEST PASSED    == //
        /////////////////////////////////////////////////

        this.Xtime++;

        if (game.pos.currentX < game.pos.nextX) {
            character.active.rot = 90;
        } else {
            character.active.rot = 270;
        }

        game.pos.currentX = game.pos.nextX;

        // character.active.pose = 'walk';

    },

    animateY() {

        /////////////////////////////////////////////////
        // == THIS FUNCTIONS MOVES THE CHARACTER IN == //
        // ==     THE X DIRECTION IF TEST PASSED    == //
        /////////////////////////////////////////////////

        this.Ytime++;

        if (game.pos.currentY < game.pos.nextY) {
            character.active.rot = 0;
        } else {
            character.active.rot = 180;
        }

        game.pos.currentY = game.pos.nextY;

        // character.active.pose = 'walk';

    },

    stopX() {

        /////////////////////////////////////////////////
        // == THIS FUNCTIONS STOPS THE CHARACTER IN == //
        // ==     THE X DIRECTION IF TEST FAILED    == //
        /////////////////////////////////////////////////

        this.Xtime = 0;
        this.Xacc = 0;
        character.active.pose = 'idle';

    },

    stopY() {

        /////////////////////////////////////////////////
        // == THIS FUNCTIONS STOPS THE CHARACTER IN == //
        // ==     THE Y DIRECTION IF TEST FAILED    == //
        /////////////////////////////////////////////////

        this.Ytime = 0;
        this.Yacc = 0;
        character.active.pose = 'idle';

    }

}