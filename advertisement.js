// Variables for the products name and slogan coordinates
var productName = "Coca Cola";
var sloganX = 10;
var sloganY = 85;

// the coke bottles x position
var cokeMove = -355;

// function for the slogan text to be called for re-draw
var sloganText = function(){

    // Display the products name
    fill(255, 0, 0);
    textSize(30);
    text(productName, 130, 40);

    // Draw the products slogan with "Coke" in big red letters
    fill(0, 0, 0);
    textSize(20);
    text("Share a ", sloganX, sloganY);
    textSize(25);
    fill(255, 0, 0);
    text("Coke", sloganX + 75, sloganY);
    fill(0, 0, 0);
    textSize(20);
    text(" with a friend!", sloganX + 135, sloganY);
};

var drawBottle = function(bottleX, bottleY, name){
    noStroke();

    // Create a red rectangle for the wide part of the bottle
    // The rectangle is also curved at the corners
    fill(255, 0, 0);
    rect(bottleX, bottleY, 100, 200, 50);

    // Add white ellipses to "delete"
    // parts of the bottom of the bottle
    // This gives it the curved look
    fill(255, 255, 255);
    ellipse(bottleX - 75, bottleY + 100, 160, 150);
    ellipse(bottleX + 175, bottleY + 100, 160, 150);

    // Add the "share with" name on the bottle
    var cursive = createFont("Lucida calligraphy", 25);
    textFont(cursive);
    text(name, bottleX + 10, bottleY + 50);

    // Add the top of the bottle
    fill(255, 0, 0);
    rect(bottleX, bottleY - 60, 100, 80, 5);

    // Add white ellipses to curve the top of the bottle
    fill(255, 255, 255);
    ellipse(bottleX - 90, bottleY - 30, 225, 150);
    ellipse(bottleX + 190, bottleY - 30, 225, 150);
    rect(bottleX + 78, bottleY - 62, 14, 35);
    rect(bottleX + 8, bottleY - 62, 14, 35);

    // Add bottle cap
    fill(255, 0, 0);
    rect(bottleX + 15, bottleY - 95, 70, 35, 8);

    // Add the angles to the bottle cap with white spaces
    fill(255, 255, 255);
    triangle(bottleX + 22, bottleY - 80, bottleX + 10, bottleY - 50             , bottleX + 10, bottleY - 90);
    triangle(bottleX + 76, bottleY - 80, bottleX + 100, bottleY -              35, bottleX + 100, bottleY - 90);

    // Add slogan beside the bottle
    var normalFont = createFont("times");
    textFont (normal);
    textSize(30);
    fill(255, 0, 0);
    text("open happiness", bottleX + 108, bottleY + 50);
    textSize(8);
    text("TM", bottleX + 320, bottleY + 35);

};

// repeatedly draw the screen to animate the bottle into view
draw = function() {

    // Redraw the background and slogan text
    background(255, 255, 255);
    sloganText();

    // draw the bottle with the draw x position from last loop
    drawBottle(cokeMove, 200, "Mark");

    // if the bottle is not at the right position on screen
    if (cokeMove < 40){
        // increase the bottle x to move to further
        cokeMove += 2;
    }

};
