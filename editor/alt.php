<html lang="nl">

<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=no" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Javascript -->
    <script type="text/javascript" src="editor.js"></script> 
    <link rel="stylesheet" href="style.css">
    <script
        src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
        integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
        crossorigin="anonymous">
    </script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

</head>

<body>
    <div class="sidebar">
        <div class="sidebar_sticky">

            <div class="button setting_export">Export</div>
            <div class="button viewer">Viewer</div>

            <div class="modes_toggle">Modes</div>
            <div class="modes">
                <div class="button mode terrain">Terrain</div>
                <div class="button mode objects">Objects</div>
                <div class="button mode decorations">Decorations</div>
                <div class="button mode overlay">Overlay</div>
            </div> 

        </div>
        <div class="sidebar_scroll">

            <div class="settings_toggle">Settings</div>
            <div class="settings">
                <div class="setting">
                    <label>Background color</label>
                    <input type="text" class="background-color" value="#272727">
                </div>
                <div class="setting">
                    <label>Size</label>
                    <input type="number" class="size-X" placeholder="X" value="20">
                    <input type="number" class="size-Y" placeholder="Y" value="20">
                </div>
                <div class="button setting_submit">Submit</div>
            </div>  

            <div class="tiles_toggle">Tiles</div>
            <div class="tiles">
                <pre>
                    <?php 

                        function endsWith( $haystack, $needle ) {
                            return $needle === "" || (substr($haystack, -strlen($needle)) === $needle);
                        }

                        $mainpath = '../map/sprite/';
                        $folders  = scandir($mainpath);
                        $output   = '';
                        array_shift($folders);
                        array_shift($folders);


                        // GET ALL FOLDERS
                        for($i = 0; $i < count($folders); $i++) {
                            $folder = $folders[$i];

                            if(
                                !endsWith( $folder, ".png" ) && 
                                $folder != "." && 
                                $folder != ".."
                            ){
                                
                                $subfolders = scandir($mainpath . $folder);

                                foreach($subfolders as $subfolder){

                                    if(
                                        !endsWith( $subfolder, ".png" ) && 
                                        $subfolder != "." && 
                                        $subfolder != ".."
                                    ){
                                        $folders[] = $folder . '/' . $subfolder;
                                    }
                                } 
                            }
                        }


                        // GET ALL FILES FROM FODERS
                        foreach( $folders as $folder){

                            $files = scandir($mainpath . $folder);

                            foreach( $files as $file){

                                if( endsWith( $file, ".png" ) ){

                                    $file_name = str_replace('.png', '', $file);
                                    $file_url = $mainpath . $folder . "/" . $file;

                                    print_r($file_url);

                                    $output .= '<div class="selectable_element">'. $file_url .'</div>';
                                    $output .= '<div class="selectable_element '.$file_name.'">';
                                    $output .= '<img src="'.$file_url.'" title="'.$file_name.'">';
                                    $output .= '<p>'.$file_name.'</p>';
                                    $output .= '</div>';    

                                }    
                            }                  
                        }

                        echo $output
                    ?>
            </div>
            <div class="import_toggle">Import</div>
            <div class="import">
                <textarea type="text" class="import_json" placeholder="{}"></textarea>
                <div class="button import_submit">Import</div>
            </div>
            
        </div> 

    </div>
    <div class="grid_outer">
        <div class="grid terrain"></div>
        <div class="grid objects"></div>
        <div class="grid decorations"></div>
        <div class="grid overlay"></div>
        <div class="grid lines"></div>
    </div>
    <div class="popup">
        <div class="text">

        </div>
        <div class="buttons">
            <div class="button clipboard">Copy</div>
            <div class="button close_popup">Close</div>
        </div>
    </div>

</body>

</html>