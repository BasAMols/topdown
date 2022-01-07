var script = {

    constructor() {

        this.active     = undefined;
        this.mode       = "terrain";
        this.pixelSize  = 6;
        this.background = $('.setting .background-color').val();
        this.elements   = {
            terrain    : {},
            objects    : {},
            decorations: {},
            overlay    : {},
        };
        this.sizeX = $('.setting .size-X').val();
        this.sizeY = $('.setting .size-Y').val();
        this.changeGrid();

        $('.popup').hide();
        script.modeswitch(this.mode);


        // CLICKEVENTS
        // Tiles
        $('.sidebar div.selectable_element ').on('click', function(){
            script.select($(this))
        });

        // Settings
        $('.setting_submit').on('click', function(){
            script.changeSettings()
        });

        $('.setting_export').on('click', function(){
            script.export()
        });


        // Popup
        $('.clipboard').on('click', function(){
            script.clipboard()
        });

        $('.close_popup').on('click', function(){
            $('.popup').hide();
        });


        // Toggleables
        $('.settings_toggle').on('click', function(){
            $('.settings').toggle('0.1s');
            $('.settings_toggle').toggleClass('closed');
        });

        $('.modes_toggle').on('click', function(){
            $('.modes').toggle('0.1s');
            $('.modes_toggle').toggleClass('closed');
        });

        $('.tiles_toggle').on('click', function(){
            $('.tiles').toggle('0.1s');
            $('.tiles_toggle').toggleClass('closed');
        });

        $('.import_toggle').on('click', function(){
            $('.import').toggle('0.1s');
            $('.import_toggle').toggleClass('closed');
        });

        $('.tiles').toggle();
        $('.tiles_toggle').toggleClass('closed');
        $('.modes').toggle();
        $('.modes_toggle').toggleClass('closed');
        $('.import').toggle();
        $('.import_toggle').toggleClass('closed');


        // Modes
        $('.button.mode').on('click', function(){
            script.modeswitch($(this).attr('class').split(/\s+/)[2]);
        });

        $('.button.viewer').on('click', function(){
            $(this).toggleClass('active');
            $('.grid_outer').toggleClass('viewer');
        });


        // Import
        $('.import_submit').on('click', function(){
            script.import();
        });

    },

    select(element) {

        child = element.children('img');

        $('.sidebar div.selectable_element ').removeClass('active');
        element.addClass('active');
           
        this.active = child;
    },

    modeswitch(mode) {
        $('.button.mode').removeClass('active');
        $('.grid' ).removeClass('active');
        $('.button.mode.'+mode).addClass('active');
        $('.grid.'+mode).addClass('active');
        script.mode = mode;

    },

    place(element) {

        if(this.active != undefined){

            var img = this.active;
            var img = img.clone();

            var title  = img[0].title;
            var width  = img[0].naturalWidth;
            var height = img[0].naturalHeight;

            var classes = element.attr('class').split(/\s+/);
            var x       = classes[1].replace("x", "");
            var y       = classes[2].replace("y", "");
            var object  = {
                X   : x,
                Y   : y,
                type: title
            }

            var objectname = classes[1]+"_"+classes[2]+"_"+title;
            this.elements[this.mode][objectname] = object;

            img.width(width * this.pixelSize);
            img.height(height * this.pixelSize);

            element.append(img);

        }

    },

    remove(element) {

        // Empty element from grid
        element.empty();

        // Remove elements from array
        classes = element.attr('class').split(/\s+/);
        string  = classes[1] + "_" + classes[2] + "_";


        for (prop in script.elements[script.mode]) {
            if (prop.startsWith(string)){
                delete script.elements[script.mode][prop]
            }
            
        }

    },

    export() {

        var exportfile    = {};
        var sprites       = [];
        var spritesoutput = [];
        
        // terrain
        var terrain_ob = this.elements.terrain;
        var terrain    = [];
        Object.values(terrain_ob).forEach(element => {
            terrain.push(element);
            sprites[element.type] = {
                url : $('.selectable_element.'+element.type+' img').attr('src').replace('../', ''),
                name: element.type
            };
        });
        exportfile.terrain = terrain;

        // objects
        var objects_ob = this.elements.objects;
        var objects    = [];
        Object.values(objects_ob).forEach(element => {
            objects.push(element);
            sprites[element.type] = {
                url : $('.selectable_element.'+element.type+' img').attr('src').replace('../', ''),
                name: element.type
            };
        });
        exportfile.objects = objects;

        // decorations
        var decorations_ob = this.elements.decorations;
        var decorations    = [];
        Object.values(decorations_ob).forEach(element => {
            decorations.push(element);
            sprites[element.type] = {
                url : $('.selectable_element.'+element.type+' img').attr('src').replace('../', ''),
                name: element.type
            };
        });
        exportfile.decorations = decorations;

        // overlay
        var overlay_ob = this.elements.overlay;
        var overlay    = [];
        Object.values(overlay_ob).forEach(element => {
            overlay.push(element);
            sprites[element.type] = {
                url : $('.selectable_element.'+element.type+' img').attr('src').replace('../', ''),
                name: element.type
            };
        });
        exportfile.overlay = overlay;

        // Settings
        exportfile.height     = script.sizeY;
        exportfile.width      = script.sizeX;
        exportfile.background = script.background;

        // sprites
        Object.values(sprites).forEach(element => {
            spritesoutput.push(element);
        });

        exportfile.sprites = spritesoutput;


        var json = JSON.stringify(
            exportfile
        );

        $('.popup .text').text(json); 
        $('.popup').show();

    },

    import(){

        var json = JSON.parse($('.import_json').val());

        // Setting the settings
        $('.setting .background-color').val(json.background);
        $('.setting .size-Y').val(json.height);
        $('.setting .size-X').val(json.width);

        script.changeSettings();

        // Building the grid items
            script.elements.terrain = {};
        var terrain                 = json.terrain;
        terrain.forEach(element => {
            var                     label  = "x" + element.X + "_y" + element.Y + "_" + element.type;
            script.elements.terrain[label] = {
                X   : element.X,
                Y   : element.Y,
                type: element.type
            }
        });

            script.elements.objects = {};
        var objects                 = json.objects;
        objects.forEach(element => {
            var                     label  = "x" + element.X + "_y" + element.Y + "_" + element.type;
            script.elements.objects[label] = {
                X   : element.X,
                Y   : element.Y,
                type: element.type
            }
        });

            script.elements.decorations = {};
        var decorations                 = json.decorations;
        decorations.forEach(element => {
            var                         label  = "x" + element.X + "_y" + element.Y + "_" + element.type;
            script.elements.decorations[label] = {
                X   : element.X,
                Y   : element.Y,
                type: element.type
            }
        });

            script.elements.overlay = {};
        var overlay                 = json.overlay;
        overlay.forEach(element => {
            var                     label  = "x" + element.X + "_y" + element.Y + "_" + element.type;
            script.elements.overlay[label] = {
                X   : element.X,
                Y   : element.Y,
                type: element.type
            }
        });

        // Rebuild the grid
        script.buildGrid();

    },

    buildGrid(){

        // terrain
        var terrain_ob = this.elements.terrain;
        Object.values(terrain_ob).forEach(element => {
            var tile = $('.tiles > .'+element.type+' > img').clone();

            var width  = tile[0].naturalWidth;
            var height = tile[0].naturalHeight;

            tile.width(width * script.pixelSize)
            tile.height(height * script.pixelSize)

            $('.grid_outer .grid.terrain .tile.x'+element.X+'.y'+element.Y).append(tile);

        });

        // objects
        var objects_ob = this.elements.objects;
        Object.values(objects_ob).forEach(element => {
            var tile = $('.tiles > .'+element.type+' > img').clone();;

            var width  = tile[0].naturalWidth;
            var height = tile[0].naturalHeight;

            tile.width(width * script.pixelSize)
            tile.height(height * script.pixelSize)

            $('.grid_outer .grid.objects .tile.x'+element.X+'.y'+element.Y).append(tile);

        });
        
        // decorations
        var decorations_ob = this.elements.decorations;
        Object.values(decorations_ob).forEach(element => {
            var tile = $('.tiles > .'+element.type+' > img').clone();;

            var width  = tile[0].naturalWidth;
            var height = tile[0].naturalHeight;

            tile.width(width * script.pixelSize)
            tile.height(height * script.pixelSize)

            $('.grid_outer .grid.decorations .tile.x'+element.X+'.y'+element.Y).append(tile);

        });
        
        // overlay
        var overlay_ob = this.elements.overlay;
        Object.values(overlay_ob).forEach(element => {
            var tile = $('.tiles > .'+element.type+' > img').clone();;

            var width  = tile[0].naturalWidth;
            var height = tile[0].naturalHeight;

            tile.width(width * script.pixelSize)
            tile.height(height * script.pixelSize)

            $('.grid_outer .grid.overlay .tile.x'+element.X+'.y'+element.Y).append(tile);

        });

    },

    clipboard() {

        var temp = $("<input>");
        $("body").append(temp);
        temp.val($('.popup .text').text()).select();
        document.execCommand("copy");
        temp.remove();

    },

    changeSettings() {
        this.background = $('.setting .background-color').val();
        this.sizeX      = $('.setting .size-X').val();
        this.sizeY      = $('.setting .size-Y').val();

        this.changeGrid();
    },
    
    changeGrid(){
        var pixelsize  = this.pixelSize;
        var background = this.background;
        var sizeX      = this.sizeX;
        var sizeY      = this.sizeY;

        $('.grid_outer').css({
            "background-color": background,
        });   

        $('.grid').each(function(){

            $(this).css({
                "width" : sizeX * pixelsize * 16,
                "height": sizeY * pixelsize * 16,
            });   

            $(this).empty();

            for(x = 0; x < sizeX; x++){

                var column = $('<div class="column"></div>');
                for(y = sizeY - 1; y >= 0; y--){
                    column.append('<div class="tile x'+x+' y'+y+'"></div>');
                }
                $(this).append(column);

            }

        });

        $('.tile').on('click', function(){
            script.place($(this));
        });

        $( ".tile" ).contextmenu(function() {
            script.remove($(this));
            return false;
        });

        script.buildGrid();
    },
}


$( document ).ready(function($){

    script.constructor();

});