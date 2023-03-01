// You can start from this outline to write your "Hungry Bird" game
// where objects drop and you try to catch them.
function setup() {
  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.
   finchHeight = 50;
  finchWidth = 50;
  // ADD CHANGING VARIABLES
   finchX = 50;
  finchY = 350;
  // Set an initial value for variables here that may change later.
  // Eg, "birdX = 0" could start the catcher at the canvas' left edge.
  // "seedIsFalling = false" could ensure it doesn't fall until triggered.
 
  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
}

function draw() {
  // BACKGROUND
  // Draw the background color and any other shapes that don't change.
  background("skyblue");
  noStroke();
  fill("lightgrey");
  rect (0,350,400,200);
  // ADD CATCHER
  // Add your catcher by calling its function with appropriate parameters.
   addFinch(mouseX, finchY);
  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
  
}

// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.
function addFinch(x, y) {
  push();
  translate(x, y); // Move the bird to the position requested.
  // Draw the wings.
  noStroke()
  fill("steelblue");
  ellipse(45, -20,25, 20); // Right eye
  ellipse(5, -20,25, 20); // Right eye
  // Draw the egs.
  strokeWeight(3);
  stroke("gold")
  line(18, 0, 18, 8); // Left leg
  line(30, 0, 30, 8); // Right leg
  // Draw the feet.
  fill("gold");
  noStroke();
  triangle(12, 10, 18, 4, 24, 10); 
  triangle(15, 8, 18, 14, 21, 8);
  triangle(24, 10, 30, 4, 36, 10);
  triangle(27, 8, 30, 14, 33, 8); 
  // Draw the body.
  stroke("steelblue");
  strokeWeight(36);
  line(24, -15, 24, -30); // Body (made from a very thick line!)
  // Draw the face.
  noStroke();
  fill("white");
  ellipse(15, -31, 18, 18); // Left eye dome
  ellipse(33, -31, 18, 18); // Right eye dome
  ellipse(24, -11, 18, 18);
  arc(24, -31, 36, 36, 0, 180); // Chin
  // Draw the eyes.
  fill("black");
  ellipse(14, -31, 4, 7); // Left eye
  ellipse(34, -31, 4, 7); // Right eye
   fill("pink");
    ellipse(14, -25, 4, 4); 
  ellipse(34, -25, 4, 4); 
  // Draw the beak.
  fill("gold");
  triangle(24, -40, 27, -28, 21, -28);
  fill("orange");
  triangle(24, -18, 27, -28, 21, -28);
  pop();
}
