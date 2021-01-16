var fixedRect, movingRect;
var fixedRect1 , fixedRect2, fixedRect3 , fixedRect4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 fixedRect1 = createSprite(100 , 100 , 50 , 50)
 fixedRect2 = createSprite(200 , 100 , 50 , 50)
 fixedRect3 = createSprite(300 , 100 , 50 , 50)
 fixedRect4 = createSprite(400 , 100 , 50 , 50)
  
 fixedRect1.shapeColor = "green";
 fixedRect2.shapeColor = "green";
 fixedRect3.shapeColor = "green";
 fixedRect4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 

  if(isTouching(fixedRect2,movingRect)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
  }



  drawSprites();
}


