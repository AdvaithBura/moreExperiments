var r1;
var box;
function setup() {
  createCanvas(800,400);
  r1 = createSprite(250, 200, 50, 50);

  box = createSprite(600,250,100,100);

  r1.shapeColor="white"
  box.shapeColor="red"

  box2 = createSprite(250, 100, 50, 50);

  box3 = createSprite(600,100,100,100);

  box3.velocityX = -3;
  box2.velocityX = 3;


  v1 = createSprite(500, 100, 50, 50);

  v2 = createSprite(500,350,100,100);

  v1.velocityY = 3;
  v2.velocityY = -3;
  RE = createSprite(801,200,2,400);
  LE = createSprite(0,200, 10, 400);
  UE = createSprite(400,-1,800,2);
  DE = createSprite(400,401,800,2);
  LE.shapeColor = "yellow";
  LE.visible=false;

}

function draw() {
  background("black"); 
  box.x = mouseX;
  box.y = mouseY;
  // algorithm
  
  drawSprites();
  if (boxTouch(r1, box)){
    r1.shapeColor="yellow";
    box.height = 200;
  }
  else{
    r1.shapeColor="white"
    box.shapeColor="red"
    box.height = 100;
  }
  boxBounceOff(box2, box3);
  boxBounceOff(v1, v2);
  boxBounceOff(box2, LE);
  boxBounceOff(box3, RE);
  boxBounceOff(v1, UE);
  boxBounceOff(v2, DE);
  

}

