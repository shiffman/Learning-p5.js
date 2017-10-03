// Zoog is an object! {!1}
let zoog;

function setup() {
  createCanvas(200, 200);
  // Zoog is given initial properties via the constructor. {!1}
  zoog = new Zoog(100, 125, 60, 60, 16);
}


function draw() {
  background(255);
  // mouseX position determines speed factor {!1}
  let factor = constrain(mouseX / 10, 0, 5);
  // Zoog can do stuff with functions! {!2}
  zoog.jiggle(factor);
  zoog.display();
}


// Everything about Zoog is contained in this one class. Zoog has properties
// (location, width, height, eye size) and Zoog has abilities (jiggle, display).
// {!1}
class Zoog {

  // Zoog constructor {!1}
  constructor(x, y, w, h, eyeSize) {
    // Zoog's variables {!5}
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.eyeSize = eyeSize;
  }

  // Move Zoog {!1}
  jiggle(speed) {
    // Change the location of Zoog randomly {!2}
    x = x + random(-1, 1)*speed;
    y = y + random(-1, 1)*speed;

    // Constrain Zoog to window {!2}
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }

  // Display Zoog {!1}
  display() {
    // Set ellipses and rects to CENTER mode {!2}
    ellipseMode(CENTER);
    rectMode(CENTER);

    // Draw Zoog's arms with a for loop {!4}
    for (let i = y - h/3; i &lt; y + h/2; i += 10) {
      stroke(0);
      line(x - w/4, i, x + w/4, i);
    }

    // Draw Zoog's body {!3}
    stroke(0);
    fill(175);
    rect(x, y, w/6, h);

    // Draw Zoog's head {!3}
    stroke(0);
    fill(255);
    ellipse(x, y - h, w, h);

    // Draw Zoog's eyes {!3}
    fill(0);
    ellipse(x - w/3, y - h, eyeSize, eyeSize*2);
    ellipse(x + w/3, y - h, eyeSize, eyeSize*2);

    // Draw Zoog's legs {!3}
    stroke(0);
    line(x - w/12, y + h/2, x - w/4, y + h/2 + 10);
    line(x + w/12, y + h/2, x + w/4, y + h/2 + 10);
  }
}
