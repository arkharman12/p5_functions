/*

    N220 Section 25750
    Harmanjot Singh
    Functions
    6 February 2020

*/

// object to store position values
const ellipsy = {
    positionX : 15,
    positionY : 50,
    radius : 30
};
// object to store speed values
const speed = {
    x : 5,
    y : 5
};
// object to store the rectangle values
const rectangle = {
    positionX : 400,
    positionY : 300,
    width : 150,
    height : 50
}

function setup() {
    createCanvas(800,600);
    // set ellipseMode to RADIUS
    ellipseMode(RADIUS);
    // set rectMode to RADIUS
    rectMode(RADIUS);
    ellipsy.positionX = width/4;
    ellipsy.positionY = height/4;
}

function draw() {
    // make the background black
    background(0);

    // keep adding speed to the current value of x position
    ellipsy.positionX += speed.x;
    // keep adding speed to the current value of y position
    ellipsy.positionY += speed.y;

    // set the coordinates and radius for the ellipse
    ellipse(ellipsy.positionX, ellipsy.positionY, ellipsy.radius, ellipsy.radius);
    // set the coordinates and width and height for the rectangle
    rect(rectangle.positionX, rectangle.positionY, rectangle.width, rectangle.height);

    // keep the ball bouncing from left and right side
    if (ellipsy.positionX > width - ellipsy.radius || ellipsy.positionX < ellipsy.radius) {
        // change the direction of the ball
        speed.x = -speed.x;
    }
    // keep the ball bouncing from top and bottom side
    if (ellipsy.positionY > height - ellipsy.radius || ellipsy.positionY < ellipsy.radius) {
        // change the direction of the ball
        speed.y = -speed.y;
    }

    // bounce off the ball from all sides of the rectangle
    if (ellipsy.positionY + ellipsy.radius > rectangle.positionY - rectangle.height && ellipsy.positionX > rectangle.positionX - rectangle.width && ellipsy.positionX < rectangle.positionX + rectangle.width){ 
        // top side
        speed.y = -speed.y; 
    }
    if (ellipsy.positionX - ellipsy.radius < rectangle.positionX + rectangle.width && ellipsy.positionY > rectangle.positionY - rectangle.height && ellipsy.positionY < rectangle.positionY + rectangle.height){ 
        // right side
        speed.x = -speed.x;      
    }
    if (ellipsy.positionY - ellipsy.radius > rectangle.positionY + rectangle.height && ellipsy.positionX > rectangle.positionX - rectangle.width && ellipsy.positionX < rectangle.positionX + rectangle.width){ 
        // bottom side
        speed.y = -speed.y;  
    }
    if (ellipsy.positionX + ellipsy.radius < rectangle.positionX - rectangle.width && ellipsy.positionY > rectangle.positionY - rectangle.height && ellipsy.positionY < rectangle.positionY + rectangle.height){ 
        // left side
        speed.x = -speed.x; 
    }

}
