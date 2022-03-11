var pc;
var pcIMG;
var goblin;
var goblinI;
var w1,w2,w3,w4;

function preload() {
  pcIMG = loadImage("BoyWithSword Last Project.png");
  goblinI = loadAnimation("Goblin.gif");
  
}

function setup() {
  createCanvas(800,600);
  goblin = createSprite(400, 400, 50, 50);
  goblin.addAnimation("simple",goblinI);
  goblin.scale = 0.4;
  goblin.setCollider("circle",0,90,120);
  goblin.debug = false




  pc = createSprite(400,255,25,25);
  pc.addImage(pcIMG); 
  pc.debug = true

  w1 = createSprite(0,400,20,800)
  w2 = createSprite(400,590,800,20)
  w3 = createSprite(790,400,20,800)
  w4 = createSprite(400,10,800,20)

  w1.shapeColor = "yellow";
  w2.shapeColor = "red";
  w3.shapeColor = "blue";
  w4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  drawSprites();

  if(keyDown(RIGHT_ARROW)){

    pc.x = pc.x + 3

  }

  if(keyDown(LEFT_ARROW)){

    pc.x = pc.x + -3

  }

  if(keyDown(UP_ARROW)){

    pc.y = pc.y + -3

  }

  if(keyDown(DOWN_ARROW)){

    pc.y = pc.y + 3

  }

  pc.bounceOff(w1);
  pc.bounceOff(w2);
  pc.bounceOff(w3);
  pc.bounceOff(w4);
  pc.bounceOff(goblin);


}

