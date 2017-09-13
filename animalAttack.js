// Face variables
// faceX, faceY and faceW will alter all other position variables
var faceX = 200;
var faceY = 230;
var faceW = 330;
var faceH = faceW * (2 / 3);

// Ear variables dependent on face variables
var earWidth = faceW / (330/85);
var earHeight = faceH / (220/85);
var earBaseY = faceY - 80;
var earTopY = earBaseY - earHeight;
var earX1 = faceX - 15;
var earX2 = earX1 - earWidth;
var earX3 = earX1 - (earWidth / 2);

// Eye variables dependent on face variables
var eyeX = faceX - 60;
var eyeY = faceY - 50;
var eyeWidthHeight = faceW - 280;

// Mouth variables
var mouthX = faceX;
var mouthY = faceY + 20;
var mouthW = faceW - 130;
var mouthH = faceH - 140;

draw = function() {
    strokeWeight(1);
    background(207, 254, 255);
    
    // Draw the left ear
    stroke(255, 191, 0);
    strokeWeight(10);
    fill(196, 161, 188);
    triangle(earX1, earBaseY, earX2, earBaseY, earX3, earTopY);
    
    // Draw the right ear
    stroke(255, 191, 0);
    strokeWeight(10);
    fill(196, 161, 188);
    triangle(earX1 + 20, earBaseY, earX1 + 20 + earWidth, earBaseY, earX1 + 20 + (earWidth /                 2), earTopY);


    // Draw the Face
    strokeWeight(1);
    fill(255, 191, 0);
    ellipse(faceX, faceY, faceW, faceH);
    
    // Draw the eyes
    // Right eye
    noStroke();
    fill(255, 255, 255);
    ellipse(eyeX, eyeY, eyeWidthHeight, eyeWidthHeight);
    fill(0, 0, 0);
    ellipse(eyeX, eyeY, eyeWidthHeight - 25, eyeWidthHeight - 25);
    
    // Left eye
    fill(255, 255, 255);
    ellipse(eyeX + 100, eyeY, eyeWidthHeight, eyeWidthHeight);
    fill(0, 0, 0);
    ellipse(eyeX + 100, eyeY, eyeWidthHeight - 25, eyeWidthHeight - 25);
    
    // Mouth
    arc(mouthX, mouthY, mouthW, mouthH, -15, 195);
    
    // Make the eyes bigger
    eyeWidthHeight ++;
};
