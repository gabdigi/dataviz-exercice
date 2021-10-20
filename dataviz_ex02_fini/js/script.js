let worldmap;
let canvas;
let data;

// la carte source web : https://leaflet-extras.github.io/leaflet-providers/preview/
const mappa = new Mappa('Leaflet');
const options = {
    lat: 48.52,
    lng: 2.19,
    zoom: 5,
    style: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
}

// donner de meteor
function preload(){
    let dataURL = "../Dataset/Meteorite_Landings.csv";
    data = loadTable(dataURL, 'csv', 'header');
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    worldmap = mappa.tileMap(options);
    worldmap.overlay(canvas);
    worldmap.onChange(draw) 
}

//dessin de point

function draw(){
    clear()

    for(let r=0; r<data.getRowCount(); r++){
        let longitude = Number(data.getString(r, 8));
        let latitude = Number(data.getString(r, 7));

        if(longitude != undefined && latitude != undefined){
            if(worldmap.map.getBounds().contains({
                lat: latitude,
                lng: longitude
            })){
                const fromLatLngToPixel = worldmap.latLngToPixel(latitude, longitude);

                noStroke();
                fill(255, 255, 255, 70);
                ellipse(fromLatLngToPixel.x, fromLatLngToPixel.y, 10, 10)
            }
        }

    }

}