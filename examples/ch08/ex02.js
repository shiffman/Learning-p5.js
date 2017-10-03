// Step 1: Declare an object. {!1}
let myCar;

function setup() {
  // Step 2: Initialize object. {!1}
  myCar = new Car();
}

function draw() {
  background(255);
  // Step 3: Call methods on the object. {!1}
  myCar.move();
  myCar.display();
}
