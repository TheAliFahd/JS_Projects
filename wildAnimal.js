// Used to animate
var y = 110;
var direction = false;


var drawSnowMan = function(){
    background(255, 0, 255);
    
    // Make background white
    fill(255, 255, 255);
    
    // Draw the bottom and middle part of the snowman
    
    ellipse(200 + (y - 100), 270, 170, 170);
    ellipse(200, 180, 130, 120);

    //Buttons
    fill(0, 0, 0);
    ellipse(200, 160, 10, 10);
    ellipse(200, 190, 10, 10);
    ellipse(200, 220, 10, 10);
};

// Draws the face of the snowman according to global variables
// Draws arms as well

var drawFace = function(){
    drawSnowMan();
    //Draw the head
    fill(255, 255, 255);
    ellipse(200, y, 70, 65);

    //Eyes
    fill(0, 0, 0);
    ellipse(185, y - 10, 10 + (y - 100), 10);
    ellipse(210, y - 10, 10 + (y - 100), 10);

    fill(255, 94, 0);
    triangle(200, y, 200, y + 10, 178 + (y - 100), y + 5);
    
    // Arms
    
    // left arm
    fill(105, 76, 59);
    rotate(-5);
    rect(240, 180, 92, 10 - (y - 100));
    
    // right arm
    rotate(10);
    rect(66, 145, 92, 10 - (y - 100));
    
    //Reset the rotation
    rotate(-5);
    
    // If the current direction is up (true)
    // take 1 away from the animation variable
   
    if (direction){
        y --;
    }
    
    // else we are animating down
    else{
        y ++;
    }
    
    // change animation direction variable based on a y stopping point
    if (y  ===  115){
        direction = true;
    }
    else if (y === 100){
        direction = false;
    }
};

// Continuously call the drawFace function
draw = function() {
    drawFace();
};


