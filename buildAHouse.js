background(219, 255, 255);

// Draw original house (expect for the house which needs to be layered at the end
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 210);


// save the grass block image in variable grass
var grass = getImage("cute/GrassBlock");

// Draw a new block every 100 x until end of screen(400) is reached
for (var x =0; x < 400; x += 100) {
    image(grass, x, 311);
}

// save the wood block image in variable wood
var wood = getImage("cute/WoodBlock");
// save the stone block image in variable stone
var stone = getImage("cute/StoneBlock");

// Draw a block every row (with 30 height in mind)
// stop at bottom of house
for(var y = 142; y < 335; y += 21) {
    // for every row, draw a block every column in the house range 
    for (var x = 61; x < 337; x += 5){
        // Switch between wood and stone blocks using % operator to distinguish even and odd loops
        if (x % 2 > 0){
            // draw wood
            image(wood, x, y, 5, 30);
        }
        else {
            //draw stone
            image(stone, x, y, 5, 30);
        }
    }
}

// Draw the door
fill(120, 80, 19);
rect(180, 282, 40, 77);

// save the window image in variable window
var window = getImage("cute/WindowTall");

// Draw two rows of windows
for(var y = 160; y < 220; y += 59){
    // for each row draw three windows
    for(var x = 80; x < 277; x += 98){
        image(window, x, y, 44, 55);
    }
}

