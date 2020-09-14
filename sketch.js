
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
var canvas = createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	crumbledPaper = new Paper();

	rect1=createSprite(300, 630,200,20);
	rect1.shapeColor= "red"
	rect2=createSprite(390,580,20,100);
	rect2.shapeColor= "red"
	rect3=createSprite(210,580,20,100);
	rect3.shapeColor= "red"

	//Creating a box
	rect1 = Bodies.rectangle(300, 600, 200, 20, {isStatic:true});
	World.add(world, rect1);
	rect2 = Bodies.rectangle(600, 350, 20, 100, {isStatic:true});
	World.add(world, rect2);
	rect3 = Bodies.rectangle(600, 200, 20, 100, {isStatic:true});
	World.add(world, rect3);


	Engine.run(engine);

  
}


function draw() {
	rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  
  drawSprites();
 
}



