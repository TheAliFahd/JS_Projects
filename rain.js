// Initialize the arrays

function setup(){
    createCanvas(400, 400)
}

// hold x positions
var xPositions = [];
//hold y positions
var yPositions = [];
// Hold a number to relate to what image is displayed
var whichItem = [];
// Hold the colour of the rain
var rainColours = [];

// Store the first three variables in the array at random

// for x positions
for (var i = 0; i < 3; i ++){
    xPositions[i] = random(400);
}

// for y positions
for (var i = 0; i < 3; i++) {
    yPositions[i] = random(400);
}

// for which image
for (var i = 0; i < 3; i ++) {
    whichItem[i] =  floor(random(3));
}

// for rain colour
for (var i = 0; i < 3; i ++) {
    rainColours[i] = color(random(255), random(255), random(255));
}

// store the bug and rock images in variables
var bug = getImage("cute/EnemyBug");
var rock = getImage("cute/Rock");

// draw function to draw moving items
draw = function() {
    // re-draw backgroup
    background(204, 247, 255);

    // loop through all the current items to be dropped
    for (var i = 0; i < xPositions.length; i++) {

        // no don't want the rain to have a stoke
        noStroke();
        // fill with the current colour
        fill(rainColours[i]);

        // varies drawing based on whichItem array

        // if we are drawing rain the draw the rain at the new y position
        if (whichItem[i] === 0){
            ellipse(xPositions[i], yPositions[i], 10, 10);
        }
        // if we are drawing the bug then draw the bug at the new y position
        else if (whichItem[i] === 1){
            image(bug, xPositions[i], yPositions[i], 30, 50);
        }
        // if we are drawing the rock then draw the rock at the new y position
        else if (whichItem[i] === 2){
            image(rock, xPositions[i], yPositions[i], 30, 50);
        }
        // Move the item down 1
        yPositions[i] += 5;
        // if we reach the bottom then reset the item at the top
        if (yPositions[i] > 400){
            yPositions[i] = 0;
        }
    }
};

// This function is called when the mouse is clicked
mouseClicked = function(){
    // Add a new instance to each array with a random value
    xPositions.push(random(400));
    yPositions.push(0);
    rainColours.push(color(random(255), random(255), random(255)));
    whichItem.push(floor(random(3)));
};
