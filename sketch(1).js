let cloudX = 100;
let cloudY = 100;
function setup() {
  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.
   finchHeight = 50;
  finchWidth = 50;
   finchX = 50;
  finchY = 350;
  // Set an initial value for variables here that may change later.
  // Eg, "birdX = 0" could start the catcher at the canvas' left edge.
  // "seedIsFalling = false" could ensure it doesn't fall until triggered.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
}

function draw() {
  // BACKGROUND
  // Draw the background color and any other shapes that don't change.
  background("skyblue");
  noStroke();
      addCloud(cloudX, cloudY-50);
      addCloud(cloudX + 100, cloudY + 100);
      addCloud(cloudX + 200, cloudY + 10);
       addCloud(cloudX + -150, cloudY +10);
      cloudX+=0.1;
        fill("lightgrey");
        rect (0,350,400,200);
addFinch(mouseX, finchY);
    if (mouseIsPressed) {
        console.log('positive');
         addFinchIsPressed (mouseX,finchY);
    } else {
          console.log('negative');
    }
  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
  
}
function addFinch(x, y) {
  push();
  translate(x, y);
  noStroke()
  fill("steelblue");
  ellipse(45, -20,25, 25); 
  ellipse(5, -20,25, 25); 
  strokeWeight(3);
  stroke("gold")
  line(18, 0, 18, 8); 
  line(30, 0, 30, 8); 
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
  ellipse(24, -14, 24, 20);
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
function addFinchIsPressed (x,y){
  push();
  translate(x,y);
  noStroke();
  fill("steelblue");
  ellipse(45, -20,25, 30);
  ellipse(5, -20,25, 30); 
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
  ellipse(24, -14, 24, 24);
  ellipse(24, -31, 38, 38);
  arc(24, -31, 36, 36, 0, 180); // Chin
  // Draw the beak.
  fill("gold");
  triangle(24, -62, 27, -50, 21, -50);
  fill("orange");
  triangle(24, -38, 27, -50, 21, -50);
  pop();
}
function addCloud(cloudX, cloudY) {
  fill(250)
  noStroke();
  ellipse(cloudX, cloudY, 70, 50);
  ellipse(cloudX + 10, cloudY + 10, 70, 50);
  ellipse(cloudX - 20, cloudY + 10, 70, 50);
}