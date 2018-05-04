
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  background(100,150,200);
  noStroke();

  // Move the canvas so it’s inside our <div id="sketch-holder">.


}

var pos = 10;
var rotateVar = 0;
var rotateTemp = 3.15;
var fillVar = .1;

function draw() {

  translate(width / 2, height / 2);

  rotate(rotateVar);
  rotateVar = rotateVar + rotateTemp;

  fillVar += .02;
  fill(abs(sin(fillVar/5))*250,
       abs(sin(fillVar/2))*250,
       abs(sin(fillVar/30))*250);

   pos = pos + .25;

  ellipse(pos,pos,pos,pos);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(20,10,50);
}
