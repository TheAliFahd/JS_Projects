background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 210);


// Draw the grass
var grass = getImage("cute/GrassBlock");

for (var x =0; x < 400; x += 100) {
    image(grass, x, 311);
}

// Draw the bricks
var wood = getImage("cute/WoodBlock");
var stone = getImage("cute/StoneBlock");
for(var y = 142; y < 335; y += 21) {
    for (var x = 61; x < 337; x += 5){
        if (x % 2 > 0){
            image(wood, x, y, 5, 30);
        }
        else {
            image(stone, x, y, 5, 30);
        }
    }
}

// Draw the door
fill(120, 80, 19);
rect(180, 282, 40, 77);

var window = getImage("cute/WindowTall");
for(var y = 160; y < 220; y += 59){
    for(var x = 80; x < 277; x += 98){
        image(window, x, y, 44, 55);
    }
}

