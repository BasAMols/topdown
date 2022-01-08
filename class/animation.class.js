var animation = {

    constructor() {
        this.interval = 0;
        this.intervalTimeout = 1; // Increase interval every X frames
        this.maxinterval = 30; // Loop interval after X amounts
    },

    rotation() {
        // This function moves the character to detirmine what direction he is looking at.
        // It compares the X axis acceleration with the Y axis acceleration to determine
        // the direction of movement. If The character is moving in both the X and Y direction
        // it will decide based on what direction it is moving more towards.

        var Xacc = movement.Xacc;
        var Yacc = movement.Yacc;

        // Standing still
        if(Xacc == 0 && Yacc == 0){

            character.active.pose = "idle";
            return;
        }

        character.active.pose = "walk";
        


        // Either moving left or right
        if(Xacc != 0 && Yacc == 0){

            // Moving right
            if(Xacc > 0){
                character.active.rot = 90

            // Moving left
            } else {
                character.active.rot = 270
            }

            return;
        }

        // Either moving up or down
        if(Xacc == 0 && Yacc != 0){

            // Moving down
            if(Yacc > 0){
                character.active.rot = 180

            // Moving up
            } else {
                character.active.rot = 0
            }

            return;
        }

        // Both moving in the X and Y direction
        // Going right and down
        if(Xacc > 0 && Yacc > 0){

            // Going mostly right
            if(Xacc > Yacc){
                character.active.rot = 90

            // Going mostly down
            } else {
                character.active.rot = 180
            }

        // Going left and up
        } else if(Xacc < 0 && Yacc < 0) {

            // Going mostly up
            if(Xacc > Yacc){
                character.active.rot = 0

            // Going mostly left
            } else {
                character.active.rot = 270
            }

        // Either moving down and left or up and right
        } else {

            // Moving down and left
            if(Xacc <= 0) {
                Xacc = Math.abs(Xacc);

                // Moving mostly left
                if(Xacc > Yacc){
                    character.active.rot = 270
    
                // Moving mostly down
                } else {
                    character.active.rot = 180
                }

            // Moving up and right
            } else {
                Yacc = Math.abs(Yacc);

                // Moving mostly right
                if(Xacc > Yacc){
                    character.active.rot = 90
    
                // Moving mostly up
                } else {
                    character.active.rot = 0
                }
            }
        }
    },

    cycle(){
        // This function creates the animation cycle. Every different pose has a different animation
        // timeline. We check for the pose, and then we cycle through the interval of the animation.
        // The renderer handles what graphic gets chosen in the character sheet.

        

        // First we check if a new pose has been selecter in order to start the animation interval from 0
        if (character.active.oldpose != character.active.pose){
            character.active.oldpose = character.active.pose;
            character.active.interval = 0;
        }

        if(game.framecount % this.intervalTimeout == 0){

            this.interval++;

            // IDLE
            if (character.active.pose == "idle"){

                switch (this.interval){
                    case this.maxinterval + 1: 
                        this.interval = 0;

                    case 0: 
                    case 30: 
                        character.active.interval = 0;
                        break;

                    case 6: 
                        character.active.interval = 1;
                        break;

                    case 12: 
                        character.active.interval = 2;
                        break;

                    case 18: 
                        character.active.interval = 3;
                        break;

                    case 24: 
                        character.active.interval = 4;
                        break;

                }     
            }

            // Walking
            if (character.active.pose == "walk"){

                switch (this.interval){
                    case this.maxinterval + 1: 
                        this.interval = 0;

                    case 0: 
                    case 30: 
                        character.active.interval = 0;
                        break;

                    case 5: 
                        character.active.interval = 1;
                        break;

                    case 10: 
                        character.active.interval = 2;
                        break;

                    case 15: 
                        character.active.interval = 3;
                        break;

                    case 20: 
                        character.active.interval = 4;
                        break;

                    case 25: 
                        character.active.interval = 5;
                        break;

                } 
                    
            }

        }

    },

}