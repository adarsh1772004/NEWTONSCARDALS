
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground
var roof
var ball1,ball2,ball3,ball4
var connection1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400, 670, 800, 15)
	roof=new box(400, 90, 200, 15)
	ball1=new Ball(250, 300, 50)
	ball2=new Ball(300,  300, 50)
	ball3=new Ball(350, 300, 50)
	ball4=new Ball(400, 300, 50)
	connection1=new Connection(ball1.body,roof.body)
	connection2=new Connection(ball2.body,roof.body)
	connection3=new Connection(ball3.body,roof.body)
	connection4=new Connection(ball4.body,roof.body)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  roof.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  connection1.display()
 
}



