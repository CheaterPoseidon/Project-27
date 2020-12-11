var bob1,bob2,bob3,bob4,bob5
var roof
var rope1,rope2,rope3,rope4,rope5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	Engine.update(engine)
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(150,300,30)
	bob2=new Bob(210,300,30)
	bob3=new Bob(270,300,30)
	bob4=new Bob(330,300,30)
	bob5=new Bob(390,300,30)
	roof=new Roof(270,100,240,20)
	rope1=new Rope(bob1.body,roof.body,bob1.diameter*2,0)
	rope2=new Rope(bob2.body,roof.body,bob2.diameter*2,0)
	rope3=new Rope(bob3.body,roof.body,bob3.diameter*2,0)
	rope4=new Rope(bob4.body,roof.body,bob4.diameter*2,0)
	rope5=new Rope(bob5.body,roof.body,bob5.diameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()

  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  if (keyIsDown(37)){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:5})
	console.log("works")
  }
  drawSprites();
 
}



