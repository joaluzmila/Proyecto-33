var car, carImg, ball, ballImg, ballBody;
var backgroundImg, ganar, ganarImg;
var PLAY;
var END;
var gameState = PLAY; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
backgroundImg = loadImage("bg.jpg");
ganarImg = loadImage("you win.jpg");
carImg = loadImage("car.png");
ballImg = loadImage("ball.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  ganar = createSprite(940,470)
  ganar.addImage(ganarImg);
  ganar.visible = false;

  
  car = createSprite(width-250,750);
  car.addImage(carImg);
  car.scale = 0.8
  
  engine = Engine.create();
  world = engine.world;
  
  ball = createSprite(50,height-850);
  ball.addImage(ballImg);
  ball.scale = 0.05;
  ball.velocityY = 10; 

  ballBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	
  World.add(world, ballBody);
	
  Engine.run(engine);

}

function draw() {
  background(backgroundImg);
  
  if(gameState === PLAY){

	ball.x= ball.x+20
	ball.y= ballBody.position.y 
  
	console.log(ball.y);
  
	if(ball.y > 670 && ballBody.position.y > 670){
		Matter.Body.setStatic(ballBody,true);	
	}

	if(ball.isTouching(car)){
		ganar.visible = true;
	}
  
	if (keyDown("right")){
	  car.x = car.x + 20;
  }
  
  if (keyDown("left")){
	  car.x = car.x - 20;
  }
  
  if (keyDown("down")) {
	  Matter.Body.setStatic(ballBody,false);
	  }


  }

 

  drawSprites();
}
