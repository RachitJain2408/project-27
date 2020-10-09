
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(450,600,30);
	bobObject2 = new Bob(390,600,30);
	bobObject3 = new Bob(510,600,30);
	bobObject4 = new Bob(330,600,30);
	bobObject5 = new Bob(570,600,30);
	
	roof = new Roof(330);
	console.log(bobObject1.radius);
	rope1 = new Rope(bobObject1.body,roof.body,-bobObject1.radius*2 , 0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobObject2.radius*2 , 0);
	rope3 = new Rope(bobObject3.body,roof.body,-bobObject3.radius*2 , 0);
	rope4 = new Rope(bobObject4.body,roof.body,-bobObject4.radius*2 , 0);
	rope5 = new Rope(bobObject5.body,roof.body,-bobObject5.radius*2 , 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
	
  bobObject1.display();	
  bobObject2.display();	
  bobObject3.display();	
  bobObject4.display();	
  bobObject5.display();	
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



