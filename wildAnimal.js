var y = 110;
var direction = false;


var drawSnowMan = function(){
    background(255, 0, 255);
    
    fill(255, 255, 255);
    
    //Draw the three body parts
    
    ellipse(200 + (y - 100), 270, 170, 170);
    ellipse(200, 180, 130, 120);
    
    //Draw the features
    
    //Buttons
    fill(0, 0, 0);
    ellipse(200, 160, 10, 10);
    ellipse(200, 190, 10, 10);
    ellipse(200, 220, 10, 10);
};

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
    
    //Arms
    fill(105, 76, 59);
    rotate(-5);
    rect(240, 180, 92, 10 - (y - 100));
    
    rotate(10);
    rect(66, 145, 92, 10 - (y - 100));
    
    //Reset the rotation
    rotate(-5);

    if (direction){
        y --;
    }
    else{
        y ++;
    }

    if (y  ===  115){
        direction = true;
    }
    else if (y === 100){
        direction = false;
    }
};



draw = function() {
    drawFace();
};


