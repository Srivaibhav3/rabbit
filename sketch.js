var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeleaf.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple=createSprite(random(0,400),(random(300,400)));
apple.addImage(appleImg);
apple.scale=0.06;

orange=createSprite(random(0,400),(random(0,50)));
orange.addImage(orangeImg);
orange.scale=0.06;
}


function draw(){
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
}
