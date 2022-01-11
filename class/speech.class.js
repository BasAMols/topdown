var speech = {

    constructor() {

        this.active = false;

        this.bubble = {
            size: {
                width: canvas.PXwidth - 20,
                height: 150,
            },
            pos: {
                X: 10,
                Y: canvas.PXheight - 150 - 10,
            },
            color: "#000000",
            font: "24px Nanum Gothic Coding",
            fontColor: "#ffffff",
            letterWidth: 12,
            padding: 20,
            lineHeight: 26,
        };

        this.text = {
            object: undefined,
            current: undefined,
            currentChar: undefined,
            currentLine: 0,
            currentCycle: 0,
            state: "none",
            cycles: [],
            characterCount: undefined,
            maxLines: 0,
        };

        // Define maximum amount of characters in a line
        this.text.characterCount = Math.floor( (this.bubble.size.width - (this.bubble.padding * 2) ) / this.bubble.letterWidth );

        this.fadeState = "none";
        this.fadeInterval = 0;
        this.fadeMax = 10;
        
        this.list = {

            testtalk: {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Fusce fermentum rhoncus est, et interdum mauris pharetr Suspendisse laoreet nisi ut sapien dapibus fermentum.|Suspendisse sodales leo vitae ultricies luctus. Class aptent taciti sociosqu ad litora torquent per per inceptos himenaeos. Vestibulum ac ante interdum.|eleifend velit non, finibus neque. Nullam ac vulputate justo ac tincidunt felis. Vivamus blandit augue eu volutpat tincidunt Etiam tristique justo eros, eget blandit mi hendrerit ut.|Nunc efficitur massa ligula, sollicitudin viverra sapien tristique vitae Aenean volutpat diam id tempor lacinia. Nulla facilisis diam tortor eget tempor magna auctor lacinia.",
                stop: false,
                single: true,
                triggered: false,
            },

        };

    },

    start(id) {

        if (this.list[id]){

            this.text.object = this.list[id];

            // Dont trigger if the bubble should only be seen once, and has already been seen.
            if (!this.text.object.single || !this.text.object.triggered){

                // Only trigger if another bubble isnt alread visible
                if (this.fadeState == "none"){

                    this.text.maxLines = 0;

                    // Break cycle into lines
                    var cycles = this.text.object.text.split("|");
                    for (let i = 0; i < cycles.length; i++) {

                        var cycle = cycles[i];
                        var cycleArray = []

                        for (let j = 1; j < 11; j++) { 

                            if (cycle.length > this.text.characterCount){

                                // If the remaining text is longer than the maximum amount of characters
                                // split into multiple lines.
                                var line = cycle.substring(0,this.text.characterCount);
                                var breakpoint = line.lastIndexOf(' ');
                                if (breakpoint != -1) {
                                    var line = cycle.substring(0,breakpoint);
                                }

                                cycleArray.push(line);
                                cycle = cycle.substring(breakpoint).trim();

                            } else {

                                if (j > this.text.maxLines){
                                    this.text.maxLines = j
                                }
                                cycleArray.push(cycle);
                                break;

                            }

                        }

                        this.text.cycles.push(cycleArray);

                    }



                    // Set height op block dependant on text.maxLines
                    if (this.text.maxLines > 0) {
                        this.bubble.size.height = (this.bubble.padding * 2) + 14 + ( this.text.maxLines * this.bubble.lineHeight);
                        this.bubble.pos.Y = canvas.PXheight - this.bubble.size.height - 10

                        // Set starting values
                        this.text.object.triggered = true;
                        this.active = true;
                        this.fadeState = "starting";
                        this.text.state = "none";

                    } else {
                        console.warn('No lines: ' + id);
                    }

                }

            }
        
        } else {
            console.warn('Speech triggered that does not exist with ID: ' + id);
        }

    },

    cycle() {

        if (this.text.state == "active"){

            if ( this.text.currentCycle < this.text.cycles.length - 1){
                // Go to next cycle
                this.text.currentCycle++;
                this.text.currentLine = 0;
                this.text.currentChar = 0;
                this.text.state = "ticking";

            } else {
                this.stop();
            }

        } else {

            // Skip the text cycle
            this.text.partial = this.text.cycles[this.text.currentCycle][this.text.currentLine];
            this.text.currentLine = this.text.cycles[this.text.currentCycle].length - 1
            this.text.state = "active"

        }

    },

    stop() {
        this.fadeState = "stopping";

        // Reset all variables
        this.text.object = undefined;
        this.text.partial = undefined;
        this.text.currentCycle = 0;
        this.text.currentLine = 0;
        this.text.currentChar = 0;
        this.text.state = "none";
    },

    fadeIn() {

        this.fadeInterval++;
        var opacity = this.fadeInterval / this.fadeMax,
        opacity = tools.range (opacity, 0, 0.8);
        this.bubble.color = "rgba(0,0,0," + opacity + ")";

        // STOP FADING
        if(this.fadeInterval == this.fadeMax){
            this.fadeState = "active";
            return;
        }

    },

    fadeOut() {

        this.fadeInterval++;
        var opacity = 1 - (this.fadeInterval / this.fadeMax);
        opacity = tools.range (opacity, 0, 0.8);
        this.bubble.color = "rgba(0,0,0," + opacity + ")";
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
                    this.textLoop();
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

    textLoop() {
        if (this.active) {
            switch (this.text.state) {
                case "none": 
                    this.text.currentChar = 0;
                    this.text.partial = ""
                    this.text.state = "ticking"
                break;

                case "ticking": 
                    var line = this.text.cycles[this.text.currentCycle][this.text.currentLine];
                    this.text.currentChar++;
                    this.text.partial = line.substring(0, this.text.currentChar);

                    this.drawSpeech();

                    if (this.text.currentChar == line.length){
                        this.text.state = "checkLine";
                    }
                break;

                case "checkLine":

                    if (this.text.currentLine != this.text.cycles[this.text.currentCycle].length - 1){
                        // Go to next line
                        this.text.currentLine++;
                        this.text.currentChar = 0;
                        this.text.partial = ""
                        this.text.state = "ticking";
                    } else {
                        // Current cycle is done.
                        this.text.state = "active";
                    }

                    this.drawSpeech();
                break;

                case "active": 
                    this.drawSpeech();
                break;
            }

        }
    },

    drawBubble() {
        canvas.ctx.fillStyle = this.bubble.color;
        canvas.ctx.fillRect(
            this.bubble.pos.X,
            this.bubble.pos.Y,
            this.bubble.size.width,
            this.bubble.size.height  
        );
    },

    drawSpeech() {

        for (let lineNR = 0; lineNR < this.text.cycles[this.text.currentCycle].length; lineNR++) {
            var line = this.text.cycles[this.text.currentCycle][lineNR];
            var text = undefined;

            if (lineNR < this.text.currentLine || this.text.state == "active" ){

                var text = line;

            } else if (lineNR == this.text.currentLine){

                var text = this.text.partial + " ..";
               
            }       

            if (text !== undefined){

                canvas.ctx.font = this.bubble.font;
                canvas.ctx.fillStyle = this.bubble.fontColor;
                canvas.ctx.fillText(
                    text, 
                    this.bubble.pos.X + this.bubble.padding, 
                    this.bubble.pos.Y + this.bubble.padding + 14 + (this.bubble.lineHeight * (lineNR + 1) )
    
                );

            }

            // Draw tooltip text
            canvas.ctx.font = "14px Nanum Gothic Coding";
            canvas.ctx.fillStyle = this.bubble.fontColor;
            canvas.ctx.fillText(
                "Press ENTER or E to proceed", 
                this.bubble.pos.X + ( this.bubble.padding ), 
                this.bubble.pos.Y + ( this.bubble.padding + 14)
            );

        }

    },

}