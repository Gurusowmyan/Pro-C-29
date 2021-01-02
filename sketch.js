
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg , boy;
var stone , stoneImg;
var mango , mangoImg;
var mango1,mango2,mango3,mango4;
var tree ,treeImg;
var launcherObject , stoneObj;
var lmango,lstone;

function preload()
{
	boyImg =loadImage("Plucking mangoes/boy.png");
	stoneImg=loadImage("Plucking mangoes/stone.png");
	mangoImg =loadImage("Plucking mangoes/mango.png");
	treeImg =loadImage("Plucking mangoes/tree.png");
}

	function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,600,20,20);
	boy.addImage(boyImg);
	boy.scale =0.1;

	stone = new Stone(140,535,20,20);
	//stone.addImage(stoneImg);

	tree = createSprite(480,540,40,20);
	tree.addImage(treeImg);
	tree.scale =0.2;

	ground = new Ground(width/2,670,800,20);

	mango1 =new Mango(480,500,20,20);
	mango2 =new Mango(460,470,20,20);
	mango3 =new Mango(420,510,20,20);
	mango4 =new Mango(440,520,20,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();
 stone.display();
 ground.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 keyPressed();
 detectCollision();
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
    }
    
    function mouseReleased() {
      stone.fly()
    }    

	function keyPressed() {
		if(keyCode === 32) {
		
		}Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
		}
		
		
		function detectCollision(lstone,lmango) {
		mangoBodyPosition=lmango.body.position
		stoneBodyPosition=lstone.body.position
		
		var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body,false);
		}
		}

