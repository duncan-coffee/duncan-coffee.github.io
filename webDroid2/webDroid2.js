
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  noStroke();
  background(random(255), random(255),random(255));
}

var pos = 10;
var rotateVar = 0;
var rotateTemp = 3.15;
var fillVar = 0;
var fillTemp = .1;

function draw() {
  translate(width / 2, height / 2);
  rotate(rotateVar);
  rotateVar = rotateVar + rotateTemp;
  fillVar = fillVar + fillTemp;
  fill(abs(sin(fillVar/5))*250,
       abs(sin(fillVar/2))*250,
       abs(sin(fillVar/30))*250);
  pos = pos + .25;
  ellipse(pos,pos,pos,pos);
  fill(100);
  rect(windowWidth*.33,50);
  rect(windowWidth*.33,windowHeight-50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  randomBackground();
}

function randomBackground(){
  background(random(255), random(255),random(255));
}
