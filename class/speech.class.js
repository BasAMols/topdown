var speech = {

    active: false,

    bubbleColor: undefined,
    bubbleFont: "30px Arial",
    bubbleFontColor: "#000000",

    textCurrent: undefined,
    textInterval: 0,

    fadeState: "none",
    fadeInterval: 0,
    fadeMax: 20,
    
    list: {

        testtalk: {
            text: "Welcome to the bridge",
            stop: false,
            single: false,
            triggered: false,
        },

    },

    start(id) {

        if (this.list[id]){

            var object = this.list[id];

            // Dont trigger if the bubble should only be seen once, and has already been seen.
            if (!object.single || !object.triggered){

                // Only trigger if another bubble isnt alread visible
                if (this.fadeState == "none"){
                    object.triggered = true;
                    this.active = true;
                    this.fadeState = "starting";
                    this.textCurrent = object;
                }

            }
        
        } else {
            console.warn('Speech triggered that does not exist with ID: ' + id);
        }

    },

    cycle() {

    },

    stop() {
        this.fadeState = "stopping";
        this.textCurrent = undefined;
    },

    fadeIn() {

        this.fadeInterval++;
        var opacity = this.fadeInterval / this.fadeMax
        this.bubbleColor = "rgba(255,255,255," + opacity + ")";

        // STOP FADING
        if(this.fadeInterval == this.fadeMax){
            this.fadeState = "active";
            return;
        }

    },

    fadeOut() {

        this.fadeInterval++;
        var opacity = 1 - (this.fadeInterval / this.fadeMax);
        this.bubbleColor = "rgba(255,255,255," + opacity + ")";
        this.fadeState = "out";

        // STOP FADING
        if(this.fadeInterval == this.fadeMax){
            this.active = false;
            this.fadeState = "none"
            return;
        }


    },

    loop() {

        if (this.active) {
            switch (this.fadeState) {
                case "none": 
                break;

                case "starting": 
                    this.fadeState = "in";
                    this.fadeInterval = 0;
                    this.fadeIn();
                    this.drawBubble();
                break;

                case "in": 
                    this.fadeIn();
                    this.drawBubble();
                break;

                case "active": 
                    this.drawBubble();
                    this.drawSpeech();
                break;

                case "stopping": 
                    this.fadeInterval = 0;
                    this.fadeOut();
                    this.drawBubble();
                break;

                case "out": 
                    this.fadeOut();
                    this.drawBubble();
                break;

            }

        }
    },

    drawBubble() {
        canvas.ctx.fillStyle = this.bubbleColor;
        canvas.ctx.fillRect(
            0,
            0,
            canvas.PXwidth,
            100  
        );
    },

    drawSpeech() {

        canvas.ctx.font = this.bubbleFont;
        canvas.ctx.fillStyle = this.bubbleFontColor;
        canvas.ctx.fillText(
            this.textCurrent.text, 
            10, 
            50
        );

    },

}