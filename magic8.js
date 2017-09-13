// Draw black ball
fill(0, 0, 0);
ellipse(200, 200, 375, 375);

// function to draw the center triangle with a certain passed colour
var drawTriangle = function(triangleColor){
   
    // Draw the triangle with the passed colour
    fill(triangleColor);
    triangle(200, 104, 280, 280, 120, 280);
};

// Get a random number between 1 and 5 (1, 2, 3, 4)
var answer = floor(random(1, 5));

// If statements to switch program visuals based on answer

// if 1
if (answer === 1) {
    
    // Draw a red triangle with a specific message
    drawTriangle(color(255, 0, 0));
    fill(0, 0, 0);
    // write message
    textSize(20);
    text("Just Do It!", 155, 222);
}
// if 2
else if (answer === 2){
    
    // Draw a pink triangle with a specific message
    drawTriangle(color(255, 0, 213));
    fill(0, 0, 0);
    // write message
    textSize(20);
    text("Bad Idea", 162, 222);
}
// if 3
else if (answer === 3){
    
    // Draw a green triangle with a specific message
    drawTriangle(color(0, 255, 34));
    fill(0, 0, 0);
    // write message
    textSize(18);
    text("Follow Your", 152, 222);
    text("Dreams", 168, 240);
}
// if anything else (4)
else {
    
    // Draw a yellow triangle with a specific message
    drawTriangle(color(242, 255, 0));
    fill(0, 0, 0);
    // write message
    textSize(20);
    text("Ask Again", 155, 222);
    text("Later", 176, 240);
}

// When you click the mouse this function is called
// the function restarts the program
mouseClicked = function(){
    Program.restart();
};
