// Declare car object as a global variable. {!1}
let myCar;

function setup() {
  createCanvas(200, 200);
  // Initialize car object in setup() by calling constructor. {!1}
  myCar = new Car();
}

function draw() {
  background(255);
  // Operate the car object in draw() by calling object methods using the dots syntax. {!2}
  myCar.move();
  myCar.display();
}
// Define a class below the rest of the program. {!1}
class Car {
  // A constructor. {!1}
  constructor() {
    this.c = color(255);
    this.xpos = width/2; Variables.
    this.ypos = height/2;
    this.xspeed = 1;
  }
  // Function. {!1}
  display() {
    // The car is just a square {!3}
    rectMode(CENTER);
    fill(this.c);
    rect(this.xpos, this.ypos, 20, 10);
  }
  // Function. {!1}
  move() {
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > width) {
      this.xpos = 0;
    }
  }
}
