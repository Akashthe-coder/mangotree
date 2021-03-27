
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750,680,1500,35);
	tree= new Tree(1300,447,70,430)
	stone= new Stone(400,400,20,20)
	boy= new Boy(350,590,35,145)
	mango1= new Mango(1225,340,40,40)
	mango2= new Mango(1225,260,40,40)
	mango3= new Mango(1225,180,40,40)
	mango4= new Mango(1305,180,40,40)
	mango5= new Mango(1385,180,40,40)
	mango6= new Mango(1385,260,40,40)
	mango7= new Mango(1385,340,40,40)
	mango8= new Mango(1305,260,40,40)
	mango9= new Mango(1305,340,40,40)
	band= new Band(stone.body,{x:350,y:530});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(224,199,199);
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  ground.display();
  tree.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  band.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    band.fly();
}

function keyPressed() {
	if(keyCode===32)
    Matter.Body.setPosition(stone.body,{x:400, y:400})
	band.attach(stone.body)
}

function detectollision(stone,mango) {
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r) {
Matter.Body.setStatic(mango.body,false);
}
}






