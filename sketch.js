var star , starImg , starBody;
var fairy , fairyImg;
var bg , bgImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadImage("images/fairyImage1.png");
	bgImg = loadImage("images/starNight.png");
	

}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	fairy = createSprite(300, 490);
	fairy.addImage(fairyImg);  
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	starBody = Bodies.circle(650,30,5,{restitution:0,isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {

	Engine.update(engine)

  background(bgImg);
  

  if(star.y>470){
	star.velocityY=0
}
if(keyDown(RIGHT_ARROW)){
	fairy.x = fairy.x + 12
  }
if(keyDown(LEFT_ARROW)){
	fairy.x = fairy.x - 12
}
if(keyDown(DOWN_ARROW)){
	star.velocityY = 4
}


  drawSprites();
}
	

	
	



