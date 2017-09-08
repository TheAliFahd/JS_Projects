fill(0, 0, 0);
ellipse(200, 200, 375, 375);

var drawTriangle = function(triangleColor){
    fill(triangleColor);
    triangle(200, 104, 280, 280, 120, 280);
};

var answer = floor(random(1, 5));

if (answer === 1) {
    drawTriangle(color(255, 0, 0));
    fill(0, 0, 0);
    textSize(20);
    text("Just Do It!", 155, 222);
}
else if (answer === 2){
    drawTriangle(color(255, 0, 213));
    fill(0, 0, 0);
    textSize(20);
    text("Bad Idea", 162, 222);
}
else if (answer === 3){
    drawTriangle(color(0, 255, 34));
    fill(0, 0, 0);
    textSize(18);
    text("Follow Your", 152, 222);
    text("Dreams", 168, 240);
}
else {
    drawTriangle(color(242, 255, 0));
    fill(0, 0, 0);
    textSize(20);
    text("Ask Again", 155, 222);
    text("Later", 176, 240);
}

mouseClicked = function(){
    Program.restart();
};
