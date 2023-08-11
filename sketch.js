function setup() {
  
 
  createCanvas(600, 600);
   background("pink");
}

function draw() {
  
  fill("white");
  stroke("black");
  
  if(mouseIsPressed) {
    rect(mouseX,mouseY,30,30);
  }
  
}