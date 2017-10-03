// Variable to hold the object. {!1}
let myCar;

function setup() {
  myCar = new Car();
}

function draw() {
  background(255);
  myCar.move();
  myCar.display();
}
