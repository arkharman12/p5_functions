/*

    N220 Section 25750
    Harmanjot Singh
    Functions
    6 February 2020

*/

// object to store radius for small circle 
const smallCircle = {
    radius : 30
}
// object to store radius for big circle 
const bigCircle = {
    radius : 55
}

function setup() {
    // create the canvas
    createCanvas(800, 600);
}

function draw() {
    // make the background black
    background(0);

    // set the coordinates and radius for the small circle
    ellipse(mouseX, mouseY, smallCircle.radius*2, smallCircle.radius*2);
  
    // set the coordinates and radius for the big circle
    noFill();
    stroke(255);
    ellipse(width/2, height/2, bigCircle.radius*2, bigCircle.radius*2);
    
    // change the color if both the circles overlap
    if (dist(mouseX, mouseY, width/2, height/2) < bigCircle.radius + smallCircle.radius){
        fill(255, 0, 0);    
    }
    else {
        fill(255, 255, 255); 
    }
    
}
