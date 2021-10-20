//variables globales : image de la carte + données chargées du CSV
var worldmap;
var data;

/** Variablse d'interaction */
var showFound;
var showFell;
var timeSlider;
var timelabel;
var showMass;
var showName;
var showClass;
/**
 * Fonction qui pré-charge les éléments.
 * Charge les éléments puis on passe setup ensuite
 */
function preload(){
    worldmap    = loadImage("../Asset/WorldMap.png");//chargement image
    data        = loadTable('../Dataset/Meteorite_Landings.csv', 'csv', 'header');//chargement des data (nom, type, header(existe ou pas))
}

/**
 * Initilise le programme
 */
function setup(){
    var aspectratio = worldmap.width / worldmap.height; // calcul le ratio de l'image pour avoir un canvas au ratio de la carte
    createCanvas(windowWidth, windowWidth/aspectratio);//créer un canvas, il est injecté dans le DOM.

    showFound   = createCheckbox("Show found", true);
    showFell    = createCheckbox("Show fell", true);
    showMass    = createCheckbox("Display mass", true);
    showName    = createCheckbox("Display name", true);
    showClass   = createCheckbox("Display class", true);

    
    timelabel   = createSpan("Year 2020");
    timeSlider  = createSlider(1800, 2020, 2000);
    timeSlider.style("width", "250px");
    
    //event
    showFound.changed(draw); //dès que la checkbox change d'état on redessine
    showFell.changed(draw);
    showMass.changed(draw);
    showName.changed(draw);
    showClass.changed(draw);

    timeSlider.input(updateTimeLabel);
}

/**
 * Dessine (en boucle)
 */
function draw(){
    background(127); //dessine du fond. Couleur en RGB (127, 127, 127) → RGB va de 0 à 255

    image(worldmap, 0, 0, width, height); //affiche l'image sur le canvas. Params : image à afficher, x, y, largeur, hauteur

    //on boucle pour chaque donnée. On lit chacune des lignes du CVS
    noStroke();//pas de contour aux dessins
    for(var row=0; row<data.getRowCount(); row++){
        var name        = data.getString(row, 0); //récupère la donnée à la ligne 'row', à la colonne 0
        var mclass      = data.getString(row, 1); //récupère la donnée à la ligne 'row', à la colonne 0
        var year        = Number(data.getString(row, 5)); //récupère la donnée à la ligne 'row', à la colonne 5
        var mass_g      = Number(data.getString(row, 2)) / 1000.0; //récupère la donnée à la ligne 'row', à la colonne 2
        var isFalled    = data.getString(row, 3); //récupère la donnée à la ligne 'row', à la colonne 3
        var lat         = Number(data.getString(row, 6)); //récupère la donnée à la ligne 'row', à la colonne 6. On converti en nombre
        var long        = Number(data.getString(row, 7)); //récupère la donnée à la ligne 'row', à la colonne 7. On converti en nombre

        if(lat != undefined && long != undefined && year == timeSlider.value()){
            var x           = map(long, -180, 180, 0, width); //remap les valeur en angle en position de 0 à width
            var y           = map(lat, 90, -90, 0, height); //remap les valeur en angle en position de 0 à height
            
            //air d'un cercle = PI * r * r
            var r   = sqrt(mass_g) / PI; //calcul du rayon à partir de l'aire (mass en KG)
            r       = constrain(r, 4, height/4);

            var mlabel = "";
            if(showName.checked()){
                mlabel += name+", ";
            }
            if(showClass.checked()){
                mlabel += mclass+", ";
            }
            if(showMass.checked()){
                mlabel += nf(mass_g, 3, 3)+"kg";
            }

            /**
             * Si le meteor est tombé on le dessine en rouge, sinon en gris
             */
            if(isFalled == "Fell" && showFell.checked()){
                fill(255, 127, 127, 100)
                ellipse(x, y, r * 2, r * 2); //dessiner l'ellipse
                
                fill(0);
                text(mlabel, x + r + 5, y);
            }
            
            if(isFalled == "Found" && showFound.checked()){
                fill(150, 100);
                ellipse(x, y, r * 2, r * 2); //dessiner l'ellipse
                
                fill(0);
                text(mlabel, x + r + 5, y);
            }

        }
        
    }

    noLoop();//on ne dessine qu'une frame. Soit 1 fois
}

function updateTimeLabel(){
    timelabel.html("Year "+timeSlider.value()+" ");
    draw();
}