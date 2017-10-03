// Two objects! {!2}
let myCar1;
let myCar2;

function setup() {
  size(200, 200);
  // Arguments go inside the parentheses when the object is constructed. {!2}
  myCar1 = new Car(color(255, 0, 0), 0, 100, 2);
  myCar2 = new Car(color(0, 0, 255), 0, 10, 1);
}


function draw() {
  background(255);
  // Even though there are multiple objects, you still only need one class.
  // No matter how many cookies you make, only one cookie cutter is needed.
  // Isn’t object-oriented programming swell? {!4}
  myCar1.move();
  myCar1.display();
  myCar2.move();
  myCar2.display();
}


class Car {
  // The constructor is defined with parameters. {!1}
  constructor(c, xpos, ypos, xspeed) {
    this.c = c;
    this.xpos = xpos;
    this.ypos = ypos;
    this.xspeed = speed;
  }

  display() {
    stroke(0);
    fill(c);
    rectMode(CENTER);
    rect(xpos, ypos, 20, 10);
  }

  move() {
    xpos = xpos + xspeed;
    if (xpos > width) {
      xpos = 0;
    }
  }

}
