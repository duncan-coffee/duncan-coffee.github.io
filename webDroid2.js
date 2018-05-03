
function setup() {
  createCanvas(720, 400);
  background(0);
  noStroke(); 
}

var pos = 10; 
var rotateVar = 0;
var rotateTemp = 3.14; 
var fillVar = .1; 

function draw() {
  
  translate(width / 2, height / 2);
  
  rotate(rotateVar); 
  rotateVar = rotateVar + rotateTemp;
  
  fillVar += .01;
  fill(abs(sin(fillVar/5))*250,
       abs(sin(fillVar/2))*250,
       abs(sin(fillVar/3))*250);
       
   pos = pos + .1; 

  ellipse(pos,pos,pos,pos);
  
}
