var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1050,400);
 wall =  createSprite(1050, 200, 20, 400);
 bullet = createSprite(50, 200, 50, 50);
 bullet.shapeColor='red';
 speed = random(220, 320);
 weight = random (30, 52);
 thickness =random (22, 83);
 bullet.velocityX= speed
}

function draw() {
  background(200);  
  if (hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor='red';
    }
    if (damage<10){
      wall.shapeColor='green';
    }
  }
  drawSprites();
}

 function hasCollided(b,w){
   br = b.x + b.width;
   wl = w.x;
   if (br>wl){
    return true;
   }
   return false;
 }