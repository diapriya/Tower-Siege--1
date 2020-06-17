var ground,stand1,stand2;
var polygon, slingshot; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1000, 600);
 
	engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(width/2,600,width,30);
  stand1 = new Ground(500,500,250,10);
  stand2 = new Ground(800,350,200,10);

  block1 = new Block(410,235,30,40);
  block2 = new Block(440,235,30,40); 
  block3 = new Block(470,235,30,40);
  block4 = new Block(500,235,30,40);
  block5 = new Block(530,235,30,40);
  block6 = new Block(560,235,30,40);
  block7 = new Block(590,235,30,40);

  block8 = new Block(440,135,30,40);
  block9 = new Block(470,135,30,40);
  block10 = new Block(500,135,30,40);
  block11 = new Block(530,135,30,40);
  block12 = new Block(560,135,30,40);

  block13 = new Block(470,35,30,40);
  block14 = new Block(500,35,30,40);
  block15 = new Block(530,35,30,40);
  block16 = new Block(500,0,30,40);

  block17 = new Block(740,150,30,40);
  block18 = new Block(770,150,30,40);
  block19 = new Block(800,150,30,40);
  block20 = new Block(830,150,30,40);
  block21 = new Block(860,150,30,40);

  block22 = new Block(770,50,30,40);
  block23 = new Block(800,50,30,40);
  block24 = new Block(830,50,30,40);
  
  block25 = new Block(800,0,30,40);

  polygon = new Polygon(50,200,5);
 
  
  slingshot = new SlingShot(polygon.body,{x:100, y:400});
  
 
	Engine.run(engine);  

}

function draw() {
	
  background(0); 
  Engine.update(engine);

  ground.display();
  polygon.display();
  slingshot.display(); 

  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
slingshot.fly();
} 

 


