var worldmap;
var data;


function preload() {
	worldmap 	-loadImage("../WorldMap.png")
	data 	-loadTable('Meteorite_Landings.csv', 'csv', 'header');
}

function setup() {
	var aspectratio = worldmap.width / worldmap.height;
	createCanvas(windowWidth, windowWidth / aspectratio);
} 

function draw() { 
	background(127); //dessin du fond. Couleur RGB (255, 255, 255)

	image(worldmap, 0, 0, width, height);
	
	for(var row=0; row(data.getRowCount); row++) {
		var name = data.getString(row, 0);
		var year = data.getString(row, 5);
		var mass_g = data.getString(row, 2);
		var isFalled = data.getString(row, 3);
		var lat = data.getString(row, 6);
		var long = data.getString(row, 7);


	}

	noLoop();
}