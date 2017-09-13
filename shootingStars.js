// Star position variables
var xPos = 75;
var yPos = 340;

// Round star position variable
var xPos2 = 75;
var yPos2 = 340;

// Functions to draw different elements

// Draw the back drop
var backDrop = function(){
    
    // Add the green hill
    fill(21, 255, 0);
    ellipse(200, 392, 410, 101);
    
    // Draw Yellow Stars in the sky
    fill(203, 209, 20);
    ellipse(27, 20, 10, 10);
    ellipse(122, 77, 10, 10);
    ellipse(95, 29, 10, 10);
    ellipse(214, 11, 10, 10);
    ellipse(158, 57, 10, 10);
    ellipse(277, 20, 10, 10);
    ellipse(243, 86, 10, 10);
    ellipse(48, 65, 10, 10);
    ellipse(326, 50, 10, 10);
    ellipse(362, 93, 10, 10);
};

// Draw the star
var star = function(){
    noStroke();
    
    // Right Side
    triangle(xPos, yPos - 3, xPos, yPos + 3, xPos + 10, yPos); 
    
    // Left Side
    triangle(xPos, yPos - 3, xPos, yPos + 3, xPos - 10, yPos); 

    // Top Side
    triangle(xPos - 3, yPos, xPos + 3, yPos, xPos, yPos - 10);
    
    // Bottom Side
    triangle(xPos - 3, yPos, xPos + 3, yPos, xPos, yPos + 10);
};

// Draw the cannon
var cannon = function(){
    
    //Draw the cannon facing up
    rotate(-30);
    fill(0, 0, 0);
    rect(-168, 320, 66, 28, 45);

    rotate(30); //reset the rotate
    
    //Draw the legs
    rect(24, 371, 15, 18);
    rect(55, 363, 12, 27);
};

// Animate function
draw = function() {
    // Re-Draw the background back drop and cannon
    background(29, 40, 115);
    backDrop();
    
    // Draw the star and round star in yellow
    fill(255, 242, 0);
    star();
    ellipse(xPos2, yPos2, 10, 10);
    
    // Draw the cannon
    cannon();
    
    // Increase the position variables of the two stars
    xPos += 3;
    yPos -= 2;
    
    xPos2 += 2;
    yPos2 -= 3;
};



