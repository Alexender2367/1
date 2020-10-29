var car,ball;
var sound,weight;
function setup() {
  createCanvas(800,400);
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  car= createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}