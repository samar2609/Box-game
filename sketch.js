
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	

 var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
 }

 ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = new Ground(100,100,100,100)
  leftSide = new Ground(100,100,100,100)
 rightSide = new Ground(100,100,100,100)
}


function draw() {
ground.show
leftSide.show
rightSide.show

  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
	Engine.run(engine);


  drawSprites();
}

function keyPressed(){
	if(keycode === up_Arrow){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
	}
}










// Can you tell me whats wrong because it does not work. 