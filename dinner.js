background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 

// Functions to organize each food
// on the plate into blocks of code

// Grapes function
var grapes = function(){
    
    // Reset the stoke
    strokeWeight(1);
    
    // Set colour to purple
    fill(176, 42, 176);
    
    // Draw the individual grapes
    ellipse(296, 100, 30, 30);
    ellipse(280, 143, 30, 30);
    ellipse(273, 123, 30, 30);
    ellipse(297, 123, 30, 30);
    ellipse(282, 103, 30, 30);
    ellipse(275, 83, 30, 30);
    ellipse(257, 100, 30, 30);
    ellipse(252, 123, 30, 30);
    ellipse(256, 144, 30, 30);
};

// Steak function
var steak = function(){
    
    // Set outline to black
    stroke(0, 0, 0);
    // Increase stroke size
    strokeWeight(89);
    // Adds an outline to the steak
    line(189, 95, 94, 212);
    
    // Make the brown steak
    stroke(139, 69, 19);
    strokeWeight(86);
    line(189, 95, 94, 212);
    
    // Add the grill marks to the steak
    stroke(43, 38, 38);
    strokeWeight(10);
    line(212, 129, 150, 84);
    line(193, 152, 138, 99);
    line(174, 174, 118, 122);
    line(152, 205, 100, 146);
    line(137, 224, 80, 162);
};

// Create the carrot function
var carrot = function(){
    
    // We dont want an outline on the carrot
    noStroke();
    // Draw the orange carrot
    fill(255, 128, 0);
    ellipse(301, 205, 50, 50);
    ellipse(277, 228, 45, 45);
    ellipse(253, 249, 40, 40);
    ellipse(229, 266, 35, 35);
    
    // Add the green leaves
    strokeWeight(5);
    stroke(76, 189, 42);
    line(312, 185, 326, 167);
    line(311, 185, 336, 178);
    line(312, 185, 310, 167);
    strokeWeight(1);
    stroke(0, 0, 0);
};

var bread = function(){
    noStroke();
    fill(173, 157, 86);
    triangle(202, 306, 111, 307, 149, 248);
};

// Main function to call the food drawing functions
var main = function(){
    
    steak();
    
    grapes();
    
    carrot();
    
    bread();
};

main();
